/**
 * ASSOCIAÇÃO INDÍGENA BERÊ XIKRIN · Newsletter do site (Google Apps Script)
 * -------------------------------------------------------------------------
 * Grava cada inscrição do rodapé do site (nome, e-mail, consentimento) numa
 * planilha do Google da própria Associação e, se quiser, avisa por e-mail.
 * Gratuito. Mesmo modelo usado no site da Ousadia Marketing.
 *
 * COMO LIGAR (uma vez só, logado na conta Google da Berê):
 * 1. Crie uma planilha nova no Google Planilhas, por exemplo "Newsletter site Berê".
 * 2. Menu Extensões > Apps Script. Apague o que estiver lá e cole este arquivo inteiro.
 * 3. Salve (ícone de disquete).
 * 4. Implantar > Nova implantação > engrenagem > "App da Web".
 *    - Executar como: Eu.
 *    - Quem tem acesso: Qualquer pessoa.
 *    Clique em Implantar e autorize quando o Google pedir.
 * 5. Copie a URL do App da Web (termina em /exec) e abra no navegador.
 *    Deve aparecer "Newsletter Berê online". Se pedir login, volte ao passo 4
 *    e escolha "Qualquer pessoa".
 * 6. Mande essa URL para a Ousadia, que coloca em NEWSLETTER_ENDPOINT (lib/site.ts).
 *
 * Se mudar este código depois: Implantar > Gerenciar implantações > lápis >
 * Versão: "Nova versão". Sem isso a URL continua rodando o código antigo.
 *
 * SEGURANÇA: a URL precisa ser pública para o site gravar, então o script só
 * aceita nome e e-mail curtos e válidos, com consentimento marcado; grava tudo
 * como texto (célula começando com = + - @ viraria fórmula) e limita os avisos
 * por e-mail a AVISOS_POR_HORA.
 */

// E-mail que recebe o aviso de novo cadastro. Vazio = sem aviso.
var EMAIL_AVISO = "xikrinbere@gmail.com";

// Máximo de avisos por hora. Passou disso, o cadastro é gravado sem aviso.
var AVISOS_POR_HORA = 20;

var COLUNAS = ["data", "nome", "email", "consentimento", "origem"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var bruto = e && e.postData ? String(e.postData.contents || "") : "";
    if (!bruto || bruto.length > 2000) return json({ ok: false, erro: "envio inválido" });
    var dados = JSON.parse(bruto);

    var email = String(dados.email || "").trim().toLowerCase();
    var nome = texto(dados.nome, 80);
    var origem = texto(dados.origem, 40);
    if (email.length > 120 || !/^[^@\s=+\-][^@\s]*@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json({ ok: false, erro: "e-mail inválido" });
    }
    if (!nome) return json({ ok: false, erro: "nome vazio" });
    if (dados.consentimento !== true) return json({ ok: false, erro: "sem consentimento" });

    if (!dentroDoLimite()) return json({ ok: false, erro: "muitos cadastros, tente mais tarde" });

    lock.waitLock(30000);
    var aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (aba.getLastRow() === 0) aba.appendRow(COLUNAS);

    // Só o cabeçalho = nenhuma linha para ler (getRange com 0 linhas dá erro).
    var linhas = aba.getLastRow() - 1;
    var existentes = linhas < 1 ? [] : aba
      .getRange(2, 3, linhas, 1)
      .getValues()
      .map(function (l) { return String(l[0]).trim().toLowerCase(); });
    var novo = existentes.indexOf(email) === -1;
    if (novo) aba.appendRow([new Date().toISOString(), nome, email, "sim", origem]);
    lock.releaseLock();

    if (novo && EMAIL_AVISO && podeAvisar()) {
      MailApp.sendEmail({
        to: EMAIL_AVISO,
        subject: "Novo cadastro na newsletter do site: " + nome,
        body: "Novo cadastro na newsletter do site da Berê:\n\nNome: " + nome + "\nE-mail: " + email,
      });
    }
    return json({ ok: true });
  } catch (err) {
    try { lock.releaseLock(); } catch (_) {}
    return json({ ok: false, erro: String(err) });
  }
}

/** Texto curto e seguro para a planilha (sem virar fórmula). */
function texto(valor, max) {
  var t = String(valor || "").replace(/\s+/g, " ").trim().slice(0, max);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

/** Limite de cadastros por hora, para ninguém encher a planilha com envios automáticos. */
var CADASTROS_POR_HORA = 60;
function dentroDoLimite() {
  var cache = CacheService.getScriptCache();
  var chave = "cadastros:" + Utilities.formatDate(new Date(), "America/Belem", "yyyyMMddHH");
  var n = Number(cache.get(chave) || 0);
  if (n >= CADASTROS_POR_HORA) return false;
  cache.put(chave, String(n + 1), 3600);
  return true;
}

function podeAvisar() {
  var cache = CacheService.getScriptCache();
  var chave = "avisos:" + Utilities.formatDate(new Date(), "America/Belem", "yyyyMMddHH");
  var n = Number(cache.get(chave) || 0);
  if (n >= AVISOS_POR_HORA || MailApp.getRemainingDailyQuota() < 1) return false;
  cache.put(chave, String(n + 1), 3600);
  return true;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput("Newsletter Berê online");
}

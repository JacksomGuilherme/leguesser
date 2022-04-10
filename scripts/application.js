const tiles = document.querySelector(".tile-container")
const keyboardFirstRow = document.querySelector("#keyboardFirstRow")
const keyboardSecondRow = document.querySelector("#keyboardSecondRow")
const keyboardThirdRow = document.querySelector("#keyboardThirdRow")

let wordsArray = [
  "abade", "abafa", "abafe", "abafo", "abala", "abale", "abalo", "abana", "abane", "abano", "abata", "abate", "abati", "abato", "abeto", "ablua", "ablui", "abluo", "abole", "aboli", "abono", "abram", "abras", "abrem", "abres", "abria", "abril", "abrir", "abris", "abriu", "abusa", "abuse", "abuso", "acaba", "acabe", "acabo", "acaso", "acata", "acate", "acato", "acena", "acene", "aceno", "acesa", "aceso", "aceto", "achai", "acham", "achar", "achas", "achei", "achem", "aches", "achou", "acima", "ações", "acolá", "acuai", "acuam", "acuar", "acuas", "açude", "acudi", "acudo", "acuei", "acuem", "acues", "acuou", "acusa", "acuse", "acuso", "adaga", "adega", "adere", "aderi", "adeus", "adiai", "adiam", "adiar", "adias", "adida", "adido", "adiei", "adiem", "adies", "adimo", "adiou", "adira", "adiro", "adita", "adite", "adito", "adoce", "adora", "adore", "adoro", "adota", "adote", "adoto", "aduba", "adube", "adubo", "adula", "adule", "adulo", "advém", "advim", "advir", "afaga", "afago", "afana", "afane", "afano", "afere", "aferi", "afeta", "afete", "afeto", "afiai", "afiam", "afiar", "afias", "afiei", "afiem", "afies", "afina", "afine", "afino", "afins", "afiou", "afira", "afiro", "afixa", "afixe", "afixo", "aflua", "aflui", "afluo", "afoba", "afobe", "afobo", "afofa", "afofe", "afofo", "afoga", "afogo", "afora", "afore", "aforo", "afros", "aftas", "ágape", "agiam", "agias", "agido", "agimo", "agira", "agita", "agite", "agito", "agora", "aguar", "aguce", "aguda", "agudo", "aguou", "ainda", "ajais", "ajamo", "ajuda", "ajude", "ajudo", "alada", "alado", "alaga", "alago", "álamo", "álbum", "alçar", "alcei", "alcem", "alces", "alega", "alego", "alelo", "algas", "algoz", "algum", "alhos", "aliai", "aliam", "aliar", "aliás", "álibi", "aliei", "aliem", "alies", "alija", "alije", "alijo", "aliou", "alisa", "alise", "aliso", "almas", "aloca", "aloco", "aloja", "aloje", "alojo", "altar", "altas", "altos", "aluda", "alude", "aludi", "aludo", "aluga", "alugo", "aluna", "aluno", "alvas", "alvor", "alvos", "amada", "amado", "âmago", "amais", "amamo", "amara", "amaro", "amava", "âmbar", "ambas", "ambos", "ameba", "ameia", "ameis", "amemo", "amena", "ameno", "amido", "amiga", "amigo", "amima", "amime", "amimo", "amola", "amole", "amolo", "amora", "ampla",
  "amplo", "anais", "ancas", "anciã", "andai", "andam", "andar", "andas", "andei", "andem", "andes", "andor", "andou", "anela", "anele", "anelo", "anexa", "anexe", "anexo", "anglo", "angra", "anima", "anime", "ânimo", "anjos", "anota", "anote", "anoto", "ânsia", "antas", "antes", "antro", "anual", "anuam", "anuas", "anuem", "anuir", "anuis", "anuiu", "anula", "anule", "anulo", "anzol", "aonde", "aorta", "apaga", "apago", "apara", "apare", "aparo", "apeai", "apear", "apeei", "apega", "apego", "apeia", "apeie", "apeio", "apela", "apele", "apelo", "apena", "apene", "apeno", "apeou", "ápice", "apita", "apite", "apito", "apoio", "apolo", "apraz", "aptas", "aptos", "apura", "apure", "apuro", "aquém", "arada", "arado", "arais", "arame", "aramo", "arara", "arava", "arcai", "arcam", "arcar", "arcas", "arcos", "arcou", "ardam", "ardas", "ardei", "ardem", "arder", "ardes", "ardeu", "ardia", "ardil", "ardis", "ardor", "árdua", "árduo", "areal", "areia", "areis", "areja", "areje", "arejo", "aremo", "arena", "arfai", "arfam", "arfar", "arfas", "arfei", "arfem", "arfes", "arfou", "argua", "arguo", "árido", "armai", "armam", "armar", "armas", "armei", "armem", "armes", "armou", "aroma", "arpoa", "arpoe", "arque", "arria", "arrie", "arrio", "arroz", "artes", "artur", "asila", "asile", "asilo", "asnos", "aspas", "assai", "assam", "assar", "assas", "assaz", "assei", "assem", "asses", "assim", "assoa", "assoe", "assou", "astro", "ataca", "ataco", "atada", "atado", "atais", "atamo", "atara", "atava", "ateai", "atear", "ateei", "ateia", "ateie", "ateio", "ateis", "atemo", "ateou", "ateus", "ateve", "atice", "atida", "atido", "átimo", "atina", "atine", "atino", "atira", "atire", "atiro", "ativa", "ative", "ativo", "atlas", "atola", "atole", "atolo", "átomo", "atrai", "atrás", "átrio", "atriz", "atroz", "atuai", "atual", "atuam", "atuar", "atuas", "atuei", "atuem", "atues", "atuns", "atuou", "atura", "ature", "aturo", "audaz", "áudio", "aulas", "auras", "áurea", "áureo", "autor", "autos", "autua", "autue", "autuo", "avais", "avara", "avaro", "aveia", "aveio", "aviai", "aviam", "avião", "aviar", "avias", "ávida", "ávido", "aviei", "aviem", "avier", "avies", "avimo", "aviou", "avisa", "avise", "aviso", "aviva", "avive", "avivo", "axial", "axila",
  "azara", "azare", "azaro", "azeda", "azede", "azedo", "azeri", "azias", "azoto", "azuis", "azula", "azule", "azulo",
  "babai", "babam", "babar", "babas", "babei", "babem", "babes", "babou", "bacia", "bafos", "bagas", "bagos", "baias", "baila", "baile", "bailo", "baita", "baixa", "baixe", "baixo", "balam", "balas", "balde", "balem", "bales", "balia", "balir", "balis", "baliu", "balsa", "bamba", "bambo", "bambu", "banal", "banca", "banco", "banda", "bando", "banem", "banes", "banha", "banhe", "banho", "banir", "banis", "baniu", "banjo", "banto", "banzo", "baque", "barão", "barba", "barco", "bardo", "bares", "barra", "barro", "basal", "bases", "basta", "baste", "basto", "batam", "batas", "batei", "batel", "batem", "bater", "bates", "bateu", "batia", "bazar", "beata", "beato", "bebam", "bebas", "bebei", "bebem", "beber", "bebeu", "bebia", "becas", "becos", "bedel", "beija", "beije", "beijo", "beira", "beire", "beiro", "belas", "belga", "belos", "bemol", "bença", "benta", "bento", "benza", "benze", "benzi", "benzo", "beque", "berra", "berre", "berro", "besta", "bicai", "bicam", "bicar", "bicas", "bicha", "bicho", "bicos", "bicou", "biela", "bigas", "bingo", "bioma", "bique", "birra", "bispa", "bispo", "blasé", "blefa", "blefe", "blefo", "bloco", "blusa", "boate", "boato", "bobas", "bobem", "bobes", "bobos", "bocal", "boçal", "bocas", "bocha", "bodas", "bodes", "boiai", "boiar", "boiei", "boina", "boiou", "bolai", "bolam", "bolar", "bolas", "boldo", "bolei", "bolem", "boles", "bolha", "bolor", "bolos", "bolou", "bolsa", "bolso", "bomba", "bonde", "bônus", "borda", "borde", "bordo", "borra", "borre", "borro", "bossa", "bosta", "botai", "botam", "botar", "botas", "botei", "botem", "botes", "botou", "braba", "brabo", "brada", "brade", "brado", "braga", "brama", "brame", "brami", "bramo", "brasa", "brava", "bravo", "breca", "breco", "brega", "brejo", "breve", "briga", "brigo", "brins", "brios", "brisa", "brita", "broas", "broca", "broco", "bromo", "brota", "brote", "broto", "bruma", "bruta", "bruto", "bruxa", "bruxo", "bucal", "bucha", "bucho", "bufai", "bufam", "bufar", "bufas", "bufei", "bufem", "bufes", "bufou", "bulam", "bulas", "bulbo", "bules", "bulha", "bulia", "bulir", "bulis", "buliu", "bumbo", "burgo", "burla", "burle", "burlo", "burra", "burro", "busca", "busco", "busto", "buxos",
  "cabal", "cabei", "cabem", "caber", "cabes", "cabia", "cabos", "cabra", "caçar", "cacei", "cacem", "caces", "cacho", "cacos", "cacto", "cagai", "cagam", "cagar", "cagas", "cagou", "cague", "caiai", "caiam", "caiar", "caias", "caiba", "caibo", "caiei", "caiem", "caies", "caiou", "cairo", "caixa", "calai", "calam", "calar", "calas", "calça", "calce", "calda", "caldo", "calei", "calem", "cales", "calha", "calhe", "calho", "calma", "calmo", "calor", "calos", "calou", "calva", "calvo", "camas", "campa", "campo", "canal", "canas", "canga", "canja", "canoa", "cânon", "canos", "cansa", "canse", "canso", "canta", "cante", "canto", "capai", "capam", "capar", "capas", "capaz", "capei", "capem", "capes", "capim", "capou", "capta", "capte", "capto", "capuz", "caras", "cardo", "carga", "cargo", "carma", "carne", "caros", "carpa", "carpe", "carpi", "carro", "carta", "casai", "casal", "casam", "casar", "casas", "casca", "casco", "casei", "casem", "cases", "casos", "casou", "caspa", "cassa", "casse", "casso", "casta", "casto", "catai", "catam", "catar", "catas", "catei", "catem", "cates", "catou", "catre", "cauda", "caule", "causa", "cause", "causo", "cauta", "cauto", "cavai", "cavam", "cavar", "cavas", "cavei", "cavem", "caves", "cavou", "ceada", "ceado", "ceais", "ceamo", "ceava", "cedam", "cedas", "cedei", "cedem", "ceder", "cedes", "cedeu", "cedia", "cedro", "ceeis", "ceemo", "cegai", "cegam", "cegar", "cegas", "cegos", "cegou", "cegue", "ceiam", "ceias", "ceiem", "ceies", "ceifa", "ceife", "ceifo", "ceira", "ceita", "celas", "celta", "cenas", "cenho", "censo", "cento", "ceras", "cerca", "cerco", "cerda", "cerne", "cerni", "cerra", "cerre", "cerro", "certa", "certo", "cervo", "cerze", "cerzi", "cessa", "cesse", "cesso", "cesta", "cesto", "cetim", "cetro", "chaga", "chago", "chama", "chame", "chamo", "chapa", "chata", "chato", "chave", "checa", "checo", "chefa", "chefe", "chega", "chego", "cheia", "cheio", "chiai", "chiam", "chiar", "chias", "chica", "chico", "chiei", "chiem", "chies", "china", "chiou", "choca", "choco", "chora", "chore", "choro", "chova", "chove", "chovi", "chovo", "chula", "chulo", "chupa", "chupe", "chupo", "chuta", "chute", "chuto", "chuva", "ciclo", "cidra", "cifra", "cifre", "cifro", "cinco", "cinda", "cinde", "cindi",
  "cindo", "cinge", "cingi", "cinja", "cinjo", "cinta", "cinto", "cinza", "ciosa", "cioso", "circo", "cirza", "cirzo", "cisão", "cisca", "cisco", "cisma", "cisme", "cismo", "cisne", "citai", "citam", "citar", "citas", "citei", "citem", "cites", "citou", "ciúme", "cível", "civil", "civis", "clama", "clame", "clamo", "clara", "claro", "clava", "clean", "clero", "clima", "clipe", "clone", "cloro", "close", "clube", "coada", "coado", "coagi", "coais", "coaja", "coajo", "coamo", "coara", "coava", "coaxa", "coaxe", "coaxo", "cobra", "cobre", "cobri", "cobro", "coçar", "cocei", "cocem", "coces", "cocho", "cocos", "coeis", "coemo", "coesa", "coeso", "coeva", "coevo", "cofre", "coibi", "coice", "coifa", "coisa", "coito", "colai", "colam", "colar", "colas", "colei", "colem", "coles", "colha", "colhe", "colhi", "colho", "colou", "comam", "comas", "combo", "comei", "comem", "comer", "comes", "comeu", "comia", "comum", "conde", "cones", "conta", "conte", "conto", "copas", "cópia", "copie", "copio", "copos", "corai", "coral", "coram", "corar", "coras", "corda", "corei", "corem", "cores", "corja", "corno", "coroa", "coroe", "coros", "corou", "corpo", "corra", "corre", "corri", "corro", "corso", "corta", "corte", "corto", "corvo", "cosam", "cosas", "cosei", "cosem", "coser", "coses", "coseu", "cosia", "cosmo", "costa", "cotai", "cotam", "cotar", "cotas", "cotei", "cotem", "cotes", "cotou", "coube", "couro", "cousa", "couve", "covas", "cover", "covil", "coxas", "coxim", "coxos", "cozam", "cozas", "cozei", "cozem", "cozer", "cozes", "cozeu", "cozia", "crava", "crave", "cravo", "crede", "credo", "creia", "creio", "crema", "creme", "cremo", "crera", "criai", "criam", "criar", "crias", "crida", "crido", "criei", "criem", "cries", "crime", "crina", "criou", "crise", "criva", "crive", "crivo", "croma", "crome", "cromo", "cruas", "cruel", "cruza", "cruze", "cruzo", "cubas", "cubos", "cubra", "cubro", "cucas", "cucos", "cueca", "cuias", "cuida", "cuide", "cuido", "cujas", "cujos", "culpa", "culpe", "culpo", "culta", "culto", "cumes", "cunha", "cunhe", "cunho", "cupim", "cupom", "curai", "curam", "curar", "curas", "curei", "curem", "cures", "curou", "cursa", "curse", "curso", "curta", "curte", "curti", "curto", "curva", "curve", "curvo", "cuspa", "cuspi",
  "cuspo", "custa", "custe", "custo", "cútis",
  "dadas", "dados", "damas", "damos", "danai", "danam", "danar", "danas", "dança", "dance", "dando", "danei", "danem", "danes", "danos", "danou", "daqui", "dardo", "darei", "darem", "dares", "daria", "datai", "datam", "datar", "datas", "datei", "datem", "dates", "datou", "davam", "davas", "débil", "decai", "dedal", "dedos", "deduz", "deita", "deite", "deito", "deixa", "deixe", "deixo", "delas", "deles", "delta", "demão", "demos", "dengo", "densa", "denso", "dente", "depor", "depus", "deram", "deras", "derem", "deres", "dermo", "desça", "desce", "desci", "desde", "despe", "despi", "dessa", "desse", "desta", "deste", "detém", "deter", "deusa", "devam", "devas", "devei", "devem", "dever", "deves", "deveu", "devia", "devir", "diabo", "dicas", "dieta", "digam", "digas", "digna", "digne", "digno", "dilua", "dilui", "diluo", "diodo", "dique", "direi", "diria", "disca", "disco", "disse", "disso", "dista", "diste", "disto", "ditai", "ditam", "ditar", "ditas", "ditei", "ditem", "dites", "ditos", "ditou", "divas", "dizei", "dizem", "dizer", "dizes", "dizia", "doada", "doado", "doais", "doamo", "doara", "doava", "dobra", "dobre", "dobro", "docas", "dócil", "doeis", "doemo", "doera", "dogma", "doida", "doido", "doído", "domai", "domam", "domar", "domas", "domei", "domem", "domes", "domou", "donas", "donde", "donos", "dopai", "dopam", "dopar", "dopas", "dopei", "dopem", "dopes", "dopou", "dores", "dorme", "dormi", "dorso", "dosai", "dosam", "dosar", "dosas", "dosei", "dosem", "doses", "dosou", "dotai", "dotam", "dotar", "dotas", "dotei", "dotem", "dotes", "dotou", "doura", "doure", "douro", "douta", "douto", "draga", "drago", "drama", "drena", "drene", "dreno", "droga", "drogo", "drops", "duais", "dúbia", "dúbio", "dubla", "dublo", "ducha", "ducto", "duela", "duele", "duelo", "dueto", "dumas", "dunas", "dunga", "dupla", "duplo", "duque", "durai", "duram", "durar", "duras", "durei", "durem", "dures", "durma", "durmo", "duros", "durou", "dutos",
  "ébano", "ébrio", "ecoai", "ecoam", "ecoar", "ecoas", "ecoei", "ecoem", "ecoes", "ecoou", "edema", "edita", "edite", "edito", "educa", "educo", "égide", "eiras", "eixos", "ejeta", "ejete", "ejeto", "elege", "elegi", "eleja", "elejo", "eleva", "eleve", "elevo", "elite", "elmos", "emana", "emane", "emano", "emita", "emite", "emiti", "emito", "emula", "emule", "encha", "enche", "enchi", "enfia", "enfie", "enfim", "enfio", "enjoa", "enjoe", "enjoo", "enoja", "enoje", "enojo", "então", "entes", "entoa", "entoe", "entra", "entre", "entro", "envia", "envie", "envio", "épico", "época", "ereta", "ereto", "ergam", "ergas", "ergue", "ergui", "erice", "erigi", "erija", "erijo", "ermos", "eroda", "erode", "erodi", "erodo", "errai", "erram", "errar", "erras", "errei", "errem", "erres", "erros", "errou", "ervas", "escoa", "escoe", "escol", "esgar", "espia", "espie", "espio", "esqui", "essas", "esses", "estai", "estão", "estar", "estas", "estes", "estio", "estou", "esvai", "etano", "etapa", "eteno", "ética", "ético", "etilo", "etnia", "evada", "evade", "evadi", "evado", "evita", "evite", "evito", "evoca", "evoco", "exala", "exale", "exalo", "exame", "exara", "exare", "exaro", "exata", "exato", "exiba", "exibe", "exibi", "exibo", "exige", "exigi", "exija", "exijo", "exila", "exile", "exilo", "exima", "exime", "eximi", "eximo", "êxito", "êxodo", "expia", "expie", "expio", "expor", "expus", "extra", "exuma", "exume", "exumo",
  "façam", "facas", "faces", "facho", "fácil", "facto", "fadas", "fados", "faina", "faixa", "falai", "falam", "falar", "falas", "falda", "falei", "falem", "fales", "falha", "falhe", "falho", "falia", "falir", "falis", "faliu", "falou", "falsa", "falso", "falta", "falte", "falto", "famas", "farão", "farda", "fardo", "farei", "faria", "farol", "faros", "farpa", "farra", "farsa", "farta", "farte", "farto", "fases", "fatal", "fatia", "fatie", "fatio", "fator", "fatos", "fátuo", "fauna", "fauno", "favas", "favor", "favos", "fazei", "fazem", "fazer", "fazes", "fazia", "febre", "fecal", "fecha", "feche", "fecho", "fedam", "fedas", "fedei", "fedem", "feder", "fedes", "fedeu", "fedia", "fedor", "feias", "feios", "feira", "feita", "feito", "feixe", "feliz", "fenda", "fende", "fendi", "fendo", "feras", "feraz", "ferem", "feres", "feria", "ferir", "feris", "feriu", "feroz", "ferpa", "ferra", "ferre", "ferro", "ferva", "ferve", "fervi", "fervo", "festa", "fetal", "fetos", "feudo", "fezes", "fiada", "fiado", "fiais", "fiamo", "fiapo", "fiara", "fiava", "fibra", "ficai", "ficam", "ficar", "ficas", "ficha", "fiche", "ficho", "ficou", "fiemo", "figas", "figos", "filai", "filam", "filar", "filas", "filei", "filem", "files", "filha", "filho", "filia", "filie", "filio", "filma", "filme", "filmo", "filou", "final", "finas", "finca", "finco", "finda", "finde", "findo", "finge", "fingi", "finja", "finjo", "finos", "finta", "finte", "finto", "fique", "firam", "firas", "firma", "firme", "firmo", "fisco", "fisga", "fisgo", "fitai", "fitam", "fitar", "fitas", "fitei", "fitem", "fites", "fitou", "fixai", "fixam", "fixar", "fixas", "fixei", "fixem", "fixes", "fixos", "fixou", "fizer", "flavo", "floco", "flora", "flori", "fluam", "fluas", "fluem", "fluir", "fluis", "fluiu", "fluxo", "fobia", "focai", "focal", "focam", "focar", "focas", "focos", "focou", "fofas", "fofos", "fogem", "foges", "fogos", "foice", "foles", "folga", "folgo", "folha", "folia", "fomes", "fomos", "fones", "fonte", "foque", "foram", "foras", "força", "force", "forem", "fores", "forja", "forje", "forjo", "forma", "forme", "formo", "forno", "foros", "forra", "forre", "forro", "forte", "fórum", "fosca", "fosco", "fossa", "fosse", "fosso", "foste", "fotos", "fraca", "fraco", "frade", "fraga",
  "frase", "freai", "frear", "freei", "freia", "freie", "freio", "freme", "fremi", "freou", "fresa", "frese", "freso", "freta", "frete", "freto", "frevo", "frias", "frigi", "frija", "frijo", "frios", "frisa", "frise", "friso", "frita", "frite", "frito", "frota", "fruem", "fruir", "fruis", "fruiu", "fruta", "fruto", "fucei", "fucem", "fuces", "fugas", "fugaz", "fugia", "fugir", "fugis", "fugiu", "fujam", "fujas", "fulge", "fulgi", "fumai", "fumam", "fumar", "fumas", "fumei", "fumem", "fumes", "fumou", "funda", "funde", "fundi", "fundo", "funga", "fungo", "funil", "funis", "furai", "furam", "furar", "furas", "furei", "furem", "fures", "furna", "furor", "furos", "furou", "furta", "furte", "furto", "fusão", "fusco", "fusos", "fútil", "fuzil", "fuzis",
  "gabai", "gabam", "gabar", "gabas", "gabei", "gabem", "gabes", "gabou", "gados", "gagas", "gagos", "gaita", "gajas", "gajos", "galga", "galgo", "galho", "galos", "gamos", "ganem", "ganha", "ganhe", "ganho", "gania", "ganir", "ganis", "ganiu", "ganso", "garbo", "garfa", "garfe", "garfo", "garis", "garoa", "garoe", "garra", "gases", "gasta", "gaste", "gasto", "gatas", "gatos", "gazua", "geada", "geado", "geais", "geamo", "geara", "geava", "geeis", "geemo", "geiam", "geias", "geiem", "geies", "gelai", "gelam", "gelar", "gelas", "gelei", "gelem", "geles", "gelos", "gelou", "gemam", "gemas", "gemei", "gemem", "gemer", "gemes", "gemeu", "gemia", "genes", "gênio", "genro", "gente", "gerai", "geral", "geram", "gerar", "geras", "gerei", "geres", "geria", "gerir", "geris", "geriu", "germe", "gerou", "gesso", "gesta", "gesto", "ginga", "gingo", "girai", "giram", "girar", "giras", "girei", "girem", "gires", "gíria", "giros", "girou", "gleba", "globo", "glosa", "glose", "gloso", "gnomo", "goela", "golas", "goles", "golfo", "golpe", "gomas", "gomos", "gongo", "gonzo", "gorai", "goram", "gorar", "goras", "gorda", "gordo", "gorei", "gorem", "gores", "gorou", "gorro", "gosma", "gosta", "goste", "gosto", "gotas", "gozai", "gozam", "gozar", "gozas", "gozei", "gozem", "gozes", "gozos", "gozou", "graça", "grade", "grafa", "grafe", "grafo", "grama", "grana", "grata", "grato", "graus", "grava", "grave", "gravo", "graxa", "graxo", "grega", "grego", "greve", "grifa", "grife", "grifo", "grila", "grile", "grilo", "gripe", "grita", "grite", "grito", "grota", "gruda", "grude", "grudo", "grumo", "grupo", "gruta", "gueto", "guiai", "guiam", "guiar", "guias", "guiei", "guiem", "guies", "guiou", "guisa", "guizo", "gumes", "guria", "guris",
  "hábil", "hajam", "hajas", "halos", "haras", "harpa", "haste", "haure", "hauri", "havei", "haver", "havia", "heras", "herda", "herde", "herdo", "herói", "hiato", "hiena", "hífen", "hilar", "hindu", "hinos", "hobby", "homem", "honra", "honre", "honro", "horas", "horda", "horta", "horto", "hoste", "hotel", "houve", "hulha", "humor", "hunos", "hurra",
  "iates", "ibero", "iceis", "icemo", "ícone", "idade", "ideal", "ideia", "ídolo", "idosa", "idoso", "ienes", "ígneo", "igual", "ilesa", "ileso", "ilhai", "ilham", "ilhar", "ilhas", "ilhei", "ilhem", "ilhes", "ilhou", "iluda", "ilude", "iludi", "iludo", "imita", "imite", "imito", "imola", "imole", "imolo", "ímpar", "ímpia", "ímpio", "impor", "impus", "imune", "inala", "inale", "inalo", "inata", "inato", "incas", "incha", "inche", "incho", "incoa", "incoe", "índio", "induz", "infla", "infle", "inflo", "infra", "iniba", "inibe", "inibi", "inibo", "inova", "inove", "inovo", "insta", "inste", "insto", "inter", "intua", "intui", "intuo", "invés", "irada", "irado", "irdes", "ireis", "iremo", "iriam", "irias", "irmão", "irmos", "iscas", "isola", "isole", "isolo", "istmo", "itens", "itera", "itere", "itero",
  "jacas", "janta", "jante", "janto", "jarda", "jarra", "jarro", "jatos", "jaula", "jazam", "jazas", "jazei", "jazem", "jazer", "jazes", "jazeu", "jazia", "jecas", "jegue", "jeito", "jejua", "jejue", "jejum", "jejuo", "jinga", "jirau", "jogai", "jogam", "jogar", "jogas", "jogos", "jogou", "jogue", "jorra", "jorre", "jorro", "jovem", "jubas", "judas", "judeu", "judia", "judie", "judio", "juízo", "julga", "julgo", "julho", "júlia", "junco", "junho", "junta", "junte", "junto", "jurai", "juram", "jurar", "juras", "jurei", "jurem", "jures", "juros", "jurou", "justa", "justo",
  "lábil", "labor", "lacei", "lacem", "laces", "lacra", "lacre", "lacro", "lados", "ladra", "ladre", "ladro", "lagar", "lagoa", "lagos", "laica", "laico", "lajes", "lamba", "lambe", "lambi", "lambo", "lance", "lápis", "lapso", "lares", "larga", "largo", "larva", "lasca", "lasco", "lasso", "latas", "latem", "lates", "latia", "latim", "latir", "latis", "latiu", "lauda", "laudo", "lavai", "lavam", "lavar", "lavas", "lavei", "lavem", "laves", "lavou", "lavra", "lavre", "lavro", "lazer", "leais", "lebre", "ledes", "legai", "legal", "legam", "legar", "legas", "legou", "légua", "legue", "leiam", "leias", "leiga", "leigo", "leite", "leito", "lemas", "lemes", "lemos", "lenda", "lendo", "lenga", "lenha", "lenho", "lenta", "lente", "lento", "leoas", "lepra", "leque", "leram", "leras", "lerda", "lerdo", "lerei", "lerem", "leres", "leria", "lermo", "lesai", "lesam", "lesão", "lesar", "lesas", "lesei", "lesem", "leses", "lesma", "lesou", "lesse", "leste", "lesto", "letal", "letra", "levai", "levam", "levar", "levas", "levei", "levem", "leves", "levou", "lhama", "liame", "libra", "lição", "liceu", "licor", "lidai", "lidam", "lidar", "lidas", "lidei", "lidem", "líder", "lides", "lidos", "lidou", "ligai", "ligam", "ligar", "ligas", "light", "ligou", "ligue", "limai", "limam", "limar", "limas", "limbo", "limei", "limem", "limes", "limou", "limpa", "limpe", "limpo", "lince", "linda", "lindo", "linfa", "linha", "linho", "liras", "lisas", "lises", "lisos", "lista", "liste", "listo", "litro", "livra", "livre", "livro", "lixai", "lixam", "lixar", "lixas", "lixei", "lixem", "lixes", "lixou", "lobar", "lobas", "lobos", "locai", "local", "locam", "locar", "locas", "locou", "locus", "logos", "logra", "logre", "logro", "loira", "loiro", "lojas", "lombo", "lonas", "longa", "longe", "longo", "loque", "lorde", "lotai", "lotam", "lotar", "lotas", "lotei", "lotem", "lotes", "lotou", "louca", "louça", "louco", "loura", "louro", "lousa", "louva", "louve", "louvo", "lucas", "lucra", "lucre", "lucro", "lugar", "lulas", "lunar", "lupas", "lusas", "lusos", "lutai", "lutam", "lutar", "lutas", "lutei", "lutem", "lutes", "lutos", "lutou", "luvas", "luxos", "luzam", "luzas", "luzem", "luzes", "luzia", "luzir", "luzis", "luziu",
  "macho", "macia", "macio", "macro", "magia", "magma", "magna", "magno", "mágoa", "magoe", "magos", "magra", "magro", "maias", "maior", "major", "malas", "males", "malha", "malhe", "malho", "malta", "mamãe", "mamai", "mamam", "mamar", "mamas", "mamei", "mamem", "mames", "mamou", "manas", "manca", "manco", "manda", "mande", "mando", "manga", "mangá", "manha", "manhã", "mania", "manja", "manje", "manjo", "manos", "mansa", "manso", "manta", "manto", "mapas", "marca", "marco", "mares", "maria", "marra", "marta", "masca", "masco", "massa", "matai", "matam", "matar", "matas", "matei", "matem", "mates", "matiz", "matos", "matou", "meada", "meado", "mecha", "meche", "medem", "medes", "medir", "medis", "mediu", "medos", "medra", "medre", "medro", "meias", "meiga", "meigo", "meios", "melai", "melam", "melar", "melas", "melei", "melem", "meles", "melou", "melro", "menir", "menor", "menos", "menta", "mente", "menti", "mento", "menus", "meras", "mercê", "merda", "meros", "mesas", "meses", "mesma", "mesmo", "messe", "metal", "metam", "metas", "metei", "metem", "meter", "metes", "meteu", "metia", "metiê", "metro", "mexam", "mexas", "mexei", "mexem", "mexer", "mexes", "mexeu", "mexia", "miada", "miado", "miais", "miamo", "miara", "miava", "micos", "micro", "mídia", "mieis", "miemo", "migra", "migre", "migro", "mijai", "mijam", "mijar", "mijas", "mijei", "mijem", "mijes", "mijou", "milha", "milho", "mimai", "mimam", "mimar", "mimas", "mimei", "mimem", "mimes", "mimos", "mimou", "minai", "minam", "minar", "minas", "minei", "minem", "mines", "minha", "minis", "minou", "minta", "minto", "miolo", "míope", "mirai", "miram", "mirar", "miras", "mirei", "mirem", "mires", "mirou", "mirra", "missa", "mista", "misto", "mitos", "mitra", "mixos", "moais", "moamo", "moção", "mocho", "modal", "modas", "modem", "modos", "moeda", "moeis", "moela", "moemo", "moera", "mofai", "mofam", "mofar", "mofas", "mofei", "mofem", "mofes", "mofou", "mogno", "mogol", "moita", "molar", "molas", "molda", "molde", "moldo", "moles", "molha", "molhe", "molho", "momos", "monge", "monja", "monta", "monte", "monto", "morai", "moral", "moram", "morar", "moras", "morda", "morde", "mordi", "mordo", "morei", "morem", "mores", "morfo", "morna", "morno", "morou", "morra", "morre", "morri",
  "morro", "morsa", "morse", "morta", "morte", "morto", "mosca", "mosto", "motel", "motim", "motor", "motos", "moura", "mouro", "movam", "movas", "movei", "móvel", "movem", "mover", "moves", "moveu", "movia", "mucos", "mudai", "mudam", "mudar", "mudas", "mudei", "mudem", "mudes", "mudez", "mudos", "mudou", "mugia", "mugir", "mugis", "mugiu", "muita", "muito", "mujam", "mujas", "mulas", "multa", "multe", "multi", "multo", "mundo", "munem", "munes", "munia", "munir", "munis", "muniu", "murai", "mural", "muram", "murar", "muras", "murei", "murem", "mures", "muros", "murou", "murro", "musas", "musca", "musco", "museu", "musgo", "mútua", "mútuo",
  "nabla", "nabos", "nação", "nácar", "nacos", "nadai", "nadam", "nadar", "nadas", "nadei", "nadem", "nades", "nadou", "nafta", "naipe", "nanai", "nanam", "nanar", "nanas", "nanei", "nanem", "nanes", "nanou", "narco", "nardo", "nariz", "narra", "narre", "narro", "nasal", "nasce", "nasci", "natal", "natas", "natos", "nauta", "naval", "naves", "navio", "negai", "negam", "negar", "negas", "negou", "negra", "negro", "negue", "nelas", "neles", "neném", "nervo", "nesga", "nessa", "nesse", "nesta", "neste", "netas", "netos", "nevai", "nevam", "nevar", "nevas", "nevei", "nevem", "nevou", "nexos", "nicho", "ninai", "ninam", "ninar", "ninas", "ninei", "ninem", "nines", "ninfa", "ninho", "ninou", "nisso", "nisto", "nitro", "nível", "nobre", "noção", "nodal", "nódoa", "noite", "noiva", "noive", "noivo", "nomes", "nonas", "nonos", "noras", "norma", "norte", "nossa", "nosso", "notai", "notam", "notar", "notas", "notei", "notem", "notes", "notou", "novas", "novos", "nozes", "nucas", "nudez", "nulas", "nulos", "numas", "nunca", "nutra", "nutre", "nutri", "nutro", "nuvem",
  "oásis", "óbice", "óbito", "obras", "obsta", "obste", "obsto", "obtém", "obter", "obvie", "óbvio", "ocaso", "ocupa", "ocupe", "ocupo", "odeia", "odeie", "odeio", "odiai", "odiar", "odiei", "odiou", "oeste", "ogiva", "olhai", "olham", "olhar", "olhas", "olhei", "olhem", "olhes", "olhos", "olhou", "oliva", "ombro", "omita", "omite", "omiti", "omito", "onera", "onere", "onero", "ontem", "opaca", "opaco", "opala", "opção", "opera", "opere", "opero", "opina", "opine", "opino", "opomo", "optai", "optam", "optar", "optas", "optei", "optem", "optes", "optou", "orada", "orado", "orais", "oramo", "orara", "orava", "orcas", "orcei", "orcem", "orces", "ordem", "oreis", "oremo", "órfão", "órgão", "orgia", "orlai", "orlam", "orlar", "orlas", "orlei", "orlem", "orles", "orlou", "ornai", "ornam", "ornar", "ornas", "ornei", "ornem", "ornes", "ornou", "ossos", "ostra", "ótica", "ótimo", "ouros", "ousai", "ousam", "ousar", "ousas", "ousei", "ousem", "ouses", "ousou", "outra", "outro", "ouvem", "ouves", "ouvia", "ouvir", "ouvis", "ouviu", "ovais", "ovino", "oxalá", "oxida", "oxide",
  "pacas", "pacto", "padre", "pagai", "pagam", "pagão", "pagar", "pagas", "pagos", "pagou", "pague", "paiol", "paira", "paire", "pairo", "pajem", "palco", "palha", "palma", "palmo", "pampa", "panca", "panda", "panos", "papai", "papam", "papar", "papas", "papei", "papel", "papem", "papes", "papos", "papou", "papua", "parai", "param", "parar", "paras", "parca", "parco", "parda", "pardo", "parei", "parem", "páreo", "pares", "paria", "pária", "parir", "paris", "pariu", "parou", "parta", "parte", "parti", "parto", "parva", "parvo", "pasma", "pasme", "pasmo", "passa", "passe", "passo", "pasta", "paste", "pasto", "patas", "patim", "patos", "pausa", "pauta", "paute", "pauto", "pavio", "pavor", "pecai", "pecar", "pecha", "pecou", "pedal", "pedem", "pedes", "pedia", "pedir", "pedis", "pediu", "pedra", "pegai", "pegam", "pegar", "pegas", "pegou", "pegue", "peida", "peide", "peido", "peita", "peite", "peito", "peixe", "pelai", "pelam", "pelar", "pelas", "pelei", "peles", "pelos", "pelou", "penai", "penal", "penam", "penar", "penas", "penca", "penda", "pende", "pendi", "pendo", "penei", "penem", "penes", "penou", "pensa", "pense", "penso", "penta", "pente", "peque", "peras", "perca", "perco", "perda", "perde", "perdi", "perna", "persa", "perto", "perua", "perus", "pesai", "pesam", "pesar", "pesas", "pesca", "pesco", "pesei", "pesem", "peses", "pesos", "pesou", "peste", "petiz", "piada", "piado", "piais", "piamo", "piano", "piara", "piava", "picai", "picam", "picar", "picas", "picha", "piche", "picho", "picos", "picou", "pieis", "piemo", "pifai", "pifam", "pifar", "pifas", "pifei", "pifem", "pifes", "pífia", "pífio", "pifou", "pilar", "pilha", "pilhe", "pilho", "pince", "pinga", "pingo", "pinha", "pinho", "pinos", "pinta", "pinte", "pinto", "piora", "piore", "pipas", "pique", "piras", "pires", "pisai", "pisam", "pisar", "pisas", "pisca", "pisco", "pisei", "pisem", "pises", "pisou", "pista", "pixel", "pizza", "placa", "plaga", "plana", "plane", "plano", "platô", "plebe", "plena", "pleno", "plexo", "plota", "plote", "ploto", "pluga", "plugo", "pluma", "plumo", "pneus", "pobre", "podai", "podam", "podar", "podas", "podei", "podem", "poder", "podes", "podia", "pódio", "podou", "podre", "poema", "poeta", "polar", "polca", "polia", "polir", "pólis",
  "poliu", "polpa", "polvo", "pomar", "pomba", "pombo", "pomos", "pompa", "ponde", "pondo", "ponha", "ponho", "ponta", "ponte", "ponto", "porca", "porco", "porei", "porém", "pores", "poria", "poros", "porre", "porta", "porte", "porto", "posai", "posam", "posar", "posas", "posei", "posem", "poses", "posou", "possa", "posse", "posso", "posta", "poste", "posto", "potes", "potro", "pouca", "pouco", "poupa", "poupe", "poupo", "pousa", "pouse", "pouso", "povoe", "povos", "prado", "praga", "praia", "prata", "prato", "praxe", "prazo", "prece", "preço", "prega", "prego", "prelo", "prema", "preme", "premi", "premo", "presa", "preso", "preta", "preto", "previ", "preza", "preze", "prezo", "prima", "prime", "primo", "priva", "prive", "privê", "privo", "proas", "probo", "prole", "prosa", "proto", "prova", "prove", "provi", "provo", "prumo", "psico", "puder", "pudim", "pudor", "pugna", "puído", "pulai", "pulam", "pular", "pulas", "pulei", "pulem", "pules", "pulga", "pulha", "pulos", "pulou", "pulsa", "pulse", "pulso", "pumas", "punam", "punas", "punem", "punes", "punha", "punho", "punia", "punir", "punis", "puniu", "puras", "purga", "purgo", "puros", "puser", "putas", "putos", "puxai", "puxam", "puxar", "puxas", "puxei", "puxem", "puxes", "puxou",
  "quais", "quase", "queda", "quede", "quedo", "quepe", "quero", "quiçá", "quilo", "quina", "quita", "quite", "quito", "quota",
  "rabos", "racha", "rache", "racho", "radar", "radia", "radie", "rádio", "raiai", "raiam", "raiar", "raias", "raiei", "raiem", "raies", "raios", "raiou", "raiva", "rajai", "rajam", "rajar", "rajas", "rajei", "rajem", "rajes", "rajou", "ralai", "ralam", "ralar", "ralas", "ralei", "ralem", "rales", "ralha", "ralhe", "ralho", "ralos", "ralou", "ramos", "rampa", "ranço", "range", "rangi", "ranja", "ranjo", "rapai", "rapam", "rapar", "rapas", "rapaz", "rapei", "rapem", "rapes", "rapou", "rapta", "rapte", "rapto", "raras", "raros", "rasas", "rasga", "rasgo", "rasos", "raspa", "raspe", "raspo", "rasto", "ratas", "ratos", "razão", "reaça", "reagi", "reais", "reaja", "reajo", "reata", "reate", "reato", "reboa", "reboe", "recai", "recém", "recua", "recue", "recuo", "rédea", "redes", "redil", "redor", "reduz", "refaz", "refém", "refez", "refil", "refiz", "regai", "regam", "regar", "regas", "regei", "regem", "reger", "reges", "regeu", "régio", "regou", "regra", "regre", "regro", "regue", "reina", "reine", "reino", "rejam", "rejas", "reler", "reles", "releu", "relia", "relva", "remai", "remam", "remar", "remas", "remei", "remem", "remes", "remia", "remir", "remis", "remiu", "remoa", "remos", "remou", "renal", "renas", "renda", "rende", "rendi", "rendo", "rente", "repor", "repus", "reses", "resma", "resta", "reste", "resto", "retas", "retém", "reter", "retos", "retro", "reuni", "revel", "rever", "revés", "revia", "revir", "reviu", "rezai", "rezam", "rezar", "rezas", "rezei", "rezem", "rezes", "rezou", "riais", "riamo", "ricas", "ricos", "ridas", "rides", "ridos", "rifai", "rifam", "rifar", "rifas", "rifei", "rifem", "rifes", "rifle", "rifou", "rigor", "rijas", "rijos", "rimai", "rimam", "rimar", "rimas", "rimei", "rimem", "rimes", "rimos", "rimou", "rindo", "ripas", "riram", "riras", "rirei", "rirem", "rires", "riria", "rirmo", "risca", "risco", "risos", "risse", "riste", "ritmo", "ritos", "rival", "rixas", "roais", "roamo", "rocei", "rocem", "roces", "rocha", "rodai", "rodam", "rodar", "rodas", "rodei", "rodem", "rodes", "rodos", "rodou", "roeis", "roemo", "roera", "rogai", "rogam", "rogar", "rogas", "rogem", "roges", "rogos", "rogou", "rogue", "rolai", "rolam", "rolar", "rolas", "rolei", "rolem", "roles", "rolha", "rolos", "rolou", "rombo",
  "rompa", "rompe", "rompi", "rompo", "ronca", "ronco", "ronda", "ronde", "roque", "rosas", "rosca", "rosna", "rosne", "rosno", "rosto", "rotas", "rotos", "rouba", "roube", "roubo", "rouca", "rouco", "round", "roupa", "roxas", "roxos", "rubis", "rublo", "rubra", "rubro", "rudes", "ruela", "rufai", "rufam", "rufar", "rufas", "rufei", "rufem", "rufes", "rufou", "rugai", "rugam", "rugar", "rugas", "rugia", "rugir", "rugis", "rugiu", "rugou", "rugue", "ruído", "ruimo", "ruína", "ruins", "ruiva", "ruivo", "rujam", "rujas", "rumai", "rumam", "rumar", "rumas", "rumei", "rumem", "rumes", "rumor", "rumos", "rumou", "rural", "rusga", "russa", "russo",
  "sabei", "sabem", "saber", "sabes", "sabia", "sábia", "sábio", "sabor", "sabre", "sacam", "sacar", "sacas", "sacia", "sacie", "sacio", "sacis", "sacos", "sacou", "sacra", "sacro", "sadia", "sadio", "safai", "safam", "safar", "safas", "safei", "safem", "safes", "safou", "safra", "sagas", "sagaz", "sagra", "sagre", "sagro", "saiam", "saias", "saiba", "saída", "salas", "salda", "salde", "saldo", "salga", "salgo", "salmo", "salsa", "salta", "salte", "salto", "salva", "salve", "salvo", "samba", "sambe", "sambo", "sanai", "sanam", "sanar", "sanas", "sanei", "sanem", "sanes", "sanha", "sanou", "santa", "santo", "sapos", "saque", "sarai", "saram", "sarar", "saras", "sarau", "sarça", "sarda", "sarei", "sarem", "sares", "sarna", "sarou", "sarro", "saúde", "sauna", "seara", "sebes", "sebos", "secai", "secam", "seção", "secar", "secas", "secos", "secou", "sedas", "sedes", "sedia", "sedie", "sedio", "seduz", "segar", "segue", "segui", "seios", "seira", "seita", "seiva", "seixo", "sejam", "sejas", "selai", "selam", "selar", "selas", "selei", "selem", "seles", "selim", "selos", "selou", "selva", "senão", "senda", "sendo", "senha", "senil", "senos", "senso", "senta", "sente", "senti", "sento", "sepse", "septo", "seque", "serão", "serei", "serem", "seres", "seria", "séria", "série", "sério", "serra", "serre", "serro", "serva", "serve", "servi", "servo", "sesta", "setas", "setor", "sexos", "sexta", "sexto", "sidas", "sidos", "sigam", "sigas", "sigla", "sigma", "signo", "silos", "silva", "silve", "silvo", "símio", "sinal", "sinas", "sinhá", "sinos", "sinta", "sinto", "siris", "sirva", "sirvo", "sisal", "sismo", "sitas", "sitia", "sitie", "sítio", "sitos", "situa", "situe", "situo", "soada", "soado", "soais", "soamo", "soara", "soava", "sobem", "sobes", "sobra", "sobre", "sobro", "socai", "socam", "socar", "socas", "sócio", "socos", "socou", "soeis", "soemo", "sofra", "sofre", "sofri", "sofro", "sogra", "sogro", "solai", "solam", "solar", "solas", "solda", "solde", "soldo", "solei", "solem", "soles", "solos", "solou", "solta", "solte", "solto", "somai", "somam", "somar", "somas", "somei", "somem", "somes", "somos", "somou", "sonda", "sonde", "sondo", "sonha", "sonhe", "sonho", "sonos", "sonsa", "sonso", "sopas", "sopra", "sopre", "sopro", "soque",
  "soros", "sorri", "sorta", "sorte", "sorti", "sorva", "sorve", "sorvi", "sorvo", "sósia", "sótão", "soube", "sovai", "sovam", "sovar", "sovas", "sovei", "sovem", "soves", "sovou", "staff", "stand", "suada", "suado", "suais", "suamo", "suara", "suava", "suave", "subam", "subas", "subia", "subir", "subis", "subiu", "súcia", "sucos", "sueca", "sueco", "sueis", "suemo", "sugai", "sugam", "sugar", "sugas", "sugou", "sugue", "sujai", "sujam", "sujar", "sujas", "sujei", "sujem", "sujes", "sujos", "sujou", "sulca", "sulco", "sulfa", "sumam", "sumas", "sumia", "sumir", "sumis", "sumiu", "sunga", "super", "supor", "supra", "supre", "supri", "supro", "supus", "surda", "surdo", "surfa", "surfo", "surge", "surgi", "surja", "surjo", "surra", "surre", "surro", "surta", "surte", "surto", "susta", "suste", "susti", "susto", "sutil", "sutis",
  "tabas", "tacai", "tacam", "tacar", "tacha", "tache", "tacho", "tacos", "tacou", "taipa", "talas", "talco", "talha", "talhe", "talho", "talos", "tampa", "tampe", "tampo", "tanga", "tange", "tangi", "tango", "tanja", "tanjo", "tanta", "tanto", "tapai", "tapam", "tapar", "tapas", "tapei", "tapem", "tapes", "tapou", "taque", "taras", "tarda", "tarde", "tardo", "tarja", "tatua", "tatue", "tatuo", "tatus", "taxai", "taxam", "taxar", "taxas", "taxei", "taxem", "taxes", "taxou", "tchau", "tecei", "tecem", "tecer", "teces", "teceu", "tecia", "tecla", "tecle", "teclo", "tédio", "teias", "teima", "teime", "teimo", "telas", "teles", "telha", "temam", "temas", "temei", "temem", "temer", "temes", "temeu", "temia", "temor", "temos", "tempo", "tenaz", "tenda", "tende", "tendi", "tendo", "tenha", "tenho", "tenor", "tenra", "tenro", "tensa", "tenso", "tenta", "tente", "tento", "tênue", "terei", "terem", "teres", "teria", "termo", "terna", "terno", "terra", "tesas", "teses", "tesos", "testa", "teste", "testo", "tetas", "tetos", "tetra", "texto", "tiara", "tição", "tidas", "tidos", "tigre", "times", "tinam", "tinas", "tinem", "tines", "tingi", "tinha", "tinia", "tinir", "tinis", "tiniu", "tinja", "tinjo", "tinta", "tinto", "tipos", "tirai", "tiram", "tirar", "tiras", "tirei", "tirem", "tires", "tiros", "tirou", "titia", "titio", "tiver", "toada", "tocai", "tocam", "tocar", "tocas", "tocha", "tocou", "todas", "todos", "togas", "tolas", "toldo", "tolha", "tolhe", "tolhi", "tolho", "tolos", "tomai", "tomam", "tomar", "tomba", "tombe", "tombo", "tomei", "tomem", "tomes", "tomou", "tonel", "tonta", "tonto", "topai", "topam", "topar", "topas", "topei", "topem", "topes", "topos", "topou", "toque", "toras", "torce", "torci", "torço", "torna", "torne", "torno", "toros", "torpe", "torra", "torre", "torro", "torso", "torta", "torto", "tosai", "tosam", "tosar", "tosas", "tosca", "tosco", "tosei", "tosem", "toses", "tosou", "tosse", "tossi", "tosta", "toste", "tosto", "total", "totem", "touca", "touro", "trace", "traço", "traem", "traga", "trago", "traia", "traio", "trair", "trais", "traiu", "traja", "traje", "trajo", "trama", "trapo", "trata", "trate", "trato", "trava", "trave", "travo", "traze", "treco", "trema", "treme", "tremi", "tremo", "trena", "trens",
  "trepa", "trepe", "trepo", "treta", "treva", "trevo", "treze", "tribo", "trigo", "trina", "trino", "trios", "tripa", "troca", "troça", "troce", "troco", "troço", "trono", "tropa", "trota", "trote", "troto", "trova", "truco", "trufa", "trupe", "truta", "tubos", "tufos", "tumba", "tumor", "tupis", "turba", "turbe", "turbo", "turca", "turco", "turma", "turmo", "turno", "turva", "turve", "turvo", "tutor",
  "úbere", "ufana", "ufane", "ufano", "uivai", "uivam", "uivar", "uivas", "uivei", "uivem", "uives", "uivos", "uivou", "ultra", "ulula", "ulule", "ululo", "úmido", "unais", "unamo", "ungem", "unges", "ungia", "ungir", "ungis", "ungiu", "unhas", "uniam", "união", "unias", "única", "único", "unida", "unido", "unimo", "unira", "untai", "untam", "untar", "untas", "untei", "untem", "untes", "untou", "urdam", "urdas", "urdem", "urdes", "urdia", "urdir", "urdis", "urdiu", "urgia", "urgir", "urgis", "urgiu", "urina", "urine", "urino", "urjam", "urjas", "urnas", "urrai", "urram", "urrar", "urras", "urrei", "urrem", "urres", "urros", "urrou", "ursas", "ursos", "urubu", "usada", "usado", "usais", "usamo", "usara", "usava", "useis", "usemo", "usina", "usual", "usura", "úteis",
  "vacas", "vácuo", "vades", "vadia", "vadie", "vadio", "vagai", "vagam", "vagar", "vagas", "vagem", "vagia", "vagir", "vagis", "vagiu", "vagos", "vagou", "vague", "vaiai", "vaiam", "vaiar", "vaias", "vaiei", "vaiem", "vaies", "vaiou", "valas", "valei", "valem", "valer", "vales", "valeu", "valha", "valho", "valia", "valor", "valos", "valsa", "vamos", "vapor", "varai", "varam", "varar", "varas", "varei", "varem", "vares", "varia", "varie", "vario", "vário", "variz", "varou", "varra", "varre", "varri", "varro", "vasco", "vasos", "vasta", "vasto", "vazai", "vazam", "vazão", "vazar", "vazas", "vazei", "vazem", "vazes", "vazia", "vazio", "vazou", "veado", "vedai", "vedam", "vedar", "vedas", "vedei", "vedem", "vedes", "vedou", "veias", "veira", "vejam", "vejas", "velai", "velam", "velar", "velas", "velei", "velem", "veles", "velha", "velho", "velou", "veloz", "vemos", "venal", "vence", "venci", "venda", "vende", "vendi", "vendo", "venha", "venho", "vênia", "venta", "vente", "vento", "verão", "verba", "verbo", "verde", "verei", "verem", "veres", "verga", "veria", "verme", "versa", "verse", "verso", "verta", "verte", "verti", "verto", "verve", "vesga", "vesgo", "vespa", "veste", "vesti", "vetai", "vetam", "vetar", "vetas", "vetei", "vetem", "vetes", "vetor", "vetou", "vexai", "vexam", "vexar", "vexas", "vexei", "vexem", "vexes", "vexou", "vezes", "viaja", "viaje", "viajo", "vibra", "vibre", "vibro", "vicia", "vicie", "vício", "vidas", "vídeo", "vidra", "vidre", "vidro", "viela", "viera", "vigas", "viger", "vigia", "vigie", "vigio", "vigor", "vilão", "vilas", "vimos", "vinca", "vinco", "vinda", "vinde", "vindo", "vinga", "vingo", "vinha", "vinho", "vinte", "viola", "viole", "violo", "virai", "viral", "viram", "virão", "virar", "viras", "virei", "virem", "vires", "viria", "viril", "viris", "virmo", "virou", "vírus", "visai", "visam", "visão", "visar", "visas", "visei", "visem", "vises", "visou", "visse", "vista", "viste", "visto", "vital", "vivam", "vivas", "vivaz", "vivei", "vivem", "viver", "vives", "viveu", "vivia", "vivos", "voada", "voado", "voais", "voamo", "voara", "voava", "vocal", "vodca", "voeis", "voemo", "vogal", "volta", "volte", "volto", "volva", "volve", "volvi", "volvo", "voraz", "vossa", "vosso", "votai", "votam", "votar", "votas",
  "votei", "votem", "votes", "votos", "votou", "vozes", "vulgo", "vulto", "vulva",
  "xales", "xelim", "xeque", "xiita", "xinga", "xingo", "xisto", "xucra", "xucro",
  "zagas", "zanga", "zango", "zanza", "zanze", "zanzo", "zarpa", "zarpe", "zarpo", "zebra", "zelai", "zelam", "zelar", "zelas", "zelei", "zelem", "zeles", "zelou", "zerai", "zeram", "zerar", "zeras", "zerei", "zerem", "zeres", "zeros", "zerou", "zinco", "zomba", "zombe", "zombo", "zonas", "zonza", "zonzo", "zumba", "zumbe", "zumbi", "zumbo", "zunam", "zunas", "zunem", "zunes", "zunia", "zunir", "zunis", "zuniu", "zurra", "zurre", "zurro",
]


const keysFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M"]
const acentosArray = ["Á", "À", "Â", "Ã", "É", "È", "Ê", "Í", "Ì", "Î", "Ó", "Ò", "Ô", "Õ", "Ú", "Ù", "Û", "Ç"]

let indexShowAgainCheckSession = sessionStorage.getItem("indexShowAgainCheck")
let darkModeEnabledSession = sessionStorage.getItem("darkModeEnabled") == 'true'

let sessionSummary = sessionStorage.getItem("userSummary") ? JSON.parse(sessionStorage.getItem("userSummary")) : null
let userSummary = sessionSummary == null ? {
  rightGuesses: 0,
  wrongGuesses: 0,
  totalGuessesCounter: 0,
  tries: []
} : sessionSummary

let tries = 1

let windowWidth = window.document.body.clientWidth

const rows = 6
const columns = 5
let currentRow = 0
let currentColumn = 0
let userSelectedColumn = false
let letreco = "VASCO"//sortWord()
let letrecoMap = {}
for (let index = 0; index < letreco.length; index++) {
  letrecoMap[letreco[index]] = index
}
const guesses = []

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
  guesses[rowIndex] = new Array(columns)
  const tileRow = document.createElement("div")
  tileRow.setAttribute("id", "row" + rowIndex)
  tileRow.setAttribute("class", "tile-row")
  for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
    const tileColumn = document.createElement("div")
    if (rowIndex == 5) {
      tileColumn.setAttribute("id", "last-row" + rowIndex + "column" + columnIndex)
    } else {
      tileColumn.setAttribute("id", "row" + rowIndex + "column" + columnIndex)
    }
    tileColumn.setAttribute(
      "class",
      rowIndex === 0 ? "tile-column typing" : "tile-column"
    )

    tileColumn.addEventListener("click", () => setSelected(window.event.target.id))
    tileRow.append(tileColumn)
    guesses[rowIndex][columnIndex] = ""
  }
  tiles.append(tileRow)
}

function setSelected(element) {
  let clickedLine = element.split("w")[1].split("c")[0]
  let clickedColumn = element.split("n")[1]
  if (currentRow == clickedLine) {
    document.querySelector(".typing-selected").classList.remove("typing-selected")
    document.getElementById(element).classList.add("typing-selected")
    currentColumn = parseInt(clickedColumn, 8)
    userSelectedColumn = true
  }
}
const checkGuess = () => {
  console.log(userSummary)
  const guess = guesses[currentRow].join("")
  const letrecoSplited = letreco.split("")
  const guessSplited = guess.split("")
  if (guess.length !== columns) {
    return
  }
  var currentColumns = document.querySelectorAll(".typing")
  let letrecoRefactor = letreco.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("")
  for (i = 0; i < 5; i++) {
    if (!letrecoRefactor.includes(guessSplited[i])) {
      currentColumns[i].classList.add("wrong")
      setKeyboardButtonColor(guessSplited[i], "W")
    } else {
      if (letrecoRefactor.includes(guessSplited[i])) {
        if (letrecoRefactor[i] == guessSplited[i]) {
          const buttonsDisplaced = document.querySelectorAll(".btn-displaced")
          buttonsDisplaced.forEach(button => {
            if (button.textContent == guessSplited[i]) {
              button.classList.remove("btn-displaced")
            }
          })
          currentColumns[i].classList.remove("displaced")
          currentColumns[i].classList.add("right")
          if (acentosArray.includes(letrecoSplited[i])) {
            currentColumns[i].textContent = acentosArray[acentosArray.indexOf(letrecoSplited[i])]
          }
          setKeyboardButtonColor(guessSplited[i], "R")
        } else {
          currentColumns[i].classList.add("displaced")
          setKeyboardButtonColor(guessSplited[i], "D")
          letrecoRefactor[i] = letrecoRefactor[i].replace(guessSplited[i], "")
        }
      } else {
        currentColumns[i].classList.add("wrong")
      }
    }
  }

  if (guess === letreco.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
    document.querySelector(".typing-selected").classList.remove("typing-selected")
    moveToHiddenRow()
    userSummary.tries.push({ word: letreco, numberOfTries: tries, result: true })
    userSummary.rightGuesses++
    userSummary.totalGuessesCounter++
    sessionStorage.setItem("userSummary", JSON.stringify(userSummary))

    document.getElementById("resultMessageToast").classList.add("right-toast")
    document.getElementById("resultBodyToast").textContent = "Incrível!"

    var resultMessageToast = document.getElementById('resultMessageToast')

    if (resultMessageToast) {
      var toast = new bootstrap.Toast(resultMessageToast)
      toast.show()
    }

    createSummary()
    return
  } else {
    if (currentRow === 5) {
      document.querySelector(".typing-selected").classList.remove("typing-selected")
      for (i = 0; i < 5; i++) {
        const lastRowColumn = document.getElementById("last-row" + 5 + "column" + i)
        lastRowColumn.classList.remove("displaced")
        lastRowColumn.classList.remove("wrong")
        lastRowColumn.classList.remove("right")
        lastRowColumn.classList.add("wrong-result")
      }

      document.getElementById("resultMessageToast").classList.add("wrong-toast")
      document.getElementById("resultBodyToast").textContent = `Errou! A palavra era ${letreco}`

      var resultMessageToast = document.getElementById('resultMessageToast')

      if (resultMessageToast) {
        var toast = new bootstrap.Toast(resultMessageToast)
        toast.show()
      }

      moveToHiddenRow()
      userSummary.tries.push({ word: letreco, numberOfTries: tries, result: false })
      userSummary.wrongGuesses++
      userSummary.totalGuessesCounter++
      sessionStorage.setItem("userSummary", JSON.stringify(userSummary))
      createSummary()
    } else {
      tries++
      moveToNextRow()
    }
  }
}

function setKeyboardButtonColor(key, result) {
  document.getElementById(key).classList.add(result == "R" ? "btn-right" : result == "D" ? "btn-displaced" : "btn-wrong")
}

const moveToNextRow = () => {
  var typingColumns = document.querySelectorAll(".typing")
  for (let index = 0; index < typingColumns.length; index++) {
    typingColumns[index].classList.remove("typing")
    typingColumns[index].classList.add("disabled")
  }
  currentRow++
  currentColumn = 0
  let idRow = currentRow == 5 ? "last-row" : "row"
  const currentRowEl = document.querySelector("#row" + currentRow)
  var currentColumns = currentRowEl.querySelectorAll(".tile-column")
  for (let index = 0; index < currentColumns.length; index++) {
    currentColumns[index].classList.remove("disabled")
    currentColumns[index].classList.add("typing")
  }

  document.querySelector(".typing-selected").classList.remove("typing-selected")
  document.getElementById(`${idRow}${currentRow}column${currentColumn}`).classList.add("typing-selected")
}

const moveToHiddenRow = () => {
  var typingColumns = document.querySelectorAll(".typing")
  const currentRowEl = document.querySelector("#row" + currentRow)
  var currentColumns = currentRowEl.querySelectorAll(".tile-column")
  for (let index = 0; index < currentColumns.length; index++) {
    typingColumns[index].classList.remove("typing")
  }
  currentRow = 7
}

document.getElementById(`row${0}column${0}`).classList.add("typing-selected")
const handleKeyboardOnClick = (key) => {

  if (currentColumn === columns) {
    return
  }

  let currentTile = undefined

  let idRow = currentRow == 5 ? "last-row" : "row"

  currentTile = document.querySelector(
    "#" + idRow + currentRow + "column" + currentColumn
  )

  currentTile.textContent = key

  guesses[currentRow][currentColumn] = key
  currentColumn++



  if (currentColumn <= 4) {
    document.querySelector(".typing-selected").classList.remove("typing-selected")
    document.getElementById(`${idRow}${currentRow}column${currentColumn}`).classList.add("typing-selected")
  }
}

const createKeyboardRow = (keys, keyboardRow) => {
  keys.forEach((key) => {
    var buttonElement = document.createElement("button")
    buttonElement.textContent = key
    buttonElement.setAttribute("id", key)
    if (windowWidth >= 768) {
      buttonElement.style.borderRadius = "0.45rem"
    }
    buttonElement.style.padding = "0"
    buttonElement.classList.add("btn")
    buttonElement.classList.add("btn-outline-dark")
    buttonElement.classList.add("char")
    buttonElement.addEventListener("click", () => handleKeyboardOnClick(key))
    keyboardRow.append(buttonElement)
  })
}


createSummary()


const handleBackspace = () => {
  if (currentColumn === 0) {
    return
  }

  let idRow = currentRow == 5 ? "last-row" : "row"
  userSelectedColumn ? currentColumn++ : currentColumn
  currentColumn--
  guesses[currentRow][currentColumn] = ""
  const tile = document.querySelector("#" + idRow + currentRow + "column" + currentColumn)

  tile.textContent = ""

  if (currentColumn >= 0) {
    document.querySelector(".typing-selected").classList.remove("typing-selected")
    document.getElementById(`${idRow}${currentRow}column${currentColumn}`).classList.add("typing-selected")
  }
  userSelectedColumn = false
}

if (windowWidth > 600) {


}

createKeyboardRow(keysFirstRow, keyboardFirstRow)
createKeyboardRow(keysSecondRow, keyboardSecondRow)
createKeyboardRow(keysThirdRow, keyboardThirdRow)

const keyboardContainer = document.querySelector(".keyboard-container")

const backspaceButton = document.createElement("button")
backspaceButton.addEventListener("click", handleBackspace)
backspaceButton.textContent = "⌫"
backspaceButton.id = "backspaceButton"
if (windowWidth >= 768) {
  backspaceButton.style.borderRadius = "0.45rem"
}
backspaceButton.classList.add("btn")
backspaceButton.classList.add("btn-outline-dark")
keyboardSecondRow.append(backspaceButton)

const enterButton = document.createElement("button")
enterButton.addEventListener("click", checkGuess)
enterButton.textContent = windowWidth < 768 ? "⇥" : "ENTER"
enterButton.id = "enterButton"
if (windowWidth >= 768) {
  enterButton.style.borderRadius = "0.45rem"
}
enterButton.classList.add("btn")
enterButton.classList.add("btn-outline-dark")
keyboardThirdRow.append(enterButton)


/* --- CREATE HEADER --- */
const header = document.querySelector(".header-container")
let buttonGroupFirstColumn = document.createElement("div")
buttonGroupFirstColumn.classList.add("btn-group")
buttonGroupFirstColumn.setAttribute("role", "group")

let buttonOpenNavBar = document.createElement("img")
buttonOpenNavBar.setAttribute("id", "buttonOpenNavBar")
buttonOpenNavBar.setAttribute("type", "button")
buttonOpenNavBar.setAttribute("src", "./images/score.png")
buttonOpenNavBar.addEventListener("mouseenter", function (event) {
  event.target.setAttribute("src", "./images/score-hover.png")
}, false)

buttonOpenNavBar.addEventListener("mouseout", function (event) {
  event.target.setAttribute("src", "./images/score.png")
}, false)
buttonOpenNavBar.setAttribute("data-bs-toggle", "offcanvas")
buttonOpenNavBar.setAttribute("href", "#offcanvasScoreBoard")
buttonOpenNavBar.setAttribute("role", "button")
buttonOpenNavBar.setAttribute("aria-controls", "offcanvasScoreBoard")
buttonOpenNavBar.classList.add("btn")
buttonOpenNavBar.classList.add("btn-outline-dark")
buttonGroupFirstColumn.append(buttonOpenNavBar)


let buttonSettings = document.createElement("img")
buttonSettings.setAttribute("id", "buttonSettings")
buttonSettings.setAttribute("type", "button")
buttonSettings.setAttribute("data-bs-toggle", "modal")
buttonSettings.setAttribute("data-bs-target", "#settingsModal")
buttonSettings.setAttribute("src", "./images/settings.png")
buttonSettings.addEventListener("mouseenter", function (event) {
  event.target.setAttribute("src", "./images/settings-hover.png")
}, false)

buttonSettings.addEventListener("mouseout", function (event) {
  event.target.setAttribute("src", "./images/settings.png")
}, false)
buttonSettings.classList.add("btn")
buttonSettings.classList.add("btn-outline-dark")
buttonGroupFirstColumn.append(buttonSettings)

header.append(buttonGroupFirstColumn)

let title = document.createElement(windowWidth <= 300 ? "h2" : "h1")
title.textContent = "LeGuesser"
header.append(title)

let buttonGroupThirdColumn = document.createElement("div")
buttonGroupThirdColumn.classList.add("btn-group")
buttonGroupThirdColumn.setAttribute("role", "group")

let buttonInformation = document.createElement("img")
buttonInformation.setAttribute("id", "buttonInformation")
buttonInformation.setAttribute("type", "button")
buttonInformation.setAttribute("data-bs-toggle", "modal")
buttonInformation.setAttribute("data-bs-target", "#infosModal")
buttonInformation.setAttribute("src", "./images/info.png")
buttonInformation.addEventListener("mouseenter", function (event) {
  event.target.setAttribute("src", "./images/info-hover.png")
}, false)
buttonInformation.addEventListener("mouseout", function (event) {
  event.target.setAttribute("src", "./images/info.png")
}, false)
buttonInformation.classList.add("btn")
buttonInformation.classList.add("btn-outline-dark")
buttonGroupThirdColumn.append(buttonInformation)

let buttonNextWord = document.createElement("img")
buttonNextWord.setAttribute("id", "buttonNextWord")
buttonNextWord.setAttribute("type", "button")
buttonNextWord.setAttribute("src", "./images/next.png")
buttonNextWord.addEventListener("mouseenter", function (event) {
  event.target.setAttribute("src", "./images/next-hover.png")
}, false)

buttonNextWord.addEventListener("mouseout", function (event) {
  event.target.setAttribute("src", "./images/next.png")
}, false)
buttonNextWord.addEventListener("click", () => document.location.reload())
buttonNextWord.classList.add("btn")
buttonNextWord.classList.add("btn-outline-dark")
buttonGroupThirdColumn.append(buttonNextWord)
header.append(buttonGroupThirdColumn)
/* --- END HEADER --- */

document.onkeydown = function (evt) {
  evt = evt || window.evt
  if (evt.key === "Enter") {
    checkGuess()
  } else if (evt.key === "Backspace") {
    handleBackspace()
  } else if (keysFirstRow.includes(evt.key.toUpperCase()) || keysSecondRow.includes(evt.key.toUpperCase()) || keysThirdRow.includes(evt.key.toUpperCase())) {
    handleKeyboardOnClick(evt.key.toUpperCase())
  }
}


function informationModal() {

  console.log("salve caralho")

  let modal = document.createElement("div")
  modal.classList.add("modal-dialog")
  modal.classList.add("modal-dialog-centered")
  modal.classList.add("modal-dialog-scrollable")

}

function createSummary() {
  let totalGuessesCounter = userSummary.totalGuessesCounter

  let rightCount = userSummary.rightGuesses == undefined ? 0 : userSummary.rightGuesses
  let rightGuesses = document.getElementById("rightGuesses")
  rightGuesses.textContent = `Acertos: ${rightCount}`

  let wrongCount = userSummary.wrongGuesses == undefined ? 0 : userSummary.wrongGuesses
  let wrongGuesses = document.getElementById("wrongGuesses")
  wrongGuesses.textContent = `Erros: ${wrongCount}`

  let percentageRight = totalGuessesCounter == 0 ? 0 : (rightCount * 100) / totalGuessesCounter
  let percentageRightGuesses = document.getElementById("percentageRightGuesses")
  percentageRightGuesses.textContent = `Percentual de acertos: ${percentageRight}%`

  let percentagewrong = totalGuessesCounter == 0 ? 0 : (wrongCount * 100) / totalGuessesCounter
  let percentagewrongGuesses = document.getElementById("percentageWrongGuesses")
  percentagewrongGuesses.textContent = `Percentual de erros: ${percentagewrong}%`

  let totalGuesses = document.getElementById("totalGuesses")
  totalGuesses.textContent = `Total de jogadas: ${totalGuessesCounter}`

  let old_summaryTableBody = document.getElementById("summaryTableBody")

  let summaryTableBody = document.createElement("tbody")
  summaryTableBody.setAttribute("id", "summaryTableBody")

  userSummary.tries.forEach(trie => {
    let tr = document.createElement("tr")

    //create word column
    let td = document.createElement("td")
    td.textContent = trie.word
    tr.append(td)

    //create tries column
    td = document.createElement("td")
    td.textContent = trie.numberOfTries
    tr.append(td)

    if (trie.result) {
      tr.classList.add("table-success")
    } else {
      tr.classList.add("table-danger")
    }


    summaryTableBody.append(tr)
  })
  let table = document.getElementById("summaryTable")
  table.replaceChild(summaryTableBody, old_summaryTableBody)

}

function sortWord() {
  let index = Math.floor(Math.random() * (0 - wordsArray.length)) + 0
  const palavraSort = wordsArray[index < 0 ? index * -1 : index]
  console.log(palavraSort.normalize().toUpperCase())
  return palavraSort.normalize().toUpperCase()
}

function checkVisibilityToast() {
  let indexShowAgainCheck = document.getElementById("indexShowAgainCheck").checked
  sessionStorage.setItem("indexShowAgainCheck", indexShowAgainCheck)
}

if (!indexShowAgainCheckSession) {
  var toastLiveExample = document.getElementById('indexToast')
  if (toastLiveExample) {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }
}else{
  changeToastZIndex()
}

setTimeout(()=>{
  changeToastZIndex()
},10000)

function changeToastZIndex(){
  document.getElementById('indexToastContainer').style.zIndex = "-100"
}

darkModeToggle(darkModeEnabledSession)

function darkModeToggle(checked) {

  let root = document.querySelector(":root")

  if (checked) {
    root.style.setProperty("--color-background", "#0b0c0e")
    root.style.setProperty("--color-tile-border", "#b1b1b1")
    root.style.setProperty("--color-tile-background", "#b3b3b3")
    root.style.setProperty("--color-text", "#f4f3f1")

    document.getElementById("buttonOpenNavBar").classList.add("inverted")
    document.getElementById("buttonSettings").classList.add("inverted")
    document.getElementById("buttonInformation").classList.add("inverted")
    document.getElementById("buttonNextWord").classList.add("inverted")

    let buttonKeyboard = document.querySelectorAll(".keyboard-container button")
    buttonKeyboard.forEach(button => {
      button.classList.add("btn-text-color")
    })
  } else {
    root.style.setProperty("--color-background", "#f4f3f1")
    root.style.setProperty("--color-tile-border", "#4e4e4e")
    root.style.setProperty("--color-tile-background", "#4c4c4c")
    root.style.setProperty("--color-text", "#0b0c0e")

    document.getElementById("buttonOpenNavBar").classList.remove("inverted")
    document.getElementById("buttonSettings").classList.remove("inverted")
    document.getElementById("buttonInformation").classList.remove("inverted")
    document.getElementById("buttonNextWord").classList.remove("inverted")

    let buttonKeyboard = document.querySelectorAll(".keyboard-container button")
    buttonKeyboard.forEach(button => {
      button.classList.remove("btn-text-color")
    })

  }
  document.getElementById("darkSwitch").checked = checked
  sessionStorage.setItem("darkModeEnabled", checked)

}

if (windowWidth < 768) {
  document.getElementById("indexToastContainer").classList.add("top-0")
  document.getElementById("indexToastContainer").classList.remove("end-0")
}
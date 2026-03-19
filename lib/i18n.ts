export type Language = 'en' | 'fr' | 'pt' | 'it' | 'es';

type LocalizedText = Record<Language, string>;

type LocalizedInfoItem = {
  title: LocalizedText;
  text: LocalizedText;
};

type ProductPageKey =
  | 'backend-platform'
  | 'templates-marketplace'
  | 'integrations'
  | 'roadmap'
  | 'features'
  | 'changelog';

type UseCasePageKey =
  | 'category-productivity'
  | 'category-education'
  | 'category-entertainment'
  | 'category-health-wellness'
  | 'category-ecommerce-retail'
  | 'category-finance'
  | 'role-product-management'
  | 'role-operations'
  | 'role-marketing-sales-automation'
  | 'role-hr-recruitment'
  | 'role-dev-productivity'
  | 'role-business-intelligence-analytics';

export const defaultLanguage: Language = 'en';

export const LANGUAGE_OPTIONS = [
  { code: 'en' as const, label: 'English' },
  { code: 'fr' as const, label: 'Francais' },
  { code: 'pt' as const, label: 'Portugués' },
  { code: 'it' as const, label: 'Italiano' },
  { code: 'es' as const, label: 'Español' },
];

function text(
  en: string,
  fr: string,
  pt: string,
  it: string,
  es: string,
): LocalizedText {
  return { en, fr, pt, it, es };
}

function pick(language: Language, value: LocalizedText) {
  return value[language];
}

function pickItems(language: Language, items: LocalizedInfoItem[]) {
  return items.map((item) => ({
    title: pick(language, item.title),
    text: pick(language, item.text),
  }));
}

const productPages: Record<
  ProductPageKey,
  {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    pillars: LocalizedInfoItem[];
  }
> = {
  'backend-platform': {
    eyebrow: text(
      'Product / Backend Platform',
      'Produit / Plateforme Backend',
      'Produto / Plataforma Backend',
      'Prodotto / Piattaforma Backend',
      'Producto / Plataforma Backend',
    ),
    title: text(
      'Deploy apps with a backend built for AI agents',
      'Deployez des apps avec un backend pense pour les agents IA',
      'Implante apps com um backend feito para agentes de IA',
      'Distribuisci app con un backend pensato per agenti AI',
      'Implementa apps con un backend pensado para agentes de IA',
    ),
    description: text(
      'Position your platform as more than a visual builder. This page focuses on the backend layer: auth, data, automation, storage, and production infrastructure that makes AI-built apps feel credible and complete.',
      'Positionnez votre plateforme comme plus qu un simple builder visuel. Cette page met en avant la couche backend : auth, donnees, automatisation, stockage et infrastructure de production.',
      'Posicione sua plataforma como mais que um builder visual. Esta pagina destaca a camada de backend: auth, dados, automacao, armazenamento e infraestrutura de producao.',
      'Posiziona la piattaforma come piu di un builder visivo. Questa pagina mette in evidenza il backend: auth, dati, automazione, storage e infrastruttura di produzione.',
      'Posiciona tu plataforma como mas que un constructor visual. Esta pagina destaca la capa backend: auth, datos, automatizacion, almacenamiento e infraestructura de produccion.',
    ),
    pillars: [
      {
        title: text('Agent-ready workflows', 'Workflows prets pour les agents', 'Flux prontos para agentes', 'Workflow pronti per gli agenti', 'Flujos listos para agentes'),
        text: text(
          'Frame the backend as a home for triggers, task routing, and AI actions that keep apps active after they launch.',
          'Presentez le backend comme le lieu des triggers, du routage des taches et des actions IA qui gardent les apps actives.',
          'Apresente o backend como a base para gatilhos, roteamento de tarefas e acoes de IA que mantem as apps ativas.',
          'Presenta il backend come la casa di trigger, instradamento delle attivita e azioni AI che mantengono vive le app.',
          'Presenta el backend como el hogar de disparadores, enrutamiento de tareas y acciones de IA que mantienen activas las apps.',
        ),
      },
      {
        title: text('Built-in data layer', 'Couche de donnees integree', 'Camada de dados integrada', 'Layer dati integrato', 'Capa de datos integrada'),
        text: text(
          'Explain how users get structured data, user records, permissions, and persistence without starting from scratch.',
          'Expliquez comment les utilisateurs obtiennent donnees structurees, comptes, permissions et persistance sans repartir de zero.',
          'Explique como os usuarios recebem dados estruturados, registros, permissoes e persistencia sem comecar do zero.',
          'Spiega come gli utenti ottengono dati strutturati, record, permessi e persistenza senza partire da zero.',
          'Explica como los usuarios obtienen datos estructurados, registros, permisos y persistencia sin empezar desde cero.',
        ),
      },
      {
        title: text('Deployment confidence', 'Confiance au deploiement', 'Confianca no deploy', 'Fiducia nel deploy', 'Confianza en el despliegue'),
        text: text(
          'Use this route to sell reliability, security, and scale instead of burying them on a long homepage.',
          'Utilisez cette page pour vendre fiabilite, securite et passage a l echelle au lieu de les cacher sur une longue homepage.',
          'Use esta rota para vender confiabilidade, seguranca e escala em vez de esconder isso em uma homepage longa.',
          'Usa questa pagina per comunicare affidabilita, sicurezza e scala invece di nasconderle in una homepage lunga.',
          'Usa esta pagina para vender confiabilidad, seguridad y escala en lugar de esconderlo en una homepage larga.',
        ),
      },
    ],
  },
  'templates-marketplace': {
    eyebrow: text('Product / Templates Marketplace', 'Produit / Marketplace de templates', 'Produto / Marketplace de templates', 'Prodotto / Marketplace template', 'Producto / Marketplace de templates'),
    title: text('Explore and customize ready-made apps from the community', 'Explorez et personnalisez des apps pretes a l emploi de la communaute', 'Explore e personalize apps prontas da comunidade', 'Esplora e personalizza app pronte dalla comunita', 'Explora y personaliza apps listas de la comunidad'),
    description: text('Use this page to spotlight reusable app foundations. It helps visitors imagine starting from a proven base instead of a blank prompt, which makes your platform feel faster and more practical.', 'Utilisez cette page pour mettre en avant des bases d apps reutilisables. Elle aide les visiteurs a imaginer un depart depuis une base validee plutot qu un prompt vide.', 'Use esta pagina para destacar bases de apps reutilizaveis. Ela ajuda visitantes a imaginar um inicio a partir de uma base comprovada em vez de um prompt vazio.', 'Usa questa pagina per valorizzare basi di app riutilizzabili. Aiuta i visitatori a immaginare una partenza da una base gia valida invece di un prompt vuoto.', 'Usa esta pagina para destacar bases de apps reutilizables. Ayuda a los visitantes a imaginar un inicio desde una base probada en lugar de un prompt vacio.'),
    pillars: [
      { title: text('Faster starts', 'Demarrages plus rapides', 'Comecos mais rapidos', 'Partenze piu rapide', 'Inicios mas rapidos'), text: text('Show how templates shorten time to first value and reduce creative friction for new users.', 'Montrez comment les templates reduisent le temps jusqu a la premiere valeur et la friction creative.', 'Mostre como os templates reduzem o tempo ate o primeiro valor e a friccao criativa.', 'Mostra come i template riducono il tempo al primo valore e la frizione creativa.', 'Muestra como los templates reducen el tiempo hasta el primer valor y la friccion creativa.') },
      { title: text('Customization paths', 'Parcours de personnalisation', 'Caminhos de personalizacao', 'Percorsi di personalizzazione', 'Rutas de personalizacion'), text: text('Explain that users can take a community template and reshape it around their own workflow, brand, or team needs.', 'Expliquez que les utilisateurs peuvent reprendre un template communautaire et l adapter a leur workflow, marque ou equipe.', 'Explique que usuarios podem pegar um template da comunidade e adaptar ao seu fluxo, marca ou equipe.', 'Spiega che gli utenti possono prendere un template della comunita e adattarlo al proprio flusso, brand o team.', 'Explica que los usuarios pueden tomar un template de la comunidad y adaptarlo a su flujo, marca o equipo.') },
      { title: text('Category depth', 'Profondeur des categories', 'Profundidade de categorias', 'Profondita delle categorie', 'Profundidad de categorias'), text: text('Organize templates around industries, roles, and common internal tools so the catalog feels purposeful.', 'Organisez les templates par secteurs, roles et outils internes communs pour donner une vraie structure au catalogue.', 'Organize templates por setores, funcoes e ferramentas internas comuns para dar mais sentido ao catalogo.', 'Organizza i template per settori, ruoli e strumenti interni comuni per rendere il catalogo piu coerente.', 'Organiza los templates por industrias, roles y herramientas internas comunes para que el catalogo se sienta intencional.') },
    ],
  },
  integrations: {
    eyebrow: text('Product / Integrations', 'Produit / Integrations', 'Produto / Integracoes', 'Prodotto / Integrazioni', 'Producto / Integraciones'),
    title: text('Discover integrations that plug right into your app', 'Decouvrez des integrations qui se branchent directement a votre app', 'Descubra integracoes que entram direto na sua app', 'Scopri integrazioni che si collegano subito alla tua app', 'Descubre integraciones que se conectan directo a tu app'),
    description: text('This page gives integrations enough room to matter. Instead of a small homepage block, it becomes a dedicated destination that explains how your apps connect to payments, communication, data, and operations tools.', 'Cette page donne assez d espace aux integrations pour compter. Au lieu d un petit bloc sur la homepage, elle devient une vraie destination.', 'Esta pagina da espaco suficiente para que integracoes importem. Em vez de um pequeno bloco na homepage, vira um destino dedicado.', 'Questa pagina da alle integrazioni lo spazio necessario. Invece di un piccolo blocco in homepage, diventa una destinazione dedicata.', 'Esta pagina da a las integraciones el espacio suficiente para importar. En lugar de un pequeno bloque en la homepage, se convierte en un destino dedicado.'),
    pillars: [
      { title: text('Connected workflows', 'Workflows connectes', 'Flux conectados', 'Workflow connessi', 'Flujos conectados'), text: text('Demonstrate how apps fit into the rest of a company s stack instead of operating as isolated prototypes.', 'Montrez comment les apps s integrent au stack de l entreprise au lieu de rester des prototypes isoles.', 'Mostre como apps se encaixam no stack da empresa em vez de funcionar como prototipos isolados.', 'Mostra come le app si inseriscono nello stack aziendale invece di restare prototipi isolati.', 'Demuestra como las apps encajan en el stack de la empresa en lugar de operar como prototipos aislados.') },
      { title: text('Automation handoffs', 'Relais d automatisation', 'Passagens de automacao', 'Passaggi di automazione', 'Puentes de automatizacion'), text: text('Position integrations as a bridge between prompts, triggers, external services, and real business outcomes.', 'Positionnez les integrations comme un pont entre prompts, triggers, services externes et vrais resultats business.', 'Posicione integracoes como uma ponte entre prompts, gatilhos, servicos externos e resultados reais.', 'Posiziona le integrazioni come un ponte tra prompt, trigger, servizi esterni e risultati reali.', 'Posiciona las integraciones como un puente entre prompts, disparadores, servicios externos y resultados reales.') },
      { title: text('Trust-building proof', 'Preuves de confiance', 'Prova de confianca', 'Prova di fiducia', 'Pruebas de confianza'), text: text('A fuller page gives you space for logos, setup examples, and workflow scenarios later.', 'Une page plus complete vous laisse de la place pour des logos, exemples de setup et scenarios.', 'Uma pagina mais completa abre espaco para logos, exemplos de setup e cenarios de fluxo.', 'Una pagina piu completa ti lascia spazio per loghi, esempi di setup e scenari di workflow.', 'Una pagina mas completa te da espacio para logos, ejemplos de configuracion y escenarios de flujo.') },
    ],
  },
  roadmap: {
    eyebrow: text('Product / Roadmap', 'Produit / Roadmap', 'Produto / Roadmap', 'Prodotto / Roadmap', 'Producto / Roadmap'),
    title: text('Get a preview of what is coming next', 'Obtenez un apercu de ce qui arrive ensuite', 'Veja o que vem a seguir', 'Scopri cosa arriva dopo', 'Obtén una vista previa de lo que viene despues'),
    description: text('A roadmap page helps your site feel alive. It gives prospects a reason to revisit, lets you signal momentum, and helps enterprise buyers understand where the platform is heading.', 'Une page roadmap rend le site plus vivant. Elle donne une raison de revenir et aide a montrer la dynamique du produit.', 'Uma pagina de roadmap deixa o site mais vivo. Ela da motivo para voltar e mostra o ritmo do produto.', 'Una pagina roadmap rende il sito piu vivo. Da un motivo per tornare e mostra il ritmo del prodotto.', 'Una pagina de roadmap hace que el sitio se sienta vivo. Da una razon para volver y muestra el impulso del producto.'),
    pillars: [
      { title: text('Forward visibility', 'Visibilite a venir', 'Visibilidade futura', 'Visibilita futura', 'Visibilidad futura'), text: text('Show upcoming releases clearly, so visitors understand what is shipping soon and why it matters.', 'Montrez clairement les prochaines sorties pour que les visiteurs comprennent ce qui arrive et pourquoi c est important.', 'Mostre claramente os proximos lancamentos para que visitantes entendam o que chega e por que importa.', 'Mostra chiaramente i prossimi rilasci cosi i visitatori capiscono cosa arriva e perche conta.', 'Muestra claramente los proximos lanzamientos para que los visitantes entiendan que llega y por que importa.') },
      { title: text('Strategic themes', 'Themes strategiques', 'Temas estrategicos', 'Temi strategici', 'Temas estrategicos'), text: text('Group roadmap items by AI workflows, publishing, governance, or developer tooling to make priorities easier to understand.', 'Regroupez les elements par workflows IA, publication, gouvernance ou outils dev pour clarifier les priorites.', 'Agrupe itens por fluxos de IA, publicacao, governanca ou ferramentas dev para deixar prioridades mais claras.', 'Raggruppa gli elementi per workflow AI, publishing, governance o tooling dev per chiarire le priorita.', 'Agrupa los elementos por flujos de IA, publicacion, gobernanza o herramientas dev para aclarar las prioridades.') },
      { title: text('Product momentum', 'Dynamique produit', 'Ritmo do produto', 'Momentum del prodotto', 'Impulso del producto'), text: text('A dedicated roadmap page makes the platform feel more active and more serious than a static brochure site.', 'Une page roadmap dediee rend la plateforme plus active et plus serieuse qu un site vitrine statique.', 'Uma pagina dedicada de roadmap faz a plataforma parecer mais ativa e mais seria que um site estatico.', 'Una pagina roadmap dedicata fa sembrare la piattaforma piu attiva e piu seria di un sito statico.', 'Una pagina dedicada de roadmap hace que la plataforma se sienta mas activa y mas seria que un sitio estatico.') },
    ],
  },
  features: {
    eyebrow: text('Product / Features', 'Produit / Fonctionnalites', 'Produto / Recursos', 'Prodotto / Funzionalita', 'Producto / Funcionalidades'),
    title: text('Explore everything our platform has to offer', 'Explorez tout ce que notre plateforme propose', 'Explore tudo o que a plataforma oferece', 'Esplora tutto cio che la piattaforma offre', 'Explora todo lo que ofrece nuestra plataforma'),
    description: text('This is your core product explainer page. It works as a richer destination for capabilities like generation, editing, publishing, permissions, collaboration, integrations, and AI-guided workflows.', 'Voici la page principale d explication produit. Elle donne plus d espace pour parler generation, edition, publication, permissions, collaboration et integrations.', 'Esta e a pagina principal para explicar o produto. Ela da mais espaco para geracao, edicao, publicacao, permissoes, colaboracao e integracoes.', 'Questa e la pagina principale di spiegazione del prodotto. Offre piu spazio per generazione, editing, pubblicazione, permessi, collaborazione e integrazioni.', 'Esta es la pagina principal para explicar el producto. Da mas espacio para generacion, edicion, publicacion, permisos, colaboracion e integraciones.'),
    pillars: [
      { title: text('Clear capability map', 'Carte claire des capacites', 'Mapa claro de capacidades', 'Mappa chiara delle capacita', 'Mapa claro de capacidades'), text: text('Turn feature clusters into a story: ideation, build, refine, publish, and scale.', 'Transformez les groupes de fonctionnalites en histoire : ideation, creation, optimisation, publication et echelle.', 'Transforme grupos de recursos em uma historia: ideacao, construcao, refinamento, publicacao e escala.', 'Trasforma i gruppi di funzionalita in una storia: ideazione, build, rifinitura, pubblicazione e scala.', 'Convierte grupos de funcionalidades en una historia: ideacion, construccion, refinamiento, publicacion y escala.') },
      { title: text('Richer visual hierarchy', 'Hierarchie visuelle plus riche', 'Hierarquia visual mais rica', 'Gerarchia visiva piu ricca', 'Jerarquia visual mas rica'), text: text('This page gives you enough room for product cards, diagrams, metrics, and screenshots later.', 'Cette page vous donne assez d espace pour des cartes produit, schemas, metriques et captures plus tard.', 'Esta pagina da espaco suficiente para cards de produto, diagramas, metricas e capturas depois.', 'Questa pagina ti lascia spazio per card prodotto, diagrammi, metriche e screenshot in futuro.', 'Esta pagina te da suficiente espacio para cards de producto, diagramas, metricas y capturas mas adelante.') },
      { title: text('Better entry point', 'Meilleur point d entree', 'Melhor ponto de entrada', 'Migliore punto di ingresso', 'Mejor punto de entrada'), text: text('For visitors who want detail first, this route works better than forcing them down a homepage narrative.', 'Pour les visiteurs qui veulent du detail tout de suite, cette page fonctionne mieux qu une simple narration de homepage.', 'Para visitantes que querem detalhes primeiro, esta rota funciona melhor do que uma narrativa longa na homepage.', 'Per chi vuole i dettagli subito, questa pagina funziona meglio di una lunga narrativa in homepage.', 'Para los visitantes que quieren detalles primero, esta ruta funciona mejor que una larga narrativa en la homepage.') },
    ],
  },
  changelog: {
    eyebrow: text('Product / Changelog', 'Produit / Changelog', 'Produto / Changelog', 'Prodotto / Changelog', 'Producto / Changelog'),
    title: text('See what is new and track our latest updates', 'Voyez les nouveautes et suivez nos dernieres mises a jour', 'Veja o que ha de novo e acompanhe as ultimas atualizacoes', 'Scopri cosa c e di nuovo e segui gli ultimi aggiornamenti', 'Mira lo nuevo y sigue nuestras ultimas actualizaciones'),
    description: text('A changelog page gives your product credibility by showing a visible history of improvements. It signals speed, consistency, and attention to iteration.', 'Une page changelog donne de la credibilite au produit en montrant un historique visible des ameliorations.', 'Uma pagina de changelog da credibilidade ao produto ao mostrar um historico visivel de melhorias.', 'Una pagina changelog da credibilita al prodotto mostrando uno storico visibile dei miglioramenti.', 'Una pagina de changelog da credibilidad al producto al mostrar un historial visible de mejoras.'),
    pillars: [
      { title: text('Visible progress', 'Progres visible', 'Progresso visivel', 'Progresso visibile', 'Progreso visible'), text: text('Use dated release notes, grouped by month or quarter, to make the platform feel active and improving.', 'Utilisez des notes de version datees, groupees par mois ou trimestre, pour montrer une plateforme active.', 'Use notas de versao datadas, agrupadas por mes ou trimestre, para mostrar uma plataforma ativa.', 'Usa note di rilascio datate, raggruppate per mese o trimestre, per mostrare una piattaforma attiva.', 'Usa notas de lanzamiento fechadas, agrupadas por mes o trimestre, para mostrar una plataforma activa.') },
      { title: text('Customer reassurance', 'Reassurance client', 'Confianca do cliente', 'Fiducia del cliente', 'Confianza del cliente'), text: text('Prospects and users can see that issues are fixed, features are added, and the platform is evolving.', 'Prospects et utilisateurs voient que les problemes sont corriges, que les fonctionnalites arrivent et que la plateforme evolue.', 'Prospects e usuarios veem que problemas sao corrigidos, recursos sao adicionados e a plataforma evolui.', 'Prospect e utenti vedono che i problemi vengono risolti, le funzionalita aggiunte e la piattaforma evolve.', 'Prospects y usuarios ven que los problemas se corrigen, se agregan funciones y la plataforma evoluciona.') },
      { title: text('Content engine', 'Moteur de contenu', 'Motor de conteudo', 'Motore di contenuto', 'Motor de contenido'), text: text('Changelogs also create reusable content you can link from emails, social posts, and account updates.', 'Les changelogs creent aussi du contenu reutilisable a relier depuis emails, posts sociaux et mises a jour compte.', 'Changelogs tambem criam conteudo reutilizavel para emails, posts sociais e atualizacoes de conta.', 'I changelog creano anche contenuti riutilizzabili da collegare da email, post social e aggiornamenti account.', 'Los changelogs tambien crean contenido reutilizable para emails, posts sociales y actualizaciones de cuenta.') },
    ],
  },
};

const useCasePages: Record<
  UseCasePageKey,
  {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    scenarios: LocalizedInfoItem[];
  }
> = {
  'category-productivity': {
    eyebrow: text('Use Cases / Category', 'Cas d usage / Categorie', 'Casos de uso / Categoria', 'Casi d uso / Categoria', 'Casos de uso / Categoria'),
    title: text('Productivity', 'Productivite', 'Produtividade', 'Produttivita', 'Productividad'),
    description: text('Show how teams can build internal tools, trackers, work hubs, and workflow dashboards faster with AI-guided app generation.', 'Montrez comment les equipes peuvent creer plus vite des outils internes, suivis et hubs de travail avec l IA.', 'Mostre como equipes podem criar mais rapido ferramentas internas, rastreadores e dashboards com IA.', 'Mostra come i team possono creare piu velocemente strumenti interni, tracker e dashboard con l AI.', 'Muestra como los equipos pueden crear mas rapido herramientas internas, rastreadores y dashboards con IA.'),
    scenarios: [
      { title: text('Task coordination', 'Coordination des taches', 'Coordenacao de tarefas', 'Coordinamento delle attivita', 'Coordinacion de tareas'), text: text('Build team hubs, follow-up systems, and operational dashboards that reduce busywork.', 'Creez des hubs equipe, systemes de suivi et dashboards operationnels qui reduisent les taches manuelles.', 'Crie hubs de equipe, sistemas de acompanhamento e dashboards operacionais que reduzem trabalho manual.', 'Crea hub di team, sistemi di follow-up e dashboard operative che riducono il lavoro manuale.', 'Crea hubs de equipo, sistemas de seguimiento y dashboards operativos que reduzcan trabajo manual.') },
      { title: text('Internal workflows', 'Workflows internes', 'Flux internos', 'Workflow interni', 'Flujos internos'), text: text('Generate forms, approvals, notifications, and status boards without heavy custom development.', 'Generez formulaires, validations, notifications et tableaux de statut sans lourd developpement sur mesure.', 'Gere formularios, aprovacoes, notificacoes e quadros de status sem desenvolvimento pesado.', 'Genera moduli, approvazioni, notifiche e board di stato senza sviluppo pesante.', 'Genera formularios, aprobaciones, notificaciones y tableros de estado sin desarrollo pesado.') },
      { title: text('Knowledge tools', 'Outils de connaissance', 'Ferramentas de conhecimento', 'Strumenti di conoscenza', 'Herramientas de conocimiento'), text: text('Create searchable internal apps that keep information organized and easy to act on.', 'Creez des apps internes consultables qui gardent l information organisee et exploitable.', 'Crie apps internas pesquisaveis que mantem a informacao organizada e acionavel.', 'Crea app interne consultabili che mantengono le informazioni organizzate e utili.', 'Crea apps internas consultables que mantengan la informacion organizada y facil de usar.') },
    ],
  },
  'category-education': {
    eyebrow: text('Use Cases / Category', 'Cas d usage / Categorie', 'Casos de uso / Categoria', 'Casi d uso / Categoria', 'Casos de uso / Categoria'),
    title: text('Education', 'Education', 'Educacao', 'Educazione', 'Educacion'),
    description: text('Position the platform for training portals, learning workflows, enrollment systems, and student-facing web apps.', 'Positionnez la plateforme pour portails de formation, workflows d apprentissage, inscriptions et apps pour etudiants.', 'Posicione a plataforma para portais de treinamento, fluxos de aprendizagem, matriculas e apps para estudantes.', 'Posiziona la piattaforma per portali di formazione, workflow di apprendimento, iscrizioni e app per studenti.', 'Posiciona la plataforma para portales de formacion, flujos de aprendizaje, matriculas y apps para estudiantes.'),
    scenarios: [
      { title: text('Learning portals', 'Portails d apprentissage', 'Portais de aprendizagem', 'Portali di apprendimento', 'Portales de aprendizaje'), text: text('Create course hubs, lesson dashboards, and guided student experiences.', 'Creez des hubs de cours, tableaux de lecons et experiences etudiantes guidees.', 'Crie hubs de cursos, dashboards de aulas e experiencias guiadas para estudantes.', 'Crea hub di corsi, dashboard di lezioni ed esperienze guidate per studenti.', 'Crea hubs de cursos, dashboards de lecciones y experiencias guiadas para estudiantes.') },
      { title: text('Admin operations', 'Operations administratives', 'Operacoes administrativas', 'Operazioni amministrative', 'Operaciones administrativas'), text: text('Support forms, approvals, event management, and staff coordination.', 'Prenez en charge formulaires, validations, gestion d evenements et coordination du personnel.', 'Suporte formularios, aprovacoes, gestao de eventos e coordenacao da equipe.', 'Supporta moduli, approvazioni, gestione eventi e coordinamento del personale.', 'Da soporte a formularios, aprobaciones, gestion de eventos y coordinacion del personal.') },
      { title: text('Content delivery', 'Diffusion de contenu', 'Entrega de conteudo', 'Distribuzione dei contenuti', 'Entrega de contenido'), text: text('Turn educational content into structured, interactive experiences with clearer navigation.', 'Transformez le contenu educatif en experiences structurees et interactives avec une navigation plus claire.', 'Transforme conteudo educacional em experiencias estruturadas e interativas com navegacao mais clara.', 'Trasforma i contenuti educativi in esperienze strutturate e interattive con navigazione piu chiara.', 'Convierte el contenido educativo en experiencias estructuradas e interactivas con navegacion mas clara.') },
    ],
  },
  'category-entertainment': {
    eyebrow: text('Use Cases / Category', 'Cas d usage / Categorie', 'Casos de uso / Categoria', 'Casi d uso / Categoria', 'Casos de uso / Categoria'),
    title: text('Entertainment', 'Divertissement', 'Entretenimento', 'Intrattenimento', 'Entretenimiento'),
    description: text('Use this route for fan experiences, content portals, creator tools, and interactive media products with stronger visual storytelling.', 'Utilisez cette page pour experiences fans, portails de contenu, outils createurs et produits medias interactifs.', 'Use esta rota para experiencias de fans, portais de conteudo, ferramentas para criadores e produtos de midia interativa.', 'Usa questa pagina per esperienze fan, portali di contenuti, strumenti creator e prodotti media interattivi.', 'Usa esta ruta para experiencias de fans, portales de contenido, herramientas para creadores y productos interactivos.'),
    scenarios: [
      { title: text('Fan engagement', 'Engagement des fans', 'Engajamento de fans', 'Coinvolgimento dei fan', 'Engagement de fans'), text: text('Build communities, voting tools, gated content experiences, and event-based app flows.', 'Creez communautes, outils de vote, experiences de contenu prive et flux lies aux evenements.', 'Crie comunidades, ferramentas de votacao, experiencias de conteudo restrito e fluxos de eventos.', 'Crea comunita, strumenti di voto, esperienze di contenuti riservati e flussi legati agli eventi.', 'Crea comunidades, herramientas de votacion, experiencias de contenido privado y flujos ligados a eventos.') },
      { title: text('Creator operations', 'Operations createurs', 'Operacoes de criadores', 'Operazioni creator', 'Operaciones de creadores'), text: text('Manage campaigns, publishing calendars, requests, and audience workflows.', 'Gerez campagnes, calendriers de publication, demandes et workflows audience.', 'Gerencie campanhas, calendarios de publicacao, pedidos e fluxos de audiencia.', 'Gestisci campagne, calendari editoriali, richieste e workflow del pubblico.', 'Gestiona campanas, calendarios de publicacion, solicitudes y flujos de audiencia.') },
      { title: text('Interactive products', 'Produits interactifs', 'Produtos interativos', 'Prodotti interattivi', 'Productos interactivos'), text: text('Prototype playful or media-rich experiences quickly while keeping the site premium.', 'Prototypez vite des experiences ludiques ou riches en medias tout en gardant une image premium.', 'Prototipe rapido experiencias ludicas ou ricas em midia mantendo o site premium.', 'Prototipa rapidamente esperienze ludiche o ricche di media mantenendo il sito premium.', 'Prototipa rapido experiencias ludicas o ricas en medios manteniendo el sitio premium.') },
    ],
  },
  'category-health-wellness': {
    eyebrow: text('Use Cases / Category', 'Cas d usage / Categorie', 'Casos de uso / Categoria', 'Casi d uso / Categoria', 'Casos de uso / Categoria'),
    title: text('Health & Wellness', 'Sante & Bien-etre', 'Saude & Bem-estar', 'Salute & Benessere', 'Salud & Bienestar'),
    description: text('Show how the platform can support client portals, booking tools, care coordination dashboards, and wellness program experiences.', 'Montrez comment la plateforme peut prendre en charge portails clients, reservation, coordination des soins et programmes bien-etre.', 'Mostre como a plataforma pode suportar portais de clientes, ferramentas de agendamento, dashboards de cuidado e programas de bem-estar.', 'Mostra come la piattaforma puo supportare portali clienti, prenotazioni, dashboard di coordinamento e programmi wellness.', 'Muestra como la plataforma puede soportar portales de clientes, herramientas de reservas, dashboards de coordinacion y programas de bienestar.'),
    scenarios: [
      { title: text('Client journeys', 'Parcours clients', 'Jornadas do cliente', 'Percorsi cliente', 'Recorridos del cliente'), text: text('Create guided intake, scheduling, follow-up, and communication flows for service providers.', 'Creez des parcours de prise en charge, planification, suivi et communication pour les prestataires.', 'Crie fluxos guiados de entrada, agendamento, acompanhamento e comunicacao para prestadores.', 'Crea flussi guidati di intake, prenotazione, follow-up e comunicazione per i provider.', 'Crea flujos guiados de ingreso, agendamiento, seguimiento y comunicacion para proveedores.') },
      { title: text('Program tracking', 'Suivi de programme', 'Acompanhamento de programa', 'Monitoraggio programma', 'Seguimiento de programa'), text: text('Support goals, check-ins, reminders, and progress visibility in one app experience.', 'Prenez en charge objectifs, bilans, rappels et suivi des progres dans une seule experience app.', 'Suporte metas, check-ins, lembretes e visibilidade de progresso em uma unica experiencia.', 'Supporta obiettivi, check-in, promemoria e visibilita dei progressi in una sola esperienza.', 'Da soporte a metas, check-ins, recordatorios y visibilidad del progreso en una sola experiencia.') },
      { title: text('Operational clarity', 'Clarite operationnelle', 'Clareza operacional', 'Chiarezza operativa', 'Claridad operativa'), text: text('Help teams manage appointments, records, and team workflows in a cleaner interface.', 'Aidez les equipes a gerer rendez-vous, dossiers et workflows dans une interface plus propre.', 'Ajude equipes a gerenciar agendamentos, registros e fluxos de trabalho em uma interface mais clara.', 'Aiuta i team a gestire appuntamenti, record e workflow in un interfaccia piu pulita.', 'Ayuda a los equipos a gestionar citas, registros y flujos de trabajo en una interfaz mas clara.') },
    ],
  },
  'category-ecommerce-retail': {
    eyebrow: text('Use Cases / Category', 'Cas d usage / Categorie', 'Casos de uso / Categoria', 'Casi d uso / Categoria', 'Casos de uso / Categoria'),
    title: text('E-commerce & Retail', 'E-commerce & Retail', 'E-commerce & Varejo', 'E-commerce & Retail', 'E-commerce & Retail'),
    description: text('Use this page for storefront support apps, inventory dashboards, ordering workflows, and customer service systems.', 'Utilisez cette page pour apps de support magasin, dashboards inventaire, workflows de commande et support client.', 'Use esta pagina para apps de suporte a loja, dashboards de estoque, fluxos de pedido e sistemas de atendimento.', 'Usa questa pagina per app di supporto storefront, dashboard inventario, workflow ordini e sistemi di assistenza clienti.', 'Usa esta pagina para apps de soporte de tienda, dashboards de inventario, flujos de pedidos y sistemas de atencion al cliente.'),
    scenarios: [
      { title: text('Inventory operations', 'Operations inventaire', 'Operacoes de estoque', 'Operazioni inventario', 'Operaciones de inventario'), text: text('Build internal stock, fulfillment, and supply-chain tracking tools faster.', 'Creez plus vite des outils internes pour stock, fulfillment et chaine logistique.', 'Crie mais rapido ferramentas internas para estoque, fulfillment e cadeia de suprimentos.', 'Crea piu velocemente strumenti interni per stock, fulfillment e supply chain.', 'Crea mas rapido herramientas internas para stock, fulfillment y cadena de suministro.') },
      { title: text('Customer experiences', 'Experiences client', 'Experiencias do cliente', 'Esperienze cliente', 'Experiencias del cliente'), text: text('Create portals, loyalty workflows, and branded order or support experiences.', 'Creez des portails, workflows de fidelite et experiences de commande ou support de marque.', 'Crie portais, fluxos de fidelidade e experiencias de pedidos ou suporte com marca.', 'Crea portali, workflow di loyalty ed esperienze di ordine o supporto brandizzate.', 'Crea portales, flujos de fidelizacion y experiencias de pedidos o soporte con marca.') },
      { title: text('Store management', 'Gestion magasin', 'Gestao da loja', 'Gestione del negozio', 'Gestion de tienda'), text: text('Prototype admin dashboards, performance views, and merchandising tools.', 'Prototypez des dashboards admin, vues de performance et outils merchandising.', 'Prototipe dashboards administrativos, visoes de desempenho e ferramentas de merchandising.', 'Prototipa dashboard admin, viste performance e strumenti di merchandising.', 'Prototipa dashboards administrativos, vistas de rendimiento y herramientas de merchandising.') },
    ],
  },
  'category-finance': {
    eyebrow: text('Use Cases / Category', 'Cas d usage / Categorie', 'Casos de uso / Categoria', 'Casi d uso / Categoria', 'Casos de uso / Categoria'),
    title: text('Finance', 'Finance', 'Financas', 'Finanza', 'Finanzas'),
    description: text('Position the platform for finance operations, internal dashboards, approvals, analysis workflows, and client-facing reporting tools.', 'Positionnez la plateforme pour operations finance, dashboards internes, validations, analyses et reporting client.', 'Posicione a plataforma para operacoes financeiras, dashboards internos, aprovacoes, analises e relatorios para clientes.', 'Posiziona la piattaforma per operazioni finance, dashboard interni, approvazioni, analisi e reportistica cliente.', 'Posiciona la plataforma para operaciones financieras, dashboards internos, aprobaciones, analisis y reportes para clientes.'),
    scenarios: [
      { title: text('Approval flows', 'Flux de validation', 'Fluxos de aprovacao', 'Flussi di approvazione', 'Flujos de aprobacion'), text: text('Create request, review, and escalation workflows with clear tracking and status visibility.', 'Creez des workflows de demande, revue et escalation avec suivi clair et visibilite de statut.', 'Crie fluxos de solicitacao, revisao e escalonamento com acompanhamento claro e visibilidade de status.', 'Crea workflow di richiesta, revisione ed escalation con tracciamento chiaro e visibilita dello stato.', 'Crea flujos de solicitud, revision y escalado con seguimiento claro y visibilidad del estado.') },
      { title: text('Reporting apps', 'Apps de reporting', 'Apps de relatorio', 'App di reporting', 'Apps de reportes'), text: text('Generate dashboards and client-facing portals that organize financial data clearly.', 'Generez des dashboards et portails clients qui organisent clairement les donnees financieres.', 'Gere dashboards e portais para clientes que organizam dados financeiros com clareza.', 'Genera dashboard e portali cliente che organizzano chiaramente i dati finanziari.', 'Genera dashboards y portales para clientes que organicen claramente los datos financieros.') },
      { title: text('Operational systems', 'Systemes operationnels', 'Sistemas operacionais', 'Sistemi operativi', 'Sistemas operativos'), text: text('Support internal finance teams with structured tools that reduce manual coordination.', 'Aidez les equipes finance internes avec des outils structures qui reduisent la coordination manuelle.', 'Apoie equipes financeiras internas com ferramentas estruturadas que reduzem coordenacao manual.', 'Supporta i team finance interni con strumenti strutturati che riducono il coordinamento manuale.', 'Apoya a los equipos financieros internos con herramientas estructuradas que reducen la coordinacion manual.') },
    ],
  },
  'role-product-management': {
    eyebrow: text('Use Cases / Roles', 'Cas d usage / Roles', 'Casos de uso / Funcoes', 'Casi d uso / Ruoli', 'Casos de uso / Roles'),
    title: text('Product Management', 'Gestion produit', 'Gestao de produto', 'Product Management', 'Gestion de producto'),
    description: text('Give PMs a page that speaks directly to roadmaps, feedback systems, prioritization, launch workflows, and internal product operations.', 'Donnez aux PM une page qui parle directement roadmaps, feedback, priorisation, lancements et operations produit.', 'Destaque para PMs uma pagina sobre roadmaps, feedback, priorizacao, lancamentos e operacoes de produto.', 'Dai ai PM una pagina dedicata a roadmap, feedback, prioritizzazione, lanci e operazioni di prodotto.', 'Da a los PM una pagina que hable directamente de roadmaps, feedback, priorizacion, lanzamientos y operaciones de producto.'),
    scenarios: [
      { title: text('Roadmap tools', 'Outils roadmap', 'Ferramentas de roadmap', 'Strumenti roadmap', 'Herramientas de roadmap'), text: text('Build internal planning apps, feature trackers, and prioritization systems around your team workflow.', 'Creez des apps de planification, suivis de features et systemes de priorisation adaptes a votre workflow.', 'Crie apps internas de planejamento, trackers de features e sistemas de priorizacao para o fluxo da equipe.', 'Crea app interne di pianificazione, tracker funzionalita e sistemi di prioritizzazione per il workflow del team.', 'Crea apps internas de planificacion, rastreadores de funcionalidades y sistemas de priorizacion para el flujo del equipo.') },
      { title: text('Feedback hubs', 'Hubs de feedback', 'Hubs de feedback', 'Hub di feedback', 'Hubs de feedback'), text: text('Organize intake, triage, themes, and release communication in a single place.', 'Organisez la collecte, le tri, les themes et la communication release en un seul endroit.', 'Organize entrada, triagem, temas e comunicacao de releases em um unico lugar.', 'Organizza intake, triage, temi e comunicazione delle release in un solo luogo.', 'Organiza la entrada, triage, temas y comunicacion de releases en un solo lugar.') },
      { title: text('Launch coordination', 'Coordination des lancements', 'Coordenacao de lancamento', 'Coordinamento dei lanci', 'Coordinacion de lanzamientos'), text: text('Connect cross-functional planning, approvals, and execution with stronger visibility.', 'Reliez planification transverse, validations et execution avec une meilleure visibilite.', 'Conecte planejamento multifuncional, aprovacoes e execucao com mais visibilidade.', 'Collega pianificazione cross-funzionale, approvazioni ed esecuzione con maggiore visibilita.', 'Conecta la planificacion multifuncional, aprobaciones y ejecucion con mayor visibilidad.') },
    ],
  },
  'role-operations': {
    eyebrow: text('Use Cases / Roles', 'Cas d usage / Roles', 'Casos de uso / Funcoes', 'Casi d uso / Ruoli', 'Casos de uso / Roles'),
    title: text('Operations', 'Operations', 'Operacoes', 'Operations', 'Operaciones'),
    description: text('Speak directly to operators building internal systems for scheduling, tracking, approvals, handoffs, and day-to-day workflow control.', 'Parlez directement aux operations qui construisent des systemes internes pour planification, suivi, validations et handoffs.', 'Fale diretamente com equipes de operacoes que constroem sistemas internos para agendamento, rastreamento e aprovacoes.', 'Parla direttamente ai team operations che costruiscono sistemi interni per scheduling, tracking e approvazioni.', 'Habla directamente con equipos de operaciones que construyen sistemas internos para programacion, seguimiento y aprobaciones.'),
    scenarios: [
      { title: text('Scheduling systems', 'Systemes de planification', 'Sistemas de agendamento', 'Sistemi di pianificazione', 'Sistemas de programacion'), text: text('Generate dispatching, assignment, and task-routing tools without long development cycles.', 'Generez des outils de dispatch, affectation et routage des taches sans cycles de dev trop longs.', 'Gere ferramentas de despacho, atribuicao e roteamento de tarefas sem ciclos longos de desenvolvimento.', 'Genera strumenti di dispatching, assegnazione e instradamento delle attivita senza lunghi cicli di sviluppo.', 'Genera herramientas de despacho, asignacion y enrutamiento de tareas sin ciclos largos de desarrollo.') },
      { title: text('Process visibility', 'Visibilite des processus', 'Visibilidade de processos', 'Visibilita dei processi', 'Visibilidad de procesos'), text: text('Create dashboards that reduce manual follow-up and make status easier to monitor.', 'Creez des dashboards qui reduisent le suivi manuel et rendent le statut plus lisible.', 'Crie dashboards que reduzem acompanhamento manual e deixam o status mais facil de monitorar.', 'Crea dashboard che riducono il follow-up manuale e rendono piu semplice monitorare lo stato.', 'Crea dashboards que reduzcan el seguimiento manual y hagan mas facil monitorear el estado.') },
      { title: text('Service workflows', 'Workflows de service', 'Fluxos de servico', 'Workflow di servizio', 'Flujos de servicio'), text: text('Support client operations, field teams, and back-office coordination with role-based app flows.', 'Prenez en charge operations client, equipes terrain et coordination back-office avec des flux par role.', 'Apoie operacoes com clientes, equipes de campo e coordenacao de backoffice com fluxos por funcao.', 'Supporta operazioni cliente, team sul campo e coordinamento back-office con flussi per ruolo.', 'Apoya operaciones con clientes, equipos de campo y coordinacion de back-office con flujos por rol.') },
    ],
  },
  'role-marketing-sales-automation': {
    eyebrow: text('Use Cases / Roles', 'Cas d usage / Roles', 'Casos de uso / Funcoes', 'Casi d uso / Ruoli', 'Casos de uso / Roles'),
    title: text('Marketing & Sales Automation', 'Marketing & Automatisation commerciale', 'Marketing & Automacao de vendas', 'Marketing & Automazione vendite', 'Marketing & Automatizacion de ventas'),
    description: text('Position the platform for campaign workflows, lead routing, CRM support apps, and automation-heavy growth systems.', 'Positionnez la plateforme pour workflows de campagne, routage de leads, apps CRM et systemes de croissance automatises.', 'Posicione a plataforma para fluxos de campanha, roteamento de leads, apps de CRM e sistemas de crescimento automatizados.', 'Posiziona la piattaforma per workflow di campagna, lead routing, app di supporto CRM e sistemi di crescita automatizzati.', 'Posiciona la plataforma para flujos de campana, enrutamiento de leads, apps de soporte CRM y sistemas de crecimiento automatizados.'),
    scenarios: [
      { title: text('Lead management', 'Gestion des leads', 'Gestao de leads', 'Gestione lead', 'Gestion de leads'), text: text('Create intake funnels, qualification views, assignment logic, and follow-up workflows.', 'Creez des funnels d entree, vues de qualification, logiques d attribution et workflows de suivi.', 'Crie funis de entrada, visoes de qualificacao, logica de atribuicao e fluxos de follow-up.', 'Crea funnel di intake, viste di qualificazione, logiche di assegnazione e workflow di follow-up.', 'Crea embudos de entrada, vistas de calificacion, logica de asignacion y flujos de seguimiento.') },
      { title: text('Campaign operations', 'Operations campagne', 'Operacoes de campanha', 'Operazioni di campagna', 'Operaciones de campana'), text: text('Build hubs for launch calendars, assets, requests, and performance snapshots.', 'Construisez des hubs pour calendriers de lancement, assets, demandes et apercus de performance.', 'Construa hubs para calendarios de lancamento, ativos, pedidos e visoes de desempenho.', 'Costruisci hub per calendari di lancio, asset, richieste e snapshot di performance.', 'Construye hubs para calendarios de lanzamiento, assets, solicitudes y vistas de rendimiento.') },
      { title: text('Automation layers', 'Couches d automatisation', 'Camadas de automacao', 'Livelli di automazione', 'Capas de automatizacion'), text: text('Show how AI agents and integrations reduce repetitive work across growth teams.', 'Montrez comment les agents IA et integrations reduisent le travail repetitif des equipes growth.', 'Mostre como agentes de IA e integracoes reduzem trabalho repetitivo nas equipes de crescimento.', 'Mostra come agenti AI e integrazioni riducono il lavoro ripetitivo nei team growth.', 'Muestra como los agentes de IA y las integraciones reducen el trabajo repetitivo en los equipos de crecimiento.') },
    ],
  },
  'role-hr-recruitment': {
    eyebrow: text('Use Cases / Roles', 'Cas d usage / Roles', 'Casos de uso / Funcoes', 'Casi d uso / Ruoli', 'Casos de uso / Roles'),
    title: text('HR & Recruitment', 'RH & Recrutement', 'RH & Recrutamento', 'HR & Recruiting', 'RRHH & Reclutamiento'),
    description: text('Use this page for hiring funnels, candidate pipelines, onboarding workflows, people operations tools, and internal HR systems.', 'Utilisez cette page pour funnels de recrutement, pipelines candidats, onboarding et systemes RH internes.', 'Use esta pagina para funis de contratacao, pipelines de candidatos, onboarding e sistemas internos de RH.', 'Usa questa pagina per funnel di assunzione, pipeline candidati, workflow di onboarding e sistemi HR interni.', 'Usa esta pagina para embudos de contratacion, pipelines de candidatos, onboarding y sistemas internos de RRHH.'),
    scenarios: [
      { title: text('Hiring workflows', 'Workflows de recrutement', 'Fluxos de contratacao', 'Workflow di assunzione', 'Flujos de contratacion'), text: text('Build recruiting pipelines, interview trackers, approvals, and offer coordination tools.', 'Creez des pipelines de recrutement, suivis d entretien, validations et coordination des offres.', 'Crie pipelines de recrutamento, rastreadores de entrevistas, aprovacoes e coordenacao de propostas.', 'Crea pipeline di recruiting, tracker colloqui, approvazioni e coordinamento offerte.', 'Crea pipelines de reclutamiento, rastreadores de entrevistas, aprobaciones y coordinacion de ofertas.') },
      { title: text('Onboarding systems', 'Systemes d onboarding', 'Sistemas de onboarding', 'Sistemi di onboarding', 'Sistemas de onboarding'), text: text('Create branded, structured employee onboarding experiences with less manual setup.', 'Creez des experiences d onboarding employe structurees et marquees avec moins de configuration manuelle.', 'Crie experiencias de onboarding estruturadas e com marca com menos configuracao manual.', 'Crea esperienze di onboarding dipendenti strutturate e brandizzate con meno setup manuale.', 'Crea experiencias de onboarding de empleados estructuradas y con marca con menos configuracion manual.') },
      { title: text('People operations', 'Operations RH', 'Operacoes de pessoas', 'People operations', 'Operaciones de personas'), text: text('Support requests, records, and recurring HR processes through purpose-built internal apps.', 'Prenez en charge demandes, dossiers et processus RH recurrents via des apps internes dediees.', 'Apoie solicitacoes, registros e processos recorrentes de RH por meio de apps internas dedicadas.', 'Supporta richieste, record e processi HR ricorrenti tramite app interne dedicate.', 'Apoya solicitudes, registros y procesos recurrentes de RRHH mediante apps internas dedicadas.') },
    ],
  },
  'role-dev-productivity': {
    eyebrow: text('Use Cases / Roles', 'Cas d usage / Roles', 'Casos de uso / Funcoes', 'Casi d uso / Ruoli', 'Casos de uso / Roles'),
    title: text('Dev Productivity', 'Productivite dev', 'Produtividade dev', 'Produttivita dev', 'Productividad dev'),
    description: text('Target engineering teams that want portals, workflow tools, release helpers, internal dashboards, and operational utilities built quickly.', 'Ciblez les equipes engineering qui veulent des portails, outils de workflow, assistants release et dashboards internes rapides.', 'Foque em equipes de engenharia que querem portais, ferramentas de fluxo, utilitarios de release e dashboards internos rapidamente.', 'Rivolgiti ai team engineering che vogliono portali, strumenti workflow, helper di release e dashboard interni costruiti in fretta.', 'Apunta a equipos de ingenieria que quieren portales, herramientas de flujo, asistentes de release y dashboards internos rapidamente.'),
    scenarios: [
      { title: text('Internal developer tools', 'Outils dev internes', 'Ferramentas internas para devs', 'Strumenti developer interni', 'Herramientas internas para devs'), text: text('Create request forms, status dashboards, release checklists, and support utilities.', 'Creez formulaires de demande, dashboards de statut, checklists release et utilitaires de support.', 'Crie formularios de solicitacao, dashboards de status, checklists de release e utilitarios de suporte.', 'Crea moduli di richiesta, dashboard di stato, checklist release e utility di supporto.', 'Crea formularios de solicitud, dashboards de estado, checklists de release y utilidades de soporte.') },
      { title: text('Faster prototyping', 'Prototypage plus rapide', 'Prototipagem mais rapida', 'Prototipazione piu rapida', 'Prototipado mas rapido'), text: text('Use prompts to spin up functional app shells before investing in custom implementation.', 'Utilisez des prompts pour lancer des bases fonctionnelles avant un dev sur mesure.', 'Use prompts para levantar bases funcionais antes de investir em implementacao sob medida.', 'Usa prompt per avviare basi funzionali prima di investire in implementazioni custom.', 'Usa prompts para levantar bases funcionales antes de invertir en implementacion a medida.') },
      { title: text('Ops visibility', 'Visibilite ops', 'Visibilidade operacional', 'Visibilita ops', 'Visibilidad operativa'), text: text('Support engineering teams with clearer interfaces for handoffs, reviews, and internal reporting.', 'Aidez les equipes engineering avec des interfaces plus claires pour handoffs, revues et reporting interne.', 'Apoie equipes de engenharia com interfaces mais claras para handoffs, revisoes e relatorios internos.', 'Supporta i team engineering con interfacce piu chiare per handoff, review e reporting interno.', 'Apoya a los equipos de ingenieria con interfaces mas claras para handoffs, revisiones y reportes internos.') },
    ],
  },
  'role-business-intelligence-analytics': {
    eyebrow: text('Use Cases / Roles', 'Cas d usage / Roles', 'Casos de uso / Funcoes', 'Casi d uso / Ruoli', 'Casos de uso / Roles'),
    title: text('Business Intelligence & Analytics', 'Business Intelligence & Analytics', 'Business Intelligence & Analytics', 'Business Intelligence & Analytics', 'Business Intelligence & Analytics'),
    description: text('Use this route for reporting portals, KPI dashboards, operational analytics tools, and executive data experiences.', 'Utilisez cette page pour portails reporting, dashboards KPI, outils analytiques operationnels et experiences data executives.', 'Use esta rota para portais de relatorio, dashboards de KPI, ferramentas de analise operacional e experiencias executivas de dados.', 'Usa questa pagina per portali di reporting, dashboard KPI, strumenti di analytics operativi ed esperienze dati executive.', 'Usa esta ruta para portales de reportes, dashboards de KPI, herramientas de analitica operativa y experiencias ejecutivas de datos.'),
    scenarios: [
      { title: text('Executive dashboards', 'Dashboards executives', 'Dashboards executivos', 'Dashboard executive', 'Dashboards ejecutivos'), text: text('Build high-level reporting apps that package key metrics in a cleaner experience.', 'Creez des apps de reporting executive qui presentent les KPIs dans une experience plus claire.', 'Crie apps executivas de relatorio que organizam metricas-chave em uma experiencia mais limpa.', 'Crea app di reporting executive che presentano le metriche chiave in un esperienza piu chiara.', 'Crea apps ejecutivas de reportes que presenten metricas clave en una experiencia mas clara.') },
      { title: text('Operational analysis', 'Analyse operationnelle', 'Analise operacional', 'Analisi operativa', 'Analisis operativo'), text: text('Create internal analytics products for teams that need visibility across systems and workflows.', 'Creez des produits analytiques internes pour les equipes qui ont besoin de visibilite sur les systemes et workflows.', 'Crie produtos analiticos internos para equipes que precisam de visibilidade entre sistemas e fluxos.', 'Crea prodotti analytics interni per team che hanno bisogno di visibilita tra sistemi e workflow.', 'Crea productos analiticos internos para equipos que necesitan visibilidad entre sistemas y flujos.') },
      { title: text('Self-serve insights', 'Insights en self-service', 'Insights self-service', 'Insight self-service', 'Insights self-service'), text: text('Support role-based reporting tools that turn raw data into easier decisions.', 'Prenez en charge des outils de reporting par role qui transforment les donnees brutes en decisions plus simples.', 'Apoie ferramentas de relatorio por funcao que transformam dados brutos em decisoes mais faceis.', 'Supporta strumenti di reporting per ruolo che trasformano dati grezzi in decisioni piu semplici.', 'Apoya herramientas de reportes por rol que convierten datos en decisiones mas faciles.') },
    ],
  },
};

const pricingPlanNames = ['Elite', 'Pro', 'Builder', 'Starter', 'Free'] as const;

export function getHeaderCopy(language: Language) {
  return {
    brand: 'Strapas',
    productLabel: pick(language, text('Product', 'Produit', 'Produto', 'Prodotto', 'Producto')),
    useCasesLabel: pick(language, text('Use Cases', 'Cas d usage', 'Casos de uso', 'Casi d uso', 'Casos de uso')),
    nav: {
      features: pick(language, text('Features', 'Fonctionnalites', 'Recursos', 'Funzionalita', 'Funciones')),
      examples: pick(language, text('Examples', 'Exemples', 'Exemplos', 'Esempi', 'Ejemplos')),
      howItWorks: pick(language, text('How it works', 'Comment ca marche', 'Como funciona', 'Come funziona', 'Como funciona')),
      about: pick(language, text('About Us', 'A propos', 'Sobre nos', 'Chi siamo', 'Sobre nosotros')),
    },
    productLinks: [
      { href: '/product/backend-platform', label: pick(language, productPages['backend-platform'].title), desc: pick(language, productPages['backend-platform'].description) },
      { href: '/product/templates-marketplace', label: pick(language, productPages['templates-marketplace'].title), desc: pick(language, productPages['templates-marketplace'].description) },
      { href: '/product/integrations', label: pick(language, productPages.integrations.title), desc: pick(language, productPages.integrations.description) },
      { href: '/product/roadmap', label: pick(language, productPages.roadmap.title), desc: pick(language, productPages.roadmap.description) },
      { href: '/product/features', label: pick(language, productPages.features.title), desc: pick(language, productPages.features.description) },
      { href: '/product/changelog', label: pick(language, productPages.changelog.title), desc: pick(language, productPages.changelog.description) },
    ],
    useCaseColumns: [
      {
        title: pick(language, text('Category', 'Categorie', 'Categoria', 'Categoria', 'Categoria')),
        items: [
          ['/use-cases/category/productivity', pick(language, useCasePages['category-productivity'].title)],
          ['/use-cases/category/education', pick(language, useCasePages['category-education'].title)],
          ['/use-cases/category/entertainment', pick(language, useCasePages['category-entertainment'].title)],
          ['/use-cases/category/health-wellness', pick(language, useCasePages['category-health-wellness'].title)],
          ['/use-cases/category/ecommerce-retail', pick(language, useCasePages['category-ecommerce-retail'].title)],
          ['/use-cases/category/finance', pick(language, useCasePages['category-finance'].title)],
        ],
      },
      {
        title: pick(language, text('Roles', 'Roles', 'Funcoes', 'Ruoli', 'Roles')),
        items: [
          ['/use-cases/roles/product-management', pick(language, useCasePages['role-product-management'].title)],
          ['/use-cases/roles/operations', pick(language, useCasePages['role-operations'].title)],
          ['/use-cases/roles/marketing-sales-automation', pick(language, useCasePages['role-marketing-sales-automation'].title)],
          ['/use-cases/roles/hr-recruitment', pick(language, useCasePages['role-hr-recruitment'].title)],
          ['/use-cases/roles/dev-productivity', pick(language, useCasePages['role-dev-productivity'].title)],
          ['/use-cases/roles/business-intelligence-analytics', pick(language, useCasePages['role-business-intelligence-analytics'].title)],
        ],
      },
    ],
    ctas: {
      viewPricing: pick(language, text('View pricing', 'Voir les tarifs', 'Ver precos', 'Vedi prezzi', 'Ver precios')),
      startBuilding: pick(language, text('Start building', 'Commencer', 'Comecar', 'Inizia a costruire', 'Empezar a construir')),
    },
    languageMenu: {
      buttonLabel: pick(language, text('Choose language', 'Choisir la langue', 'Escolher idioma', 'Scegli lingua', 'Elegir idioma')),
      mobileLabel: pick(language, text('Language', 'Langue', 'Idioma', 'Lingua', 'Idioma')),
      openMenu: pick(language, text('Open menu', 'Ouvrir le menu', 'Abrir menu', 'Apri menu', 'Abrir menu')),
    },
  };
}

export function getFooterCopy(language: Language) {
  return {
    brand: 'Strapas',
    description: pick(language, text('A premium front-end starter for an AI app builder platform with route-based navigation, richer product pages, and expanded use-case content.', 'Un starter front-end premium pour une plateforme de creation d apps IA avec navigation par routes et pages produit plus riches.', 'Um starter front-end premium para uma plataforma de criacao de apps com IA, navegacao por rotas e paginas mais ricas.', 'Uno starter front-end premium per una piattaforma di creazione app AI con navigazione per route e pagine piu ricche.', 'Un starter front-end premium para una plataforma de creacion de apps con IA, navegacion por rutas y paginas mas ricas.')),
    sections: {
      product: pick(language, text('Product', 'Produit', 'Produto', 'Prodotto', 'Producto')),
      useCases: pick(language, text('Use Cases', 'Cas d usage', 'Casos de uso', 'Casi d uso', 'Casos de uso')),
      company: pick(language, text('Company', 'Entreprise', 'Empresa', 'Azienda', 'Empresa')),
    },
    companyLinks: {
      about: pick(language, text('About Us', 'A propos', 'Sobre nos', 'Chi siamo', 'Sobre nosotros')),
      pricing: pick(language, text('Pricing', 'Tarifs', 'Precos', 'Prezzi', 'Precios')),
      examples: pick(language, text('Examples', 'Exemples', 'Exemplos', 'Esempi', 'Ejemplos')),
    },
  };
}

export function getHomeCopy(language: Language) {
  return {
    eyebrow: pick(language, text('AI-first product builder', 'Createur de produits IA-first', 'Construtor de produtos AI-first', 'Product builder AI-first', 'Constructor de productos AI-first')),
    title: pick(language, text('Turn plain-English ideas into polished products.', 'Transformez des idees en langage naturel en produits aboutis.', 'Transforme ideias em linguagem natural em produtos refinados.', 'Trasforma idee in linguaggio naturale in prodotti rifiniti.', 'Convierte ideas en lenguaje natural en productos pulidos.')),
    description: pick(language, text('Strapas helps founders, teams, and operators go from prompt to production-ready UI with reusable components, strong visual hierarchy, and a workflow built for rapid iteration.', 'Strapas aide fondateurs, equipes et operators a passer du prompt a une UI prete pour la production avec des composants reutilisables.', 'Strapas ajuda fundadores, equipes e operadores a sair do prompt para uma UI pronta para producao com componentes reutilizaveis.', 'Strapas aiuta founder, team e operatori a passare dal prompt a una UI pronta per la produzione con componenti riutilizzabili.', 'Strapas ayuda a founders, equipos y operadores a pasar del prompt a una UI lista para produccion con componentes reutilizables.')),
    liveBuildFlow: pick(language, text('Live build flow', 'Flux de build en direct', 'Fluxo de build ao vivo', 'Flusso di build live', 'Flujo de build en vivo')),
    launchTitle: pick(language, text('Launch faster with a product shell that already feels real.', 'Lancez plus vite avec une base produit qui semble deja reelle.', 'Lance mais rapido com uma base de produto que ja parece real.', 'Lancia piu velocemente con una base prodotto che sembra gia reale.', 'Lanza mas rapido con una base de producto que ya se siente real.')),
    launchDescription: pick(language, text('Use a premium interface, route-based pages, strong information hierarchy, and reusable product patterns to move from idea to polished experience without starting from scratch.', 'Utilisez une interface premium, des pages par routes et des patterns reutilisables pour passer d une idee a une experience finie.', 'Use uma interface premium, paginas por rota e padroes reutilizaveis para ir da ideia a uma experiencia refinada.', 'Usa un interfaccia premium, pagine per route e pattern riutilizzabili per passare dall idea a un esperienza rifinita.', 'Usa una interfaz premium, paginas por rutas y patrones reutilizables para pasar de la idea a una experiencia pulida.')),
    ctas: {
      startBuilding: pick(language, text('Start building', 'Commencer', 'Comecar', 'Inizia a costruire', 'Empezar a construir')),
      exploreExamples: pick(language, text('Explore examples', 'Explorer les exemples', 'Explorar exemplos', 'Esplora esempi', 'Explorar ejemplos')),
    },
    featureBullets: [
      pick(language, text('No-code workflows', 'Workflows no-code', 'Fluxos no-code', 'Workflow no-code', 'Flujos no-code')),
      pick(language, text('Full code export', 'Export complet du code', 'Exportacao completa de codigo', 'Export completo del codice', 'Exportacion completa de codigo')),
      pick(language, text('Responsive by default', 'Responsive par defaut', 'Responsivo por padrao', 'Responsive di default', 'Responsive por defecto')),
    ],
    promptWorkspace: pick(language, text('Prompt workspace', 'Espace prompt', 'Workspace de prompt', 'Workspace prompt', 'Espacio de prompt')),
    internalToolMinutes: pick(language, text('Create an internal tool in minutes', 'Creez un outil interne en quelques minutes', 'Crie uma ferramenta interna em minutos', 'Crea uno strumento interno in pochi minuti', 'Crea una herramienta interna en minutos')),
    livePreview: pick(language, text('Live preview', 'Apercu live', 'Preview ao vivo', 'Anteprima live', 'Vista previa en vivo')),
    prompts: [
      pick(language, text('Build a customer portal with login, billing and analytics.', 'Creez un portail client avec connexion, facturation et analytics.', 'Crie um portal de clientes com login, cobranca e analytics.', 'Crea un portale clienti con login, billing e analytics.', 'Crea un portal de clientes con login, facturacion y analytics.')),
      pick(language, text('Generate a field service dashboard with jobs, routes and invoices.', 'Generez un dashboard terrain avec interventions, routes et factures.', 'Gere um dashboard de servicos de campo com tarefas, rotas e faturas.', 'Genera una dashboard field service con attivita, rotte e fatture.', 'Genera un dashboard de servicio en campo con trabajos, rutas y facturas.')),
      pick(language, text('Create a back-office CRM with roles, approvals and automations.', 'Creez un CRM back-office avec roles, validations et automatisations.', 'Crie um CRM de backoffice com funcoes, aprovacoes e automacoes.', 'Crea un CRM back-office con ruoli, approvazioni e automazioni.', 'Crea un CRM de back-office con roles, aprobaciones y automatizaciones.')),
    ],
    promptLabel: pick(language, text('Prompt', 'Prompt', 'Prompt', 'Prompt', 'Prompt')),
    generatedScreens: pick(language, text('Generated screens', 'Ecrans generes', 'Telas geradas', 'Schermate generate', 'Pantallas generadas')),
    generatedScreensDescription: pick(language, text('Dashboard, auth, billing, settings, analytics and more', 'Dashboard, auth, billing, reglages, analytics et plus', 'Dashboard, auth, billing, configuracoes, analytics e mais', 'Dashboard, auth, billing, impostazioni, analytics e altro', 'Dashboard, auth, billing, configuraciones, analytics y mas')),
    deployReadiness: pick(language, text('Deploy readiness', 'Preparation au deploy', 'Prontidao para deploy', 'Prontezza al deploy', 'Preparacion para despliegue')),
    deployReadinessDescription: pick(language, text('Accessible, responsive, and structured for handoff', 'Accessible, responsive et structure pour le handoff', 'Acessivel, responsivo e estruturado para handoff', 'Accessibile, responsive e strutturato per handoff', 'Accesible, responsive y estructurado para handoff')),
  };
}

export function getAboutCopy(language: Language) {
  return {
    hero: {
      eyebrow: pick(language, text('About us', 'A propos', 'Sobre nos', 'Chi siamo', 'Sobre nosotros')),
      title: pick(language, text('We build the front door to AI-powered product creation.', 'Nous construisons la porte d entree de la creation produit assistee par IA.', 'Construimos a porta de entrada para a criacao de produtos com IA.', 'Costruiamo la porta d ingresso alla creazione di prodotti con IA.', 'Construimos la puerta de entrada a la creacion de productos con IA.')),
      description: pick(language, text('Strapas is designed for founders, operators, and product teams who want to go from idea to polished software with speed, clarity, and a premium product experience.', 'Strapas est concu pour les fondateurs, operators et equipes produit qui veulent passer vite de l idee a un logiciel abouti.', 'Strapas foi criado para fundadores, operadores e equipes de produto que querem ir da ideia ao software refinado com rapidez.', 'Strapas e pensato per founder, operatori e team di prodotto che vogliono passare dall idea al software rifinito con velocita.', 'Strapas esta disenado para founders, operadores y equipos de producto que quieren pasar de la idea al software pulido con rapidez.')),
    },
    missionEyebrow: pick(language, text('Our mission', 'Notre mission', 'Nossa missao', 'La nostra missione', 'Nuestra mision')),
    missionTitle: pick(language, text('Make product building feel as intuitive as describing what you want.', 'Rendre la creation produit aussi intuitive que decrire ce que vous voulez.', 'Fazer a construcao de produto parecer tao intuitiva quanto descrever o que voce quer.', 'Rendere la costruzione di prodotto intuitiva quanto descrivere cio che vuoi.', 'Hacer que construir producto se sienta tan intuitivo como describir lo que quieres.')),
    missionParagraphs: [
      pick(language, text('Too many teams have ideas they can describe clearly, but they still get slowed down by fragmented tooling, weak prototypes, and disconnected handoffs between design, engineering, and operations.', 'Trop d equipes savent decrire clairement leurs idees, mais restent freinees par des outils fragmentes, des prototypes faibles et des handoffs deconnectes.', 'Muitas equipes sabem descrever suas ideias, mas ainda sao travadas por ferramentas fragmentadas, prototipos fracos e handoffs desconectados.', 'Troppi team sanno descrivere bene le idee, ma vengono rallentati da strumenti frammentati, prototipi deboli e handoff scollegati.', 'Demasiados equipos saben describir sus ideas, pero siguen frenados por herramientas fragmentadas, prototipos debiles y handoffs desconectados.')),
      pick(language, text('Strapas brings those layers together into one experience: a premium front end, scalable product structure, reusable patterns, and navigation that feels like a real software company from day one.', 'Strapas rassemble ces couches en une seule experience : front end premium, structure scalable, patterns reutilisables et navigation credible.', 'Strapas une essas camadas em uma unica experiencia: front-end premium, estrutura escalavel, padroes reutilizaveis e navegacao convincente.', 'Strapas unisce questi livelli in un unica esperienza: front end premium, struttura scalabile, pattern riutilizzabili e navigazione credibile.', 'Strapas une esas capas en una sola experiencia: front end premium, estructura escalable, patrones reutilizables y navegacion creible.')),
      pick(language, text('Our goal is simple: help businesses launch better internal tools, portals, dashboards, and customer-facing apps without starting from a blank page.', 'Notre objectif est simple : aider les entreprises a lancer de meilleurs outils internes, portails, dashboards et apps clients sans partir d une page blanche.', 'Nosso objetivo e simples: ajudar empresas a lancar melhores ferramentas internas, portais, dashboards e apps sem comecar do zero.', 'Il nostro obiettivo e semplice: aiutare le aziende a lanciare migliori strumenti interni, portali, dashboard e app senza partire da zero.', 'Nuestro objetivo es simple: ayudar a las empresas a lanzar mejores herramientas internas, portales, dashboards y apps sin empezar desde cero.')),
    ],
    atAGlance: pick(language, text('At a glance', 'En bref', 'Em resumo', 'In breve', 'En resumen')),
    stats: [
      ['10x', pick(language, text('faster idea-to-interface cycles', 'cycles idee-interface plus rapides', 'ciclos ideia-interface mais rapidos', 'cicli idea-interfaccia piu rapidi', 'ciclos idea-interfaz mas rapidos'))],
      ['24/7', pick(language, text('AI-assisted building workflows', 'workflows de creation assistes par IA', 'fluxos de construcao assistidos por IA', 'workflow di build assistiti da IA', 'flujos de construccion asistidos por IA'))],
      ['50+', pick(language, text('reusable patterns across product surfaces', 'patterns reutilisables sur les surfaces produit', 'padroes reutilizaveis em superficies do produto', 'pattern riutilizzabili sulle superfici prodotto', 'patrones reutilizables en superficies del producto'))],
      ['1', pick(language, text('shared system for web app creation', 'systeme partage pour creer des web apps', 'sistema compartilhado para criar web apps', 'sistema condiviso per creare web app', 'sistema compartido para crear web apps'))],
    ],
    valuesEyebrow: pick(language, text('What we value', 'Ce que nous valorisons', 'O que valorizamos', 'Cio che valorizziamo', 'Lo que valoramos')),
    valuesTitle: pick(language, text('A more thoughtful way to ship software.', 'Une maniere plus reflechie de livrer du logiciel.', 'Uma forma mais cuidadosa de entregar software.', 'Un modo piu attento di rilasciare software.', 'Una forma mas cuidadosa de entregar software.')),
    valuesDescription: pick(language, text('We care about product quality, clean structure, and giving teams a system they can grow into instead of out of.', 'Nous privilegions la qualite produit, une structure claire et un systeme dans lequel les equipes peuvent grandir.', 'Valorizamos qualidade de produto, estrutura limpa e um sistema no qual equipes possam crescer.', 'Ci interessano qualita del prodotto, struttura pulita e un sistema in cui i team possano crescere.', 'Nos importa la calidad del producto, una estructura limpia y un sistema en el que los equipos puedan crecer.')),
    values: [
      { title: pick(language, text('Clarity over clutter', 'La clarte avant le bruit', 'Clareza acima do excesso', 'Chiarezza prima del rumore', 'Claridad sobre el ruido')), text: pick(language, text('We design product-building tools that feel simple on day one and powerful as teams scale.', 'Nous concevons des outils de creation produit simples au debut et puissants a mesure que les equipes grandissent.', 'Criamos ferramentas de produto simples no primeiro dia e poderosas quando as equipes crescem.', 'Progettiamo strumenti di prodotto semplici all inizio e potenti man mano che il team cresce.', 'Disenamos herramientas de producto simples desde el primer dia y poderosas cuando los equipos crecen.')) },
      { title: pick(language, text('Built for real workflows', 'Pense pour de vrais workflows', 'Feito para fluxos reais', 'Pensato per workflow reali', 'Hecho para flujos reales')), text: pick(language, text('From landing pages to full internal tools, our platform is shaped around practical business apps.', 'Des landing pages aux outils internes complets, la plateforme est pensee pour des apps business concretes.', 'De landing pages a ferramentas internas completas, a plataforma e pensada para apps praticas de negocio.', 'Dalle landing page agli strumenti interni completi, la piattaforma e pensata per app di business reali.', 'Desde landing pages hasta herramientas internas completas, la plataforma esta pensada para apps practicas de negocio.')) },
      { title: pick(language, text('Production-minded', 'Oriente production', 'Pensado para producao', 'Orientato alla produzione', 'Pensado para produccion')), text: pick(language, text('Every screen, component, and backend pattern is designed to feel launch-ready instead of demo-only.', 'Chaque ecran, composant et pattern backend est concu pour sembler pret au lancement plutot qu a une simple demo.', 'Cada tela, componente e padrao backend e desenhado para parecer pronto para lancamento, nao apenas para demo.', 'Ogni schermata, componente e pattern backend e pensato per sembrare pronto al lancio e non solo da demo.', 'Cada pantalla, componente y patron backend esta pensado para sentirse listo para lanzar y no solo para una demo.')) },
      { title: pick(language, text('Move faster', 'Aller plus vite', 'Mover mais rapido', 'Muoversi piu velocemente', 'Moverse mas rapido')), text: pick(language, text('We help teams turn rough ideas into polished products with less friction, fewer handoffs, and faster iteration.', 'Nous aidons les equipes a transformer des idees brutes en produits finis avec moins de friction et plus de vitesse.', 'Ajudamos equipes a transformar ideias brutas em produtos refinados com menos friccao e iteracao mais rapida.', 'Aiutiamo i team a trasformare idee grezze in prodotti rifiniti con meno attrito e iterazione piu rapida.', 'Ayudamos a los equipos a convertir ideas crudas en productos pulidos con menos friccion e iteracion mas rapida.')) },
    ],
    audienceEyebrow: pick(language, text('Who it is for', 'Pour qui', 'Para quem e', 'Per chi e', 'Para quien es')),
    audienceTitle: pick(language, text('Designed for teams that need momentum.', 'Concu pour les equipes qui ont besoin d elan.', 'Feito para equipes que precisam de ritmo.', 'Pensato per team che hanno bisogno di slancio.', 'Disenado para equipos que necesitan impulso.')),
    audienceDescription: pick(language, text('Whether you are shaping a client portal, operations dashboard, field-service workflow, or AI-powered product, Strapas helps you start with a premium foundation instead of a rough mockup.', 'Que vous prepariez un portail client, un dashboard ops ou un produit IA, Strapas vous donne une base premium au lieu d une maquette brute.', 'Seja para um portal de clientes, dashboard operacional ou produto com IA, Strapas ajuda voce a comecar com uma base premium.', 'Che tu stia creando un portale clienti, una dashboard ops o un prodotto con IA, Strapas ti aiuta a partire da una base premium.', 'Ya sea un portal de clientes, un dashboard operativo o un producto con IA, Strapas te ayuda a empezar con una base premium.')),
    audienceBullets: [
      pick(language, text('Founders validating a new idea', 'Fondateurs qui valident une nouvelle idee', 'Fundadores validando uma nova ideia', 'Founder che validano una nuova idea', 'Founders validando una nueva idea')),
      pick(language, text('Operations teams building internal tools', 'Equipes operations qui creent des outils internes', 'Equipes de operacoes criando ferramentas internas', 'Team operations che costruiscono strumenti interni', 'Equipos de operaciones creando herramientas internas')),
      pick(language, text('Agencies shipping polished client portals', 'Agences qui livrent des portails clients soignes', 'Agencias entregando portais de clientes refinados', 'Agenzie che consegnano portali clienti curati', 'Agencias entregando portales de clientes pulidos')),
      pick(language, text('Product teams creating scalable SaaS experiences', 'Equipes produit qui creent des experiences SaaS scalables', 'Equipes de produto criando experiencias SaaS escalaveis', 'Team prodotto che creano esperienze SaaS scalabili', 'Equipos de producto creando experiencias SaaS escalables')),
    ],
    ctaEyebrow: pick(language, text('Let us build', 'Construisons', 'Vamos construir', 'Costruiamo', 'Construyamos')),
    ctaTitle: pick(language, text('Ready to turn your product vision into something real?', 'Pret a transformer votre vision produit en quelque chose de reel ?', 'Pronto para transformar sua visao de produto em algo real?', 'Pronto a trasformare la tua visione prodotto in qualcosa di reale?', 'Listo para convertir tu vision de producto en algo real?')),
    ctaDescription: pick(language, text('Explore the platform, browse product pages, and shape a faster path from concept to polished release.', 'Explorez la plateforme, parcourez les pages produit et dessinez un chemin plus rapide du concept au lancement.', 'Explore a plataforma, veja as paginas de produto e construa um caminho mais rapido do conceito ao lancamento.', 'Esplora la piattaforma, visita le pagine prodotto e costruisci un percorso piu rapido dal concept al rilascio.', 'Explora la plataforma, revisa las paginas de producto y crea un camino mas rapido del concepto al lanzamiento.')),
    ctas: {
      exploreFeatures: pick(language, text('Explore features', 'Explorer les fonctionnalites', 'Explorar recursos', 'Esplora funzionalita', 'Explorar funcionalidades')),
      viewPricing: pick(language, text('View pricing', 'Voir les tarifs', 'Ver precos', 'Vedi prezzi', 'Ver precios')),
    },
  };
}

export function getExamplesCopy(language: Language) {
  return {
    title: pick(language, text('Examples', 'Exemples', 'Exemplos', 'Esempi', 'Ejemplos')),
    description: pick(language, text('Browse polished examples for portals, CRMs, dashboards, service-business tools, and internal operations apps.', 'Parcourez des exemples soignes pour portails, CRM, dashboards, outils de service et apps operations.', 'Explore exemplos refinados de portais, CRMs, dashboards, ferramentas de servico e apps operacionais.', 'Sfoglia esempi curati di portali, CRM, dashboard, strumenti di servizio e app operative.', 'Explora ejemplos pulidos de portales, CRMs, dashboards, herramientas de servicio y apps operativas.')),
  };
}

export function getHowItWorksCopy(language: Language) {
  return {
    eyebrow: pick(language, text('How it works', 'Comment ca marche', 'Como funciona', 'Come funziona', 'Como funciona')),
    title: pick(language, text('Build complete software from one request', 'Construisez un logiciel complet a partir d une seule demande', 'Construa software completo a partir de um unico pedido', 'Crea software completo da una sola richiesta', 'Crea software completo a partir de una sola solicitud')),
    description: pick(
      language,
      text(
        'Our platform lets you describe the software you want in plain language, then turns that request into a structured product that can generate web apps, mobile apps, admin systems, backend services, databases, and smartwatch experiences from the same core specification.',
        'Notre plateforme vous permet de decrire le logiciel souhaite en langage simple, puis transforme cette demande en un produit structure capable de generer des applications web, mobiles, des systemes d administration, des services backend, des bases de donnees et des experiences smartwatch a partir de la meme specification centrale.',
        'Nossa plataforma permite descrever o software desejado em linguagem simples e transforma esse pedido em um produto estruturado capaz de gerar apps web, apps mobile, sistemas administrativos, servicos backend, bancos de dados e experiencias para smartwatch a partir da mesma especificacao central.',
        'La nostra piattaforma ti permette di descrivere il software che vuoi in linguaggio semplice, poi trasforma quella richiesta in un prodotto strutturato che puo generare app web, app mobile, sistemi admin, servizi backend, database ed esperienze smartwatch dalla stessa specifica centrale.',
        'Nuestra plataforma te permite describir el software que quieres en lenguaje simple y luego transforma esa solicitud en un producto estructurado capaz de generar aplicaciones web, aplicaciones moviles, sistemas administrativos, servicios backend, bases de datos y experiencias para smartwatch desde la misma especificacion central.'
      )
    ),
    supportingDescription: pick(
      language,
      text(
        'Instead of building every layer separately, the platform coordinates the full product stack from a single source of truth.',
        'Au lieu de construire chaque couche separement, la plateforme coordonne toute la pile produit a partir d une source unique de verite.',
        'Em vez de construir cada camada separadamente, a plataforma coordena toda a pilha do produto a partir de uma unica fonte de verdade.',
        'Invece di costruire ogni livello separatamente, la piattaforma coordina l intero stack di prodotto da un unica fonte di verita.',
        'En lugar de construir cada capa por separado, la plataforma coordina toda la pila del producto desde una sola fuente de verdad.'
      )
    ),
    overviewLabel: pick(language, text('One platform, full lifecycle', 'Une plateforme, cycle complet', 'Uma plataforma, ciclo completo', 'Una piattaforma, ciclo completo', 'Una plataforma, ciclo completo')),
    overviewTitle: pick(language, text('From request to multi-surface product delivery', 'De la demande a la livraison produit multi-surfaces', 'Do pedido a entrega de produto em multiplas superficies', 'Dalla richiesta alla consegna di un prodotto multi-superficie', 'De la solicitud a la entrega de producto en multiples superficies')),
    overviewPoints: [
      pick(language, text('Plain-language request in, structured product specification out.', 'Demande en langage simple en entree, specification produit structuree en sortie.', 'Pedido em linguagem simples na entrada, especificacao estruturada do produto na saida.', 'Richiesta in linguaggio semplice in ingresso, specifica di prodotto strutturata in uscita.', 'Solicitud en lenguaje simple de entrada, especificacion estructurada del producto de salida.')),
      pick(language, text('Generate coordinated web, mobile, backend, admin, database, deployment, and smartwatch outputs from one core system definition.', 'Generez des sorties web, mobile, backend, admin, base de donnees, deploiement et smartwatch coordonnees a partir d une seule definition centrale.', 'Gere entregas coordenadas de web, mobile, backend, admin, banco de dados, deploy e smartwatch a partir de uma unica definicao central.', 'Genera output coordinati web, mobile, backend, admin, database, deploy e smartwatch da un unica definizione centrale del sistema.', 'Genera salidas coordinadas de web, mobile, backend, admin, base de datos, despliegue y smartwatch a partir de una unica definicion central del sistema.')),
      pick(language, text('Iterate from the same source of truth instead of rebuilding each layer independently.', 'Iterez a partir de la meme source de verite au lieu de reconstruire chaque couche independamment.', 'Itere a partir da mesma fonte de verdade em vez de reconstruir cada camada de forma independente.', 'Esegui iterazioni dalla stessa fonte di verita invece di ricostruire ogni livello in modo indipendente.', 'Itera desde la misma fuente de verdad en lugar de reconstruir cada capa de forma independiente.')),
    ],
    stepsLabel: pick(language, text('Step by step', 'Etape par etape', 'Passo a passo', 'Passo dopo passo', 'Paso a paso')),
    stepsTitle: pick(language, text('How one request becomes a complete product system', 'Comment une demande devient un systeme produit complet', 'Como um pedido se torna um sistema completo de produto', 'Come una richiesta diventa un sistema di prodotto completo', 'Como una solicitud se convierte en un sistema de producto completo')),
    steps: [
      {
        title: pick(language, text('Describe your product', 'Decrivez votre produit', 'Descreva seu produto', 'Descrivi il tuo prodotto', 'Describe tu producto')),
        body: [
          pick(language, text('The process starts with a simple request.', 'Le processus commence par une demande simple.', 'O processo comeca com um pedido simples.', 'Il processo inizia con una richiesta semplice.', 'El proceso comienza con una solicitud simple.')),
          pick(language, text('A user explains the product they want to create, such as a SaaS platform, internal business tool, marketplace, mobile app, admin dashboard, automation system, or multi-device application. The platform understands the goal, users, workflows, permissions, data structure, and target platforms.', 'Un utilisateur explique le produit qu il veut creer, comme une plateforme SaaS, un outil metier interne, une marketplace, une app mobile, un tableau de bord admin, un systeme d automatisation ou une application multi-appareils. La plateforme comprend l objectif, les utilisateurs, les workflows, les permissions, la structure des donnees et les plateformes cibles.', 'Um usuario explica o produto que deseja criar, como uma plataforma SaaS, ferramenta interna de negocio, marketplace, app mobile, painel administrativo, sistema de automacao ou aplicacao para varios dispositivos. A plataforma entende o objetivo, os usuarios, os fluxos, as permissoes, a estrutura de dados e as plataformas de destino.', 'Un utente spiega il prodotto che vuole creare, come una piattaforma SaaS, uno strumento aziendale interno, un marketplace, un app mobile, una dashboard admin, un sistema di automazione o un applicazione multi-dispositivo. La piattaforma comprende obiettivo, utenti, workflow, permessi, struttura dati e piattaforme di destinazione.', 'Un usuario explica el producto que quiere crear, como una plataforma SaaS, una herramienta interna de negocio, un marketplace, una app movil, un panel administrativo, un sistema de automatizacion o una aplicacion multidispositivo. La plataforma entiende el objetivo, los usuarios, los flujos, los permisos, la estructura de datos y las plataformas de destino.')),
          pick(language, text('This removes the need to manually define every technical layer from scratch.', 'Cela elimine le besoin de definir manuellement chaque couche technique depuis zero.', 'Isso elimina a necessidade de definir manualmente cada camada tecnica do zero.', 'Questo elimina la necessita di definire manualmente ogni livello tecnico da zero.', 'Esto elimina la necesidad de definir manualmente cada capa tecnica desde cero.')),
        ],
      },
      {
        title: pick(language, text('Convert the request into an app specification', 'Convertissez la demande en specification d application', 'Converta o pedido em uma especificacao de aplicacao', 'Converti la richiesta in una specifica applicativa', 'Convierte la solicitud en una especificacion de aplicacion')),
        body: [
          pick(language, text('The platform transforms the request into a structured application specification.', 'La plateforme transforme la demande en une specification d application structuree.', 'A plataforma transforma o pedido em uma especificacao estruturada da aplicacao.', 'La piattaforma trasforma la richiesta in una specifica applicativa strutturata.', 'La plataforma transforma la solicitud en una especificacion estructurada de la aplicacion.')),
          pick(language, text('This specification becomes the blueprint for the whole system. It defines the application models, relationships, routes, interface surfaces, platform targets, business logic, deployment metadata, and generation rules.', 'Cette specification devient le plan directeur du systeme complet. Elle definit les modeles d application, les relations, les routes, les surfaces d interface, les plateformes cibles, la logique metier, les metadonnees de deploiement et les regles de generation.', 'Essa especificacao se torna o blueprint de todo o sistema. Ela define modelos da aplicacao, relacionamentos, rotas, superficies de interface, plataformas de destino, logica de negocio, metadados de deploy e regras de geracao.', 'Questa specifica diventa il blueprint dell intero sistema. Definisce modelli applicativi, relazioni, route, superfici di interfaccia, piattaforme di destinazione, logica di business, metadati di deploy e regole di generazione.', 'Esta especificacion se convierte en el plano maestro de todo el sistema. Define los modelos de la aplicacion, relaciones, rutas, superficies de interfaz, plataformas objetivo, logica de negocio, metadatos de despliegue y reglas de generacion.')),
          pick(language, text('From this point on, the product is built from a consistent machine-readable foundation, not from scattered notes or changing prompts.', 'A partir de ce moment, le produit est construit sur une base coherente et lisible par machine, et non sur des notes dispersees ou des prompts changeants.', 'A partir desse ponto, o produto e construido sobre uma base consistente e legivel por maquina, e nao a partir de notas soltas ou prompts variaveis.', 'Da questo punto in poi, il prodotto viene costruito da una base coerente leggibile dalla macchina, non da note sparse o prompt che cambiano.', 'A partir de este punto, el producto se construye desde una base coherente y legible por maquina, no desde notas dispersas o prompts cambiantes.')),
        ],
      },
      {
        title: pick(language, text('Generate the full application stack', 'Generez toute la pile applicative', 'Gere toda a pilha da aplicacao', 'Genera l intero stack applicativo', 'Genera toda la pila de la aplicacion')),
        body: [
          pick(language, text('Once the specification is created, the generation engine builds the product layers required for the app.', 'Une fois la specification creee, le moteur de generation construit les couches produit necessaires a l application.', 'Assim que a especificacao e criada, o motor de geracao constroi as camadas do produto necessarias para a aplicacao.', 'Una volta creata la specifica, il motore di generazione costruisce i livelli di prodotto richiesti per l app.', 'Una vez creada la especificacion, el motor de generacion construye las capas del producto necesarias para la aplicacion.')),
          pick(language, text('Depending on the selected targets, the platform can generate web application interfaces, mobile app structures, admin panels, backend APIs, database models, deployment files, and smartwatch outputs for supported watch targets.', 'Selon les cibles selectionnees, la plateforme peut generer des interfaces web, des structures d apps mobiles, des panneaux d administration, des API backend, des modeles de base de donnees, des fichiers de deploiement et des sorties smartwatch pour les cibles compatibles.', 'Dependendo dos destinos selecionados, a plataforma pode gerar interfaces web, estruturas de apps mobile, paineis administrativos, APIs backend, modelos de banco de dados, arquivos de deploy e saidas para smartwatch nos destinos suportados.', 'In base ai target selezionati, la piattaforma puo generare interfacce web, strutture per app mobile, pannelli admin, API backend, modelli di database, file di deploy e output smartwatch per i target supportati.', 'Segun los objetivos seleccionados, la plataforma puede generar interfaces web, estructuras de apps moviles, paneles administrativos, APIs backend, modelos de base de datos, archivos de despliegue y salidas smartwatch para los objetivos compatibles.')),
          pick(language, text('This allows one product concept to become a coordinated multi-surface system instead of disconnected implementations.', 'Cela permet a un seul concept produit de devenir un systeme multi-surfaces coordonne plutot qu une serie d implementations deconnectees.', 'Isso permite que um unico conceito de produto se torne um sistema coordenado em multiplas superficies em vez de implementacoes desconectadas.', 'Questo consente a un singolo concetto di prodotto di diventare un sistema coordinato multi-superficie invece di implementazioni scollegate.', 'Esto permite que un solo concepto de producto se convierta en un sistema coordinado de multiples superficies en lugar de implementaciones desconectadas.')),
        ],
      },
      {
        title: pick(language, text('Keep web, mobile, and watch experiences aligned', 'Gardez web, mobile et montre connectee alignes', 'Mantenha web, mobile e relogio alinhados', 'Mantieni allineate le esperienze web, mobile e smartwatch', 'Mantiene alineadas las experiencias web, mobile y reloj inteligente')),
        body: [
          pick(language, text('The platform is designed to keep all surfaces synchronized around the same product definition.', 'La plateforme est concue pour garder toutes les surfaces synchronisees autour de la meme definition produit.', 'A plataforma foi projetada para manter todas as superficies sincronizadas em torno da mesma definicao de produto.', 'La piattaforma e progettata per mantenere tutte le superfici sincronizzate attorno alla stessa definizione di prodotto.', 'La plataforma esta disenada para mantener todas las superficies sincronizadas alrededor de la misma definicion de producto.')),
          pick(language, text('That means the web app, mobile app, backend, admin tools, and smartwatch experience all follow the same product logic, entities, and workflow rules. This reduces drift between teams and makes it easier to grow the product over time.', 'Cela signifie que l app web, l app mobile, le backend, les outils admin et l experience smartwatch suivent tous la meme logique produit, les memes entites et les memes regles de workflow. Cela reduit les ecarts entre equipes et facilite l evolution du produit.', 'Isso significa que a aplicacao web, a aplicacao mobile, o backend, as ferramentas admin e a experiencia smartwatch seguem a mesma logica de produto, entidades e regras de fluxo. Isso reduz desalinhamentos entre equipes e facilita a evolucao do produto ao longo do tempo.', 'Questo significa che app web, app mobile, backend, strumenti admin ed esperienza smartwatch seguono la stessa logica di prodotto, le stesse entita e le stesse regole di workflow. Questo riduce le divergenze tra team e rende piu semplice far crescere il prodotto nel tempo.', 'Eso significa que la app web, la app movil, el backend, las herramientas admin y la experiencia smartwatch siguen la misma logica de producto, entidades y reglas de flujo. Esto reduce el desfase entre equipos y facilita hacer crecer el producto con el tiempo.')),
          pick(language, text('The watch capability extends the platform so users can also generate smartwatch app structures when that target is selected.', 'La capacite montre etend la plateforme afin que les utilisateurs puissent aussi generer des structures d apps smartwatch lorsque cette cible est selectionnee.', 'A capacidade de relogio amplia a plataforma para que os usuarios tambem possam gerar estruturas de apps para smartwatch quando esse destino for selecionado.', 'La funzionalita watch estende la piattaforma cosi gli utenti possono generare anche strutture di app smartwatch quando quel target viene selezionato.', 'La capacidad de reloj extiende la plataforma para que los usuarios tambien puedan generar estructuras de apps para smartwatch cuando ese objetivo esta seleccionado.')),
        ],
      },
      {
        title: pick(language, text('Manage data and backend logic from the same source', 'Gerez les donnees et la logique backend depuis la meme source', 'Gerencie dados e logica backend da mesma fonte', 'Gestisci dati e logica backend dalla stessa fonte', 'Gestiona los datos y la logica backend desde la misma fuente')),
        body: [
          pick(language, text('The platform does not stop at interface generation.', 'La plateforme ne s arrete pas a la generation d interfaces.', 'A plataforma nao para na geracao de interfaces.', 'La piattaforma non si ferma alla generazione delle interfacce.', 'La plataforma no se detiene en la generacion de interfaces.')),
          pick(language, text('It also supports the backend side of the application lifecycle, including data modeling, persistence structure, service logic, generation jobs, workflow handling, and operational modules. This helps ensure the product is not just a front-end mockup, but a system with real application structure behind it.', 'Elle prend aussi en charge le versant backend du cycle de vie applicatif, y compris la modelisation des donnees, la structure de persistance, la logique de service, les jobs de generation, la gestion des workflows et les modules operationnels. Cela permet de garantir que le produit n est pas seulement une maquette front-end, mais un systeme avec une vraie structure applicative.', 'Ela tambem cobre o lado backend do ciclo de vida da aplicacao, incluindo modelagem de dados, estrutura de persistencia, logica de servico, jobs de geracao, tratamento de fluxos e modulos operacionais. Isso ajuda a garantir que o produto nao seja apenas um mockup de front-end, mas um sistema com estrutura real de aplicacao por tras.', 'Supporta anche il lato backend del ciclo di vita applicativo, inclusi modellazione dei dati, struttura di persistenza, logica di servizio, job di generazione, gestione dei workflow e moduli operativi. Questo aiuta a garantire che il prodotto non sia solo un mockup front-end, ma un sistema con una reale struttura applicativa dietro.', 'Tambien cubre el lado backend del ciclo de vida de la aplicacion, incluyendo modelado de datos, estructura de persistencia, logica de servicio, trabajos de generacion, manejo de flujos y modulos operativos. Esto ayuda a garantizar que el producto no sea solo un mockup de front-end, sino un sistema con una estructura real de aplicacion detras.')),
        ],
      },
      {
        title: pick(language, text('Extend the platform with plugins and modules', 'Etendez la plateforme avec des plugins et modules', 'Expanda a plataforma com plugins e modulos', 'Estendi la piattaforma con plugin e moduli', 'Extiende la plataforma con plugins y modulos')),
        body: [
          pick(language, text('The system is modular.', 'Le systeme est modulaire.', 'O sistema e modular.', 'Il sistema e modulare.', 'El sistema es modular.')),
          pick(language, text('It includes support for plugins, registries, optional product modules, and capability extensions. This means the platform can be expanded over time to support additional features, new generation targets, specialized workflows, enterprise functionality, or domain-specific product logic.', 'Il inclut la prise en charge de plugins, registres, modules produit optionnels et extensions de capacite. Cela signifie que la plateforme peut s etendre dans le temps pour prendre en charge de nouvelles fonctionnalites, de nouvelles cibles de generation, des workflows specialises, des fonctions enterprise ou une logique metier specifique a un domaine.', 'Ele inclui suporte para plugins, registros, modulos opcionais de produto e extensoes de capacidade. Isso significa que a plataforma pode ser expandida ao longo do tempo para suportar recursos adicionais, novos destinos de geracao, fluxos especializados, funcionalidades enterprise ou logica de produto especifica de dominio.', 'Include il supporto per plugin, registry, moduli di prodotto opzionali ed estensioni di capacita. Questo significa che la piattaforma puo espandersi nel tempo per supportare funzionalita aggiuntive, nuovi target di generazione, workflow specializzati, funzionalita enterprise o logica di prodotto specifica per dominio.', 'Incluye soporte para plugins, registros, modulos opcionales de producto y extensiones de capacidad. Esto significa que la plataforma puede ampliarse con el tiempo para soportar funciones adicionales, nuevos objetivos de generacion, flujos especializados, funcionalidad enterprise o logica de producto especifica por dominio.')),
          pick(language, text('This modular design is what allows the platform to grow beyond a single type of software output.', 'Cette conception modulaire permet a la plateforme de grandir au-dela d un seul type de sortie logicielle.', 'Esse design modular e o que permite que a plataforma cresca para alem de um unico tipo de entrega de software.', 'Questo design modulare e cio che permette alla piattaforma di crescere oltre un solo tipo di output software.', 'Este diseno modular es lo que permite que la plataforma crezca mas alla de un solo tipo de salida de software.')),
        ],
      },
      {
        title: pick(language, text('Support collaboration and operational workflows', 'Prenez en charge la collaboration et les workflows operationnels', 'Suporte colaboracao e fluxos operacionais', 'Supporta collaborazione e workflow operativi', 'Soporta colaboracion y flujos operativos')),
        body: [
          pick(language, text('The platform is built to support more than just generation.', 'La plateforme est concue pour aller au-dela de la simple generation.', 'A plataforma foi criada para ir alem da simples geracao.', 'La piattaforma e costruita per supportare molto piu della sola generazione.', 'La plataforma esta pensada para soportar mucho mas que la simple generacion.')),
          pick(language, text('It also includes support for product operations such as collaboration layers, workflow modules, diagnostics, queue-driven jobs, environment handling, deployment-oriented flows, and runtime support. That makes it suitable not only for initial product creation, but also for ongoing management and iteration.', 'Elle inclut aussi la prise en charge des operations produit comme les couches de collaboration, modules de workflow, diagnostics, jobs pilotes par file d attente, gestion des environnements, flux orientes deploiement et support runtime. Cela la rend adaptee non seulement a la creation initiale du produit, mais aussi a sa gestion continue et a son iteration.', 'Ela tambem inclui suporte para operacoes de produto como camadas de colaboracao, modulos de fluxo, diagnosticos, jobs orientados por fila, gestao de ambientes, fluxos voltados a deploy e suporte em runtime. Isso a torna adequada nao apenas para a criacao inicial do produto, mas tambem para gestao continua e iteracao.', 'Include anche il supporto per le operazioni di prodotto come livelli di collaborazione, moduli di workflow, diagnostica, job guidati da code, gestione degli ambienti, flussi orientati al deploy e supporto runtime. Questo la rende adatta non solo alla creazione iniziale del prodotto, ma anche alla sua gestione continua e iterazione.', 'Tambien incluye soporte para operaciones de producto como capas de colaboracion, modulos de flujo, diagnosticos, trabajos guiados por colas, manejo de entornos, flujos orientados al despliegue y soporte en runtime. Eso la hace adecuada no solo para la creacion inicial del producto, sino tambien para su gestion continua e iteracion.')),
        ],
      },
      {
        title: pick(language, text('Prepare products for deployment and scale', 'Preparez les produits pour le deploiement et la montée en charge', 'Prepare produtos para deploy e escala', 'Prepara i prodotti per deploy e scalabilita', 'Prepara productos para despliegue y escala')),
        body: [
          pick(language, text('After generation, the platform supports the structure needed to move products toward deployment and production hardening.', 'Apres la generation, la plateforme prend en charge la structure necessaire pour faire avancer les produits vers le deploiement et le renforcement pour la production.', 'Apos a geracao, a plataforma oferece a estrutura necessaria para levar os produtos em direcao ao deploy e ao endurecimento para producao.', 'Dopo la generazione, la piattaforma supporta la struttura necessaria per portare i prodotti verso il deploy e la preparazione alla produzione.', 'Despues de la generacion, la plataforma soporta la estructura necesaria para llevar los productos hacia el despliegue y el endurecimiento para produccion.')),
          pick(language, text('This includes packaging, deployment-oriented outputs, operational workflows, runtime integration, and environment-based execution paths. The platform is designed to move generated products closer to real delivery instead of stopping at concept generation.', 'Cela inclut le packaging, des sorties orientees deploiement, des workflows operationnels, l integration runtime et des chemins d execution bases sur l environnement. La plateforme est concue pour rapprocher les produits generes d une vraie livraison plutot que de s arreter a la generation de concepts.', 'Isso inclui empacotamento, saidas orientadas a deploy, fluxos operacionais, integracao em runtime e caminhos de execucao baseados em ambiente. A plataforma foi projetada para aproximar os produtos gerados de uma entrega real em vez de parar na geracao de conceito.', 'Questo include packaging, output orientati al deploy, workflow operativi, integrazione runtime e percorsi di esecuzione basati sull ambiente. La piattaforma e progettata per avvicinare i prodotti generati a una consegna reale invece di fermarsi alla generazione del concetto.', 'Esto incluye empaquetado, salidas orientadas al despliegue, flujos operativos, integracion runtime y rutas de ejecucion basadas en entorno. La plataforma esta disenada para acercar los productos generados a una entrega real en lugar de detenerse en la generacion del concepto.')),
        ],
      },
      {
        title: pick(language, text('Iterate as the product evolves', 'Iterez a mesure que le produit evolue', 'Itere conforme o produto evolui', 'Itera man mano che il prodotto evolve', 'Itera a medida que el producto evoluciona')),
        body: [
          pick(language, text('As the request changes, the platform can regenerate, extend, and refine the product.', 'Lorsque la demande evolue, la plateforme peut regenerer, etendre et affiner le produit.', 'Conforme o pedido muda, a plataforma pode regenerar, expandir e refinar o produto.', 'Quando la richiesta cambia, la piattaforma puo rigenerare, estendere e affinare il prodotto.', 'A medida que cambia la solicitud, la plataforma puede regenerar, extender y refinar el producto.')),
          pick(language, text('Because everything is built around the app specification, changes can be applied more consistently than in manual multi-team rebuilds. New modules, new platforms, updated business rules, and additional interfaces can all be introduced without redefining the whole product from zero.', 'Parce que tout est construit autour de la specification applicative, les changements peuvent etre appliques de facon plus coherente que dans des reconstructions manuelles multi-equipes. De nouveaux modules, plateformes, regles metier mises a jour et interfaces supplementaires peuvent etre ajoutes sans redefinir tout le produit depuis zero.', 'Como tudo e construido em torno da especificacao da aplicacao, as mudancas podem ser aplicadas com mais consistencia do que em reconstrucao manual entre varias equipes. Novos modulos, novas plataformas, regras de negocio atualizadas e interfaces adicionais podem ser introduzidos sem redefinir todo o produto do zero.', 'Poiche tutto e costruito attorno alla specifica dell app, i cambiamenti possono essere applicati in modo piu coerente rispetto a ricostruzioni manuali tra piu team. Nuovi moduli, nuove piattaforme, regole di business aggiornate e interfacce aggiuntive possono essere introdotti senza ridefinire l intero prodotto da zero.', 'Como todo se construye alrededor de la especificacion de la app, los cambios pueden aplicarse con mayor consistencia que en reconstrucciones manuales entre varios equipos. Se pueden introducir nuevos modulos, nuevas plataformas, reglas de negocio actualizadas e interfaces adicionales sin redefinir todo el producto desde cero.')),
        ],
      },
      {
        title: pick(language, text('Deliver one platform for the whole product lifecycle', 'Livrez une plateforme pour tout le cycle de vie produit', 'Entregue uma plataforma para todo o ciclo de vida do produto', 'Offri una piattaforma per l intero ciclo di vita del prodotto', 'Entrega una plataforma para todo el ciclo de vida del producto')),
        body: [
          pick(language, text('The result is a system that helps take a product from idea to structured software generation across multiple platforms.', 'Le resultat est un systeme qui aide a faire passer un produit de l idee a une generation logicielle structuree sur plusieurs plateformes.', 'O resultado e um sistema que ajuda a levar um produto da ideia a uma geracao estruturada de software em varias plataformas.', 'Il risultato e un sistema che aiuta a portare un prodotto dall idea a una generazione software strutturata su piu piattaforme.', 'El resultado es un sistema que ayuda a llevar un producto desde la idea hasta una generacion estructurada de software en multiples plataformas.')),
          pick(language, text('Instead of treating web, mobile, backend, admin, and watch experiences as separate projects, the platform treats them as parts of one coordinated product system.', 'Au lieu de traiter le web, le mobile, le backend, l admin et les experiences watch comme des projets separes, la plateforme les traite comme des parties d un seul systeme produit coordonne.', 'Em vez de tratar web, mobile, backend, admin e experiencias watch como projetos separados, a plataforma os trata como partes de um unico sistema coordenado de produto.', 'Invece di trattare web, mobile, backend, admin ed esperienze watch come progetti separati, la piattaforma li tratta come parti di un unico sistema di prodotto coordinato.', 'En lugar de tratar web, mobile, backend, admin y experiencias watch como proyectos separados, la plataforma los trata como partes de un unico sistema de producto coordinado.')),
        ],
      },
    ],
    outputsLabel: pick(language, text('What the platform can generate', 'Ce que la plateforme peut generer', 'O que a plataforma pode gerar', 'Cosa puo generare la piattaforma', 'Lo que la plataforma puede generar')),
    outputsTitle: pick(language, text('A coordinated generation system across the stack', 'Un systeme de generation coordonne sur toute la pile', 'Um sistema coordenado de geracao em toda a pilha', 'Un sistema coordinato di generazione lungo tutto lo stack', 'Un sistema coordinado de generacion en toda la pila')),
    outputs: [
      pick(language, text('web applications', 'applications web', 'aplicacoes web', 'app web', 'aplicaciones web')),
      pick(language, text('mobile applications', 'applications mobiles', 'aplicacoes mobile', 'app mobile', 'aplicaciones moviles')),
      pick(language, text('admin interfaces', 'interfaces d administration', 'interfaces administrativas', 'interfacce amministrative', 'interfaces administrativas')),
      pick(language, text('backend service structures', 'structures de services backend', 'estruturas de servicos backend', 'strutture di servizi backend', 'estructuras de servicios backend')),
      pick(language, text('database-backed product layers', 'couches produit reliees a la base de donnees', 'camadas de produto apoiadas por banco de dados', 'livelli di prodotto supportati da database', 'capas de producto respaldadas por base de datos')),
      pick(language, text('deployment-oriented outputs', 'sorties orientees deploiement', 'saidas orientadas a deploy', 'output orientati al deploy', 'salidas orientadas al despliegue')),
      pick(language, text('smartwatch app generation when selected', 'generation d apps smartwatch lorsque selectionnee', 'geracao de apps para smartwatch quando selecionada', 'generazione di app smartwatch quando selezionata', 'generacion de apps para smartwatch cuando se selecciona')),
    ],
    whyLabel: pick(language, text('Why this matters', 'Pourquoi c est important', 'Por que isso importa', 'Perche conta', 'Por que esto importa')),
    whyTitle: pick(language, text('Reduce fragmentation and scale with more consistency', 'Reduisez la fragmentation et gagnez en coherence', 'Reduza a fragmentacao e escale com mais consistencia', 'Riduci la frammentazione e scala con maggiore coerenza', 'Reduce la fragmentacion y escala con mas consistencia')),
    whyParagraphs: [
      pick(language, text('Traditional software creation often fragments the product across different tools, teams, and code paths. This platform reduces that fragmentation by using one structured product blueprint to coordinate the whole output.', 'La creation logicielle traditionnelle fragmente souvent le produit entre differents outils, equipes et chemins de code. Cette plateforme reduit cette fragmentation en utilisant un seul plan produit structure pour coordonner tout le resultat.', 'A criacao tradicional de software costuma fragmentar o produto entre ferramentas, equipes e caminhos de codigo diferentes. Esta plataforma reduz essa fragmentacao ao usar um unico plano estruturado de produto para coordenar toda a entrega.', 'La creazione software tradizionale spesso frammenta il prodotto tra strumenti, team e percorsi di codice differenti. Questa piattaforma riduce tale frammentazione usando un unico schema di prodotto strutturato per coordinare l intero output.', 'La creacion tradicional de software suele fragmentar el producto entre distintas herramientas, equipos y rutas de codigo. Esta plataforma reduce esa fragmentacion al usar un unico plano estructurado de producto para coordinar toda la salida.')),
      pick(language, text('That means faster product definition, more consistency across devices, easier iteration, and a stronger foundation for scaling software generation.', 'Cela signifie une definition produit plus rapide, plus de coherence entre appareils, une iteration plus simple et une base plus solide pour faire evoluer la generation logicielle.', 'Isso significa definicao de produto mais rapida, mais consistencia entre dispositivos, iteracao mais simples e uma base mais forte para escalar a geracao de software.', 'Questo significa definizione del prodotto piu rapida, maggiore coerenza tra dispositivi, iterazione piu semplice e una base piu solida per scalare la generazione software.', 'Eso significa una definicion de producto mas rapida, mas consistencia entre dispositivos, iteracion mas sencilla y una base mas fuerte para escalar la generacion de software.')),
    ],
    closingCallout: pick(language, text('One structured blueprint across every surface', 'Un plan structure sur chaque surface', 'Um plano estruturado em cada superficie', 'Uno schema strutturato su ogni superficie', 'Un plano estructurado en cada superficie')),
  };
}

export function getPricingCopy(language: Language) {
  return {
    eyebrow: pick(language, text('Pricing', 'Tarifs', 'Precos', 'Prezzi', 'Precios')),
    title: pick(language, text('Flexible plans for every stage of building', 'Des plans flexibles pour chaque etape de creation', 'Planos flexiveis para cada etapa de construcao', 'Piani flessibili per ogni fase di costruzione', 'Planes flexibles para cada etapa de construccion')),
    description: pick(language, text('Choose the plan that fits your workflow, scale your product faster, and keep the same premium experience across your entire platform.', 'Choisissez le plan adapte a votre workflow, accelerez votre produit et gardez la meme experience premium sur toute la plateforme.', 'Escolha o plano ideal para seu fluxo, escale seu produto mais rapido e mantenha a mesma experiencia premium em toda a plataforma.', 'Scegli il piano adatto al tuo workflow, scala il prodotto piu velocemente e mantieni la stessa esperienza premium su tutta la piattaforma.', 'Elige el plan que mejor encaja con tu flujo, escala tu producto mas rapido y mantén la misma experiencia premium en toda la plataforma.')),
    subcopy: pick(language, text('Start for free. Upgrade when you are ready.', 'Commencez gratuitement. Passez au niveau superieur quand vous etes pret.', 'Comece de graca. Faca upgrade quando estiver pronto.', 'Inizia gratis. Passa a un piano superiore quando sei pronto.', 'Empieza gratis. Haz upgrade cuando estes listo.')),
    toggle: {
      yearly: pick(language, text('Yearly (save 20%)', 'Annuel (economisez 20%)', 'Anual (economize 20%)', 'Annuale (risparmia il 20%)', 'Anual (ahorra 20%)')),
      monthly: pick(language, text('Monthly', 'Mensuel', 'Mensal', 'Mensile', 'Mensual')),
    },
    billedAnnually: pick(language, text('Billed annually', 'Facture annuellement', 'Cobrado anualmente', 'Fatturato annualmente', 'Facturado anualmente')),
    planHighlightsLabel: pick(language, text('Plan highlights:', 'Points forts du plan :', 'Destaques do plano:', 'Punti chiave del piano:', 'Puntos destacados del plan:')),
    getStarted: pick(language, text('Get started', 'Commencer', 'Comecar', 'Inizia', 'Comenzar')),
    enterprise: {
      title: pick(language, text('Looking for enterprise solutions?', 'Vous cherchez une solution enterprise ?', 'Procurando solucoes enterprise?', 'Cerchi soluzioni enterprise?', 'Buscas soluciones enterprise?')),
      description: pick(language, text('Unlock custom plans, a dedicated solutions architect, and hands-on support tailored to your organization.', 'Debloquez des plans sur mesure, un architecte dedie et un accompagnement adapte a votre organisation.', 'Desbloqueie planos personalizados, um arquiteto dedicado e suporte adaptado a sua organizacao.', 'Sblocca piani personalizzati, un solutions architect dedicato e supporto su misura per la tua organizzazione.', 'Desbloquea planes personalizados, un arquitecto dedicado y soporte adaptado a tu organizacion.')),
      cta: pick(language, text('Contact sales', 'Contacter les ventes', 'Falar com vendas', 'Contatta sales', 'Contactar ventas')),
    },
    plans: [
      {
        name: pricingPlanNames[0],
        description: pick(language, text('Scale your platform with higher credit limits and dedicated support.', 'Faites evoluer votre plateforme avec plus de credits et un support dedie.', 'Escale sua plataforma com mais creditos e suporte dedicado.', 'Scala la piattaforma con piu crediti e supporto dedicato.', 'Escala tu plataforma con mas creditos y soporte dedicado.')),
        price: { yearly: 150, monthly: 190 },
        credits: '1,200 message credits /mo',
        integrations: '50,000 integration credits /mo',
        highlights: [
          pick(language, text('Unlimited apps', 'Apps illimitees', 'Apps ilimitadas', 'App illimitate', 'Apps ilimitadas')),
          pick(language, text('In-app code edits', 'Edition du code dans l app', 'Edicao de codigo na app', 'Modifiche al codice nell app', 'Edicion de codigo dentro de la app')),
          pick(language, text('Backend functions', 'Fonctions backend', 'Funcoes backend', 'Funzioni backend', 'Funciones backend')),
          pick(language, text('AI model selection', 'Choix du modele IA', 'Selecao de modelo de IA', 'Selezione del modello AI', 'Seleccion de modelo de IA')),
          pick(language, text('Connect a custom domain', 'Connecter un domaine personnalise', 'Conectar dominio proprio', 'Collega un dominio personalizzato', 'Conectar un dominio personalizado')),
          pick(language, text('Free domain for 1 year', 'Domaine offert pendant 1 an', 'Dominio gratis por 1 ano', 'Dominio gratis per 1 anno', 'Dominio gratis por 1 ano')),
          pick(language, text('GitHub integration', 'Integration GitHub', 'Integracao GitHub', 'Integrazione GitHub', 'Integracion GitHub')),
          pick(language, text('Early beta access', 'Acces beta anticipe', 'Acesso antecipado a beta', 'Accesso anticipato alla beta', 'Acceso anticipado a beta')),
          pick(language, text('Priority support', 'Support prioritaire', 'Suporte prioritario', 'Supporto prioritario', 'Soporte prioritario')),
        ],
      },
      {
        name: pricingPlanNames[1],
        description: pick(language, text('Access advanced tools and support for complex applications.', 'Accedez a des outils avances et un support pour des applications complexes.', 'Acesse ferramentas avancadas e suporte para aplicacoes complexas.', 'Accedi a strumenti avanzati e supporto per applicazioni complesse.', 'Accede a herramientas avanzadas y soporte para aplicaciones complejas.')),
        price: { yearly: 70, monthly: 90 },
        credits: '500 message credits /mo',
        integrations: '20,000 integration credits /mo',
        highlights: [
          pick(language, text('Unlimited apps', 'Apps illimitees', 'Apps ilimitadas', 'App illimitate', 'Apps ilimitadas')),
          pick(language, text('In-app code edits', 'Edition du code dans l app', 'Edicao de codigo na app', 'Modifiche al codice nell app', 'Edicion de codigo dentro de la app')),
          pick(language, text('Backend functions', 'Fonctions backend', 'Funcoes backend', 'Funzioni backend', 'Funciones backend')),
          pick(language, text('AI model selection', 'Choix du modele IA', 'Selecao de modelo de IA', 'Selezione del modello AI', 'Seleccion de modelo de IA')),
          pick(language, text('Connect a custom domain', 'Connecter un domaine personnalise', 'Conectar dominio proprio', 'Collega un dominio personalizzato', 'Conectar un dominio personalizado')),
          pick(language, text('Free domain for 1 year', 'Domaine offert pendant 1 an', 'Dominio gratis por 1 ano', 'Dominio gratis per 1 anno', 'Dominio gratis por 1 ano')),
          pick(language, text('GitHub integration', 'Integration GitHub', 'Integracao GitHub', 'Integrazione GitHub', 'Integracion GitHub')),
          pick(language, text('Early beta access', 'Acces beta anticipe', 'Acesso antecipado a beta', 'Accesso anticipato alla beta', 'Acceso anticipado a beta')),
        ],
      },
      {
        name: pricingPlanNames[2],
        description: pick(language, text('Take your idea to the next level with tools built for serious builders.', 'Faites passer votre idee au niveau suivant avec des outils pour createurs ambitieux.', 'Leve sua ideia para o proximo nivel com ferramentas para builders mais serios.', 'Porta la tua idea al livello successivo con strumenti pensati per builder seri.', 'Lleva tu idea al siguiente nivel con herramientas pensadas para builders serios.')),
        price: { yearly: 30, monthly: 40 },
        credits: '250 message credits /mo',
        integrations: '10,000 integration credits /mo',
        highlights: [
          pick(language, text('Unlimited apps', 'Apps illimitees', 'Apps ilimitadas', 'App illimitate', 'Apps ilimitadas')),
          pick(language, text('In-app code edits', 'Edition du code dans l app', 'Edicao de codigo na app', 'Modifiche al codice nell app', 'Edicion de codigo dentro de la app')),
          pick(language, text('Backend functions', 'Fonctions backend', 'Funcoes backend', 'Funzioni backend', 'Funciones backend')),
          pick(language, text('AI model selection', 'Choix du modele IA', 'Selecao de modelo de IA', 'Selezione del modello AI', 'Seleccion de modelo de IA')),
          pick(language, text('Connect a custom domain', 'Connecter un domaine personnalise', 'Conectar dominio proprio', 'Collega un dominio personalizzato', 'Conectar un dominio personalizado')),
          pick(language, text('Free domain for 1 year', 'Domaine offert pendant 1 an', 'Dominio gratis por 1 ano', 'Dominio gratis per 1 anno', 'Dominio gratis por 1 ano')),
          pick(language, text('GitHub integration', 'Integration GitHub', 'Integracao GitHub', 'Integrazione GitHub', 'Integracion GitHub')),
        ],
      },
      {
        name: pricingPlanNames[3],
        description: pick(language, text('Build your first apps for personal projects and early-stage ideas.', 'Creez vos premieres apps pour projets personnels et idees en phase initiale.', 'Crie suas primeiras apps para projetos pessoais e ideias iniciais.', 'Crea le tue prime app per progetti personali e idee in fase iniziale.', 'Crea tus primeras apps para proyectos personales e ideas tempranas.')),
        price: { yearly: 15, monthly: 20 },
        credits: '100 message credits /mo',
        integrations: '2,000 integration credits /mo',
        highlights: [
          pick(language, text('Unlimited apps', 'Apps illimitees', 'Apps ilimitadas', 'App illimitate', 'Apps ilimitadas')),
          pick(language, text('In-app code edits', 'Edition du code dans l app', 'Edicao de codigo na app', 'Modifiche al codice nell app', 'Edicion de codigo dentro de la app')),
        ],
      },
      {
        name: pricingPlanNames[4],
        description: pick(language, text('Access the core platform for free and explore what it can do.', 'Accedez gratuitement au coeur de la plateforme et decouvrez son potentiel.', 'Acesse o nucleo da plataforma gratuitamente e veja o que ela pode fazer.', 'Accedi gratuitamente al cuore della piattaforma e scopri cosa puo fare.', 'Accede gratis al nucleo de la plataforma y explora lo que puede hacer.')),
        price: 0,
        credits: '25 message credits /mo',
        integrations: '100 integration credits /mo',
        highlights: [pick(language, text('Core platform features', 'Fonctionnalites coeur de plateforme', 'Recursos centrais da plataforma', 'Funzionalita core della piattaforma', 'Funciones centrales de la plataforma'))],
        footnote: pick(language, text('Authentication, database functionality, and analytics.', 'Authentification, base de donnees et analytics.', 'Autenticacao, banco de dados e analytics.', 'Autenticazione, database e analytics.', 'Autenticacion, base de datos y analytics.')),
      },
    ],
  };
}

export function getProductTemplateCopy(language: Language) {
  return {
    coreValue: pick(language, text('Core value', 'Valeur cle', 'Valor central', 'Valore chiave', 'Valor central')),
    communicateTitle: pick(language, text('What this page helps you communicate', 'Ce que cette page aide a communiquer', 'O que esta pagina ajuda a comunicar', 'Cio che questa pagina aiuta a comunicare', 'Lo que esta pagina ayuda a comunicar')),
    communicateDescription: pick(language, text('Use these standalone routes to sell a clearer, stronger product story.', 'Utilisez ces pages dediees pour raconter une histoire produit plus claire et plus forte.', 'Use estas rotas dedicadas para contar uma historia de produto mais clara e forte.', 'Usa queste route dedicate per raccontare una storia prodotto piu chiara e forte.', 'Usa estas rutas dedicadas para contar una historia de producto mas clara y fuerte.')),
    whyPages: pick(language, text('Why dedicated pages matter', 'Pourquoi les pages dediees comptent', 'Por que paginas dedicadas importam', 'Perche le pagine dedicate contano', 'Por que importan las paginas dedicadas')),
    whyTitle: pick(language, text('A page with its own message converts better than an anchor jump', 'Une page avec son propre message convertit mieux qu un simple saut d ancre', 'Uma pagina com propria mensagem converte melhor que um salto de ancora', 'Una pagina con un messaggio proprio converte meglio di un anchor jump', 'Una pagina con su propio mensaje convierte mejor que un simple salto de ancla')),
    whyBullets: [
      pick(language, text('Gives each topic a stronger headline and clearer hierarchy.', 'Donne a chaque sujet un titre plus fort et une hierarchie plus claire.', 'Da a cada tema um titulo mais forte e hierarquia mais clara.', 'Dona a ogni tema un titolo piu forte e una gerarchia piu chiara.', 'Da a cada tema un titular mas fuerte y una jerarquia mas clara.')),
      pick(language, text('Makes navigation feel intentional and premium.', 'Rend la navigation plus intentionnelle et premium.', 'Faz a navegacao parecer mais intencional e premium.', 'Fa sembrare la navigazione piu intenzionale e premium.', 'Hace que la navegacion se sienta mas intencional y premium.')),
      pick(language, text('Creates more room for examples, proof, and CTAs.', 'Cree plus d espace pour exemples, preuves et CTAs.', 'Cria mais espaco para exemplos, provas e CTAs.', 'Crea piu spazio per esempi, prove e CTA.', 'Crea mas espacio para ejemplos, pruebas y CTAs.')),
    ],
    nextSteps: pick(language, text('Next steps', 'Etapes suivantes', 'Proximos passos', 'Passi successivi', 'Siguientes pasos')),
    nextTitle: pick(language, text('Guide visitors deeper into the product', 'Faites avancer les visiteurs plus loin dans le produit', 'Leve visitantes mais fundo no produto', 'Guida i visitatori piu a fondo nel prodotto', 'Lleva a los visitantes mas a fondo en el producto')),
    nextCardTitle: pick(language, text('Connect this page to demos, forms, or your backend later.', 'Reliez cette page a des demos, formulaires ou votre backend plus tard.', 'Conecte esta pagina a demos, formularios ou ao seu backend depois.', 'Collega questa pagina a demo, moduli o al tuo backend in seguito.', 'Conecta esta pagina con demos, formularios o tu backend mas adelante.')),
    nextCardDescription: pick(language, text('The structure is already in place, so you can keep adding richer content without relying on one long scrolling homepage.', 'La structure est deja en place, vous pouvez donc ajouter du contenu plus riche sans dependre d une longue homepage.', 'A estrutura ja esta pronta, entao voce pode adicionar conteudo mais rico sem depender de uma homepage longa.', 'La struttura e gia pronta, quindi puoi aggiungere contenuti piu ricchi senza dipendere da una lunga homepage.', 'La estructura ya esta lista, asi que puedes agregar contenido mas rico sin depender de una homepage larga.')),
    viewProductFeatures: pick(language, text('View product features', 'Voir les fonctionnalites produit', 'Ver recursos do produto', 'Vedi funzionalita prodotto', 'Ver funcionalidades del producto')),
  };
}

export function getUseCaseTemplateCopy(language: Language) {
  return {
    opportunities: pick(language, text('Opportunities', 'Opportunites', 'Oportunidades', 'Opportunita', 'Oportunidades')),
    opportunitiesTitle: pick(language, text('Ways to position the platform for this audience', 'Facons de positionner la plateforme pour ce public', 'Formas de posicionar a plataforma para este publico', 'Modi per posizionare la piattaforma per questo pubblico', 'Formas de posicionar la plataforma para esta audiencia')),
    opportunitiesDescription: pick(language, text('These route pages help visitors picture what they could build for their team or industry.', 'Ces pages aident les visiteurs a imaginer ce qu ils pourraient construire pour leur equipe ou secteur.', 'Estas paginas ajudam visitantes a imaginar o que poderiam construir para sua equipe ou setor.', 'Queste pagine aiutano i visitatori a immaginare cosa potrebbero costruire per il loro team o settore.', 'Estas paginas ayudan a los visitantes a imaginar lo que podrian construir para su equipo o industria.')),
    messagingAngles: pick(language, text('Messaging angles', 'Angles de message', 'Angulos de mensagem', 'Angoli di messaggio', 'Angulos de mensaje')),
    messagingTitle: pick(language, text('Highlight speed, clarity, and workflow fit', 'Mettez en avant vitesse, clarte et adequation workflow', 'Destaque velocidade, clareza e ajuste ao fluxo', 'Metti in evidenza velocita, chiarezza e aderenza al workflow', 'Destaca velocidad, claridad y ajuste al flujo')),
    messagingBullets: [
      pick(language, text('Map your prompt to a realistic workflow instead of generic app copy.', 'Reliez votre prompt a un workflow realiste plutot qu a un texte d app generique.', 'Conecte seu prompt a um fluxo realista em vez de um texto generico.', 'Collega il prompt a un workflow realistico invece di un testo generico.', 'Conecta tu prompt con un flujo realista en lugar de un texto generico.')),
      pick(language, text('Show examples that match how this audience already works.', 'Montrez des exemples qui ressemblent a la facon dont ce public travaille deja.', 'Mostre exemplos que combinam com a forma como este publico ja trabalha.', 'Mostra esempi che rispecchiano il modo in cui questo pubblico lavora gia.', 'Muestra ejemplos que coincidan con la forma en que esta audiencia ya trabaja.')),
      pick(language, text('Reduce friction by linking directly to relevant templates or features.', 'Reduisez la friction en liant directement vers les templates ou fonctionnalites pertinents.', 'Reduza friccao ligando direto para templates ou recursos relevantes.', 'Riduci l attrito collegando direttamente a template o funzionalita rilevanti.', 'Reduce la friccion enlazando directo a templates o funcionalidades relevantes.')),
    ],
    continueExploring: pick(language, text('Continue exploring', 'Continuer a explorer', 'Continuar explorando', 'Continua a esplorare', 'Seguir explorando')),
    continueTitle: pick(language, text('Use cross-links to keep visitors moving', 'Utilisez des liens croises pour faire avancer les visiteurs', 'Use links cruzados para manter visitantes em movimento', 'Usa collegamenti incrociati per far avanzare i visitatori', 'Usa enlaces cruzados para mantener a los visitantes en movimiento')),
    continueCardTitle: pick(language, text('Turn use-case traffic into product discovery.', 'Transformez le trafic use case en decouverte produit.', 'Transforme trafego de casos de uso em descoberta de produto.', 'Trasforma il traffico use case in scoperta prodotto.', 'Convierte el trafico de casos de uso en descubrimiento de producto.')),
    continueCardDescription: pick(language, text('From here, you can link into templates, integrations, feature pages, or customer stories.', 'Depuis ici, vous pouvez lier vers templates, integrations, pages fonctionnalites ou histoires clients.', 'Daqui, voce pode ligar para templates, integracoes, paginas de recursos ou historias de clientes.', 'Da qui puoi collegare template, integrazioni, pagine funzionalita o storie cliente.', 'Desde aqui puedes enlazar a templates, integraciones, paginas de funcionalidades o historias de clientes.')),
    browseTemplates: pick(language, text('Browse templates', 'Parcourir les templates', 'Explorar templates', 'Sfoglia template', 'Explorar templates')),
  };
}

export function getProductPageCopy(language: Language, key: ProductPageKey) {
  const page = productPages[key];
  return {
    eyebrow: pick(language, page.eyebrow),
    title: pick(language, page.title),
    description: pick(language, page.description),
    pillars: pickItems(language, page.pillars),
  };
}

export function getUseCasePageCopy(language: Language, key: UseCasePageKey) {
  const page = useCasePages[key];
  return {
    eyebrow: pick(language, page.eyebrow),
    title: pick(language, page.title),
    description: pick(language, page.description),
    scenarios: pickItems(language, page.scenarios),
  };
}

export type { ProductPageKey, UseCasePageKey };

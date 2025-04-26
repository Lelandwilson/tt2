// Sample data for different game modes
const wordSets = {
    easy: ['the', 'and', 'for', 'you', 'that', 'this', 'with', 'have', 'from', 'they',
           'what', 'were', 'when', 'your', 'which', 'their', 'will', 'would', 'about',
           'one', 'all', 'not', 'she', 'her', 'can', 'there', 'use', 'make', 'like',
           'time', 'look', 'more', 'write', 'see', 'number', 'way', 'could', 'people',
           'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'sit', 'now', 'find',
           'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part'],
    medium: ['ability', 'absolute', 'academic', 'accurate', 'achieve', 'acknowledge', 'actually',
             'addition', 'adequate', 'advanced', 'afternoon', 'algorithm', 'although', 'analysis',
             'apparent', 'application', 'appreciate', 'approach', 'appropriate', 'argument',
             'artificial', 'associate', 'assumption', 'available', 'awareness', 'basically',
             'behavior', 'beneficial', 'boundary', 'briefly', 'calculate', 'capacity',
             'category', 'certainly', 'challenge', 'characteristic', 'circumstance', 'classify',
             'cognitive', 'commitment', 'communicate', 'community', 'comparison', 'competent'],
    hard: ['sophisticated', 'comprehensive', 'extraordinary', 'psychological', 'determination',
           'revolutionary', 'technological', 'environmental', 'representative', 'qualification',
           'collaboration', 'significance', 'professional', 'international', 'philosophical',
           'unprecedented', 'interdisciplinary', 'sustainability', 'infrastructure', 'globalization',
           'constitutional', 'jurisprudence', 'epistemological', 'hermeneutics', 'existentialism',
           'bureaucratic', 'assimilation', 'procrastination', 'amelioration', 'ubiquitous',
           'idiosyncratic', 'conglomerate', 'ostentatious', 'juxtaposition', 'serendipity',
           'acquiescence', 'belligerent', 'capricious', 'deleterious', 'effervescent']
};

const sentenceSets = {
    easy: [
        'The sun is shining today.',
        'I like to read books.',
        'She plays the piano well.',
        'They went to the beach.',
        'We are going to the park.',
        'He has a big blue car.',
        'Can you help me please?',
        'The cat sat on the mat.',
        'We eat dinner together.',
        'My friend lives nearby.',
        'The flowers are very pretty.',
        'I want to learn to code.',
        'Birds fly high in the sky.',
        'The movie was interesting.',
        'Let\'s go for a walk.',
        'She is wearing a red dress.',
        'He likes to play soccer.',
        'The water is very cold.',
        'They are singing a song.',
        'We saw a shooting star.'
    ],
    medium: [
        'The conference will be held next month in the city center.',
        'They decided to renovate their house during the summer vacation.',
        'Many students find mathematics to be challenging but rewarding.',
        'The research team published their findings in a scientific journal.',
        'Learning a new language requires consistent practice and dedication.',
        'The company announced a new strategy for market expansion.',
        'Environmental regulations are becoming increasingly important for businesses.',
        'The historical significance of the monument attracts many tourists each year.',
        'Effective communication skills are essential for professional success.',
        'The government is implementing new policies to address economic inequality.',
        'Understanding different cultures can lead to greater global harmony.',
        'Critical thinking involves analyzing information objectively and making reasoned judgments.',
        'Technological advancements have significantly improved healthcare services.',
        "The artist's unique style blends traditional techniques with modern influences.",
        'Developing strong leadership qualities is crucial for managing teams effectively.',
        'The architectural design of the building is both innovative and sustainable.',
        'Financial literacy empowers individuals to make informed decisions about their money.',
        'The scientific method relies on observation, hypothesis, experimentation, and analysis.',
        'Maintaining a healthy lifestyle involves regular exercise and a balanced diet.',
        'Effective problem-solving skills are highly valued in various industries.'
    ],
    hard: [
        'The intricate relationship between technological advancement and societal change is a subject of ongoing academic discourse.',
        'Despite the overwhelming evidence supporting climate change, there remains significant political resistance to implementing meaningful policy changes.',
        'Quantum computing promises to revolutionize data processing capabilities, potentially solving complex problems that are currently intractable.',
        'The philosophical implications of artificial intelligence raise profound questions about consciousness, free will, and the nature of humanity itself.',
        'Interdisciplinary collaboration between scientists, artists, and humanists can foster innovative approaches to addressing global challenges.',
        'The epistemological debate concerning the nature of knowledge and justification continues to be a central theme in contemporary philosophy.',
        'The hermeneutic circle highlights the iterative process of understanding a text or phenomenon by moving between its parts and the whole.',
        'Existentialism, with its emphasis on individual freedom and responsibility, has profoundly influenced modern literature and thought.',
        'The bureaucratic complexities often associated with large organizations can impede efficiency and hinder innovation.',
        'The process of cultural assimilation can have both positive and negative consequences for immigrant communities.',
        'Procrastination, a common human tendency, can lead to increased stress and decreased productivity in the long run.',
        'The amelioration of social inequalities requires a multifaceted approach involving economic, educational, and legal reforms.',
        'Ubiquitous computing, with its seamless integration of technology into everyday life, presents both opportunities and challenges for society.',
        'An individual\'s idiosyncratic behavior patterns often reflect a complex interplay of genetic predispositions and environmental influences.',
        'The formation of multinational conglomerates has significant implications for global trade and economic power dynamics.',
        'The ostentatious display of wealth can sometimes be interpreted as a superficial attempt to compensate for underlying insecurities.',
        'The unexpected juxtaposition of contrasting elements in surrealist art challenges conventional perceptions of reality.',
        'Serendipity often plays a significant role in scientific discoveries, where unforeseen observations can lead to groundbreaking insights.',
        'Acquiescence to authority, while sometimes necessary for social order, can also stifle critical thinking and independent judgment.',
        'Belligerent rhetoric in political discourse can escalate tensions and undermine constructive dialogue between opposing viewpoints.'
    ]
};

const paragraphSets = {
    easy: [
        'The small dog ran across the green field. It was a sunny day and the birds were singing. The dog was happy to be outside playing. Its owner watched from a bench nearby. The dog found a stick and brought it back. They played fetch for an hour before going home.',
        'Sarah went to the store to buy some groceries. She needed milk, bread, and eggs. The store was not very crowded. She found everything on her list quickly. At the checkout, she realized she forgot her wallet. Luckily, they accepted mobile payments.',
        'My family went on a vacation to the mountains. We stayed in a cozy cabin with a fireplace. Every morning, we would go for hikes and explore the trails. In the evenings, we played board games and told stories by the fire. It was a wonderful and relaxing trip.',
        'The little girl was drawing with colorful crayons. She drew a big yellow sun, a blue sky, and green grass. There were also some red flowers and a smiling stick figure. She was very proud of her artwork and showed it to her parents.',
        'John loves to play basketball with his friends after school. They meet at the park and practice their shooting and dribbling. Sometimes they play full games with other kids from the neighborhood. It\'s a great way to get exercise and have fun together.',
        'The old house stood on a hill overlooking the town. It had a big front porch with a swing. The paint was peeling, and the garden was overgrown, but it had a certain charm. People said it was haunted, but the new owners weren\'t afraid.',
        'We decided to have a picnic in the park. We packed sandwiches, fruit, and juice. The weather was perfect, with a gentle breeze. We spread out a blanket under a shady tree and enjoyed our lunch. Later, we played frisbee and relaxed in the sun.',
        'The school library is a quiet place where students can read and study. There are many shelves filled with books on different subjects. The librarian is always there to help students find what they need. It\'s a great resource for learning.',
        'My best friend and I like to ride our bikes on the weekends. We explore new paths and trails in the countryside. Sometimes we stop for ice cream at a small shop. It\'s a fun way to see new places and get some exercise.',
        'The baker woke up early in the morning to start making bread. The smell of fresh dough filled the air. He carefully measured the ingredients and kneaded the dough. Soon, warm loaves of bread were ready for the customers.'
    ],
    medium: [
        'Technological innovation has transformed how we communicate in the modern world. Social media platforms allow instant connections across vast distances. However, this connectivity comes with challenges regarding privacy and information accuracy. Many experts suggest maintaining a healthy balance between digital and in-person interactions. As technology continues to evolve, we must adapt while preserving meaningful human relationships.',
        'Climate change presents one of the most significant challenges of our time. Rising global temperatures have led to more frequent extreme weather events. Scientists emphasize the importance of reducing carbon emissions across all sectors of the economy. Renewable energy sources like solar and wind power offer promising alternatives to fossil fuels. Individual actions combined with policy changes will be necessary to address this complex issue effectively.',
        'The principles of sustainable development aim to meet the needs of the present without compromising the ability of future generations to meet their own needs. This involves balancing economic growth, social progress, and environmental protection. Implementing sustainable practices requires collaboration across governments, businesses, and civil society to ensure a healthy planet for all.',
        'Effective leadership involves more than just giving orders; it requires the ability to inspire and motivate others towards a common goal. A good leader possesses strong communication skills, empathy, and the capacity to make difficult decisions. They foster a positive work environment and empower team members to reach their full potential, ultimately driving organizational success.',
        'The study of history provides valuable insights into the complexities of human behavior and societal evolution. By examining past events, we can learn from both successes and failures, gaining a deeper understanding of the forces that shape the present. Historical knowledge encourages critical thinking and helps us to contextualize contemporary issues within a broader framework.',
        'The development of artificial intelligence has opened up numerous possibilities across various industries. From automating repetitive tasks to enabling sophisticated data analysis, AI is transforming the way we work and live. However, it also raises ethical concerns about job displacement, bias in algorithms, and the potential for misuse, necessitating careful consideration of its societal implications.',
        'The importance of biodiversity cannot be overstated. The variety of life on Earth contributes to the stability and resilience of ecosystems, providing essential services such as pollination, water purification, and climate regulation. Human activities are causing a rapid decline in biodiversity, which has far-reaching consequences for the planet and human well-being, highlighting the urgent need for conservation efforts.',
        'The process of globalization has interconnected economies and cultures around the world. While it has facilitated economic growth and the exchange of ideas, it has also led to increased competition and concerns about cultural homogenization. Navigating the complexities of globalization requires international cooperation and a commitment to fair and equitable practices.',
        'Critical thinking is a fundamental skill for navigating the information age. With the constant influx of data and opinions, the ability to analyze information objectively, identify biases, and form reasoned judgments is essential. Cultivating critical thinking skills empowers individuals to make informed decisions and engage in meaningful discourse.',
        'The field of psychology seeks to understand the human mind and behavior through scientific research. It encompasses a wide range of topics, including cognitive processes, emotions, social interactions, and mental health. By studying psychology, we can gain valuable insights into ourselves and others, leading to greater self-awareness and improved interpersonal relationships.'
    ],
    hard: [
        'The intricate interplay between quantum mechanics and general relativity represents one of the most profound unsolved problems in theoretical physics. While quantum theory successfully describes the behaviour of particles at microscopic scales with remarkable precision, Einstein\'s theory of general relativity provides an elegant framework for understanding gravitational interactions at cosmic scales. The apparent incompatibility between these two foundational theories has motivated extensive research into quantum gravity, string theory, and other approaches that seek to unify our understanding of the fundamental forces that govern the universe. The resolution of this theoretical impasse could potentially revolutionise our conception of space, time, and the underlying nature of reality itself.',
        'The development of artificial general intelligence (AGI) raises complex ethical considerations that span philosophical, social, and political domains. Unlike narrow AI systems designed for specific tasks, AGI would possess the capacity for human-level cognition across diverse contexts, potentially including self-awareness and autonomous goal-setting. This prospect necessitates careful deliberation regarding the implementation of robust safety protocols, the establishment of appropriate regulatory frameworks, and the equitable distribution of benefits and risks across society. Furthermore, the emergence of AGI would likely transform our understanding of consciousness, personhood, and the distinctive qualities that define humanity. Navigating this technological frontier requires unprecedented collaboration among scientists, ethicists, policymakers, and global stakeholders to ensure that advanced artificial intelligence systems align with human values and promote collective flourishing.',
        'The philosophical underpinnings of liberalism, with its emphasis on individual rights, freedoms, and limited government, have shaped the political landscape of many Western democracies. However, contemporary debates often revolve around the tension between individual liberty and collective responsibility, the role of the state in addressing social and economic inequalities, and the challenges posed by issues such as globalization and technological disruption. Examining the core tenets of liberal thought and its historical evolution is crucial for understanding current political ideologies and navigating the complex challenges facing modern societies.',
        'The study of postcolonial literature offers critical perspectives on the legacies of colonialism and imperialism, exploring the ways in which historical power dynamics continue to shape cultural identities, social structures, and political realities in formerly colonized regions. These narratives often challenge Eurocentric perspectives, amplify marginalized voices, and examine the complex processes of decolonization, cultural hybridity, and the ongoing struggle for self-determination. Engaging with postcolonial texts provides valuable insights into the enduring impact of colonialism and the diverse experiences of individuals and communities navigating its aftermath.',
        'The field of cognitive neuroscience seeks to elucidate the neural mechanisms underlying mental processes such as perception, attention, memory, language, and decision-making. By employing a range of neuroimaging techniques and computational models, researchers aim to understand how the brain gives rise to complex cognitive functions. Advances in cognitive neuroscience have significant implications for our understanding of neurological disorders, the development of educational strategies, and the enhancement of human cognitive abilities. Further exploration of the brain-mind relationship promises to yield profound insights into the nature of consciousness and the complexities of human thought.',
        'The principles of quantum entanglement, a bizarre phenomenon in quantum mechanics where particles become linked in such a way that they share the same fate no matter how far apart they are, have profound implications for our understanding of reality. Entangled particles defy classical intuition, suggesting a deep interconnectedness at the fundamental level of the universe. This phenomenon is not only of theoretical interest but also forms the basis for emerging technologies such as quantum computing and quantum communication, which hold the potential to revolutionize information processing and secure data transmission.',
        'The sociological concept of social capital refers to the networks of relationships among people who live and work in a particular society, enabling that society to function effectively. Social capital encompasses trust, norms, and social connections that facilitate cooperation and collective action. High levels of social capital are often associated with greater civic engagement, improved public health, and enhanced economic prosperity. Understanding the factors that contribute to the formation and maintenance of social capital is crucial for building strong and resilient communities.',
        'The discipline of linguistics explores the nature of human language, its structure, evolution, and use in social and cultural contexts. It encompasses diverse subfields such as phonetics, phonology, morphology, syntax, semantics, and pragmatics. By investigating the intricate systems that underlie human communication, linguists gain insights into the cognitive capacities that enable language acquisition and processing, the ways in which language shapes thought and culture, and the processes of language change over time. The study of linguistics provides a deeper appreciation for the complexity and richness of human language.',
        'The ethical framework of utilitarianism, which posits that the morally right action is the one that maximizes overall happiness or well-being, has been a highly influential force in moral philosophy. However, it also faces significant criticisms regarding its potential to disregard individual rights and the difficulties in accurately predicting and comparing the consequences of different actions. Exploring the strengths and weaknesses of utilitarianism and comparing it with other ethical theories, such as deontology and virtue ethics, is essential for developing a nuanced understanding of moral reasoning and decision-making.',
        'The field of political ecology examines the relationships between political, economic, and social factors with environmental issues and changes. It challenges purely environmental explanations for ecological problems, arguing that power dynamics, resource distribution, and social inequalities play a crucial role in shaping environmental outcomes. By analyzing the political and economic forces that drive environmental degradation, political ecology seeks to promote more just and sustainable environmental policies and practices.'
    ]
};

// Export the data sets for use in the main script
export { wordSets, sentenceSets, paragraphSets };
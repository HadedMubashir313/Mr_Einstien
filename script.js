const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

navigation?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuButton?.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Menu';
    });
});

const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 })
    : null;

function reveal(element) {
    if (revealObserver) {
        revealObserver.observe(element);
    } else {
        element.classList.add('visible');
    }
}

document.querySelectorAll('.reveal').forEach(reveal);

const publications = [
    {
        year: '1905',
        title: 'On a Heuristic Viewpoint Concerning the Production and Transformation of Light',
        description: 'Proposed light quanta to explain phenomena including the photoelectric effect.',
        url: 'https://en.wikisource.org/wiki/On_a_Heuristic_Viewpoint_Concerning_the_Production_and_Transformation_of_Light'
    },
    {
        year: '1905',
        title: 'On the Motion of Small Particles Suspended in Liquids at Rest',
        description: 'Explained Brownian motion using molecular theory.',
        url: 'https://en.wikipedia.org/wiki/Annus_Mirabilis_papers'
    },
    {
        year: '1905',
        title: 'On the Electrodynamics of Moving Bodies',
        description: 'Introduced the special theory of relativity.',
        url: 'https://en.wikisource.org/wiki/On_the_Electrodynamics_of_Moving_Bodies'
    },
    {
        year: '1905',
        title: 'Does the Inertia of a Body Depend Upon Its Energy Content?',
        description: 'Introduced the mass-energy relation associated with E = mc².',
        url: 'https://en.wikisource.org/wiki/Does_the_Inertia_of_a_Body_Depend_Upon_Its_Energy_Content%3F'
    },
    {
        year: '1916',
        title: 'The Foundation of the General Theory of Relativity',
        description: 'Presented the mathematical foundation of general relativity.',
        url: 'https://en.wikipedia.org/wiki/General_relativity'
    },
    {
        year: '1917',
        title: 'On the Quantum Theory of Radiation',
        description: 'Developed ideas about spontaneous and stimulated emission.',
        url: 'https://en.wikipedia.org/wiki/On_the_Quantum_Theory_of_Radiation'
    }
];

const stories = {
    "light": {
        "title": "On a Heuristic Point of View about the Creation and Conversion of Light",
        "year": "1905",
        "description": "Einstein introduces his light-quantum hypothesis and examines how light exchanges energy with matter.",
        "url": "https://en.wikisource.org/wiki/On_a_Heuristic_Point_of_View_about_the_Creation_and_Conversion_of_Light",
        "image": "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=850&q=75&auto=format&fit=crop"
    },
    "clock": {
        "title": "On the Electrodynamics of Moving Bodies",
        "year": "1905",
        "description": "Einstein develops special relativity, examining simultaneity, moving clocks, and electromagnetic phenomena.",
        "url": "https://en.wikisource.org/wiki/On_the_Electrodynamics_of_Moving_Bodies_(1920_edition)",
        "image": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=850&q=75&auto=format&fit=crop"
    },
    "music": {
        "title": "The Development of Our Views on the Composition and Essence of Radiation",
        "year": "1909",
        "description": "Einstein investigates radiation and how its behavior raises questions about classical physics.",
        "url": "https://en.wikisource.org/wiki/The_Development_of_Our_Views_on_the_Composition_and_Essence_of_Radiation",
        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=850&q=75&auto=format&fit=crop"
    },
    "stars": {
        "title": "The Field Equations of Gravitation",
        "year": "1915",
        "description": "Einstein presents the gravitational field equations central to general relativity.",
        "url": "https://en.wikisource.org/wiki/The_Field_Equations_of_Gravitation",
        "image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=850&q=75&auto=format&fit=crop"
    },
    "curiosity": {
        "title": "Time, Space, and Gravitation",
        "year": "1919",
        "description": "Einstein explains the changing understanding of space, time, and gravity for a wider readership.",
        "url": "https://en.wikisource.org/wiki/Time,_Space,_and_Gravitation",
        "image": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=850&q=75&auto=format&fit=crop"
    },
    "sea": {
        "title": "Geometry and Experience",
        "year": "1921",
        "description": "Einstein considers the relationship between geometry, physical measurement, and experience.",
        "url": "https://en.wikisource.org/wiki/Geometry_and_Experience",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=850&q=75&auto=format&fit=crop"
    }
};

const articleTexts = {
    'light': [
        'At the beginning of the twentieth century, physicists understood many properties of light through waves. Yet certain observations about the way light interacts with matter were difficult to explain using that picture alone. Einstein approached these puzzles by asking whether energy carried by light might sometimes behave as separate, concentrated quantities rather than as an endlessly divisible flow.',
        'In his 1905 paper, Einstein considered how the energy of radiation is distributed and how matter responds to it. His proposal was that a beam of light can behave, in relevant circumstances, as though its energy comes in distinct units. The size of each unit is proportional to the frequency of the light. High-frequency light therefore transfers more energy per unit than low-frequency light.',
        'This idea helped account for the photoelectric effect: when light strikes certain metals, electrons can be released. The decisive point is not simply how bright the light is. There is a frequency threshold below which electrons are not emitted, even when the light is intense. Above that threshold, the energy of emitted electrons depends on the light’s frequency. Brightness largely affects how many electrons can be released.',
        'Einstein also connected his proposal with other phenomena involving radiation. His hypothesis was bold because wave theory had already explained interference and diffraction so successfully. The new picture did not erase those results. Instead, it exposed a deeper question about how light could show different behaviors in different experiments. These questions became central to the development of quantum physics.',
        'The proposal had an important consequence for scientific method. Two models can each explain part of an experiment and still leave something fundamental unanswered. Einstein compared the statistical behavior of radiation with the energy changes occurring in matter. This helped turn a seeming technical anomaly into a question about the nature of energy itself.',
        'The light-quantum account also made testable predictions. Under appropriate conditions, increasing light frequency increases the maximum kinetic energy of emitted electrons, while increasing intensity at fixed frequency primarily changes the number of electrons emitted. Later measurements established this relationship with impressive precision.',
        'The importance of the 1905 study extends beyond one experiment. It inspired debate about what a quantum is and why classical waves remain useful. Later quantum mechanics developed a more complete framework that Einstein himself continued to scrutinize. His paper remains a striking example of creative reasoning guided by evidence.'
    ],
    'clock': [
        'Einstein’s 1905 work on electrodynamics began with a striking conflict. The laws of mechanics were generally understood through motion relative to observers, while the equations of electromagnetism seemed to give light a special role. Einstein asked how the laws of physics could remain consistent for observers moving steadily with respect to one another.',
        'He began with two principles: the laws of physics have the same form in every inertial reference frame, and light in empty space travels at the same speed for all such observers. From these assumptions, he reconsidered the meaning of measuring time and distance. A clock is not merely a universal referee; the time it records must be understood together with the motion of the observer using it.',
        'A major consequence is the relativity of simultaneity. Two events judged simultaneous in one frame need not be simultaneous in another frame moving relative to the first. Einstein described practical ways of synchronizing clocks using light signals. Those procedures clarified why the word “now” does not identify a universal instant for every observer.',
        'The paper went on to derive relationships now known as the Lorentz transformations. These explain why moving clocks are measured to run differently and why lengths measured along the direction of motion depend on the observer’s frame. Although these effects are small at ordinary speeds, they become important when speeds approach that of light. Special relativity reshaped the foundations of modern physics by joining space and time within a consistent theory.',
        'This new account was not an assertion that every observer sees all quantities in the same way. Instead, Einstein identified what must remain invariant—the laws and the speed of light—and worked out how measured times and distances must transform to preserve that consistency. The result is mathematically precise rather than a matter of opinion.',
        'A consequence is that time intervals and spatial separations depend on how events are situated relative to an observer. This does not mean that clocks malfunction in motion. Properly built clocks measure the time along their own paths, and comparing clocks requires a clear account of those paths.',
        'Special relativity has since become essential to particle physics and the operation of precise timing systems. Its conceptual difficulty comes from the gap between ordinary experience, where relative speeds are modest, and environments where relativistic effects become significant. The theory shows how careful definitions can transform a scientific puzzle into a new view of nature.'
    ],
    'music': [
        'In 1909, Einstein returned to an unresolved problem: what is radiation actually like? Classical electromagnetic theory described light as a wave, while quantum ideas suggested that exchanges of energy could occur in distinct amounts. Both descriptions captured important evidence, but neither was an entirely comfortable explanation for everything physicists observed.',
        'Einstein examined statistical fluctuations in radiation. Imagine measuring the energy inside a small region: the amount does not remain perfectly fixed. By studying how the fluctuations depend on average energy and frequency, he found a result containing two kinds of contributions. One matched the behavior expected from classical waves, while the other resembled the fluctuations of independent energy packets.',
        'The two contributions suggested that a satisfactory theory of light would need to explain both aspects without treating them as unrelated accidents. Einstein was not presenting a complete modern theory of photons. Rather, he was making a careful argument that existing physical descriptions were incomplete.',
        'This paper is important because it pushed physicists toward the wave–particle duality that later became familiar in quantum mechanics. It shows Einstein as an investigator of open questions, not merely the author of finished answers. He used mathematics to expose where successful theories still failed to provide a unified understanding of nature.',
        'The fluctuation argument mattered because it made the conflict measurable. Rather than simply arguing that light looked like both a wave and a stream of particles, Einstein studied how the size of random energy fluctuations should depend on the amount of radiation in a region. A mathematical expression revealed contributions of different physical characters.',
        'In the years that followed, scientists developed increasingly sophisticated experimental and theoretical approaches to these questions. The modern photon concept emerged from this broader history; the 1909 paper represents a significant step, not a completed quantum theory.',
        'Seen in context, the paper illustrates Einstein’s characteristic approach: seek a simple question that an accepted model cannot fully answer, derive concrete consequences, and keep the tension visible until a stronger theory becomes possible.'
    ],
    'stars': [
        'For centuries, gravity had been described as a force acting between masses. Newton’s equations successfully explained the movement of planets and falling objects, but Einstein sought a description consistent with his newer understanding of space, time, and physical laws.',
        'Einstein’s general theory of relativity treats gravity as a property of the geometry of spacetime. Matter and energy affect that geometry, and the resulting geometry shapes the movement of objects and light. In this framework, a planet orbiting a star can be understood as following a path through curved spacetime rather than being pulled by an invisible force in an otherwise rigid stage.',
        'The field equations Einstein presented in 1915 connect spacetime curvature with the distribution of matter and energy. They are mathematical relationships, not a simple drawing of a rubber sheet. Their solutions describe how gravity behaves in specific circumstances, from weak gravitational fields to the extreme environments studied in modern astrophysics.',
        'The theory offered explanations for phenomena that had challenged earlier accounts, including an additional part of Mercury’s orbital precession. It also predicted that the path of light would be affected by gravity. Later observations helped test these predictions, while subsequent research revealed black holes, gravitational waves, and other consequences of the theory. Einstein’s equations remain central to contemporary gravitational physics.',
        'The equations are difficult partly because spacetime curvature and the matter distribution influence one another. A solution usually requires assumptions about symmetry, matter, or boundary conditions. Yet the theory can recover familiar Newtonian behavior when gravitational fields and speeds are sufficiently small.',
        'As astronomy and instrumentation improved, general relativity faced increasingly demanding tests. Measurements of light deflection, gravitational redshift, orbital dynamics, and gravitational waves all probe different consequences of the same framework. These tests are not all part of Einstein’s original 1915 paper; they belong to the theory’s subsequent scientific history.',
        'General relativity has limitations as well. Its relationship with quantum theory remains unsettled in extreme regimes. That unresolved problem does not diminish the power of the 1915 achievement. It is a reminder that a successful theory can also make new unanswered questions visible.'
    ],
    'curiosity': [
        'After the First World War, interest in relativity spread beyond universities. In his 1919 essay on time, space, and gravitation, Einstein explained why newer physics called for a revision of ideas that had seemed obvious in daily life. People commonly treat space as a fixed container and time as a clock ticking identically everywhere. Those assumptions work well in ordinary situations, but they are not fundamental laws of nature.',
        'Einstein’s discussion linked the concept of measurement to the physical conditions in which measurements are made. The distance between places and the interval between events cannot always be described independently of motion and gravitation. What matters is the relation between observers, their clocks, and the signals they use.',
        'He also described how the general theory of relativity changed the understanding of gravity. Instead of giving space an unchanging shape, the theory lets physical conditions influence its geometry. The bending of starlight by the Sun offered a notable opportunity to examine that prediction. Reports from the 1919 eclipse expeditions helped bring his ideas to worldwide attention, although measurements and their interpretation continued to be examined and refined.',
        'The essay demonstrates a different part of Einstein’s work: explaining difficult ideas to a general audience. Its central lesson is not that everyday experience is useless, but that scientific understanding grows by testing familiar assumptions against precise measurements and logical consistency.',
        'One of the essay’s most important distinctions concerns familiar words. Terms such as distance and simultaneity appear obvious until scientists ask exactly how they are measured. Einstein insisted that physical definitions involve clocks, measuring devices, and observable signals, not only philosophical intuition.',
        'The popular attention surrounding the 1919 eclipse observations demonstrated how deeply a scientific idea can affect culture. Newspaper reports sometimes simplified or exaggerated its implications. The serious scientific claim was more specific: gravity should influence light propagation in ways susceptible to careful observation.',
        'Einstein’s public writing therefore served a purpose different from his technical research papers. It allowed nonspecialists to understand why the questions mattered. The lasting lesson is that scientific revolutions often begin by making everyday assumptions precise enough to test.'
    ],
    'sea': [
        'Geometry may first seem to be a collection of exact statements about lines, angles, and shapes. Einstein’s 1921 lecture on geometry and experience explored how those abstract statements relate to the physical world. A theorem in pure mathematics follows from chosen definitions and axioms; applying geometry to measured objects also requires assumptions about how physical things behave.',
        'For example, the use of rigid measuring rods connects an abstract idea of length to a real experiment. If measuring rods, clocks, and the paths of light are affected by their physical surroundings, the geometry assigned to space cannot be decided by pure reasoning alone. Observation becomes part of the answer.',
        'This distinction was especially important after general relativity. The theory describes gravitation using curved spacetime, so the geometry relevant to actual measurements is not necessarily the flat geometry familiar from school. Whether a geometric model describes the physical world must be tested through its consequences.',
        'Einstein’s essay offers a broader reflection on science. Mathematics supplies logical structures of great precision, but evidence is needed to decide how they connect to nature. The strength of physics comes from bringing abstract reasoning together with experiment, rather than treating either as sufficient by itself.',
        'The distinction between formal geometry and physical geometry becomes clearer through an example. In mathematics, relationships among shapes follow from stipulated axioms. In physics, one must additionally determine whether those shapes and measuring procedures accurately represent the world. A physical ruler, unlike an abstract line, has material properties.',
        'General relativity made this distinction unusually important. The geometry used to represent gravitational phenomena depends on the distribution of energy and matter. Observations constrain whether that geometrical description is appropriate for the phenomena under study.',
        'Einstein’s argument has significance beyond relativity. It describes a partnership between mathematics and experiment: mathematics provides coherent possibilities, while the physical sciences investigate which possibilities correspond to experience. Neither part can replace the other.'
    ]
};

const articleDialog = document.querySelector('.blog-dialog');
const articleImage = document.querySelector('#dialog-image');
const articleContent = document.querySelector('#dialog-content');
let previousFocus = null;

function openStory(key) {
    const story = stories[key];
    if (!story || !articleDialog) return;

    previousFocus = document.activeElement;
    articleDialog.querySelector('#dialog-title').textContent = story.title;
    articleImage.src = story.image;
    articleImage.alt = `Scientific imagery accompanying ${story.title}`;
    articleContent.replaceChildren();

    const date = document.createElement('p');
    date.className = 'article-meta';
    date.textContent = `Albert Einstein · ${story.year}`;

    const designation = document.createElement('p');
    designation.className = 'article-description';
    designation.textContent = 'Complete educational article about Einstein’s published research; this is not the original paper text.';

    const articleBody = document.createElement('div');
    articleBody.className = 'article-body';

    articleTexts[key].forEach(paragraph => {
        const block = document.createElement('p');
        block.textContent = paragraph;
        articleBody.append(block);
    });

    articleContent.append(date, designation, articleBody);

    articleDialog.showModal();
    articleDialog.querySelector('.dialog-scroll').scrollTop = 0;
}

document.querySelectorAll('.blog-card[data-story]').forEach(card => {
    card.addEventListener('click', () => openStory(card.dataset.story));
    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openStory(card.dataset.story);
        }
    });
});

articleDialog?.querySelector('.dialog-close')?.addEventListener('click', () => articleDialog.close());
articleDialog?.addEventListener('close', () => previousFocus?.focus());




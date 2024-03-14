// these are our routes

const express = require('express')
const router = express.Router()

// data source for disease data.
const diseaseData = [
    {
        "id": "1",
        "name": "Anthracnose",
        "altName": "Microdochium panattoniana",
        "description": "The symptoms first appear as small (2-3mm), watersoaked, light-brown spots on the outer leaves - often along the midrib of the lettuce. As the spots mature, the centres fall out giving the disease its characteristic shot-hole appearance. Severe infestations reults in leaf die-back, stunting, and poor head formation. Secondary organisms, particularly soft-rot bacteria, can also invade the spots.",
        "controls": [
            "Healthy transplants",
            "Rotate with non-host crops",
            "Avoid planting in fields with a history of the disease",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "If overhead sprinklers, time irrigation to allow rapid drying of foliage",
            "Incorporate crop debris into soil after harvest",
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: cupric hydroxide, chlorothalonil, mancozeb, thiram",
            "Systemic sprays (< 3 sprays per season): azoxystrobin, prochloraz (head lettuce)"
        ]
    },
    {
        "id": "2",
        "name": "Black root rot",
        "altName": "Thielaviopsis basicola",
        "description": "Infected plants appear healthy but are slow growing and remain stunted in comparison with healthy plants. Lower leaves of severe;y affected plants may be yellow. Lesions on roots are dark-brown and 4-8mm long. The lesions may coalesce and severely affect the entire root system, and in some extreme cases - roots are reduced to stubs.",
        "controls": [
            "Plant varieties with resistance to the disease",
            "Avoid planting consecutive lettuce crops",
            "Ensure soil is free draining",
            "Prevent movement of black root rot-infested soil to non-infested fields",
            "Rotate out of lettuces for >4 years",
            "Pre-plant soil fumigation will give short term control"  
        ],
        "recommendation": "Fungicide seed treatment: a.i.'s may include:",
        "treatments": [
            "Myclobutanil", 
            "Triadimenol"
        ] 
    },
    {
        "id": "3",
        "name": "Bottom rot",
        "altName": "Rhizoctonia solani",
        "description": "The first noticeable symptom is usually wilting of the outer leaves. Slightly sunken, small rust-to-brown spots on lower leaves - usually on the underside of the midrib. Under warm, wet conditions, the spots may rapidly expand, turn brown and rot infected tissues. Infection progresses upward in the plant and, ultimately, the entire head decays and turns slimy-brown. Brown web-like mycelial growth is often visible in infected tissues. Small, irregularly shaped brown-black solerotia, may be seen found in the fungal mould between dead leaves.",
        "controls": [
            "Correct plant spacing to avoid over-crowding",
            "Plant varieties with erect growth habit to avoid foliage contact with soil",
            "Plant in raised, well-drained beds",
            "Control weeds",
            "Avoid irrigation near harvest",
            "Crop rotate with non-susceptible crops (e.g. Alliums, corn, cereals)",
            "Deep ploughing to bury infected lettuce debris"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s include:",
        "treatments": [
            "Systemic sprays (< 3 sprays per season): iprodione. boscalid"
        ]
    },
    {
        "id": "4",
        "name": "Cercospora leaf spot",
        "altName": "Cercospora longissima",
        "description": "Small brown spots (<10 mm diam.), surrounded by a pale green halo. Later, the spots enlarge and form angular areas of brown damage bounded by leaf veins. White spots are often seen in centre of lesions. When disease is severe, the necrotic lesions coalesce, covering much of the leaf. The disease progresses from older outer leaves to newer leaves.",
        "controls": [
            "Well-drained plots, free of the disease",
            "Use healthy seed",
            "Space plants to facilitate good air circulation",
            "Preferably, avoid overhead irrigation",
            "Control weeds",
            "Avoid planting consecutive lettuce crops",
            "Incorporate crop debris into soil after harvest"
        ],
        "recommendation": "Apply recommended fungicides = a.i.'s may include:",
        "treatments": [
            "Preventative sprays: mancozeb, chlorothalonil",
            "Systemic sprays (< 3 sprays per season): azoxystrobin"
        ]
    },
    {
        "id": "5",
        "name": "Damping-off",
        "altName": "Pythium, Rhizoctonia",
        "description": "Damping-off pathogens can infect young plants pre- and post-emergence. Pre-plant infection can result in absence of germination. On emerged seedlings, dark, water-soaked lesions form on roots and stem near soil surface. The lesions girdle the stem causing the plants to wilt, turn yellow and die. Partially-girdled plants and those with affected roots may be stunted. Roots appear brown and mushy. Rhizoctonia damping off is similar to Pythium except the lesions are reddish-brown to black lessions, and are not water-soaked.",
        "controls": [
            "Use high quality, disease-free seeds",
            "Seed treatments (captan, thiram)",
            "Avoid planting in compacted soils",
            "Raised beds for better drainage",
            "Avoid over-watering",
            "Pathogen-free irrigation water",
            "Control soil insects"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Pythium sprays/drenches: propamocarb metalaxyl, menfenoxam, fosetyl-aluminium, fenamidone",
            "Rhizoctonia drenches: pentachloronitrobenzine PCNB + captan, thiophanate-methyl"
        ]            
    },
    {
        "id": "6",
        "name": "Downy mildew",
        "altName": "Bremia lactucae",
        "description": "Lettuce is susceptible at all growth stages. The older leaves are usually the first infected, developing scattered, angular, light green to yellow areas of variable size on the upper side. These patches turn brown and develop a downy white mycelium on the lower surface of the leaf associated with the brown areas. Spores form from this mycelium.",
        "controls": [
            "Grow resistant cultivars",
            "Monitor crop infection",
            "Wider spaced plantings to allow good air movement and spray penetration",
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: mancozeb, propineb",
            "Systemic sprays (< 3 sprays per season): cymoxanil, propamocarb, oxadyxil, metalaxyl"
        ]
    },
    {
        "id": "7",
        "name": "Drop",
        "altName": "Sclerotinia sclerotiorum and S. minor",
        "description": "The disease initially causes wilting of the outermost leaves in contact with the soil, giving the plant a stressed appearance. This is followed by wilting of the entire plant, including the head, leaving layers of the plant flattened on the ground. A brown watery decay extends through infected plant tissues. In moist conditions a characteristic cottony white mycelium develops on infected areas and this produces small hard, black irrgularly-shaped sclerotia.",
        "controls": [
            "Avoid planting in fields with a history of Sclerotinia",
            "Raised beds for better drainage",
            "Do not apply excessive nitrogen fertiliser",
            "Sprinkler irrigation can increase disease incidence",
            "Remove infected plants",
            "Post harvest ploughing to deeply-bury sclerotia",
            "Rotate lettuces with non-host crops"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Systemic sprays (< 3 sprays per season): iprodione, cyprodinil/fludioxonil, carbendazim, penthiopyrad, procymidone, boscalid"
        ]
    },
    {
        "id": "8",
        "name": "Fusarium wart",
        "altName": "Fusarium oxyporum f.sp. lactucae",
        "description": "Affected plants wilt, often do not form heads, may collapse and die. Diseased plants are commonly stunted with one or more yellow leaves. The leaf yellowing may be on one side of a leaf. The leaf edges may be brown and dried. A rusty-brown discolouration will be seen in the vascular tissues of the stem and tap=root. Rotting at the base of the taproot may also occur.",
        "controls": [
            "Avoid planting in fields with a history of Fusarium wilt",
            "Grow resistent cultivars",
            "Use high quality, disease-free seed",
            "Seed treatments (carbendazim, prochloraz)",
            "Prevent movement of soil and crop debris from infested fields",
            "Rotate lettuces with non-host crops"
        ],
        "recommendation": "Fungicide applications in field are generally ineffective.",
        "treatments": [
            ""
        ]
    },
    {
        "id": "9",
        "name": "Grey mould",
        "altName": "Botrytis cinerea",
        "description": "Lower leaves in contact with the soil develop a soft, mushy, brown/grey rot. Senescent or damaged leaves in contact with the soil are particularly susceptible to infection. The disease spreads to healthy plant tissues including the main stem and head. A characteristic fluffy, light grey growth covers diseased areas. Black sclerotia (1-3mm diam.) may form on infected tissues. When the entire plant wilts and collapses the disease resembles Sclerotinia drop. Seedling transplants can become infected when lower leaf stems are in contact with the soil - resulting in death of transplant.",
        "controls": [
            "Plant in well-drained soil",
            "Minimise plant damage - especially at planting",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "Avoid excessive nitrogen fertilizer",
            "Control other diseases since infection often occurs on damaged tissues",
            "Deeply incorporate crop debris into soil after harvest"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Systemic sprays (< 3 sprays per season): iprodione, cyprodinil/fludioxonil, carbendazim, penthiopyrad, procymidone, boscalid"
        ]
    },
    {
        "id": "10",
        "name": "Powdery mildew",
        "altName": "Erysiphe cichoracearum",
        "description": "The first symptom is small white mycelial patches on older, lower leaves. As the disease progresses, the white powdery areas increase, coalesce and merge, often giving diseased leaves a powdery or dusty appearance. Affected tissues are often chlorotic with irregular brown lesions. Infected leaves may have some degree of twisting and buckling.",
        "controls": [
            "Eliminate plant debris from plots or bury it deeply",
            "Crop rotation",
            "Balanced fertilisation",
            "Destroy powdery mildew-susceptible weeds",
            "Do not plant near infected crops"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: Sulphur",
            "Systemic sprays (< 3 sprays per season): azoxystrobin. myclobutanil, penthiopyrad"
        ]
    },
    {
        "id": "11",
        "name": "Pythium wilt",
        "altName": "Pythium spp.",
        "description": "Above ground symptoms of Pythium wilt are stunting and wilting and yellowing of outer leaves. The taproot may be deformed, and root system reduced with roots wholly or partially rotted or brown and dead.",
        "controls": [
            "Grow lettuces on well-drained, raised beds",
            "Apply fertilizer rates only within recommended levels",
            "Avoid over-watering",
            "Crop rotation - including ceral crops"
        ],
        "recommendation": "Fungicide applications in field are generally ineffective",
        "treatments": [
            ""
        ]
    },
    {
        "id": "12",
        "name": "Septoria leaf spot",
        "altName": "Septoria lactucae",
        "description": "At first, small (<5 mm) irregularly shaped yellow-to-brown spots develop on older leaves. Later, the spots enlarge, turn brown and dry out - and the centres of the spots may fall out. A yellow border may form around the brown area. If the plant is severely infected, the diseased areas may coalesce forming large necrotic patches. Infected leaves often wilt and plant death may occur. Very small black structures called pycnidia are visible through a hand lens on the brown spots. These pycnidia release spores under moist conditions.",
        "controls": [
            "Use pathogen-free and/or hot water-treated seed",
            "Do not establish new plantings near infected crops",
            "Have well-drained beds",
            "Recude plant density to allow good air-flow",
            "Rotate with non-lettuce crops",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "Time overhead irrigation to allow rapid foliar drying",
            "Avoid working in fields when plants are wet",
            "Deeply incorporate crop debris into soil after harvest"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: copper"
        ]
    },
    {
        "id": "13",
        "name": "Southern blight",
        "altName": "Sclerotium rolfsil",
        "description": "Wilting and yellowing of leaves are often the first obvious disease symptoms. Initially, water-soaked areas develop on the stem at or near the soil line. Rotting of the stems occurs at this point ('collar root') and the entire plant may collapse. Leaves in contact with the soil also becomes infected. White fungal growth covers affected stem tissues and can often be seen on surrounding soil. Small, brown, round sclerotia (2-3 mm diam.) are produced on infected plant tissues.",
        "controls": [
            "Avoid planting in fields with a history of Southern blight",
            "Raised beds for better drainage",
            "Do not apply excessive nitrogen fertilizer",
            "Sprinkler irrigation can increase disease incidence",
            "Remove infected plants",
            "Post harvest ploughing to deeply-bury sclerotia",
            "Rotate lettuces with non-host crops",
            "Don't plant in fields containing un-decayed crop residues",
            "Mulching with black plastic can help reduce disease"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "In-furrow: pentachloronitrobenzine (PCNB) + captan"
        ]
    },
    {
        "id": "14",
        "name": "Stemphylium leaf spot",
        "altName": "Stemphylium botryosum",
        "description": "The disease first appears as small (2-3mm diam.), round light brown spots. Concentric bands in the lesion form a target spot appearance. The spots enlarge and the dead tissue in the centre often drops out. These spots usually occur only on lower, older leaves but may spread under favourable conditions.",
        "controls": [
            "Use disease-tolerant varieties if available",
            "Use pathogen-free and/or fungicide-treated seed",
            "Minimise overhead sprinkler irrigation",
            "Remove black nightshade on headlands",
            "Deeply cultivate to bury crop debris soon after harvest",
            "Remove diseased outer leaves after harvest",
            "Rotate out of Sclerotium rolfsii-susceptible crops"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: mancozeb, chlorothalonil"
        ]
    },
    {
        "id": "15",
        "name": "Verticillium wilt",
        "altName": "Verticullium dahliae",
        "description": "Lead symptoms include angular, necrotic lesions starting from the leaf margins. Some lower leaves wilt, become yellow, then dry out. Infected wrapper leaves adhere tightly to the head. Tiny black microsclerotia (fungal pathogen survival structures) may be visible long the veins of the outer leaves. Severely diseased plants die near crop maturity. A greenish-brown discolouration will be seen in the vascular tissues of the stem and tap-root. Symptoms of Verticillium wilt are very similar to those of Fusarium wilt.",
        "controls": [
            "Avoid planting in fields with a history of Verticillium wilt",
            "Grow resistant cultivars",
            "Use high quality, disease-free seed",
            "Prevent movement of soil and crop debris from infested fields",
            "Remove and dispose of infected plants",
            "Bury crop debris soon after harvest",
            "Rotate out of lettuces (and susceptible crops including pepper, eggplant, tomato, potato) for >4 years"
        ],
        "recommendation": "Fungicide applications in field are generally ineffective.",
        "treatments": [
            ""
        ]
    },
    {
        "id": "16",
        "name": "Bacterial leaf spot",
        "altName": "Xanthomonas campestris pv. vitians",
        "description": "Small (2-5 mm), translucent, irregular or angular water-soaked spots develop on older, outer leaves. These areas develop into dark brown or black spots that have a dark, greasy appearance. If large numbers of spots occur on a leaf, the spots may coalesce and turn much of the leaf black. Older lesions dry out and become papery in texture, but retain the black color.",
        "controls": [
            "Do not plant lettuce in field that had bacterial leaf spot the previous year",
            "Grow resistant varieties",
            "Use high quality, pathogen-free seed",
            "Remove volunteer lettuce and weeds",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "For overhead irrigation, time irrigation for quick drying",
            "Deep-cultivate soon after cutting to bury debris"
        ],
        "recommendation": "Apply recommended bactericides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: copper plus mancozeb"
        ]
    },
    {
        "id": "17",
        "name": "Corky root",
        "altName": "Rhizomonas suberifaciens",
        "description": "Above-ground symptoms (plant stunting, wilting, yellow leaves) usually only occurs in severely affected plants. The disease often causes yellow-brown lesions on the taproots and main lateral roots. Pitting and longitudinal cracks develop on the root surface and the affected areas turn dark brown, and roughened (corky) in appearance. Eventually very little root system remains.",
        "controls": [
            "Grow resistant varieties",
            "Use transplants instead of direct-seeding",
            "Avoid excessive nitrogen fertilizer",
            "Use high beds and well drained fields",
            "Avoid overhead irrigation - use drip irrigation",
            "Rotate with non-host species",
            "Avoid consecutive lettuce crops"
        ],
        "recommendation": "No recommended bactericides",
        "treatments": [
            ""
        ]
    },
    {
        "id": "18",
        "name": "Marginal leaf blight",
        "altName": "Pseudomonas marginalis",
        "description": "The disease first appears as small (1-3 mm diameter) reddish-brown spots and wilting, mainly at the leaf margins. Later, infected tissues become yellow-brown to black, dead, dry and papery. Vascular bundles of wilting leaves show a brown to black necrotic discolouration.",
        "controls": [
            "Use plant spacing or cultivars that allow good ventilation",
            "Provide good drainage to minimise water movement between plants",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "For overhead irrigation, time irrigation for quick drying",
            "Avoid moving infected soil between fields on equipment"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: copper",
            "Systemic sprays: (< 3 sprays per season)"   // there's missing data here about a.i.s
        ]
    },
    {
        "id": "19",
        "name": "Bacterial soft rot",
        "altName": "Erwinia carotovora",
        "description": "The first indications of soft rot are rapid wilting of the outer leaves. Dark, water-soaked areas often occur first on the outer leaves. These form large brown slimy areas which may progress to the inner leaves and the stem. Rotting of leaf bases cause the leaves to wilt. When the rot advances into the stem, the entire plant collapses. The taproot pith rots, turning greenish, then black, in colour, and gelatinous in texture. Bacterial soft rot most commonly occurs in mature plants.",
        "controls": [
            "Use high beds and well drained fields",
            "Space plants to facilitate good air movement",
            "Avoid excessive nitrogen fertilizer",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "For overhead irrigation, time irrigation for quick drying",
            "Avoid working in fields when plants are wet",
            "Reduce damage by machinery to lettuce in the field"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: copper (limited effectiveness)",
        ]
    },
    {
        "id": "20",
        "name": "Varnish spot",
        "altName": "Pseudomonas cochorii",
        "description": "Varnish rot symptoms generally develop as lettuce heads mature. The symptoms are not usually (but not always) visible from the outside. When the outer leaves are removed, the varnish spots can be seen. At first, the varnish spots are small, shiny, and yellow-to-brown in colour - later becoming dark brown to black. The spots can coalesce into a shiny brown discolouration extending along the midrib of the inner leaves and the larger leaf veins. Affected areas remain firm and do not decay although soft-rotting bacteria can gain entry to leaf tissues via the varnish spots.",
        "controls": [
            "Do not plant near varnish spot-infected older crops",
            "Use high beds and well-drained fields",
            "Space plants to facilitate good air movement",
            "Avoid excessive nitrogen fertilizer",
            "Avoid overhead irrigation - use furrow or drip irrigation",
            "For overhead irrigation, time irrigation for quick drying",
            "Avoid working in fields when plants are wet",
            "After harvest, remove and destroy infected plant debris",
            "Rotate out of lettuces for >3 years"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: copper (limited effectiveness)",
        ]
    },
    {
        "id": "21",
        "name": "Beet western yellow",
        "altName": "BWYV",
        "description": "Symptoms of BWYV rarely develop before plants reach rosette stage. Initial symptoms include mild yellow spotting between the veins especially at the tips of older leaves. As the disease progresses, the yellowing extends and older leaves become thickened and almost completely yellow except for green areas close to the veins. Plant stunting or reduction in plant size does not usually occur. BWYV symptoms resemble certain nutrient deficiencies (magnesium and iron). Aphid transmitted.",
        "controls": [
            "Use certified virus-free seed",
            "Plant BWYV-resistant varieties",
            "Do not plant near existing BWYV-infected lettuce crops",
            "Control weeds that harbour BWYV or the aphid vector",
            "Rouge any plants with virus or virus-like symptoms",
            "Deep-cultivate soon after cutting to bury debris",
            "Monitor virus infection and aphid vectors with crop scouting"
        ],
        "recommendation": "Apply recommended insecticides to control aphid vector.",
        "treatments": [
            "",
        ]
    },
    {
        "id": "22",
        "name": "Lettuce mosaic",
        "altName": "LMV",
        "description": "Symptoms include stunting of the lettuce plant and yellowing, twisting, deformation, and downward curling of outer leaves. A defined light-green or yellow mottling or mosaic symptoms is normally seen on the leaves of actively growing plants, and a uniform dull pale green on older plants. The motting is easier to see on cloudy days, and when the leaf is held up to the light. Sometimes, the veins appear clear and may have brown flecks on them. On infected head lettuce, wrapper leaves often will curve back away from the head. The virus is transmitted in seed and by aphids.",
        "controls": [
            "Use certified virus-free seed",
            "Plant LMV-resistant varieties",
            "Do not plant near existing LMV-infected lettuce crops",
            "Control weeds that harbour LMV or the aphid vector",
            "Rogue any plants with virus or virus-like symptoms",
            "Deep-cultivate soon after cutting to bury crop debris",
            "Monitor virus infection and aphid vectors with crop scouting"
        ],
        "recommendation": "Apply recommended insecticides to control aphid vector.",
        "treatments": [
            "",
        ]
    },
    {
        "id": "23",
        "name": "Broad bean wilt",
        "altName": "BBWV",
        "description": "Symptoms include varying degrees of leaf discolouration, chlorotic mottling, interveinal necrosis, and deformation. Infected plants are stunted and produce small, poorly formed heads with loose leaves. Symptoms are similar to those for Lettuce mosaic virus (LMV) and cucumber mosaic virus (CMV).",
        "controls": [
            "Use certified virus-free seed",
            "Plant BBWV resistant varieties",
            "Do not plant near existing BBWV-infected lettuce crops",
            "Control weeds that harbour BBWV or the aphid vector",
            "Rogue any plants with virus or virus-like symptoms",
            "Deep-cultivate soon after cutting to bury debris",
            "Monitor virus infection and aphid vectors with crop scouting",
        ],
        "recommendation": "Apply recommended insecticides to control aphid vector.",
        "treatments": [
            "",
        ]
    },
    {
        "id": "24",
        "name": "Cucumber mosaic",
        "altName": "CMV",
        "description": "Infected plants become pale in colour and develop large brown areas on old leaves, and small brown spots on leaves in the heart. Plants are stunted aand those infected at an early stage develop small heads. Symptoms are similar to those for lettuce mosaic virus.",
        "controls": [
            "Avoid planting new crops adjacent to infected crops",
            "Monitor virus infection and aphid vectors with crop scouting and apply controls if necessary to reduce virus spread (no thresholds are available)"
        ],
        "recommendation": "Apply recommended fungicides - a.i.'s may include:",
        "treatments": [
            "Preventative sprays: ", // missing data here
            "Systemic sprays: (< 3 sprays per)" // missing data here too.
        ]
    },
    {
        "id": "25",
        "name": "Lettuce necrotic yellows",
        "altName": "LNYV",
        "description": "Affected plants are yellow and stunted, often with twisted and malformed leaves. Infected leaves are dull green to yellow, and older leaves on mature plants develop a yellow mottle. The outer leaves are often wilted, bronzed and necrotic. Other symptoms include browning of leaf veins and partial death of the inner leaves. Diseased young plants may turn brown and die, and older plants may develop the yellowing and mottling on one side only. The virus is transmitted by the sowthistle aphid.",
        "controls": [
            "Remove sowthistle weeds and volunteer lettuce plants in and around lettuce crops",
            "Monitor virus infection and aphid vectors with crop scouting"
        ],
        "recommendation": "Apply recommended insecticides to control the aphid vector.",
        "treatments": [
            ""
        ]
    },
    {
        "id": "26",
        "name": "Lettuce big vein disease",
        "altName": "LBVD",
        "description": "Infected lettuces develop characteristic enlarged, clear leaf veins, ruffled or puckered leaves, malformed heads, and stunted growth. Leaf veins and area adjacent to veins turns light yellow causing a 'big vein' effect. When the leaves are held up to the light, the veins quite clearly stand out. Severe stunting at an early stage can prevent head formation or delay and reduce head formation. The virus is transmitted by the fungus Olpidium virulentus.",
        "controls": [
            "Use LBVD-tolerant cultivars if available",
            "Avoid fields with known history of the disease",
            "Don't plant lettuces in poorly drained land fields",
            "Close rotations of lettuce and brassicas should be avoided to reduce Olpidium populations in soil",
            "Do not over-water",
            "Rogue any plants with virus or virus-like symptoms"
        ],
        "recommendation": "Currently no chemical control options are available.",
        "treatments": [
            ""
        ]
    },
    {
        "id": "27",
        "name": "Tomato spotted wilt",
        "altName": "TSWV",
        "description": "On lettuce, the main disease symptoms are yellowing and wilting of leaves, distortion of the central leaves, and a distinct brown russetting and spotting of the leaves. The spots expand and coalesce, forming brown necrotic areas on the leaves. The midrib of infected leaves often has sunken necrotic spots. Diseased plants often do not form heads. The virus is transmitted by thrips.",
        "controls": [
            "Remove TSWV weed hosts and volunteer lettuce plants in and around lettuce crops",
            "Avoid adjacent, sequential plantings to minimise thrips flights between crops - especially if TSWV is present",
            "Monitor virus infection and thrips vector with crop scouting",
            "Remove any plants with virus or virus-like symptoms",
            "Deep-cultivate soon after cutting to bury crop debris"
        ],
        "recommendation": "Apply recommended insecticides to control the thrips vector.",
        "treatments": [
            ""
        ]
    },
    {
        "id": "28",
        "name": "Rootknot nematode",
        "altName": "Meloidogyne spp.",
        "description": "The main symptom of root-knot nematodes is the formation of galls or knots on the root system. The galls range in size from 1-6 mm. Infected plants may be stunted and have pale green, or yellowish leaves. The plant may wilt during periods of high temperatures. Infected plants produce smaller, looser heads.",
        "controls": [
            "Maintain sufficient soil moisture",
            "Control weeds in crop",
            "Prevent movement of soil from infested fields",
            "Deep-cultivate soon after cutting to bury crop debris",
            "Rotate lettuce crops with nematode-tolerant crops such as brassicas, onion, grasses",
            "Repeated soil cultivation after harvest during hot, dry weather to expose and desiccate nematodes and eggs"
        ],
        "recommendation": "",
        "treatments": [
            ""
        ]
    },
];

// function to get disease by id
const getDiseaseById = (id) => {
    return diseaseData.find(disease => disease.id === id);
};

// route to get disease by id
router.get('/diseaseData/:id', (req, res) => {
    const diseaseId = req.params.id;
    const disease = getDiseaseById(diseaseId);
    
    // make sure we actually grab a valid disease.
    if (disease) {
        res.json(disease);
    }
    // if we don't grab a valid disease, then the disease doesn't exist in the data set.
    else {
        res.status(404).json({ error: "Disease not found" });
    }
});

// store crop data here.
router.get('/crops', (req, res) => {
    const cropData = 
    [
        {
            "name": "Lettuce",
            "plantParts": [
                {
                    "part": "Roots",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Roots brown and mushy; dark, watery rot in stem/taproot near soil surface; leaves yellow; plants wilted, stunted or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [
                                "Dark brown lesions on roots, lesions may coalesce; in severely diseased plants, roots are reduced to stubs",
                                "Taproot may be deformed; root system reduced; roots rotted or brown/dead; plant may be stunted; outer leaves yellow and wilted",
                                "Plant stunted, wilting or yellowing; roots have brown lesions; show pitting, cracking and/or rough surface; reduced root system",
                                "Plant collapsed or wilting; taproot pith rotting - greenish-to-black in colour and gelatinous in texture",
                            ]
                        },
                        {
                            "subPart": "Nodules and swellings on roots",
                            "questions": [
                                "Galls/knots (<6mm diam.) on roots; infected plants may be stunted and have pale green, or yellowish leaves"
                            ]
                        }
                    ]
                },
                {
                    "part": "Stems",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Lesions or rotting in stem near soil surface; roots brown and mushy; leaves yellow; plants wilted, stunted, or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [            
                                "Stem rot at soil-line (collar-rot); plant may be collapsed; white mycelium covers affected tissues; many small, brown, round sclerotia",
                                "Grey or grey-brown, sunken lesions covered with grey mould"
                            ]
                        },
                        {
                            "subPart": "Internal stem discolouration",
                            "questions": [
                                "Rusty-brown discolouration in stem and taproot vascular tissues; plant wilting/yellowing/stunted/collapsed",
                                "Greenish-brown discoloration in stem and taproot vascular tissues; plant wilting/yellowing/stunted (similar to Fusarium wilt)"
                            ]
                        }
                    ]
                },
                {
                    "part": "Leaves",
                    "subParts": [
                        {
                            "subPart": "Shrivelled and dead leaf margins - with no fungal structures visible",
                            "questions": [
                                "Yellowish translucent areas near leaf margins which form an irregular brown border",
                                "Leaves arched, margins dry; heads loose and unmarketable",
                                "Leaves die from the edge inwards; leaf blades may be blue-green and stiff"
                            ]
                        },
                        {
                            "subPart": "Leaf spots",
                            "questions": [            
                                "Small watersoaked, light-brown spots on the outer leaves (often midrib); centers of older spots fell out - 'shot-hole' appearance",
                                "Rust-brown spots on lower leaf midrib - may enlarge and rot infected tissues; brown mycelium and black sclerotia on infected tissues",
                                "Brown spots with pale green halo; older spots larger, brown and bounded by leaf veins; white spots often in centre of lesions",
                                "Yellow or brown spots dotted with tiny pycnidia (use hand lens); the spots enlarge and dry out; spot centres may fall out",
                                "Round, light brown spots on older leaves; concentric bands in lesion ('target spot'); dead tissue in spot centre - often drops out",
                                "Transluscent water-soaked spots on outer leaves; older spots dark brown/black with greasy appearance - later dry and papery",
                                "Reddish-brown spots; older spots brown-black, dry and papery; leaf margins wilted; vascular bundles of wilting leaves brown-black",
                                "Small, shiny, dark brown to black spots that may coalesce into shiny brown discolouration along the midrib of the inner leaves"
                            ]
                        },
                        {
                            "subPart": "Leaf blotches and blights",
                            "questions": [
                                "Yellowish or brownish, angular blotches with a downy, whitish mildew on the lower surface underneath the brown blotches",
                                "Lower leaves on the soil have a soft, mushy, brown or grey rot; fluffy, light grey growth and small black sclerotia visible in infected tissues",
                                "Leaves in contact with the soil have soft, brown or grey rot; cottony, white mycelium and small black sclerotia visible in infected tissues",
                                "Necrotic lesions starting at leaf margin; lower leaves wilting/yellowing/dying; tiny black microsclerotia may be seen on outer leaf veins",
                                "Dark, water-soaked areas on the outer leaves; forming large brown slimy areas; may progress to inner leaves and stem",
                                "Yellow leaf veins; older leaves thickened and almost completely yellow except for green areas close to the veins"
                            ]
                        },
                        {
                            "subPart": "Leaves deformed or mottled",
                            "questions": [
                                "Yellowing/twisting/deformation/downward curling of outer leaves; light-green or yellow mottling of actively growing plant leaves",
                                "Varying degrees of leaf discolouration, chlorotic mottling, interveinal necrosis, and deformation; infected plants are stunted",
                                "Leaves dull green-yellow; often twisted/malformed; yellow mottle on older leaves; outer leaves often wilted, bronzed. necrotic",
                                "Infected plants have characteristic enlarged, clear leaf veins; ruffled or puckered leaves, malformed heads, and stunted growth",
                                "Leaves yellow/wilted; distorted central leaves; brown russetting and spotting of leaves; midrib may have sunken necrotic spots",
                                "Leaves stiff and erect"
                            ]
                        },
                        {
                            "subPart": "Superficial fungus coatings",
                            "questions": [
                                "White powdery coating on older, lower leaves; affected tissues often chlorotic with irregular brown lesions",
                            ]
                        }
                    ]
                },
            ]
        },
        {
            "name": "Apple",
            "plantParts": [
                {
                    "part": "Roots",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Roots brown and mushy; dark, watery rot in stem/taproot near soil surface; leaves yellow; plants wilted, stunted or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [
                                "Dark brown lesions on roots, lesions may coalesce; in severely diseased plants, roots are reduced to stubs",
                                
                                "Taproot may be deformed; root system reduced; roots rotted or brown/dead; plant may be stunted; outer leaves yellow and wilted",
                                
                                "Plant stunted, wilting or yellowing; roots have brown lesions; show pitting, cracking and/or rough surface; reduced root system",
                                
                                "Plant collapsed or wilting; taproot pith rotting - greenish-to-black in colour and gelatinous in texture"
                            ]
                        },
                        {
                            "subPart": "Nodules and swellings on roots",
                            "questions": [
                                "Galls/knots (<6mm diam.) on roots; infected plants may be stunted and have pale green, or yellowish leaves"
                            ]
                        }
                    ]
                },
                {
                    "part": "Stems",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Lesions or rotting in stem near soil surface; roots brown and mushy; leaves yellow; plants wilted, stunted, or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [
                                "Stem rot at soil-line (collar-rot); plant may be collapsed; white mycelium covers affected tissues; many small, brown, round sclerotia",
                                
                                "Grey or grey-brown, sunken lesions covered with grey mould"
                            ]
                        },
                        {
                            "subPart": "Internal stem discolouration",
                            "questions": [
                                "Rusty-brown discolouration in stem and taproot vascular tissues; plant wilting/yellowing/stunted/collapsed",
                                
                                "Greenish-brown discoloration in stem and taproot vascular tissues; plant wilting/yellowing/stunted (similar to Fusarium wilt)"
                            ]
                        }
                    ]
                },
            ]
        }

    ]
    res.send(cropData)
})

module.exports = router


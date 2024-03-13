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


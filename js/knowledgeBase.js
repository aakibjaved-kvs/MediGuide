/**
 * knowledgeBase.js - Structured client-side database of medical conditions.
 * Used for page rendering and RAG chatbot retrieval.
 * 
 * Medical safety: Educational content only. No copyright infringement.
 * Enhancements: Added cureStatus and stepsToCure fields. Extended to 100 conditions.
 * Enriched: Added recoveryTime, specialist, and diagnosticTests clinical metadata.
 */

const knowledgeBase = [
  {
    "id": "fever",
    "title": "Fever",
    "category": "infectious",
    "keywords": [
      "fever",
      "high temperature",
      "chills",
      "pyrexia",
      "sweating"
    ],
    "summary": "A temporary increase in body temperature, often in response to an illness or infection.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Address the underlying infection (bacterial infections may require prescribed antibiotics, whereas viral infections run their course).",
      "Use over-the-counter fever reducers such as paracetamol (acetaminophen) or ibuprofen to lower body temperature and relieve discomfort.",
      "Stay strictly hydrated by drinking plenty of water, clear broths, or oral rehydration solutions to replace fluids lost through sweating.",
      "Get abundant bed rest to allow your immune system to focus energy on fighting the underlying pathogen.",
      "Apply cool, damp cloths to the forehead and keep the room at a comfortable, cool temperature."
    ],
    "content": {
      "overview": "A fever is a temporary increase in your body's temperature, often due to an illness. It is a sign that your body's immune system is actively fighting off an infection or reacting to an inflammatory trigger.",
      "symptoms": [
        "Body temperature exceeding 38\u00b0C (100.4\u00b0F)",
        "Shivering, shaking, and chills",
        "Sweating and flushing of the skin",
        "Headache and muscle aches",
        "Loss of appetite and dehydration",
        "General weakness and lack of energy"
      ],
      "causes": "A fever occurs when an area in the brain called the hypothalamus resets your body temperature to a higher level. This is usually triggered by infections (viral or bacterial like flu, colds, or UTIs), inflammatory conditions, heat exhaustion, or certain medications and vaccines.",
      "riskFactors": [
        "Close contact with infected individuals",
        "Weakened immune system",
        "Exposure to extreme heat environments",
        "Lack of vaccination against common infectious diseases"
      ],
      "complications": "In most cases, fever is harmless and resolves in a few days. However, extremely high fevers (above 40\u00b0C or 104\u00b0F) can lead to severe dehydration, hallucinations, and, in young children, febrile seizures.",
      "diagnosis": "Confirming a fever is done by measuring body temperature using a digital thermometer (oral, rectal, ear, or forehead). Doctors may perform blood tests, urine tests, or throat swabs to identify the underlying cause.",
      "treatment": "Treatment focuses on relieving discomfort rather than suppressing the fever entirely unless it is very high. Over-the-counter fever reducers such as paracetamol (acetaminophen) or ibuprofen are commonly recommended. Aspirin should never be given to children due to the risk of Reye's syndrome.",
      "homeCare": "Rest is essential. Stay well-hydrated by drinking plenty of water, clear broths, or oral rehydration solutions. Keep the room at a comfortable temperature, wear lightweight clothing, and use a light blanket. Cool or lukewarm damp cloths placed on the forehead can help ease discomfort.",
      "prevention": "Prevent fevers by avoiding the infections that cause them. Wash hands frequently with soap and water, avoid touching your face, stay up to date on vaccinations, and avoid sharing utensils, cups, or personal items with sick individuals.",
      "whenToSeeDoctor": "Consult a doctor if a fever lasts more than 3 days, does not respond to medication, or is accompanied by moderate stiffness in the neck, persistent sore throat, or painful urination. For infants under 3 months, any temperature of 38\u00b0C (100.4\u00b0F) or higher requires immediate medical evaluation.",
      "emergencySigns": [
        "Difficulty breathing or chest pain",
        "Severe, sudden headache",
        "Stiff neck and extreme sensitivity to light",
        "Confusion, extreme lethargy, or difficulty waking up",
        "Seizures or convulsions",
        "New, unexplained skin rash"
      ],
      "relatedConditions": [
        "common-cold",
        "influenza",
        "covid-19",
        "uti"
      ]
    },
    "specialist": "Primary Care Physician",
    "recoveryTime": "3 to 7 days",
    "diagnosticTests": [
      "Body Temperature Monitoring",
      "Complete Blood Count (CBC)"
    ]
  },
  {
    "id": "common-cold",
    "title": "Common Cold",
    "category": "infectious",
    "keywords": [
      "cold",
      "runny nose",
      "sneezing",
      "congestion",
      "sore throat",
      "rhinovirus"
    ],
    "summary": "A mild, highly contagious viral infection of the upper respiratory tract.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Allow the virus to run its natural course (usually 7 to 10 days) as antibiotics are ineffective against viral colds.",
      "Get plenty of rest to support your immune system.",
      "Maintain high fluid intake by drinking water, warm herbal teas, and broths to thin mucus.",
      "Relieve nasal congestion using saline nasal sprays or inhaling steam in a hot shower.",
      "Use over-the-counter symptom relievers, such as decongestants or paracetamol, to alleviate sore throat and headaches."
    ],
    "content": {
      "overview": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It is usually harmless, though it may not feel that way, and is one of the most frequent illnesses globally.",
      "symptoms": [
        "Runny or stuffy nose",
        "Sore throat and coughing",
        "Sneezing and watery eyes",
        "Mild body aches or a low-grade headache",
        "Low-grade fever (more common in children)",
        "Mild fatigue or general feeling of being unwell"
      ],
      "causes": "Although many types of viruses can cause a common cold, rhinoviruses are the most frequent culprit. The virus enters your body through your mouth, eyes, or nose, spreading through airborne droplets when someone sick coughs, sneezes, or talks.",
      "riskFactors": [
        "Age (children under 6 are at highest risk)",
        "Weakened immune system",
        "Time of year (fall and winter are peak seasons)",
        "Exposure in crowded places like schools or public transit",
        "Smoking or exposure to secondhand smoke"
      ],
      "complications": "Colds can occasionally lead to secondary infections, including acute ear infections (otitis media), asthma flare-ups, acute sinusitis, or lower respiratory infections such as bronchitis or pneumonia.",
      "diagnosis": "Most people diagnose a common cold themselves. A medical professional can confirm it through a basic physical examination of the throat, nose, and ears to rule out bacterial infections like strep throat.",
      "treatment": "There is no cure for the common cold. Treatment is supportive and aimed at symptom relief. Decongestants, saline nasal drops, cough syrups, and pain relievers like paracetamol or ibuprofen can reduce discomfort. Antibiotics are completely ineffective against viral colds.",
      "homeCare": "Drink plenty of fluids (water, warm herbal teas, or warm lemon water). Get ample rest to help your body recover. Use a clean humidifier or take a steamy shower to ease nasal congestion. Gargle with warm salt water to soothe a throat.",
      "prevention": "Wash hands thoroughly and frequently with soap. Disinfect high-touch surfaces like doorknobs, keyboards, and phones. Cover your coughs and sneezes with a tissue or your elbow. Maintain distance from anyone who is actively sick.",
      "whenToSeeDoctor": "See a doctor if symptoms worsen or fail to improve after 10 days, if you experience a fever greater than 38.5\u00b0C (101.3\u00b0F) lasting more than 3 days, or if you have significant ear pain or sinus pressure.",
      "emergencySigns": [
        "Severe shortness of breath or wheezing",
        "Inability to swallow or severe pain when swallowing",
        "Chest pain or pressure",
        "Confusion or blue-tinted lips"
      ],
      "relatedConditions": [
        "fever",
        "influenza",
        "covid-19",
        "asthma"
      ]
    },
    "specialist": "Primary Care Physician",
    "recoveryTime": "7 to 10 days",
    "diagnosticTests": [
      "Physical Examination of Throat/Nose"
    ]
  },
  {
    "id": "influenza",
    "title": "Influenza (Flu)",
    "category": "infectious",
    "keywords": [
      "flu",
      "influenza",
      "high fever",
      "body aches",
      "fatigue",
      "dry cough"
    ],
    "summary": "A contagious respiratory illness caused by influenza viruses, featuring sudden onset of high fever and body aches.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "For high-risk individuals, obtain prescription antiviral medications (like oseltamivir) from a doctor within 48 hours of symptom onset.",
      "Isolate at home to prevent spreading the virus to others and ensure absolute bed rest.",
      "Drink generous amounts of water, sports drinks, and clear broths to avoid dehydration.",
      "Use paracetamol or ibuprofen to manage high fever and severe muscle aches.",
      "Monitor closely for secondary bacterial infections (like pneumonia) which would require separate medical treatment."
    ],
    "content": {
      "overview": "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs. Unlike a common cold, flu symptoms usually start suddenly and are much more intense.",
      "symptoms": [
        "Sudden, high fever (typically over 38.8\u00b0C or 102\u00b0F)",
        "Severe muscle or body aches",
        "Chills and sweats",
        "Profound fatigue and weakness",
        "Dry, persistent cough",
        "Headache and sore throat"
      ],
      "causes": "Influenza is caused by influenza A, B, and C viruses. It spreads through respiratory droplets expelled when an infected person coughs, sneezes, or talks, or by touching contaminated surfaces and then touching one's mouth or nose.",
      "riskFactors": [
        "Young children (under 5) and older adults (over 65)",
        "Pregnant individuals",
        "People with chronic conditions (asthma, heart disease, diabetes)",
        "Weakened immune systems",
        "Healthcare workers and caregivers"
      ],
      "complications": "Flu can lead to moderate complications like sinus and ear infections, or severe complications like viral or bacterial pneumonia, inflammation of the heart (myocarditis), brain (encephalitis), or multi-organ failure.",
      "diagnosis": "Doctors can diagnose the flu based on symptoms, especially during flu season. Rapid influenza diagnostic tests (RIDTs) or molecular assays (PCR) using nasal or throat swabs can confirm the virus within minutes to hours.",
      "treatment": "Rest and hydration are key. Antiviral medications (like oseltamivir) may be prescribed by a doctor if started within 48 hours of symptom onset to shorten the illness duration. OTC pain relievers and fever reducers help manage symptoms.",
      "homeCare": "Stay home from work or school to rest and protect others. Drink abundant fluids, such as water, broths, and electrolyte solutions. Use a cool-mist humidifier in your room. Eat simple, bland foods if your appetite is low.",
      "prevention": "The single best way to prevent the flu is to get an annual influenza vaccine. Practice good hand hygiene, cover your mouth and nose when coughing, and avoid close contact with sick individuals.",
      "whenToSeeDoctor": "Consult a doctor if you are in a high-risk group and suspect the flu, or if your symptoms improve but then return with a worse fever and cough, indicating a potential secondary infection.",
      "emergencySigns": [
        "Difficulty breathing or severe shortness of breath",
        "Persistent pain or pressure in the chest or abdomen",
        "Sudden dizziness, confusion, or inability to arouse",
        "Severe muscle pain (inability to walk)",
        "Seizures",
        "Bluish lips or face"
      ],
      "relatedConditions": [
        "fever",
        "common-cold",
        "covid-19",
        "asthma"
      ]
    },
    "specialist": "Primary Care Physician",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Rapid Influenza Diagnostic Test (RIDT)",
      "Nasopharyngeal Swab PCR"
    ]
  },
  {
    "id": "covid-19",
    "title": "COVID-19",
    "category": "infectious",
    "keywords": [
      "covid",
      "coronavirus",
      "sars-cov-2",
      "loss of taste",
      "shortness of breath",
      "cough"
    ],
    "summary": "A highly contagious respiratory disease caused by the SARS-CoV-2 coronavirus, ranging from mild symptoms to severe pneumonia.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "For mild cases, isolate at home, rest, and manage symptoms with over-the-counter pain and fever reducers.",
      "For high-risk individuals, obtain prescription oral antiviral medications (such as Paxlovid) from a doctor within 5 days of symptom onset.",
      "Monitor blood oxygen levels using a home pulse oximeter as guided by a healthcare professional.",
      "Maintain rigorous hydration by drinking water and electrolyte solutions.",
      "Seek emergency hospital care immediately if oxygen levels drop, or if severe breathing difficulties develop."
    ],
    "content": {
      "overview": "COVID-19 is a respiratory illness caused by a coronavirus named SARS-CoV-2, first identified in late 2019. It spreads rapidly and can cause a wide range of symptoms, from mild respiratory discomfort to severe, life-threatening complications.",
      "symptoms": [
        "Fever or chills",
        "Dry cough and shortness of breath",
        "Fatigue and muscle or body aches",
        "New loss of taste or smell",
        "Sore throat, congestion, or runny nose",
        "Nausea, vomiting, or diarrhoea"
      ],
      "causes": "COVID-19 is caused by infection with the SARS-CoV-2 virus. It spreads primarily through respiratory droplets and aerosols when an infected person breathes, talks, coughs, or sneezes, especially in poorly ventilated indoor spaces.",
      "riskFactors": [
        "Advanced age (65 and older)",
        "Underlying medical conditions (diabetes, chronic lung disease, heart disease, obesity)",
        "Being unvaccinated or under-vaccinated",
        "Working in high-exposure environments like healthcare facilities"
      ],
      "complications": "Severe cases can lead to acute respiratory distress syndrome (ARDS), severe pneumonia, blood clots, kidney injury, heart inflammation, and a lingering chronic condition known as 'Long COVID'.",
      "diagnosis": "COVID-19 is diagnosed using molecular tests (like RT-PCR) or rapid antigen tests from nasal swabs or saliva samples. PCR tests are highly sensitive and usually processed in a lab.",
      "treatment": "For mild cases, treatment consists of rest, hydration, and OTC symptom relievers. For individuals at high risk of severe disease, doctors may prescribe oral antiviral medications (such as Paxlovid) if taken early. Severe cases may require hospitalization and oxygen support.",
      "homeCare": "Isolate yourself in a designated room away from others in your household. Stay hydrated and rest. Monitor your blood oxygen levels with a pulse oximeter if advised by a healthcare provider. Wear a high-quality mask if you must be around others.",
      "prevention": "Stay up to date with COVID-19 vaccines and boosters. Ensure good ventilation in indoor spaces, wash hands frequently, and wear a mask in crowded indoor areas, especially during high transmission periods.",
      "whenToSeeDoctor": "Contact a doctor if you test positive and have risk factors like age or chronic disease, or if your mild symptoms do not start to improve after a week of rest.",
      "emergencySigns": [
        "Trouble breathing or severe shortness of breath",
        "Persistent pain or pressure in the chest",
        "New confusion or inability to wake up",
        "Pale, gray, or blue-colored skin, lips, or nail beds"
      ],
      "relatedConditions": [
        "fever",
        "common-cold",
        "influenza",
        "asthma"
      ]
    },
    "specialist": "Primary Care Physician or Pulmonologist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Rapid Antigen Test",
      "RT-PCR Swab Test",
      "Pulse Oximetry"
    ]
  },
  {
    "id": "dengue",
    "title": "Dengue",
    "category": "infectious",
    "keywords": [
      "dengue",
      "mosquito",
      "bonebreak fever",
      "high fever",
      "eye pain",
      "rash"
    ],
    "summary": "A mosquito-borne viral infection causing high fever, severe headache, joint pain, and a characteristic skin rash.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Manage symptoms supportively as there is no specific antiviral cure for the dengue virus.",
      "Take only paracetamol (acetaminophen) to control fever and pain. **Strictly avoid aspirin, ibuprofen, and other NSAIDs** as they can severely increase the risk of internal bleeding.",
      "Get absolute bed rest and minimize physical exertion.",
      "Prevent dehydration by drinking large quantities of oral rehydration salts (ORS), coconut water, and clean water.",
      "Have a doctor monitor your blood platelet counts regularly to watch for signs of Dengue Hemorrhagic Fever."
    ],
    "content": {
      "overview": "Dengue is a viral infection transmitted to humans through the bite of infected Aedes mosquitoes. It is prevalent in tropical and subtropical climates and is sometimes called 'breakbone fever' due to the severe joint and muscle pain it causes.",
      "symptoms": [
        "Sudden, high fever (up to 40\u00b0C or 104\u00b0F)",
        "Severe headache and pain behind the eyes",
        "Severe joint and muscle pain",
        "Nausea, vomiting, and loss of appetite",
        "Skin rash (typically appearing 3-4 days after fever starts)",
        "Mild bleeding (such as nose or gum bleed, or easy bruising)"
      ],
      "causes": "Dengue is caused by one of four closely related dengue viruses (DENV 1-4). It is transmitted when an infected Aedes aegypti or Aedes albopictus mosquito bites a human. It cannot spread directly from person to person.",
      "riskFactors": [
        "Living in or traveling to tropical and subtropical regions",
        "Prior infection with a different serotype of dengue virus (increases risk of severe dengue)",
        "Presence of standing water near dwellings (breeds mosquitoes)"
      ],
      "complications": "A small percentage of cases develop into Severe Dengue (Dengue Hemorrhagic Fever), which causes plasma leakage, severe internal bleeding, fluid accumulation, respiratory distress, and organ impairment.",
      "diagnosis": "Dengue is diagnosed through blood tests, including molecular tests (PCR) to detect viral RNA or serological tests to look for dengue-specific antibodies (NS1 antigen, IgM, IgG).",
      "treatment": "There is no specific antiviral treatment for dengue. Management is supportive. Pain and fever should be treated with paracetamol (acetaminophen). Avoid aspirin, ibuprofen, and other NSAIDs as they can increase the risk of bleeding.",
      "homeCare": "Get absolute bed rest. Stay hydrated by drinking plenty of clean water, oral rehydration salts (ORS), fruit juices, or coconut water to counteract fluid loss from fever and vomiting.",
      "prevention": "Prevent mosquito bites by using insect repellent containing DEET, wearing long-sleeved clothing, and installing window screens. Eliminate standing water in pots, buckets, and tires around the home where mosquitoes lay eggs.",
      "whenToSeeDoctor": "See a doctor immediately if you live in or have recently traveled to a dengue-prone area and develop a sudden high fever and joint pain, so your blood count can be monitored.",
      "emergencySigns": [
        "Severe abdominal pain or persistent vomiting (at least 3 times in 24 hours)",
        "Bleeding from gums or nose, or vomiting blood",
        "Rapid breathing or difficulty breathing",
        "Extreme fatigue, restlessness, or confusion",
        "Sudden drop in temperature combined with cold, clammy skin"
      ],
      "relatedConditions": [
        "fever",
        "malaria",
        "typhoid"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Dengue NS1 Antigen Test",
      "Serology (IgM/IgG) Blood Test"
    ]
  },
  {
    "id": "malaria",
    "title": "Malaria",
    "category": "infectious",
    "keywords": [
      "malaria",
      "plasmodium",
      "mosquito bite",
      "chills",
      "cycling fever",
      "sweats"
    ],
    "summary": "A serious, sometimes fatal disease caused by a parasite that infects a certain type of mosquito which feeds on humans.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Seek immediate professional medical evaluation. Malaria is a medical emergency and cannot be treated with home remedies.",
      "Complete the full prescribed course of antimalarial medications (such as Artemisinin-based Combination Therapy, or ACTs) to eradicate the parasite from the bloodstream.",
      "In cases of certain parasite species (like Plasmodium vivax), take additional prescribed medications (like primaquine) to clear parasites from the liver and prevent relapse.",
      "Get plenty of rest and stay hydrated with oral rehydration solutions.",
      "Manage fever using paracetamol under medical guidance."
    ],
    "content": {
      "overview": "Malaria is a life-threatening disease caused by Plasmodium parasites, transmitted to humans through the bites of infected female Anopheles mosquitoes. It typically causes cycles of shaking chills, high fever, and sweating.",
      "symptoms": [
        "Cycles of shaking chills (cold stage), followed by high fever (hot stage), and then profuse sweating (sweating stage)",
        "Headache and muscle aches",
        "Fatigue, weakness, and general malaise",
        "Nausea, vomiting, and diarrhoea",
        "Anaemia and jaundice (yellowing of skin and eyes) due to loss of red blood cells"
      ],
      "causes": "Malaria is caused by single-celled Plasmodium parasites. When an infected mosquito bites a human, the parasites enter the bloodstream, travel to the liver to mature, and then infect and destroy red blood cells.",
      "riskFactors": [
        "Living in or traveling to tropical regions, especially Sub-Saharan Africa and parts of South Asia",
        "Not taking prescribed antimalarial preventative medications when traveling",
        "Young children, pregnant individuals, and people with weakened immune systems"
      ],
      "complications": "Severe malaria can lead to cerebral malaria (brain swelling, seizures, coma), severe anaemia, acute kidney injury, fluid accumulation in the lungs (pulmonary oedema), and dangerously low blood sugar.",
      "diagnosis": "Malaria is diagnosed by microscopic examination of a drop of the patient's blood (blood smear) to visualize the parasites, or through rapid diagnostic tests (RDTs) that detect malaria antigens in blood.",
      "treatment": "Malaria is highly curable if diagnosed and treated early. Doctors prescribe specific antimalarial medications (such as Artemisinin-based Combination Therapies or ACTs) depending on the parasite species and geographic resistance patterns.",
      "homeCare": "Malaria cannot be treated at home and requires immediate professional medical care and prescription medications. Once on medication, rest, consume fluids, and take paracetamol to manage fever as directed by your physician.",
      "prevention": "When traveling to malaria-endemic areas, take prescription antimalarial prophylaxis. Sleep under insecticide-treated bed nets, use insect repellent, wear protective clothing, and stay indoors from dusk to dawn when Anopheles mosquitoes are most active.",
      "whenToSeeDoctor": "Seek immediate medical attention if you experience fever and chills while traveling, or within a year after returning from an area where malaria is common.",
      "emergencySigns": [
        "Confusion, severe drowsiness, or loss of consciousness",
        "Difficulty breathing or rapid, shallow breathing",
        "Severe convulsions or fits",
        "Inability to keep liquids or oral medications down",
        "Very dark or cola-colored urine"
      ],
      "relatedConditions": [
        "fever",
        "dengue",
        "typhoid",
        "anaemia"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Thick and Thin Blood Smears",
      "Rapid Diagnostic Test (RDT)"
    ]
  },
  {
    "id": "typhoid",
    "title": "Typhoid",
    "category": "infectious",
    "keywords": [
      "typhoid",
      "salmonella",
      "contaminated water",
      "sustained fever",
      "rose spots",
      "stomach pain"
    ],
    "summary": "A bacterial infection caused by Salmonella Typhi, presenting with prolonged fever, headache, and abdominal discomfort.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Obtain a prescription for antibiotics (such as ciprofloxacin or ceftriaxone) from a healthcare professional.",
      "**Complete the entire course of antibiotics** exactly as prescribed, even if you feel completely better, to prevent relapse and avoid becoming a chronic carrier.",
      "Consume strictly safe, purified, or boiled water and avoid ice.",
      "Eat soft, easily digestible, and well-cooked foods in small, frequent portions to protect the sensitive intestinal lining.",
      "Practice meticulous handwashing with soap after using the bathroom and before eating to avoid spreading the bacteria."
    ],
    "content": {
      "overview": "Typhoid fever is a systemic bacterial infection caused by Salmonella enterica serovar Typhi. It is primarily spread through the ingestion of food or water contaminated with the feces of an infected person or chronic carrier.",
      "symptoms": [
        "Sustained, high fever that increases gradually day by day (often reaching 39\u00b0-40\u00b0C)",
        "Severe headache and generalized weakness",
        "Abdominal pain and discomfort",
        "Constipation or diarrhoea",
        "A rash of flat, rose-colored spots on the chest or abdomen",
        "Dry cough and loss of appetite"
      ],
      "causes": "Typhoid is caused by the bacterium Salmonella Typhi. It is transmitted via the fecal-oral route, usually through drinking water or eating food handled by someone who is shedding the bacteria.",
      "riskFactors": [
        "Living in or traveling to areas with poor sanitation and lack of safe drinking water",
        "Working as a healthcare or laboratory professional handling Salmonella bacteria",
        "Close contact with someone who is infected or is a chronic carrier of typhoid"
      ],
      "complications": "If untreated, typhoid can cause severe complications in the third or fourth week of illness, including intestinal perforation (holes in the intestine causing severe infection) and severe gastrointestinal bleeding.",
      "diagnosis": "Typhoid is diagnosed by culturing the bacteria from samples of blood, stool, urine, or bone marrow. Blood cultures are the most common diagnostic method in the early stages.",
      "treatment": "Typhoid fever requires antibiotic therapy prescribed by a doctor. It is critical to complete the full course of antibiotics even if symptoms disappear, to prevent relapse and the development of drug-resistant strains.",
      "homeCare": "Rest is vital. Drink plenty of safe, purified, or boiled water to prevent dehydration. Eat small, frequent meals of soft, easily digestible foods (like porridge, bananas, and crackers) to avoid irritating the digestive tract.",
      "prevention": "Get vaccinated against typhoid before traveling to high-risk areas. Follow strict food and water safety: drink only boiled or bottled water, avoid ice, eat hot, thoroughly cooked foods, and wash hands meticulously before eating.",
      "whenToSeeDoctor": "Consult a doctor if you experience a persistent, slowly rising fever accompanied by stomach pain and extreme fatigue, especially if you have recently traveled to an endemic area.",
      "emergencySigns": [
        "Sudden, severe abdominal pain or a rigid, bloated stomach",
        "Vomiting blood or passing black, tarry stools",
        "High fever accompanied by severe confusion, delirium, or inability to stand",
        "Extreme shortness of breath and rapid heart rate"
      ],
      "relatedConditions": [
        "fever",
        "dengue",
        "malaria",
        "food-poisoning"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "tuberculosis",
    "title": "Tuberculosis",
    "category": "infectious",
    "keywords": [
      "tuberculosis",
      "tb",
      "chronic cough",
      "coughing blood",
      "night sweats",
      "weight loss"
    ],
    "summary": "A serious infectious bacterial disease that mainly affects the lungs, characterized by a persistent cough and night sweats.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Undergo a long-term combination antibiotic therapy (typically isoniazid, rifampin, ethambutol, and pyrazinamide) prescribed by a physician.",
      "**Strictly adhere to taking the medications daily for the full duration (6 to 9 months)**, without skipping doses, to prevent the development of highly dangerous, multi-drug resistant TB.",
      "Coordinate with a healthcare provider through Directly Observed Therapy (DOT) if recommended, to guarantee compliance.",
      "Eat a nutrient-dense, high-protein diet to rebuild body weight lost to the infection.",
      "Ensure rooms are well-ventilated and cover the mouth when coughing during the early infectious weeks."
    ],
    "content": {
      "overview": "Tuberculosis (TB) is a serious, infectious disease caused by Mycobacterium tuberculosis bacteria. While it primarily affects the lungs (pulmonary TB), it can also attack other parts of the body, such as the kidneys, spine, or brain.",
      "symptoms": [
        "A persistent cough that lasts three or more weeks",
        "Coughing up blood or sputum (phlegm)",
        "Unexplained weight loss and loss of appetite",
        "Night sweats and low-grade fever",
        "Chest pain or pain when breathing or coughing",
        "General fatigue and persistent weakness"
      ],
      "causes": "TB is caused by the bacterium Mycobacterium tuberculosis. It spreads through the air from one person to another when an individual with active pulmonary TB coughs, sneezes, speaks, or sings. It is not easily caught; close, prolonged contact is usually required.",
      "riskFactors": [
        "Weakened immune system (especially people living with HIV/AIDS)",
        "Living in or traveling to regions with high rates of TB (e.g., parts of Africa, Asia, Eastern Europe)",
        "Living in crowded, poorly ventilated environments (e.g., shelters, correctional facilities)",
        "Malnutrition, substance abuse, or tobacco use"
      ],
      "complications": "Without treatment, TB can be fatal. Active disease can spread through the bloodstream, causing spinal pain, joint damage, inflammation of the membranes covering the brain (meningitis), liver or kidney problems, and heart disorders.",
      "diagnosis": "TB is screened using a skin test (Mantoux) or a blood test (IGRA). Active pulmonary TB is confirmed via chest X-rays, CT scans, and sputum tests (acid-fast bacilli smear and sputum culture or rapid molecular tests like GeneXpert).",
      "treatment": "TB is treatable and curable. Active TB requires a combination of several antibiotics (typically isoniazid, rifampin, ethambutol, and pyrazinamide) taken for a minimum of 6 to 9 months. Strict adherence to the medication regimen is vital to prevent drug-resistant TB.",
      "homeCare": "Take medications exactly as prescribed every day. Sleep in a well-ventilated room. Cover your mouth with a tissue when coughing or sneezing, and dispose of it in a closed bag. Eat a nutrient-dense, high-calorie diet to regain lost weight.",
      "prevention": "The BCG vaccine is given to infants in countries with high TB prevalence. To prevent spread, identify and treat latent TB infections before they become active, and ensure active TB patients are isolated until they are no longer contagious.",
      "whenToSeeDoctor": "Schedule a doctor's visit if you have an unexplained cough lasting more than three weeks, unexplained weight loss, drenching night sweats, or if you have been exposed to someone with active TB.",
      "emergencySigns": [
        "Severe chest pain or sudden difficulty breathing",
        "Coughing up large amounts of bright red blood",
        "Severe, unrelenting headache accompanied by a stiff neck and confusion"
      ],
      "relatedConditions": [
        "fever",
        "anaemia"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "6 to 9 months",
    "diagnosticTests": [
      "Sputum Acid-Fast Bacilli (AFB) Smear",
      "Tuberculosis Skin Test (TST)",
      "Chest X-ray"
    ]
  },
  {
    "id": "chickenpox",
    "title": "Chickenpox",
    "category": "infectious",
    "keywords": [
      "chickenpox",
      "varicella",
      "itchy rash",
      "blisters",
      "spots",
      "contagious"
    ],
    "summary": "A highly contagious viral infection causing an itchy, blister-like skin rash and mild flu-like symptoms.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Manage symptoms supportively at home while the virus runs its course (usually 5 to 10 days).",
      "For high-risk individuals (adults, pregnant women), obtain prescription oral antiviral medications (like acyclovir) early.",
      "Control fever using paracetamol. **Do not use aspirin** under any circumstances due to the risk of Reye's syndrome.",
      "Soothe severe skin itching by taking lukewarm oatmeal baths and applying calamine lotion.",
      "Keep fingernails cut short and avoid scratching the blisters to prevent secondary bacterial infections and permanent scarring."
    ],
    "content": {
      "overview": "Chickenpox is a highly contagious disease caused by the Varicella-Zoster Virus (VZV). It causes an itchy, blister-like rash that eventually scabs over, along with mild fever and fatigue. It was once a common childhood illness but is now largely preventable due to vaccines.",
      "symptoms": [
        "An extremely itchy rash that progresses from red spots to fluid-filled blisters, which then crust and scab over",
        "Fever, headache, and loss of appetite",
        "Fatigue, irritability, and a general feeling of being unwell",
        "Muscle aches"
      ],
      "causes": "Chickenpox is caused by the Varicella-Zoster Virus. It spreads easily through direct contact with the rash fluid or through airborne droplets when an infected person coughs or sneezes. An infected person is contagious 1 to 2 days before the rash appears.",
      "riskFactors": [
        "Not having been vaccinated against chickenpox",
        "Never having had chickenpox before",
        "Being in close contact with children in schools or childcare facilities",
        "Weakened immune system"
      ],
      "complications": "While usually mild, chickenpox can cause complications including bacterial skin infections (from scratching), dehydration, pneumonia, inflammation of the brain (encephalitis), and toxic shock syndrome. Later in life, the dormant virus can reactivate as shingles.",
      "diagnosis": "Doctors generally diagnose chickenpox by examining the characteristic rash. If there is doubt, laboratory tests, including a PCR test of the fluid from a blister or a blood test, can confirm the virus.",
      "treatment": "Treatment focuses on relieving symptoms while the body fights the virus. Antiviral medications (like acyclovir) may be prescribed for individuals at high risk of complications if started early. Pain and fever can be managed with paracetamol. **Never use aspirin** as it is linked to Reye's syndrome.",
      "homeCare": "Do not scratch the blisters to prevent scarring and bacterial infection; keep fingernails trimmed short. Apply calamine lotion and take lukewarm baths with colloidal oatmeal or baking soda to soothe itching. Wear loose, soft cotton clothing.",
      "prevention": "The most effective way to prevent chickenpox is to receive the varicella vaccine (typically given in two doses during childhood). Isolate infected individuals until all blisters have completely crusted over.",
      "whenToSeeDoctor": "Contact a doctor if the rash spreads to one or both eyes, if the skin spots become extremely red, warm, or tender (indicating a secondary bacterial infection), or if the patient is pregnant or has a weakened immune system.",
      "emergencySigns": [
        "Extreme drowsiness, difficulty waking up, or confusion",
        "Severe cough or difficulty breathing",
        "High fever (above 38.9\u00b0C or 102\u00b0F) that doesn't come down",
        "Unsteadiness when walking, or severe neck stiffness"
      ],
      "relatedConditions": [
        "fever",
        "eczema"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "gerd",
    "title": "Acid Reflux / GERD",
    "category": "digestive",
    "keywords": [
      "gerd",
      "acid reflux",
      "heartburn",
      "indigestion",
      "chest burn",
      "stomach acid"
    ],
    "summary": "A chronic digestive disease where stomach acid frequently flows back into the esophagus, irritating its lining.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Manage stomach acid using over-the-counter or prescription antacids, H2 blockers, or proton pump inhibitors (PPIs) as directed.",
      "Adjust eating habits: consume smaller, more frequent meals instead of large portions.",
      "Avoid lying down for at least 3 hours after eating, and elevate the head of your bed by 6-9 inches for sleeping.",
      "Identify and eliminate dietary triggers (such as high-fat foods, spicy dishes, chocolate, caffeine, and alcohol).",
      "Achieve and maintain a healthy body weight to reduce pressure on the lower esophageal sphincter."
    ],
    "content": {
      "overview": "Gastroesophageal Reflux Disease (GERD) is a chronic digestive condition that occurs when stomach acid repeatedly flows back into the tube connecting your mouth and stomach (esophagus). This backflow (acid reflux) can irritate the lining of your esophagus.",
      "symptoms": [
        "A burning sensation in your chest (heartburn), usually after eating, which might be worse at night or when lying down",
        "Regurgitation of food or sour liquid",
        "Upper abdominal or chest pain",
        "Difficulty swallowing (dysphagia) or a sensation of a lump in your throat",
        "Chronic cough, laryngitis, or new/worsening asthma"
      ],
      "causes": "GERD is caused by frequent acid reflux. When you swallow, a circular band of muscle around the bottom of your esophagus (lower esophageal sphincter) relaxes to let food and liquid flow into your stomach, then closes. If this sphincter weakens or relaxes abnormally, stomach acid can flow back up.",
      "riskFactors": [
        "Obesity and pregnancy",
        "Hiatal hernia (part of the stomach pushes up into the diaphragm)",
        "Delayed stomach emptying",
        "Smoking, eating large meals, eating late at night, or consuming trigger foods (fatty, fried, spicy foods, caffeine, alcohol)",
        "Certain medications, such as aspirin or ibuprofen"
      ],
      "complications": "Over time, chronic inflammation in the esophagus can lead to narrowing of the esophagus (esophageal stricture), an open sore (esophageal ulcer), or precancerous changes to the esophageal tissue (Barrett's esophagus).",
      "diagnosis": "GERD is often diagnosed based on a review of history and symptoms. Confirming tests include an upper endoscopy, a mobile acid (pH) probe test, esophageal manometry (to measure muscle contractions), or X-rays of the upper digestive system.",
      "treatment": "Treatment begins with lifestyle modifications and over-the-counter medications like antacids (to neutralize acid), H2 blockers (to reduce acid production), or proton pump inhibitors (PPIs, to heal the esophagus). Prescription-strength medications or surgery may be required for severe, unresponsive cases.",
      "homeCare": "Maintain a healthy weight. Avoid tight-fitting clothing around your waist. Eat smaller, more frequent meals. Avoid lying down for at least three hours after eating. Elevate the head of your bed by 6 to 9 inches. Avoid known trigger foods and quit smoking.",
      "prevention": "Prevent symptoms by adopting healthy eating habits: eat slowly, chew thoroughly, limit fatty foods, chocolate, mint, and caffeine, and avoid eating late-night snacks.",
      "whenToSeeDoctor": "Consult a doctor if you experience GERD symptoms several times a week, if you take OTC heartburn medications more than twice a week, or if your symptoms are severe and affect your daily routine.",
      "emergencySigns": [
        "Difficulty swallowing that causes choking or painful swallowing",
        "Vomiting blood or dark, coffee-ground-like material",
        "Black, tarry stools",
        "Chest pain, especially when accompanied by shortness of breath, jaw pain, or arm pain (which can mimic a heart attack)"
      ],
      "relatedConditions": [
        "stomach-pain",
        "obesity",
        "asthma"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "food-poisoning",
    "title": "Food Poisoning",
    "category": "digestive",
    "keywords": [
      "food poisoning",
      "salmonella",
      "e coli",
      "nausea",
      "vomiting",
      "stomach cramps",
      "foodborne"
    ],
    "summary": "An illness caused by eating contaminated, spoiled, or toxic food, presenting with rapid onset of vomiting and diarrhoea.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Let the stomach rest for the first few hours without solid food.",
      "Stay hydrated by taking small, frequent sips of water, clear broths, or oral rehydration solutions.",
      "Slowly reintroduce bland, binding foods (the BRAT diet: Bananas, Rice, Applesauce, Toast) as vomiting stops.",
      "Avoid dairy, caffeine, alcohol, nicotine, and greasy or highly seasoned foods until fully recovered.",
      "Avoid using over-the-counter anti-diarrheal medications without medical advice, as they can lock the pathogen in the gut."
    ],
    "content": {
      "overview": "Food poisoning, also called foodborne illness, is the result of eating contaminated, spoiled, or toxic food. It is extremely common and typically resolves within a few days without formal medical intervention.",
      "symptoms": [
        "Nausea and severe vomiting",
        "Watery or bloody diarrhoea",
        "Abdominal pain and painful stomach cramps",
        "Fever and chills",
        "Headache and general physical weakness"
      ],
      "causes": "Contamination of food can happen at any point of production: growing, harvesting, processing, storing, shipping, or preparing. The most common infectious agents are bacteria (like Salmonella, E. coli, Listeria), viruses (like Norovirus), or parasites.",
      "riskFactors": [
        "Older adults, pregnant individuals, and infants/young children",
        "Individuals with weakened immune systems",
        "Consuming raw or undercooked meats, poultry, seafood, eggs, or unpasteurized dairy",
        "Eating food left unrefrigerated for long periods or prepared with poor hygiene"
      ],
      "complications": "The most common serious complication is severe dehydration (loss of water, essential salts, and minerals). Certain bacterial strains (like specific E. coli) can cause hemolytic uremic syndrome, leading to kidney failure.",
      "diagnosis": "Diagnosis is usually based on your symptoms and food history. In severe or outbreak cases, doctors may perform stool tests, blood tests, or test the contaminated food itself to identify the specific pathogen.",
      "treatment": "Treatment primarily involves replacing lost fluids and electrolytes to prevent dehydration. In severe cases caused by specific bacteria, doctors may prescribe antibiotics. Antidiarrheal medications should be used with caution and under medical advice, as they can prolong the illness.",
      "homeCare": "Let your stomach settle; avoid eating for a few hours. Drink small, frequent sips of clear fluids, such as water, broth, or oral rehydration solutions. Gradually introduce bland, low-fat, easy-to-digest foods (like toast, rice, bananas, applesauce). Avoid dairy, caffeine, alcohol, and spicy foods.",
      "prevention": "Follow the four key steps of food safety: Clean (wash hands and surfaces often), Separate (don't cross-contaminate raw and cooked foods), Cook (cook to safe internal temperatures), and Chill (refrigerate perishable foods within two hours).",
      "whenToSeeDoctor": "See a doctor if vomiting is so severe you cannot keep any liquids down, if diarrhoea lasts more than 3 days, or if you have a high fever (above 38.9\u00b0C or 102\u00b0F).",
      "emergencySigns": [
        "Signs of severe dehydration: extreme thirst, dry mouth, little to no urination, severe dizziness, or confusion",
        "Bloody vomit or stools",
        "Blurry vision, muscle weakness, or tingling in the arms (signs of botulism)",
        "Inability to speak or swallow"
      ],
      "relatedConditions": [
        "stomach-pain",
        "diarrhoea",
        "typhoid"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "diarrhoea",
    "title": "Diarrhoea",
    "category": "digestive",
    "keywords": [
      "diarrhoea",
      "loose stools",
      "watery stools",
      "dehydration",
      "stomach cramps"
    ],
    "summary": "The frequent passage of loose, watery stools, which can lead to rapid dehydration if untreated.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Prioritize aggressive oral rehydration with water mixed with Oral Rehydration Salts (ORS) to replace fluids and electrolytes.",
      "Consume small portions of binding foods like bananas, boiled rice, applesauce, and plain crackers.",
      "Avoid food groups that irritate the digestive tract, including dairy products, high-fiber foods, caffeine, and fats.",
      "If the cause is a confirmed bacterial or parasitic infection, complete the course of prescribed antimicrobials.",
      "Monitor urine color (aim for pale yellow) and frequency to verify adequate rehydration."
    ],
    "content": {
      "overview": "Diarrhoea is characterized by abnormally loose, watery, and frequent stools (bowel movements). It is a common symptom of various digestive disturbances and can be acute (short-lived) or chronic (lasting weeks).",
      "symptoms": [
        "Frequent, loose, or watery stools",
        "Abdominal cramps and bloating",
        "Urgent need to have a bowel movement",
        "Nausea and occasional vomiting",
        "Mild fever"
      ],
      "causes": "Acute diarrhoea is most commonly caused by viral, bacterial, or parasitic infections (often contracted through contaminated food or water). Other causes include food intolerances (like lactose intolerance), medications (especially antibiotics), and inflammatory bowel disorders.",
      "riskFactors": [
        "Poor sanitation and lack of clean drinking water",
        "Recent use of broad-spectrum antibiotics",
        "Consuming undercooked food or traveling to developing regions",
        "Chronic conditions like Irritable Bowel Syndrome (IBS) or Crohn's disease"
      ],
      "complications": "The primary complication is dehydration, which can be life-threatening in infants, young children, and older adults. Dehydration leads to a dangerous loss of water, electrolytes, and minerals.",
      "diagnosis": "Acute diarrhoea usually requires no testing. For chronic or severe cases, a doctor may recommend stool tests (to check for bacteria or parasites), blood tests (to rule out systemic disease), or a colonoscopy for structural evaluation.",
      "treatment": "Rehydration is the cornerstone of treatment. Mild cases resolve on their own. Over-the-counter antidiarrheal medications (like loperamide) can help reduce the frequency of movements but should be avoided if you have a high fever or bloody stools, which suggest an active bacterial infection.",
      "homeCare": "Drink plenty of oral rehydration salts (ORS) dissolved in clean water, broths, and diluted fruit juices. Avoid caffeine, alcohol, extremely sweet drinks, and dairy products. Eat small portions of plain, binding foods like rice, bananas, oatmeal, and boiled potatoes.",
      "prevention": "Wash hands thoroughly with soap, especially after using the toilet and before preparing or eating food. Drink clean, purified, or boiled water. Ensure food is cooked properly and stored at safe temperatures.",
      "whenToSeeDoctor": "Consult a doctor if diarrhoea lasts more than 2 days (for adults) or 24 hours (for infants), if you have a fever above 38.9\u00b0C (102\u00b0F), or if stools contain pus or are black.",
      "emergencySigns": [
        "Extreme dehydration: dry tongue, sunken eyes, lack of tears when crying, no wet diapers for 3+ hours (in infants), extreme listlessness, or confusion",
        "Severe abdominal or rectal pain",
        "Stools that are bloody or black and tarry"
      ],
      "relatedConditions": [
        "stomach-pain",
        "food-poisoning",
        "constipation"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "constipation",
    "title": "Constipation",
    "category": "digestive",
    "keywords": [
      "constipation",
      "hard stools",
      "bowel movements",
      "infrequent stool",
      "bloating",
      "fiber"
    ],
    "summary": "A common condition characterized by infrequent bowel movements or difficult and painful passage of hard, dry stools.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Gradually increase dietary fiber by eating more whole grains, fruits, vegetables, beans, and prunes.",
      "Significantly increase daily fluid intake, drinking at least 8-10 glasses of water.",
      "Engage in regular physical exercise (such as a 30-minute walk daily) to stimulate gut motility.",
      "Establish a consistent, unhurried daily routine for bowel movements, and never ignore the urge to go.",
      "Use over-the-counter fiber supplements or osmotic laxatives temporarily if lifestyle adjustments are insufficient."
    ],
    "content": {
      "overview": "Constipation is a common digestive issue characterized by having fewer than three bowel movements a week, or experiencing stools that are dry, hard, small, and difficult or painful to pass.",
      "symptoms": [
        "Passing fewer than three stools per week",
        "Stools that are hard, dry, or lumpy",
        "Straining excessively to have a bowel movement",
        "Feeling as though there is a blockage preventing bowel movements",
        "Abdominal bloating, mild discomfort, or mild nausea"
      ],
      "causes": "Constipation most commonly occurs when waste or stool moves too slowly through the digestive tract, causing it to become hard and dry as the colon absorbs too much water. Common triggers include a low-fiber diet, lack of physical activity, dehydration, ignoring the urge to pass stool, certain medications (like opioids or iron supplements), and stress.",
      "riskFactors": [
        "Being an older adult (reduced gut motility)",
        "Being female (especially during pregnancy or after childbirth)",
        "Not eating enough high-fiber foods",
        "Inadequate daily fluid intake",
        "Sedentary lifestyle"
      ],
      "complications": "Chronic constipation can lead to complications such as swollen veins in the anus (hemorrhoids), tears in the skin of the anus (anal fissures), accumulation of hardened stool that gets stuck in the colon (fecal impaction), or rectal prolapse.",
      "diagnosis": "Diagnosis is typically based on a review of symptoms, diet, and lifestyle. For chronic, severe cases, doctors may perform a physical exam, blood tests, abdominal X-rays, or a colonoscopy to check for structural blockages.",
      "treatment": "Initial treatment focus is on dietary and lifestyle modifications. Over-the-counter options include fiber supplements (bulk-forming laxatives), stool softeners, osmotic laxatives (like milk of magnesia or polyethylene glycol), or stimulant laxatives (used sparingly).",
      "homeCare": "Gradually increase your intake of high-fiber foods like whole grains, fruits, vegetables, beans, and prunes. Drink plenty of water throughout the day. Establish a regular exercise routine. Do not ignore or delay the urge to have a bowel movement.",
      "prevention": "Prevent constipation by maintaining a high-fiber diet, staying consistently hydrated, staying physically active, managing stress, and creating a regular, unhurried routine for bowel movements.",
      "whenToSeeDoctor": "Consult a doctor if your constipation is a new symptom, lasts longer than two weeks, or is accompanied by unexplained weight loss.",
      "emergencySigns": [
        "Severe, constant abdominal pain accompanied by vomiting",
        "Blood in your stool or bleeding from the rectum",
        "Inability to pass any gas or stool, indicating a complete bowel obstruction",
        "Fever combined with severe abdominal bloating"
      ],
      "relatedConditions": [
        "stomach-pain",
        "diarrhoea"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "stomach-pain",
    "title": "Stomach Pain",
    "category": "digestive",
    "keywords": [
      "stomach pain",
      "abdominal pain",
      "cramps",
      "bloating",
      "indigestion"
    ],
    "summary": "Discomfort or pain felt anywhere in the abdominal region, ranging from mild indigestion to acute emergencies.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Rest comfortably, lying down with a warm compress or hot water bottle placed on the abdomen to relax muscles.",
      "Sip warm water, peppermint tea, or ginger tea to settle the stomach and relieve bloating.",
      "Avoid solid foods for a few hours if pain is accompanied by nausea or vomiting; slowly reintroduce bland foods later.",
      "Use over-the-counter antacids or gas-relief drops if the pain is due to indigestion or flatulence.",
      "**Do not take NSAIDs** (like ibuprofen or aspirin) without medical advice, as they can severely irritate the stomach lining."
    ],
    "content": {
      "overview": "Stomach pain, or abdominal pain, refers to discomfort, aching, or cramping felt anywhere in the region between the chest and the groin. It is a highly common symptom that can range from a minor, self-limiting issue to a serious medical emergency.",
      "symptoms": [
        "Dull ache or sharp, localized pain in the abdomen",
        "Cramping, bloating, or excess gas",
        "Nausea, indigestion, or heartburn",
        "Tenderness when touching the abdomen",
        "Changes in bowel habits (constipation or diarrhoea)"
      ],
      "causes": "Abdominal pain has numerous causes. Common, non-serious causes include indigestion, gas, constipation, muscle strain, or mild food poisoning. More serious causes include appendicitis, gallstones, kidney stones, stomach ulcers, irritable bowel syndrome (IBS), or urinary tract infections.",
      "riskFactors": [
        "Poor dietary choices (heavy, greasy, or spicy foods)",
        "High stress and anxiety levels",
        "History of gastrointestinal disorders",
        "Dehydration or lack of fiber intake"
      ],
      "complications": "Because stomach pain is a symptom, complications depend entirely on the underlying cause. If a serious condition like appendicitis or a perforated ulcer is left untreated, it can lead to life-threatening abdominal infections (peritonitis) or sepsis.",
      "diagnosis": "A doctor will locate the pain, assess its character (sharp, dull, cramping), and review your history. Diagnostic tests may include blood tests, urine analysis, stool tests, abdominal ultrasound, CT scan, or endoscopy.",
      "treatment": "Treatment depends on the diagnosed cause. Mild pain due to gas or indigestion may be managed with OTC antacids or pain relievers (use paracetamol; avoid NSAIDs like ibuprofen if a stomach ulcer is suspected). Specific conditions may require prescription medications or surgery.",
      "homeCare": "Rest and lie down comfortably. Sip clear fluids like water or clear broths; avoid solid food for a few hours if nausea is present. A warm compress or hot water bottle placed on the abdomen can help soothe muscle cramps. Avoid alcohol, caffeine, and carbonated beverages.",
      "prevention": "Eat smaller, more frequent meals. Drink plenty of water and consume a balanced diet rich in fiber. Avoid eating right before bedtime. Wash your hands to prevent foodborne infections, and manage stress levels.",
      "whenToSeeDoctor": "Consult a doctor if your stomach pain is severe, lasts more than 24-48 hours, is accompanied by a persistent fever, or if you cannot keep fluids down.",
      "emergencySigns": [
        "Sudden, excruciating, or rapidly worsening pain",
        "High fever accompanied by severe pain and a rigid, hard, or swollen abdomen",
        "Vomiting blood or passing bloody or black stools",
        "Pain accompanied by difficulty breathing, dizziness, or fainting",
        "Pain radiating to the chest, neck, or shoulder"
      ],
      "relatedConditions": [
        "gerd",
        "food-poisoning",
        "diarrhoea",
        "constipation",
        "uti"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "diabetes-type2",
    "title": "Diabetes (Type 2)",
    "category": "chronic",
    "keywords": [
      "diabetes",
      "type 2 diabetes",
      "blood sugar",
      "insulin",
      "hyperglycemia",
      "metabolic"
    ],
    "summary": "A chronic metabolic disorder characterized by high blood sugar levels due to insulin resistance.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Monitor blood glucose levels regularly using a glucometer as recommended by your physician.",
      "Follow a strictly portion-controlled, low-glycemic diet rich in fiber, complex carbohydrates, and lean proteins.",
      "Perform at least 150 minutes of moderate aerobic exercise (like brisk walking or swimming) weekly to improve insulin sensitivity.",
      "Take prescribed oral glucose-lowering medications (e.g., metformin) or insulin injections consistently as directed.",
      "Inspect feet daily for cuts, blisters, or sores and schedule annual diabetic eye examinations."
    ],
    "content": {
      "overview": "Type 2 diabetes is a chronic, long-term metabolic condition in which your body does not produce enough insulin or cannot properly use the insulin it does make (insulin resistance). This leads to elevated levels of glucose (sugar) in the bloodstream.",
      "symptoms": [
        "Increased thirst (polydipsia) and frequent urination (polyuria)",
        "Increased hunger (polyphagia), even after eating",
        "Unexplained weight loss",
        "Chronic fatigue and lack of energy",
        "Blurry vision",
        "Slow-healing sores, cuts, or frequent infections"
      ],
      "causes": "Type 2 diabetes primarily develops due to two interrelated problems: cells in muscle, fat, and the liver become resistant to insulin, and the pancreas becomes unable to produce enough insulin to overcome this resistance. Genetics, excess body weight, and lack of exercise are major contributing factors.",
      "riskFactors": [
        "Being overweight or obese",
        "Physical inactivity",
        "Age (risk increases after 45, though it is rising in younger people)",
        "Family history of type 2 diabetes",
        "Race or ethnicity (higher risk in Black, Hispanic, Asian, and Indigenous populations)",
        "History of gestational diabetes or polycystic ovary syndrome (PCOS)"
      ],
      "complications": "Over time, high blood sugar can damage blood vessels and nerves, leading to serious complications: cardiovascular disease (heart attack, stroke), nerve damage (neuropathy), kidney damage (nephropathy), eye damage (retinopathy), and poor blood flow in the feet, which can lead to amputation.",
      "diagnosis": "Diabetes is diagnosed using blood tests: a Glycated Haemoglobin (HbA1c) test (measures average blood sugar over 2-3 months; 6.5% or higher indicates diabetes), a Fasting Blood Sugar test, or an Oral Glucose Tolerance Test.",
      "treatment": "Management is lifelong. It includes lifestyle changes (diet and exercise) and often oral medications (such as metformin) to help the body use insulin more effectively. Some individuals may eventually require insulin injections or other injectable medications.",
      "homeCare": "Monitor blood sugar levels regularly as advised by your doctor. Eat a balanced, portion-controlled diet focusing on complex carbohydrates, high fiber, and lean proteins. Engage in at least 150 minutes of moderate aerobic exercise per week. Inspect your feet daily for cuts or sores.",
      "prevention": "Type 2 diabetes is highly preventable. Maintain a healthy body weight, eat a nutritious diet low in refined sugars and processed grains, stay physically active, and avoid smoking.",
      "whenToSeeDoctor": "Schedule a doctor's checkup if you notice persistent symptoms of increased thirst, frequent urination, or unexplained fatigue, especially if you have risk factors.",
      "emergencySigns": [
        "Extreme confusion, drowsiness, or loss of consciousness",
        "Rapid, deep breathing and a fruity odor to the breath (signs of diabetic ketoacidosis or severe high blood sugar)",
        "Severe dizziness, sweating, shaking, and confusion that doesn't resolve after consuming quick-acting sugar (signs of severe low blood sugar/hypoglycaemia)"
      ],
      "relatedConditions": [
        "hypertension",
        "obesity",
        "arthritis",
        "anaemia"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "hypertension",
    "title": "Hypertension",
    "category": "chronic",
    "keywords": [
      "hypertension",
      "high blood pressure",
      "systolic",
      "diastolic",
      "silent killer",
      "cardiovascular"
    ],
    "summary": "A common condition where the long-term force of the blood against artery walls is high enough to cause heart disease.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed antihypertensive medications daily, precisely as directed, even if you have no symptoms.",
      "Adopt the DASH diet (Dietary Approaches to Stop Hypertension), limiting sodium intake to under 2,000 mg (less than a teaspoon of salt) daily.",
      "Engage in regular aerobic exercise, aiming for 30 minutes of moderate activity most days of the week.",
      "Limit alcohol consumption, quit smoking, and practice stress-reduction techniques (like deep breathing or meditation).",
      "Monitor blood pressure at home weekly and log the readings to share with your physician."
    ],
    "content": {
      "overview": "Hypertension, commonly known as high blood pressure, is a chronic medical condition in which the force of the blood pushing against your artery walls is consistently too high. It is often called the 'silent killer' because it rarely causes noticeable symptoms until serious cardiovascular damage has occurred.",
      "symptoms": [
        "Most people have no symptoms, even if blood pressure reaches dangerously high levels.",
        "When symptoms do occur (usually in severe hypertension), they can include:",
        "Dull headaches (especially in the morning)",
        "Dizziness, lightheadedness, or tinnitus (ringing in the ears)",
        "Shortness of breath",
        "Nosebleeds",
        "Visual changes or double vision"
      ],
      "causes": "For most adults, there's no identifiable single cause of high blood pressure (Primary Hypertension), which develops gradually over many years due to genetics, aging, and lifestyle. In some cases, it is caused by an underlying condition like kidney disease, thyroid problems, or certain medications (Secondary Hypertension).",
      "riskFactors": [
        "Advanced age",
        "Family history of high blood pressure",
        "Being overweight or obese",
        "High sodium (salt) diet and low potassium intake",
        "Sedentary lifestyle and high stress levels",
        "Excessive alcohol consumption and tobacco use"
      ],
      "complications": "Uncontrolled high blood pressure damages blood vessels and organs. Complications include heart attack, stroke, aneurysms, heart failure, weakened and narrowed blood vessels in the kidneys (kidney damage), thickened or torn blood vessels in the eyes (vision loss), and cognitive decline.",
      "diagnosis": "Blood pressure is measured using an inflatable cuff (sphygmomanometer). It is recorded as two numbers: Systolic (pressure when the heart beats) over Diastolic (pressure when the heart rests). Hypertension is generally diagnosed when readings are consistently 130/80 mmHg or higher on multiple occasions.",
      "treatment": "Treatment involves lifestyle modifications and daily blood-pressure-lowering medications. Common drug classes include ACE inhibitors, ARBs, beta-blockers, calcium channel blockers, and diuretics. The specific medication choice is tailored to the individual's health profile.",
      "homeCare": "Monitor your blood pressure at home using a digital monitor. Adopt the DASH (Dietary Approaches to Stop Hypertension) diet, which emphasizes fruits, vegetables, whole grains, and low-fat dairy while minimizing salt. Reduce alcohol intake, exercise regularly, and manage stress.",
      "prevention": "Maintain a healthy weight. Keep sodium intake under 2,000 mg per day. Engage in regular physical activity. Limit alcohol consumption, avoid tobacco, and practice stress-management techniques.",
      "whenToSeeDoctor": "Have your blood pressure checked at least once every two years starting at age 18, or annually if you are over 40 or have risk factors.",
      "emergencySigns": [
        "Hypertensive Crisis (blood pressure over 180/120 mmHg) accompanied by:",
        "Severe, crushing chest pain",
        "Sudden, severe headache",
        "Sudden numbness, weakness, or difficulty speaking (signs of stroke)",
        "Shortness of breath or fluid in the lungs",
        "Seizures or sudden confusion"
      ],
      "relatedConditions": [
        "diabetes-type2",
        "obesity",
        "anaemia",
        "cad"
      ]
    },
    "specialist": "Cardiologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Blood Pressure Monitoring",
      "Electrocardiogram (ECG)",
      "Kidney Function Tests"
    ]
  },
  {
    "id": "asthma",
    "title": "Asthma",
    "category": "chronic",
    "keywords": [
      "asthma",
      "wheezing",
      "shortness of breath",
      "inhaler",
      "bronchospasm",
      "triggers"
    ],
    "summary": "A chronic respiratory condition characterized by inflammation and narrowing of the airways, causing wheezing and breathing difficulties.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Use prescribed long-term control inhalers (like inhaled corticosteroids) daily to reduce chronic airway inflammation.",
      "Keep a quick-relief rescue inhaler (like albuterol) with you at all times for immediate relief during sudden attacks.",
      "Identify and strictly avoid your personal asthma triggers (e.g., pollen, pet dander, dust mites, cold air, or tobacco smoke).",
      "Monitor lung function regularly using a home peak flow meter, following your custom Asthma Action Plan.",
      "Get annual influenza and pneumonia vaccinations to protect your lungs from severe respiratory infections."
    ],
    "content": {
      "overview": "Asthma is a chronic respiratory condition in which your airways narrow, swell, and produce extra mucus. This makes breathing difficult and can trigger coughing, a whistling sound (wheezing) when you breathe out, and shortness of breath.",
      "symptoms": [
        "Shortness of breath or feeling out of breath",
        "Chest tightness, pressure, or pain",
        "Wheezing (a whistling or squeaking sound when exhaling)",
        "Chronic coughing, which may be worse at night, early in the morning, or during exercise",
        "Trouble sleeping caused by coughing or wheezing"
      ],
      "causes": "The exact cause of asthma is unknown, but it is believed to be a combination of environmental and genetic factors. Asthma attacks occur when the airways react to triggers: allergens (pollen, dust mites, pet dander), respiratory infections, physical activity, cold air, smoke, or stress.",
      "riskFactors": [
        "Having a blood relative with asthma",
        "Having an allergic condition, such as atopic dermatitis (eczema) or hay fever",
        "Being overweight",
        "Being a smoker or exposed to secondhand smoke",
        "Exposure to occupational chemical triggers or exhaust fumes"
      ],
      "complications": "Asthma can interfere with sleep, work, and exercise. It can lead to permanent narrowing of the airways (airway remodeling) or severe asthma attacks that require emergency room visits and can be life-threatening.",
      "diagnosis": "Asthma is diagnosed using lung function tests, primarily Spirometry (which measures how much air you can exhale and how fast) and Peak Flow tests. Doctors may also use allergy tests or methacholine challenge tests.",
      "treatment": "There is no cure, but asthma can be managed. Treatment involves avoiding triggers and using medications. Long-term control medications (like inhaled corticosteroids) reduce airway inflammation daily, while quick-relief rescue inhalers (like albuterol) rapidly open airways during an attack.",
      "homeCare": "Follow your written Asthma Action Plan created with your doctor. Use a peak flow meter to monitor your breathing. Keep your rescue inhaler with you at all times. Use allergen-proof covers on pillows and mattresses, and keep indoor humidity low.",
      "prevention": "Prevent asthma flare-ups by identifying and avoiding your specific triggers. Get vaccinated against influenza and pneumonia to prevent respiratory infections. Avoid smoking and areas with high air pollution.",
      "whenToSeeDoctor": "See your doctor regularly to monitor your asthma and adjust medications. Consult them if your rescue inhaler usage increases, or if your symptoms are not well-controlled.",
      "emergencySigns": [
        "Rapid worsening of shortness of breath or wheezing",
        "No improvement even after using a quick-relief rescue inhaler",
        "Difficulty speaking in full sentences due to shortness of breath",
        "Chest and ribs pulling inward severely when breathing (retractions)",
        "Lips, face, or fingernails turning blue or gray"
      ],
      "relatedConditions": [
        "common-cold",
        "influenza",
        "covid-19",
        "eczema"
      ]
    },
    "specialist": "Pulmonologist or Allergist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Spirometry",
      "Peak Flow Monitoring",
      "Allergy Skin Testing"
    ]
  },
  {
    "id": "arthritis",
    "title": "Arthritis",
    "category": "chronic",
    "keywords": [
      "arthritis",
      "joint pain",
      "osteoarthritis",
      "rheumatoid",
      "stiffness",
      "swelling"
    ],
    "summary": "Inflammation of one or more joints, causing chronic pain, stiffness, and reduced mobility.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Engage in low-impact joint-friendly exercises (like swimming, cycling, or water aerobics) to maintain joint flexibility.",
      "Use over-the-counter or prescription pain relievers and anti-inflammatory medications as directed by a physician.",
      "Apply heat packs to relieve morning stiffness and ice packs to reduce acute swelling and pain after activity.",
      "Maintain a healthy body weight to significantly reduce mechanical stress on weight-bearing joints (hips and knees).",
      "Use assistive devices (like shoe inserts, braces, or canes) to protect joints and improve mobility."
    ],
    "content": {
      "overview": "Arthritis is not a single disease but an informal way of referring to joint pain or joint disease. It involves inflammation of one or more joints, leading to pain, stiffness, swelling, and decreased range of motion, which typically worsen with age.",
      "symptoms": [
        "Pain and aching in the affected joints",
        "Stiffness, particularly in the morning or after periods of inactivity",
        "Swelling, redness, and warmth around the joint",
        "Decreased range of motion or flexibility",
        "Deformity of the joint (in advanced stages)"
      ],
      "causes": "The causes depend on the type. **Osteoarthritis (OA)**, the most common type, is caused by wear-and-tear damage to the joint's cartilage over time. **Rheumatoid Arthritis (RA)** is an autoimmune disorder where the body's immune system mistakenly attacks the lining of the joints (synovium).",
      "riskFactors": [
        "Family history and genetics",
        "Advanced age (risk increases as you get older)",
        "Previous joint injuries (e.g., from sports or accidents)",
        "Obesity (places excess stress on joints like knees and hips)",
        "Gender (women are more likely to develop OA and RA; men are more likely to get gout)"
      ],
      "complications": "Severe arthritis, especially if it affects hands or arms, can make daily tasks difficult. Arthritis in weight-bearing joints can prevent comfortable walking or sitting upright, leading to a sedentary lifestyle and associated health risks.",
      "diagnosis": "Arthritis is diagnosed through physical exams checking joint mobility and swelling. Diagnostic tools include blood tests (to check for inflammatory markers or specific antibodies in RA), joint fluid analysis, X-rays, CT scans, or MRIs to visualize bone and cartilage damage.",
      "treatment": "Treatment aims to reduce pain and prevent further joint damage. Options include pain relievers (acetaminophen), NSAIDs (ibuprofen), counterirritant creams, disease-modifying antirheumatic drugs (DMARDs for RA), physical therapy, and, in severe cases, joint replacement surgery.",
      "homeCare": "Engage in low-impact exercises (swimming, cycling, walking) to keep joints flexible and strengthen surrounding muscles. Apply hot packs to relieve stiffness and cold packs to reduce acute pain and swelling. Use assistive devices like jar openers or canes if needed.",
      "prevention": "Maintain a healthy weight to reduce stress on joints. Protect your joints from injury during physical activities. Eat an anti-inflammatory diet rich in omega-3 fatty acids (like fish and walnuts), and avoid smoking.",
      "whenToSeeDoctor": "Consult a healthcare provider if you experience persistent joint pain, swelling, or stiffness that lasts for more than a few weeks or interferes with your daily activities.",
      "emergencySigns": [
        "A joint that is suddenly extremely swollen, red, hot to the touch, and accompanied by a high fever (signs of a serious joint infection or septic arthritis)",
        "Inability to move a joint at all or sudden, severe joint deformity following trauma"
      ],
      "relatedConditions": [
        "obesity",
        "diabetes-type2"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "obesity",
    "title": "Obesity",
    "category": "chronic",
    "keywords": [
      "obesity",
      "overweight",
      "bmi",
      "body mass index",
      "metabolic syndrome",
      "weight loss"
    ],
    "summary": "A complex, chronic disease characterized by an excessive amount of body fat that increases the risk of other health problems.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Follow a structured, calorie-controlled diet rich in vegetables, fruits, whole grains, and lean proteins under professional guidance.",
      "Aim for 150 to 300 minutes of moderate-intensity physical activity (like brisk walking or cycling) every week.",
      "Perform behavior modification techniques: track food intake, manage emotional eating, and build healthy cooking habits.",
      "Ensure 7 to 9 hours of quality sleep nightly, as sleep deprivation alters hormones that regulate appetite.",
      "Consult with a medical professional regarding weight-loss medications or bariatric surgery options if lifestyle changes alone are insufficient."
    ],
    "content": {
      "overview": "Obesity is a complex, chronic disease characterized by an excessive accumulation of body fat that presents a risk to health. It is diagnosed when a person's Body Mass Index (BMI)\u2014a calculation based on height and weight\u2014is 30 or higher.",
      "symptoms": [
        "High Body Mass Index (BMI) of 30 or above",
        "Increased waist circumference",
        "Shortness of breath with mild physical exertion",
        "Excessive sweating and heat intolerance",
        "Fatigue, joint pain (especially knees and back), and difficulty sleeping"
      ],
      "causes": "Obesity occurs when the body consumes more calories than it burns over time, storing the excess energy as fat. It is influenced by a combination of genetic, behavioral, metabolic, environmental, and socioeconomic factors, rather than a simple lack of willpower.",
      "riskFactors": [
        "Genetics and family lifestyle",
        "Unhealthy diet high in processed foods, sugary drinks, and fast food",
        "Sedentary lifestyle and lack of physical exercise",
        "Inadequate sleep or high stress levels (which affect hormones regulating appetite)",
        "Certain medical conditions (Cushing's syndrome, hypothyroidism) or medications (antidepressants, steroids)"
      ],
      "complications": "Obesity significantly increases the risk of developing other serious health conditions: type 2 diabetes, high blood pressure, heart disease, stroke, sleep apnoea, osteoarthritis, fatty liver disease, kidney disease, and several types of cancer.",
      "diagnosis": "Doctors diagnose obesity by measuring weight and height to calculate BMI. They also measure waist circumference, conduct skinfold thickness tests, and perform blood tests (cholesterol, glucose, thyroid panel) to screen for related metabolic conditions.",
      "treatment": "The primary goal is healthy, sustainable weight loss. Treatment plans include a balanced, calorie-controlled diet, increased physical activity, behavioral counseling, and lifestyle changes. In some cases, doctors may prescribe weight-loss medications or recommend bariatric (weight-loss) surgery.",
      "homeCare": "Track your food intake and physical activity. Focus on whole, nutrient-dense foods: vegetables, fruits, lean proteins, and fiber. Limit processed carbohydrates and sugary beverages. Aim for at least 150-300 minutes of moderate activity weekly.",
      "prevention": "Prevent excess weight gain by eating a balanced diet, staying physically active daily, limiting screen time, getting adequate sleep, and managing stress levels.",
      "whenToSeeDoctor": "Consult a doctor or a registered dietitian if you are concerned about your weight, if your BMI is over 25 (overweight) or 30 (obese), or if you have weight-related joint pain or breathing issues.",
      "emergencySigns": [
        "Sudden, severe shortness of breath or chest pain",
        "Inability to breathe when lying flat",
        "Sudden weakness or numbness on one side of the body"
      ],
      "relatedConditions": [
        "diabetes-type2",
        "hypertension",
        "arthritis",
        "gerd",
        "cad"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "anaemia",
    "title": "Anaemia",
    "category": "chronic",
    "keywords": [
      "anaemia",
      "iron deficiency",
      "hemoglobin",
      "red blood cells",
      "fatigue",
      "pale skin"
    ],
    "summary": "A condition in which the blood has a lower-than-normal number of red blood cells or low hemoglobin, causing fatigue.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Take oral iron supplements exactly as prescribed by a physician (typically on an empty stomach combined with Vitamin C to aid absorption).",
      "Incorporate iron-rich foods (red meat, poultry, dark leafy greens, beans, and fortified cereals) into your daily diet.",
      "Avoid consuming calcium, tea, coffee, or antacids within 2 hours of taking iron supplements, as these inhibit iron absorption.",
      "For vitamin deficiency anaemias, receive regular vitamin B12 injections or take daily oral folic acid supplements.",
      "Identify and treat the underlying cause of chronic blood loss (such as heavy menstruation, ulcers, or colon polyps)."
    ],
    "content": {
      "overview": "Anaemia is a medical condition in which your blood has a lower-than-normal amount of healthy red blood cells or a low concentration of haemoglobin\u2014the protein that enables red blood cells to carry oxygen from your lungs to the rest of your body.",
      "symptoms": [
        "Extreme, persistent fatigue and lack of energy",
        "Pale or yellowish skin, lips, and nail beds",
        "Coldness in the hands and feet",
        "Shortness of breath or dizziness, especially when standing up or exerting yourself",
        "Headaches and chest pain",
        "Brittle nails or unusual cravings for non-food items like ice (pica)"
      ],
      "causes": "Anaemia has three main causes: blood loss, lack of red blood cell production, or high rates of red blood cell destruction. The most common type is **Iron Deficiency Anaemia**, caused by a lack of iron, which the body needs to make haemoglobin. Other causes include vitamin deficiencies (B12, folate) and chronic inflammatory diseases.",
      "riskFactors": [
        "A diet consistently low in iron, vitamin B12, and folate",
        "Intestinal disorders that affect nutrient absorption (like celiac disease)",
        "Menstruation (due to monthly blood loss) and pregnancy",
        "Chronic conditions (kidney failure, cancer, autoimmune diseases)",
        "Family history of inherited anaemias, such as sickle cell anaemia"
      ],
      "complications": "Left untreated, severe anaemia can lead to profound exhaustion that prevents daily activities, pregnancy complications, heart problems (including rapid heart rate or heart failure as the heart pumps harder to deliver oxygen), and weakened immunity.",
      "diagnosis": "Anaemia is diagnosed using a Complete Blood Count (CBC) test, which measures levels of red blood cells (hematocrit) and haemoglobin. Further tests, such as serum ferritin or iron levels, are done to identify the specific type of anaemia.",
      "treatment": "Treatment depends on the underlying cause. Iron deficiency anaemia is treated with oral iron supplements and dietary changes. Vitamin deficiency anaemias require B12 injections or folate supplements. Underlying chronic diseases must be managed.",
      "homeCare": "Take iron supplements exactly as directed by your doctor; taking them with vitamin C (like orange juice) enhances absorption. Avoid taking iron supplements with calcium, tea, or antacids, which block absorption. Get adequate rest.",
      "prevention": "Eat a well-balanced, iron-rich diet including red meat, poultry, beans, dark green leafy vegetables, dried fruits, and iron-fortified cereals. Ensure adequate intake of vitamin C to aid iron absorption, and consume foods rich in B12 and folate.",
      "whenToSeeDoctor": "Schedule an appointment with a doctor if you experience persistent, unexplained fatigue, pale skin, or shortness of breath during routine activities.",
      "emergencySigns": [
        "Severe, crushing chest pain or pressure",
        "Sudden, severe shortness of breath",
        "Feeling faint, severely dizzy, or losing consciousness",
        "Rapid, irregular heartbeat accompanied by breathing difficulty"
      ],
      "relatedConditions": [
        "diabetes-type2",
        "hypertension",
        "thyroid-disorders"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "thyroid-disorders",
    "title": "Thyroid Disorders",
    "category": "chronic",
    "keywords": [
      "thyroid",
      "hypothyroidism",
      "hyperthyroidism",
      "goiter",
      "metabolism",
      "thyroxine"
    ],
    "summary": "Conditions affecting the thyroid gland, causing it to produce too much (hyperthyroidism) or too little (hypothyroidism) hormone.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "For hypothyroidism, take synthetic thyroid hormone (levothyroxine) daily on an empty stomach, exactly as prescribed.",
      "For hyperthyroidism, take prescribed antithyroid medications (e.g., methimazole) or undergo radioactive iodine therapy.",
      "Attend scheduled clinic visits for regular blood tests (TSH and free T4) to monitor hormone levels and adjust dosages.",
      "Maintain a balanced diet and discuss any dietary supplements (especially iodine or soy) with your doctor.",
      "Track physical symptoms of hormone imbalance, such as sudden weight changes, pulse rate changes, or extreme fatigue."
    ],
    "content": {
      "overview": "Thyroid disorders refer to conditions that affect the thyroid gland\u2014a small, butterfly-shaped gland in the front of the neck. The thyroid regulates your body's metabolism, and disorders can cause it to produce either too little hormone (hypothyroidism) or too much (hyperthyroidism).",
      "symptoms": [
        "**Hypothyroidism (Underactive)**: Fatigue, unexplained weight gain, cold intolerance, dry skin, hair loss, constipation, and muscle weakness.",
        "**Hyperthyroidism (Overactive)**: Unexplained weight loss, rapid or irregular heartbeat (palpitations), heat intolerance, increased anxiety/irritability, sweating, hand tremors, and frequent bowel movements."
      ],
      "causes": "**Hypothyroidism** is most commonly caused by Hashimoto's thyroiditis (an autoimmune disorder where the immune system attacks the thyroid) or iodine deficiency. **Hyperthyroidism** is most commonly caused by Graves' disease (an autoimmune stimulation of the gland) or thyroid nodules.",
      "riskFactors": [
        "Being female (thyroid disorders are much more common in women)",
        "Age (older adults are at higher risk)",
        "Family history of thyroid or autoimmune diseases",
        "Having an autoimmune disease like type 1 diabetes or celiac disease",
        "Previous thyroid surgery or radiation treatment to the neck"
      ],
      "complications": "Untreated hypothyroidism can lead to high cholesterol, heart disease, goiter (swollen neck), and a rare, life-threatening condition called myxedema coma. Untreated hyperthyroidism can cause heart rhythm disorders, weak bones (osteoporosis), and a severe condition called thyroid storm.",
      "diagnosis": "Thyroid disorders are diagnosed primarily through blood tests measuring Thyroid Stimulating Hormone (TSH) and free thyroxine (T4) levels. An ultrasound or a radioactive iodine uptake scan may be used to examine the gland's structure.",
      "treatment": "For **Hypothyroidism**, the standard treatment is daily oral use of synthetic thyroid hormone (levothyroxine) to restore normal levels. For **Hyperthyroidism**, treatments include antithyroid medications (such as methimazole), radioactive iodine therapy to shrink the gland, or surgical removal (thyroidectomy).",
      "homeCare": "Take thyroid medications consistently at the same time every day, ideally on an empty stomach. Attend regular follow-up appointments for blood tests so your doctor can adjust your dosage. Eat a balanced diet, and discuss iodine intake with your doctor.",
      "prevention": "Most thyroid disorders cannot be prevented, as they are autoimmune or genetic. However, ensuring adequate dietary iodine (using iodized salt or eating seafood) prevents iodine-deficiency goiter.",
      "whenToSeeDoctor": "Consult a doctor if you experience persistent symptoms of unexplained weight changes, chronic fatigue, constant feeling of cold or heat, or if you notice a swelling in the front of your neck.",
      "emergencySigns": [
        "Thyroid Storm (severe hyperthyroidism emergency): high fever, extremely rapid heart rate, confusion, agitation, or delirium",
        "Myxedema Crisis (severe hypothyroidism emergency): extreme lethargy, confusion, shallow breathing, and abnormally low body temperature"
      ],
      "relatedConditions": [
        "anaemia",
        "depression",
        "insomnia"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "migraine",
    "title": "Migraine",
    "category": "mental",
    "keywords": [
      "migraine",
      "headache",
      "aura",
      "throbbing pain",
      "photophobia",
      "nausea"
    ],
    "summary": "A neurological condition causing severe, throbbing headaches, often accompanied by nausea and sensitivity to light.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "At the first sign of an attack, immediately rest in a dark, quiet, and cool room.",
      "Take prescribed abortive medications (such as triptans) or over-the-counter pain relievers early in the headache phase.",
      "Apply a cold compress or an ice pack to the forehead or the back of the neck to constrict blood vessels.",
      "Keep a detailed Migraine Diary to track, identify, and eliminate personal triggers (such as specific foods, stress, or lack of sleep).",
      "Maintain a highly consistent daily schedule for meals, hydration, and sleep-wake cycles."
    ],
    "content": {
      "overview": "A migraine is a neurological condition characterized by intense, debilitating headaches. The pain is typically a throbbing or pulsing sensation, usually on one side of the head, and is often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.",
      "symptoms": [
        "Severe, throbbing or pulsing pain, usually on one side of the head",
        "Sensitivity to light (photophobia), sound (phonophobia), and sometimes smells",
        "Nausea and vomiting",
        "Visual disturbances known as 'Aura' (flashing lights, blind spots, or zig-zag patterns) occurring before the headache in about 20% of cases",
        "Dizziness or lightheadedness"
      ],
      "causes": "The exact cause of migraines is not fully understood, but they are believed to involve temporary changes in the chemicals, nerves, and blood vessels in the brain. Genetics play a strong role. Attacks are often triggered by stress, hormonal changes, certain foods, bright lights, sleep deprivation, or weather changes.",
      "riskFactors": [
        "Family history of migraines",
        "Gender (women are three times more likely to get migraines than men)",
        "Age (typically starts in adolescence and peaks in your 30s)",
        "High stress levels and irregular sleep schedules"
      ],
      "complications": "Frequent migraines can significantly affect quality of life, leading to missed school or work. Overusing acute headache medications can lead to a secondary cycle of headaches known as medication-overuse or 'rebound' headaches.",
      "diagnosis": "Migraines are diagnosed by a doctor based on your medical history, symptoms, and a physical/neurological examination. Imaging tests like MRI or CT scans are only done to rule out other structural causes of severe headaches.",
      "treatment": "Treatment involves aborting active attacks and preventing future ones. Acute treatments include OTC pain relievers, triptans (prescription migraine-specific drugs), and anti-nausea medications. Preventative treatments include beta-blockers, antidepressants, or CGRP inhibitors for frequent sufferers.",
      "homeCare": "At the first sign of a migraine, rest in a dark, quiet room. Apply a cold compress or ice pack to your forehead or the back of your neck. Sip small amounts of water to stay hydrated. Keep a detailed migraine diary to track and identify your specific triggers.",
      "prevention": "Maintain a consistent daily schedule: eat meals at regular times, stay hydrated, and sleep and wake at the same times. Practice stress-management techniques like meditation. Avoid known trigger foods (such as aged cheeses, chocolate, alcohol, and artificial sweeteners).",
      "whenToSeeDoctor": "Consult a doctor if your headaches are frequent, severe, do not respond to OTC treatments, or if your migraine pattern changes significantly.",
      "emergencySigns": [
        "A sudden, severe headache that peaks within seconds (often described as a 'thunderclap' headache)",
        "Headache accompanied by fever, stiff neck, confusion, seizures, or double vision",
        "Headache occurring after a head injury",
        "Sudden numbness, weakness, or paralysis on one side of your face or body, or difficulty speaking (which can mimic a stroke)"
      ],
      "relatedConditions": [
        "anxiety",
        "insomnia",
        "stroke-tia"
      ]
    },
    "specialist": "Neurologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Clinical Neurological Exam",
      "Brain MRI (to rule out other causes)"
    ]
  },
  {
    "id": "anxiety",
    "title": "Anxiety",
    "category": "mental",
    "keywords": [
      "anxiety",
      "panic attack",
      "generalized anxiety",
      "worry",
      "palpitations",
      "stress"
    ],
    "summary": "A mental health condition characterized by persistent, excessive worry, nervousness, and physical symptoms like a rapid heart rate.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Engage in structured psychotherapy, particularly Cognitive Behavioral Therapy (CBT), with a licensed professional.",
      "Practice daily stress-reduction techniques: deep diaphragmatic breathing, progressive muscle relaxation, or mindfulness meditation.",
      "Take prescribed daily medications (such as SSRIs or SNRIs) consistently to regulate brain chemistry.",
      "Limit or eliminate intake of caffeine, alcohol, and nicotine, which are chemical triggers that worsen physical anxiety symptoms.",
      "Establish a regular aerobic exercise routine to naturally burn off stress hormones and release calming endorphins."
    ],
    "content": {
      "overview": "Anxiety is a normal human response to stress, but when feelings of intense fear, worry, and apprehension become persistent, excessive, and interfere with daily life, it may indicate an anxiety disorder (such as Generalized Anxiety Disorder or Panic Disorder).",
      "symptoms": [
        "Persistent, uncontrollable worry or dread about everyday things",
        "Restlessness, feeling keyed up or on edge",
        "Rapid heart rate (palpitations) and hyperventilating (rapid breathing)",
        "Muscle tension, trembling, and sweating",
        "Difficulty concentrating or mind going blank",
        "Trouble sleeping (insomnia) and chronic fatigue"
      ],
      "causes": "The causes of anxiety disorders are complex and involve a combination of genetic factors, brain chemistry imbalances, environmental stressors (work, financial, or relationship stress), trauma, and underlying physical health conditions.",
      "riskFactors": [
        "History of trauma or abuse (especially in childhood)",
        "Family history of anxiety or other mental health conditions",
        "Chronic, severe physical illness or pain",
        "Stress accumulation from major life events",
        "Personality factors (being naturally shy or prone to worry)"
      ],
      "complications": "Chronic anxiety can lead to major depression, sleep disturbances, chronic physical pain (headaches, stomach aches), digestive issues (IBS), social isolation, difficulty functioning at work or school, and substance abuse.",
      "diagnosis": "Anxiety is diagnosed through a psychological evaluation. Mental health professionals use standardized diagnostic criteria (from the DSM-5) to assess the duration, intensity, and impact of your symptoms.",
      "treatment": "Anxiety disorders are highly treatable. The primary approaches are psychotherapy, particularly Cognitive Behavioral Therapy (CBT), and medications. Medications may include selective serotonin reuptake inhibitors (SSRIs), serotonin-norepinephrine reuptake inhibitors (SNRIs), or short-term anti-anxiety medications.",
      "homeCare": "Practice deep breathing exercises or progressive muscle relaxation during moments of high stress. Limit caffeine, nicotine, and alcohol, as these substances can trigger or worsen anxiety symptoms. Engage in regular, moderate exercise to release stress-reducing endorphins.",
      "prevention": "While you cannot always prevent anxiety, you can manage it. Establish a healthy lifestyle, prioritize sleep, join support groups, learn to set boundaries to avoid overwhelm, and seek professional help early before symptoms worsen.",
      "whenToSeeDoctor": "Consult a healthcare provider or mental health professional if your anxiety is difficult to control, causes you distress, or interferes with your relationships, work, or daily activities.",
      "emergencySigns": [
        "Sudden, overwhelming panic attack accompanied by chest pain, severe shortness of breath, and a feeling that you are dying (always seek medical evaluation to rule out a heart attack)",
        "Persistent thoughts of self-harm or suicide"
      ],
      "relatedConditions": [
        "depression",
        "insomnia",
        "migraine"
      ]
    },
    "specialist": "Psychologist or Psychiatrist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "DSM-5 Psychological Evaluation"
    ]
  },
  {
    "id": "depression",
    "title": "Depression",
    "category": "mental",
    "keywords": [
      "depression",
      "depressive disorder",
      "sadness",
      "anhedonia",
      "hopelessness",
      "mental health"
    ],
    "summary": "A common and serious mood disorder that negatively affects how you feel, think, and handle daily activities.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Participate in regular psychotherapy (such as Cognitive Behavioral Therapy or Interpersonal Therapy) with a mental health professional.",
      "Take prescribed antidepressant medications daily, strictly as directed, allowing 4-6 weeks for full therapeutic effects.",
      "Build a reliable support network of family, close friends, or support groups, and actively avoid self-isolation.",
      "Incorporate daily physical activity (such as a 20-30 minute walk) to stimulate natural brain-derived neurotrophic factor (BDNF).",
      "Establish a structured daily routine with consistent times for waking, eating, and sleeping, breaking large tasks into small, manageable steps."
    ],
    "content": {
      "overview": "Depression (Major Depressive Disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It causes persistent feelings of sadness and a loss of interest in activities you once enjoyed.",
      "symptoms": [
        "Persistent feeling of sadness, emptiness, or low mood",
        "Loss of interest or pleasure in most normal activities (anhedonia)",
        "Significant weight loss or gain, or changes in appetite",
        "Insomnia or sleeping too much (hypersomnia)",
        "Fatigue, low energy, and slowed thinking or body movements",
        "Feelings of worthlessness, excessive guilt, or helplessness"
      ],
      "causes": "Depression does not have a single cause. It results from a complex interaction of social, psychological, and biological factors. These include brain chemistry imbalances, genetic predisposition, major life stressors, trauma, chronic illnesses, and hormonal changes.",
      "riskFactors": [
        "Low self-esteem, being overly self-critical, or pessimism",
        "Family history of depression, bipolar disorder, or alcoholism",
        "History of trauma, abuse, or major negative life events (loss of a loved one, financial problems)",
        "Having a serious or chronic illness (cancer, heart disease, diabetes)",
        "Abuse of alcohol or recreational drugs"
      ],
      "complications": "Depression is a leading cause of disability worldwide. Complications include excess weight or obesity (from emotional eating), physical pain and illness, anxiety and panic disorders, relationship difficulties, social isolation, self-mutilation, and suicide.",
      "diagnosis": "A doctor or psychiatrist diagnoses depression based on a thorough clinical interview, questionnaires, and diagnostic criteria. A physical exam and blood tests (such as a thyroid panel) are often conducted to rule out physical causes of low mood.",
      "treatment": "Depression is highly treatable. Most people benefit from psychotherapy (such as CBT or interpersonal therapy), antidepressant medications (SSRIs, SNRIs), or a combination of both. Aerobic exercise and lifestyle changes also play a significant role.",
      "homeCare": "Do not isolate yourself; try to keep up with social activities and talk to trusted friends or family. Set realistic goals for yourself and break large tasks into smaller ones. Avoid alcohol and drugs, which can worsen depression. Stick to a regular sleep schedule.",
      "prevention": "Manage stress effectively, build strong social support networks, and seek treatment at the first sign of a problem to help prevent depression from worsening or recurring. Exercise regularly and maintain a healthy lifestyle.",
      "whenToSeeDoctor": "Make an appointment with a doctor or mental health professional if you have felt sad, empty, or lost interest in your usual activities for more than two weeks.",
      "emergencySigns": [
        "Having active thoughts of suicide, self-harm, or harming others",
        "Expressing a desire to die, putting affairs in order, or giving away prized possessions",
        "Severe hallucinations, delusions, or inability to care for one's basic physical needs"
      ],
      "relatedConditions": [
        "anxiety",
        "insomnia",
        "thyroid-disorders"
      ]
    },
    "specialist": "Psychiatrist or Psychologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "DSM-5 Psychological Evaluation"
    ]
  },
  {
    "id": "insomnia",
    "title": "Insomnia",
    "category": "mental",
    "keywords": [
      "insomnia",
      "sleep disorder",
      "sleeplessness",
      "sleep hygiene",
      "fatigue",
      "circadian"
    ],
    "summary": "A common sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or getting quality sleep.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Undergo Cognitive Behavioral Therapy for Insomnia (CBT-I), the clinically proven gold-standard treatment.",
      "Maintain a strict sleep schedule, going to bed and waking up at the exact same times every day (even on weekends).",
      "Perform a daily sleep hygiene protocol: keep the bedroom dark, silent, and at a cool temperature (around 18\u00b0C or 65\u00b0F).",
      "Strictly avoid blue-light emitting screens (smartphones, tablets, computers, TVs) for at least 1 hour before bedtime.",
      "Limit caffeine intake to the morning hours, avoid heavy meals within 3 hours of bed, and restrict alcohol near bedtime."
    ],
    "content": {
      "overview": "Insomnia is a common sleep disorder in which you have trouble falling asleep, staying asleep, or waking up too early and not being able to get back to sleep. This leaves you feeling unrefreshed and fatigued during the day, impacting your health and performance.",
      "symptoms": [
        "Difficulty falling asleep at night",
        "Waking up during the night or waking up too early",
        "Not feeling well-rested after a night's sleep",
        "Daytime tiredness, sleepiness, and irritability",
        "Difficulty concentrating, remembering, or focusing on tasks",
        "Increased errors or accidents"
      ],
      "causes": "Insomnia can be primary (not linked to other conditions) or secondary (due to health conditions, medications, or lifestyle). Common causes include high stress, poor sleep habits, irregular schedules (shift work), caffeine, nicotine, alcohol, chronic pain, anxiety, depression, and certain medications.",
      "riskFactors": [
        "Being female (hormonal changes during menstrual cycles, pregnancy, and menopause play a role)",
        "Being over the age of 60 (changes in sleep patterns and health)",
        "Having a high-stress lifestyle or a mental health disorder",
        "Working changing shifts or traveling across time zones (jet lag)"
      ],
      "complications": "Lack of sleep can lead to lower performance on the job or at school, slowed reaction time when driving (higher accident risk), increased risk of high blood pressure and heart disease, and worsened symptoms of anxiety or depression.",
      "diagnosis": "A doctor will review your sleep patterns and medical history. They may ask you to keep a sleep diary for a few weeks. In some cases, you may be referred to a sleep center for an overnight sleep study (polysomnography) to rule out sleep apnoea.",
      "treatment": "The first-line treatment for chronic insomnia is **Cognitive Behavioral Therapy for Insomnia (CBT-I)**, which helps control or eliminate thoughts and actions that keep you awake. In some cases, short-term prescription sleep aids may be used under strict medical supervision.",
      "homeCare": "Practice strict sleep hygiene: keep your bedroom dark, quiet, and cool. Avoid screens (phones, TVs, computers) for at least one hour before bed. Limit caffeine, alcohol, and heavy meals in the evening. Establish a relaxing bedtime routine, and only use your bed for sleep and intimacy.",
      "prevention": "Keep your sleep time and wake time consistent every day, including on weekends. Stay physically active during the day (but avoid intense exercise close to bedtime). Manage stress, and avoid long daytime naps.",
      "whenToSeeDoctor": "Consult a doctor if your insomnia lasts for more than a few weeks, makes it difficult for you to function during the day, or if you suspect you have a sleep disorder like sleep apnoea.",
      "emergencySigns": [
        "Severe, unexplained daytime sleepiness that causes you to fall asleep while driving or operating machinery",
        "Severe insomnia accompanied by acute, severe depression and suicidal thoughts"
      ],
      "relatedConditions": [
        "anxiety",
        "depression",
        "migraine",
        "thyroid-disorders"
      ]
    },
    "specialist": "Sleep Specialist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Sleep Diary Tracking",
      "Polysomnography (Sleep Study)"
    ]
  },
  {
    "id": "acne",
    "title": "Acne",
    "category": "skin",
    "keywords": [
      "acne",
      "pimples",
      "blackheads",
      "sebum",
      "clogged pores",
      "skin inflammation"
    ],
    "summary": "A common skin condition that occurs when hair follicles become clogged with oil and dead skin cells, causing pimples.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Wash the face gently twice a day with a mild, non-comedogenic cleanser and lukewarm water (do not scrub).",
      "Apply over-the-counter topical treatments containing active benzoyl peroxide, salicylic acid, or adapalene daily.",
      "For moderate to severe acne, consult a dermatologist for prescription topical retinoids or oral antibiotics.",
      "**Never squeeze, pick, or pop pimples**, as this drives inflammation deeper, leading to secondary infection and permanent scarring.",
      "Keep hair clean and off the face, and look for skincare and cosmetics specifically labeled 'non-comedogenic'."
    ],
    "content": {
      "overview": "Acne (Acne Vulgaris) is a common inflammatory skin condition that occurs when your hair follicles become clogged with oil (sebum) and dead skin cells. It most frequently affects the face, forehead, chest, upper back, and shoulders.",
      "symptoms": [
        "Whiteheads (closed clogged pores) and Blackheads (open clogged pores)",
        "Papules (small, red, tender bumps)",
        "Pimples/Pustules (papules with pus at their tips)",
        "Nodules (large, solid, painful lumps beneath the surface of the skin)",
        "Cystic lesions (painful, pus-filled lumps beneath the skin)"
      ],
      "causes": "Acne develops due to four primary factors: excess oil production (sebum), hair follicles clogged by oil and dead skin cells, bacteria (Cutibacterium acnes) in the pores, and inflammation. Hormonal fluctuations (especially during puberty, menstruation, or pregnancy) stimulate oil glands, worsening acne.",
      "riskFactors": [
        "Age (most common during adolescence, but can affect adults)",
        "Hormonal changes (puberty, pregnancy, starting/stopping birth control)",
        "Family history and genetics",
        "Using greasy or oily cosmetics and skin creams",
        "Friction or pressure on the skin (from helmets, tight collars, backpacks)",
        "High stress levels (which can release hormones that worsen acne)"
      ],
      "complications": "While not medically dangerous, severe acne can lead to permanent physical scarring (pitted skin or dark spots) and can significantly impact self-esteem, leading to anxiety, depression, and social withdrawal.",
      "diagnosis": "Acne is easily diagnosed by a healthcare provider or dermatologist during a visual examination of your skin. They will determine the severity of your acne (mild, moderate, or severe) to guide treatment.",
      "treatment": "Treatment depends on severity. Mild acne is treated with OTC topical medications containing benzoyl peroxide, salicylic acid, or adapalene. Moderate to severe acne requires prescription treatments: topical or oral antibiotics, prescription-strength retinoids, hormonal therapies, or oral isotretinoin (Accutane).",
      "homeCare": "Wash your face gently twice a day with a mild, non-drying cleanser and lukewarm water; do not scrub vigorously. Never squeeze, pop, or pick at acne lesions to prevent scarring and infection. Look for skincare products labeled 'non-comedogenic' (meaning they won't clog pores).",
      "prevention": "Keep your skin clean, wash your hair regularly (especially if it is oily), and remove makeup thoroughly before sleeping. Avoid touching your face. Wash your face after sweating or exercising.",
      "whenToSeeDoctor": "Consult a doctor or dermatologist if your acne does not respond to OTC treatments after 6-8 weeks, if you have deep, painful nodules/cysts, or if your acne is causing you significant emotional distress.",
      "emergencySigns": [
        "Sudden, severe swelling, redness, and warmth around a skin blemish, accompanied by a fever (which can indicate a spreading bacterial skin infection like cellulitis)"
      ],
      "relatedConditions": [
        "eczema"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "Weeks to Months (Treatment courses)",
    "diagnosticTests": [
      "Visual Skin Examination"
    ]
  },
  {
    "id": "eczema",
    "title": "Eczema",
    "category": "skin",
    "keywords": [
      "eczema",
      "atopic dermatitis",
      "itchy skin",
      "dry skin",
      "skin barrier",
      "allergy"
    ],
    "summary": "A chronic skin condition characterized by red, itchy, and dry patches of skin, often linked to allergies.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Apply thick, fragrance-free moisturizing creams or ointments at least twice a day, especially immediately after bathing.",
      "Take short, lukewarm baths or showers (10 minutes maximum) instead of hot ones to protect the skin barrier.",
      "Use mild, soap-free cleansers and avoid products containing fragrances, dyes, or harsh chemicals.",
      "Apply prescribed topical corticosteroid or calcineurin inhibitor creams during active flare-ups to reduce inflammation.",
      "Identify and strictly avoid environmental triggers (such as wool fabrics, harsh detergents, sudden temperature changes, or stress)."
    ],
    "content": {
      "overview": "Eczema, most commonly referring to Atopic Dermatitis, is a chronic, non-contagious skin condition that causes patches of skin to become dry, red, inflamed, and extremely itchy. It is common in children but can occur at any age, typically featuring periodic flare-ups.",
      "symptoms": [
        "Dry, sensitive skin",
        "Intense itching (pruritus), which can be severe, especially at night",
        "Red to brownish-gray patches on the skin (especially on hands, feet, ankles, wrists, neck, and inside elbows/knees)",
        "Small, raised bumps that may leak fluid and crust over when scratched",
        "Thickened, cracked, or scaly skin"
      ],
      "causes": "The exact cause of eczema is a combination of an overactive immune system, genetics, environmental triggers, and a defect in the skin barrier. The skin barrier becomes unable to retain moisture and protect against allergens, irritants, and microbes.",
      "riskFactors": [
        "A personal or family history of eczema, asthma, hay fever, or food allergies (often called the 'atopic march')",
        "Living in a cold, dry, or highly polluted climate",
        "Frequent exposure to harsh soaps, detergents, chemicals, or synthetic fabrics"
      ],
      "complications": "Complications include bacterial or viral skin infections (such as impetigo or herpes simplex) resulting from scratching and breaking the skin, permanent skin thickening and darkening (lichenification), and sleep disturbances due to chronic itching.",
      "diagnosis": "Eczema is diagnosed by a doctor through a physical exam and a review of your symptoms and history. Allergy skin patch testing may be recommended to identify specific environmental triggers.",
      "treatment": "Treatment focuses on healing the skin barrier and reducing inflammation. It includes daily use of thick moisturizers, topical corticosteroid creams to control flare-ups, topical calcineurin inhibitors, and oral antihistamines to reduce itching. Severe cases may require systemic medications or phototherapy.",
      "homeCare": "Moisturize your skin at least twice a day, especially immediately after bathing while the skin is damp. Take short, lukewarm baths or showers rather than hot ones. Use mild, fragrance-free soaps. Wear soft, breathable cotton clothing and avoid scratching the itchy areas.",
      "prevention": "Prevent flare-ups by keeping skin well-hydrated daily. Identify and avoid your specific eczema triggers: sudden temperature changes, harsh chemicals, dust mites, stress, and certain foods if they cause a reaction.",
      "whenToSeeDoctor": "See a doctor if your eczema symptoms interfere with your sleep or daily activities, if moisturizers and OTC hydrocortisone do not help, or if you see signs of infection (pus, red streaks, yellow scabs).",
      "emergencySigns": [
        "Signs of a severe skin infection: high fever, widespread painful blisters (especially if they look like cold sores), or rapidly spreading redness and swelling around an eczema patch"
      ],
      "relatedConditions": [
        "acne",
        "asthma",
        "chickenpox"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Allergy Patch Testing"
    ]
  },
  {
    "id": "uti",
    "title": "Urinary Tract Infection",
    "category": "other",
    "keywords": [
      "uti",
      "urinary tract infection",
      "cystitis",
      "dysuria",
      "burning urination",
      "bladder"
    ],
    "summary": "An infection in any part of the urinary system, most commonly the bladder, causing pain and burning during urination.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a healthcare provider to obtain a prescription for targeted antibiotics.",
      "**Complete the entire course of antibiotics** exactly as prescribed, even if symptoms vanish within 24-48 hours, to prevent recurrence.",
      "Drink generous amounts of water (8-10 glasses daily) to physically flush bacteria out of the urinary tract.",
      "Avoid irritating beverages like coffee, alcohol, and carbonated soft drinks until the infection clears.",
      "Wipe strictly from front to back after bowel movements and urinate shortly after sexual intercourse to prevent reinfection."
    ],
    "content": {
      "overview": "A Urinary Tract Infection (UTI) is an infection in any part of your urinary system\u2014your kidneys, ureters, bladder, and urethra. Most infections involve the lower urinary tract, specifically the bladder (cystitis) and the urethra (urethritis).",
      "symptoms": [
        "A strong, persistent urge to urinate",
        "A burning or painful sensation when urinating (dysuria)",
        "Passing frequent, small amounts of urine",
        "Cloudy, strong-smelling, or dark-colored urine",
        "Pelvic pain, especially in the center of the pelvis and around the pubic bone (in women)",
        "Blood in the urine (hematuria), making it look pink or cola-colored"
      ],
      "causes": "UTIs typically occur when bacteria (most commonly Escherichia coli from the digestive tract) enter the urinary tract through the urethra and begin to multiply in the bladder. The urinary system is designed to keep out bacteria, but sometimes these defenses fail.",
      "riskFactors": [
        "Female anatomy (women have a shorter urethra, making it easier for bacteria to reach the bladder)",
        "Being sexually active (can introduce bacteria into the urinary tract)",
        "Using certain types of birth control (diaphragms, spermicides)",
        "Menopause (decline in estrogen alters the urinary tract's natural defense bacteria)",
        "Urinary tract abnormalities or blockages (like kidney stones or an enlarged prostate)"
      ],
      "complications": "If treated promptly, UTIs rarely cause complications. If untreated, the infection can travel upward, causing a serious kidney infection (pyelonephritis), recurrent infections, or sepsis (a life-threatening response to infection).",
      "diagnosis": "A UTI is diagnosed using a urinalysis, where a urine sample is examined under a microscope for white blood cells, red blood cells, and bacteria. A urine culture may be performed to identify the exact bacterium and determine the most effective antibiotic.",
      "treatment": "UTIs are bacterial infections and require antibiotic treatment prescribed by a healthcare provider. Symptoms often clear up within a few days of starting treatment, but it is essential to complete the entire course of antibiotics to ensure the infection is completely gone.",
      "homeCare": "Drink plenty of water to help flush bacteria out of your urinary system. Avoid beverages that can irritate your bladder, such as coffee, alcohol, and soft drinks containing caffeine or citrus. A heating pad placed on your abdomen can help ease pelvic discomfort.",
      "prevention": "Drink plenty of fluids, especially water. Wipe from front to back after urinating or having a bowel movement to prevent bacteria from spreading to the urethra. Urinate shortly after sexual intercourse to flush out bacteria. Avoid irritating feminine products in the genital area.",
      "whenToSeeDoctor": "Consult a doctor at the first sign of a UTI\u2014such as burning during urination, frequent urges to urinate, or pelvic pain\u2014so you can be diagnosed and prescribed antibiotics.",
      "emergencySigns": [
        "Signs of a kidney infection (upper urinary tract emergency):",
        "High fever and shaking chills",
        "Pain in your back or side (flank pain), just under your ribs",
        "Nausea and vomiting",
        "Confusion or extreme lethargy, especially in older adults"
      ],
      "relatedConditions": [
        "fever",
        "stomach-pain",
        "kidney-stones"
      ]
    },
    "specialist": "Primary Care Physician or Urologist",
    "recoveryTime": "3 to 7 days",
    "diagnosticTests": [
      "Urinalysis",
      "Urine Culture & Sensitivity Test"
    ]
  },
  {
    "id": "stroke-tia",
    "title": "Stroke & TIA",
    "category": "mental",
    "keywords": [
      "stroke",
      "tia",
      "transient ischemic attack",
      "numbness",
      "facial droop",
      "slurred speech",
      "paralysis"
    ],
    "summary": "A medical emergency where blood flow to the brain is interrupted, or a temporary warning blockage (TIA).",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Seek emergency hospital care immediately (call 911/112). **Time lost is brain lost**; acute ischemic strokes require clot-busting medication (tPA) within 3-4.5 hours.",
      "Take daily prescribed preventative medications (antiplatelets like aspirin, anticoagulants, or blood pressure drugs) to prevent recurrence.",
      "Participate in physical, occupational, or speech rehabilitation therapy to recover lost functions and rebuild neural pathways.",
      "Adopt a strict heart-healthy diet low in sodium and saturated fats, and engage in supervised physical exercise.",
      "Monitor and control related chronic conditions: manage hypertension, diabetes, and high cholesterol meticulously."
    ],
    "content": {
      "overview": "A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. A Transient Ischemic Attack (TIA) is a temporary blockage, often called a 'warning stroke', that resolves quickly but requires urgent evaluation.",
      "symptoms": [
        "Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body",
        "Sudden confusion, trouble speaking, or difficulty understanding speech",
        "Sudden trouble seeing in one or both eyes",
        "Sudden trouble walking, dizziness, loss of balance, or lack of coordination",
        "Sudden, severe headache with no known cause"
      ],
      "causes": "An ischemic stroke (most common) is caused by a blocked artery in the brain. A hemorrhagic stroke is caused by a leaking or ruptured blood vessel in the brain. A TIA is caused by a temporary clot that dissolves on its own.",
      "riskFactors": [
        "High blood pressure (hypertension) and diabetes",
        "Cardiovascular disease, high cholesterol, and atrial fibrillation (irregular heart rhythm)",
        "Age, family history, smoking, obesity, and sedentary lifestyle"
      ],
      "complications": "Strokes can cause temporary or permanent disabilities: paralysis or loss of muscle movement, difficulty talking or swallowing, memory loss or thinking difficulties, emotional problems, and chronic pain.",
      "diagnosis": "Diagnosis is made rapidly in an emergency setting using physical neurological exams, CT scans or MRIs of the brain to identify the stroke type, and carotid ultrasounds or echocardiograms to find the source of clots.",
      "treatment": "Emergency treatment for ischemic stroke involves intravenous clot-dissolving medications (tPA) or endovascular procedures to remove the clot. Hemorrhagic stroke treatment focuses on controlling bleeding and reducing brain pressure. Long-term treatment involves rehabilitation and secondary prevention drugs.",
      "homeCare": "Rehabilitation is key. Actively participate in prescribed home exercises. Adapt the living environment to prevent falls. Support emotional health, as post-stroke depression is highly common.",
      "prevention": "Control high blood pressure, eat a diet rich in fruits and vegetables, maintain a healthy weight, exercise regularly, limit alcohol, quit smoking, and manage diabetes.",
      "whenToSeeDoctor": "If you experience any transient neurological symptoms (even if they resolve in minutes, indicating a TIA), see a doctor immediately for urgent preventative diagnostics.",
      "emergencySigns": [
        "**Use the F.A.S.T. check:**",
        "**Face Drooping:** One side of the face droops or is numb when smiling.",
        "**Arm Weakness:** One arm drifts downward when both arms are raised.",
        "**Speech Difficulty:** Speech is slurred, hard to understand, or cannot be produced.",
        "**Time to call 911/112:** If anyone shows any of these symptoms, even if they go away."
      ],
      "relatedConditions": [
        "hypertension",
        "diabetes-type2",
        "obesity",
        "cad"
      ]
    },
    "specialist": "Neurologist",
    "recoveryTime": "Chronic / Lifetime Rehabilitation",
    "diagnosticTests": [
      "Brain CT or MRI Scan",
      "Carotid Ultrasound",
      "Echocardiogram"
    ]
  },
  {
    "id": "cad",
    "title": "Coronary Artery Disease",
    "category": "chronic",
    "keywords": [
      "cad",
      "coronary artery disease",
      "heart disease",
      "angina",
      "chest pain",
      "atherosclerosis"
    ],
    "summary": "A chronic cardiovascular condition where major blood vessels supplying the heart become narrowed or blocked.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed cardiac medications daily: cholesterol-lowering statins, beta-blockers, ACE inhibitors, or daily low-dose aspirin.",
      "Follow a strict heart-healthy diet (like the Mediterranean or DASH diet) low in saturated fats, trans fats, and sodium.",
      "Engage in regular, structured, doctor-approved aerobic exercise to strengthen the heart muscle.",
      "Quit smoking and avoid secondhand smoke, as nicotine severely constricts blood vessels and damages artery linings.",
      "For severe blockages, undergo medical procedures (such as coronary angioplasty with stent placement or bypass surgery) as recommended by a cardiologist."
    ],
    "content": {
      "overview": "Coronary Artery Disease (CAD) is a common chronic heart condition where the major blood vessels that supply your heart muscle with blood, oxygen, and nutrients (coronary arteries) become narrowed or hardened due to cholesterol plaque buildup (atherosclerosis).",
      "symptoms": [
        "Chest pain, pressure, or tightness (angina), typically triggered by physical exertion or emotional stress",
        "Shortness of breath or extreme fatigue during routine activities",
        "Pain radiating to the neck, jaw, throat, back, or abdomen",
        "Heart palpitations (sensation of a racing or fluttering heartbeat)"
      ],
      "causes": "CAD is caused by plaque buildup (atherosclerosis) in the wall of the arteries that supply blood to the heart. This plaque is made of cholesterol deposits, waste products, calcium, and fibrin, which narrow the arteries over decades.",
      "riskFactors": [
        "High blood pressure, high cholesterol, and diabetes",
        "Smoking or tobacco use, obesity, and physical inactivity",
        "Family history of early heart disease, and advancing age"
      ],
      "complications": "CAD can lead to serious, life-threatening complications, including chest pain (angina), heart attack (myocardial infarction) when a plaque ruptures and blocks blood flow entirely, heart failure due to chronic oxygen deprivation, and abnormal heart rhythms (arrhythmias).",
      "diagnosis": "CAD is diagnosed using Electrocardiograms (ECG), Echocardiograms (ultrasound of the heart), Cardiac Stress Testing (exercise or chemical), Coronary Angiography (imaging with dye), or CT scans to measure coronary calcium.",
      "treatment": "Treatment involves major lifestyle changes, daily medications to manage cholesterol and blood pressure, and interventional procedures like angioplasty (inserting a balloon and stent to open the artery) or coronary artery bypass graft (CABG) surgery.",
      "homeCare": "Monitor symptoms closely and keep emergency nitroglycerin nearby if prescribed. Participate in a cardiac rehabilitation program. Eat small, low-fat meals to avoid stressing the heart after eating. Manage stress using relaxation exercises.",
      "prevention": "Eat a balanced diet high in fiber and omega-3s, exercise regularly, maintain a healthy weight, manage high blood pressure and diabetes, quit smoking, and manage chronic stress.",
      "whenToSeeDoctor": "Schedule a consultation with a cardiologist if you experience unexplained chest discomfort, shortness of breath during mild exercise, or if you have multiple cardiovascular risk factors.",
      "emergencySigns": [
        "Sudden, severe, crushing chest pain or pressure (sensation of an elephant sitting on the chest)",
        "Chest pain radiating to the left arm, shoulder, neck, jaw, or back",
        "Chest discomfort accompanied by profuse sweating, nausea, vomiting, or severe dizziness",
        "Sudden, extreme shortness of breath"
      ],
      "relatedConditions": [
        "hypertension",
        "diabetes-type2",
        "obesity",
        "stroke-tia"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "kidney-stones",
    "title": "Kidney Stones",
    "category": "other",
    "keywords": [
      "kidney stones",
      "renal calculi",
      "flank pain",
      "back pain",
      "blood in urine",
      "calcium oxalate"
    ],
    "summary": "Hard deposits of minerals and salts that form inside the kidneys, causing excruciating pain when passing.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Drink massive amounts of water (2.5 to 3 liters daily) to physically flush the stone through the urinary tract.",
      "Take prescribed alpha-blockers (medication that relaxes the ureter muscles) to help the stone pass more quickly and with less pain.",
      "Use prescribed pain relievers (like ibuprofen or paracetamol) to manage the intense flank pain.",
      "For large stones that cannot pass naturally, undergo clinical procedures such as Lithotripsy (using sound waves to break stones) or laser surgery.",
      "Modify your diet long-term: reduce sodium and animal protein intake, and adjust calcium and oxalate consumption based on stone analysis."
    ],
    "content": {
      "overview": "Kidney stones (renal lithiasis or nephrolithiasis) are hard deposits made of minerals and acid salts that clump together in concentrated urine. They form inside the kidneys and cause excruciating, sharp pain as they travel down the narrow tubes connecting the kidneys to the bladder (ureters).",
      "symptoms": [
        "Severe, sharp pain in the side and back, below the ribs (flank pain)",
        "Pain that radiates to the lower abdomen and groin",
        "Pain that comes in waves and fluctuates in intensity",
        "Pain or burning sensation during urination",
        "Pink, red, or brown urine (blood in urine), or cloudy, foul-smelling urine",
        "Persistent nausea and vomiting"
      ],
      "causes": "Kidney stones form when your urine contains more crystal-forming substances\u2014such as calcium, oxalate, and uric acid\u2014than the fluid in your urine can dilute. At the same time, your urine may lack substances that prevent crystals from sticking together.",
      "riskFactors": [
        "Dehydration (not drinking enough water is the primary cause)",
        "Diets high in protein, sodium (salt), and sugar",
        "Obesity, inflammatory bowel diseases, and certain medical conditions like hyperparathyroidism",
        "Family or personal history of kidney stones"
      ],
      "complications": "While kidney stones rarely cause permanent damage if treated promptly, they can block the ureter, leading to urine backup, kidney swelling (hydronephrosis), severe kidney infections, or chronic kidney damage.",
      "diagnosis": "Kidney stones are diagnosed using imaging tests (high-speed CT scans or ultrasounds to locate stones), urinalysis to check for blood and infection, and blood tests to measure calcium and uric acid levels.",
      "treatment": "Treatment depends on the stone's size. Small stones require hydration, pain medication, and medical therapy to help them pass. Large stones require medical interventions: Extracorporeal Shock Wave Lithotripsy (ESWL) to shatter the stone, Ureteroscopy (laser breaking), or percutaneous nephrolithotomy.",
      "homeCare": "Drink water constantly. Strain your urine through a stone strainer if advised, to catch the stone for laboratory analysis. Use heating pads on your side or back to help soothe severe muscle spasms in the ureters.",
      "prevention": "Stay well-hydrated throughout the day (urine should be clear or pale yellow). Limit salt intake, limit animal proteins, and consult a doctor before changing calcium intake, as dietary calcium actually helps prevent oxalate stones.",
      "whenToSeeDoctor": "Consult a doctor if you experience severe pain in your side or back that does not go away, pain accompanied by mild nausea, or if you notice blood in your urine.",
      "emergencySigns": [
        "Pain so severe that you cannot sit still or find a comfortable position",
        "Pain accompanied by a high fever, shaking chills, and sweating (indicating a serious urinary tract infection blocked by a stone)",
        "Pain accompanied by persistent vomiting and inability to keep fluids down",
        "Inability to pass urine at all"
      ],
      "relatedConditions": [
        "uti",
        "stomach-pain"
      ]
    },
    "specialist": "Urologist",
    "recoveryTime": "1 to 4 weeks",
    "diagnosticTests": [
      "Non-contrast CT Scan of Abdomen/Pelvis",
      "Urinalysis",
      "Kidney Ultrasound"
    ]
  },
  {
    "id": "gastritis",
    "title": "Gastritis",
    "category": "digestive",
    "keywords": [
      "gastritis",
      "stomach inflammation",
      "indigestion",
      "h pylori",
      "bloating",
      "burning stomach"
    ],
    "summary": "Inflammation of the protective lining of the stomach, causing burning pain, indigestion, and bloating.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "If caused by H. pylori bacteria, complete a prescribed dual-antibiotic and PPI course (triple therapy) to eradicate the infection.",
      "Take acid-reducing medications (such as PPIs or H2 blockers) as directed to allow the irritated stomach lining to heal.",
      "Avoid stomach irritants: eliminate alcohol, quit smoking, and stop taking NSAIDs (like ibuprofen, naproxen, or aspirin).",
      "Adopt a bland, stomach-friendly diet, eating smaller, frequent meals and avoiding spicy, acidic, fried, or highly seasoned foods.",
      "Manage stress levels, as high stress triggers excess stomach acid production that delays lining recovery."
    ],
    "content": {
      "overview": "Gastritis is an inflammation, irritation, or erosion of the protective lining of the stomach. It can occur suddenly (acute gastritis) or develop gradually over time (chronic gastritis), and is highly treatable once the trigger is identified.",
      "symptoms": [
        "A gnawing or burning ache or pain (indigestion) in your upper abdomen, which may become either worse or better with eating",
        "Nausea and recurrent vomiting",
        "A feeling of fullness in your upper abdomen after eating",
        "Abdominal bloating, belching, and gas"
      ],
      "causes": "Gastritis is primarily caused by weakness or injury in the mucus-lined barrier that protects your stomach wall, allowing digestive juices to damage and inflame the lining. Common triggers include infection with Helicobacter pylori (H. pylori) bacteria, regular use of pain relievers (NSAIDs), excessive alcohol use, and chronic stress.",
      "riskFactors": [
        "Bacterial infection (H. pylori is highly common worldwide)",
        "Regular use of pain relievers like ibuprofen, naproxen, or aspirin",
        "Older age (stomach lining thins with age) and excessive alcohol consumption",
        "Severe physical stress (major surgery, injury, or severe infections)"
      ],
      "complications": "If left untreated, chronic gastritis can lead to stomach ulcers, persistent bleeding, and, in rare cases, chronic inflammation can increase the risk of stomach cancer.",
      "diagnosis": "Gastritis is diagnosed using an upper endoscopy (inserting a camera to view the stomach lining and take a biopsy), blood tests, stool tests, or breath tests to check for H. pylori infection.",
      "treatment": "Treatment involves addressing the cause. Antibiotics are prescribed for H. pylori. Acid blockers (PPIs or H2 blockers) and antacids are used to reduce stomach acid. Avoiding NSAIDs, alcohol, and trigger foods is essential for recovery.",
      "homeCare": "Eat smaller, more frequent meals. Avoid spicy, highly acidic (citrus, tomato), fried, or fatty foods. Sip chamomile or ginger tea. Avoid lying flat immediately after eating. Limit or avoid caffeine.",
      "prevention": "Practice good hygiene (wash hands) to prevent H. pylori infection. Limit the use of NSAID pain relievers; switch to paracetamol when possible. Limit alcohol intake and manage stress.",
      "whenToSeeDoctor": "Consult a healthcare provider if you have indigestion or stomach pain that lasts for more than a week, or if symptoms occur after starting a new medication.",
      "emergencySigns": [
        "Vomiting blood or material that looks like coffee grounds",
        "Passing stools that are black, tarry, or contain visible blood",
        "Sudden, severe, and constant abdominal pain that makes it painful to move"
      ],
      "relatedConditions": [
        "gerd",
        "stomach-pain",
        "food-poisoning"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "acute-bronchitis",
    "title": "Acute Bronchitis",
    "category": "infectious",
    "keywords": [
      "bronchitis",
      "chest cold",
      "cough",
      "mucus",
      "bronchial tubes",
      "phlegm",
      "wheezing"
    ],
    "summary": "An inflammation of the lining of the bronchial tubes, often following a cold or viral infection, causing a persistent cough.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Allow the condition to resolve naturally (typically 1 to 3 weeks) as most acute cases are viral and do not benefit from antibiotics.",
      "Inhale moisture using a cool-mist humidifier or by breathing steam in a hot shower to loosen stubborn chest mucus.",
      "Maintain high daily fluid intake (water, warm teas) to thin bronchial secretions and soothe the throat.",
      "Use over-the-counter cough suppressants at night if the cough disrupts sleep, and expectorants during the day to clear mucus.",
      "Strictly avoid lung irritants: do not smoke, avoid secondhand smoke, and wear a mask in dusty or polluted environments."
    ],
    "content": {
      "overview": "Acute bronchitis, often called a 'chest cold', is a temporary inflammation of the lining of your bronchial tubes, which carry air to and from your lungs. It commonly develops after a common cold or flu and features a lingering, mucus-producing cough.",
      "symptoms": [
        "A persistent cough, which may produce clear, yellow, or green mucus (sputum)",
        "Fatigue, mild headache, and generalized body aches",
        "Slight fever and chills",
        "Chest discomfort or a burning, tight sensation when coughing or breathing deeply",
        "Mild shortness of breath or wheezing"
      ],
      "causes": "Acute bronchitis is caused by the same viruses that cause colds and the flu. The virus infects the respiratory tract and spreads to the bronchial tubes, causing them to swell and produce mucus. Less than 10% of cases are bacterial.",
      "riskFactors": [
        "Having a recent cold, flu, or upper respiratory infection",
        "Cigarette smoking or exposure to secondhand smoke",
        "Weakened immune system or chronic lung conditions like asthma",
        "Occupational exposure to dust, chemical fumes, or air pollution"
      ],
      "complications": "Although a single episode of bronchitis usually resolves completely, it can occasionally lead to pneumonia, particularly in older adults, smokers, or individuals with chronic heart or lung diseases.",
      "diagnosis": "Diagnosis is based on a physical exam and listening to your lungs with a stethoscope. A chest X-ray may be ordered to rule out pneumonia if you have a high fever or severe shortness of breath.",
      "treatment": "Treatment is supportive. Antibiotics are not recommended unless a bacterial infection is confirmed. Over-the-counter cough medicines, pain relievers (paracetamol/ibuprofen), and bronchodilator inhalers (if wheezing is present) are used to relieve symptoms.",
      "homeCare": "Get plenty of rest. Drink warm liquids (like tea with honey) to soothe the throat and loosen mucus. Use a humidifier in your bedroom. Stay completely away from cigarette smoke and other airborne irritants.",
      "prevention": "Wash hands frequently to prevent viral transmission. Get your annual flu shot. Avoid smoking and wear a mask when exposed to high levels of dust, fumes, or air pollution.",
      "whenToSeeDoctor": "Consult a doctor if your cough lasts more than 3 weeks, prevents you from sleeping, is accompanied by a fever higher than 38\u00b0C (100.4\u00b0F), or produces bloody mucus.",
      "emergencySigns": [
        "Severe difficulty breathing or gasping for air",
        "A barking cough accompanied by high fever and inability to speak",
        "Lips, gums, or fingernails turning blue or gray (cyanosis)",
        "Chest pain that worsens when breathing in or coughing"
      ],
      "relatedConditions": [
        "common-cold",
        "influenza",
        "covid-19",
        "asthma",
        "copd"
      ]
    },
    "specialist": "Primary Care Physician",
    "recoveryTime": "2 to 3 weeks",
    "diagnosticTests": [
      "Auscultation (Stethoscope)",
      "Chest X-ray (to rule out pneumonia)"
    ]
  },
  {
    "id": "psoriasis",
    "title": "Psoriasis",
    "category": "skin",
    "keywords": [
      "psoriasis",
      "plaques",
      "scaly skin",
      "skin patches",
      "silver scales",
      "autoimmune skin"
    ],
    "summary": "A chronic autoimmune skin condition that speeds up the life cycle of skin cells, causing thick, red, scaly patches.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Apply prescribed topical treatments daily: corticosteroid ointments, vitamin D analogues, or coal tar preparations.",
      "Keep the skin consistently lubricated using thick, ointment-based moisturizers immediately after bathing.",
      "Undergo clinical phototherapy (supervised ultraviolet light treatment) under a dermatologist's care.",
      "Identify and avoid personal psoriasis flare-up triggers: manage stress, prevent skin injuries, and limit alcohol.",
      "For moderate to severe cases, consult a dermatologist regarding systemic medications or advanced biological injections."
    ],
    "content": {
      "overview": "Psoriasis is a chronic, non-contagious autoimmune skin condition that accelerates the growth cycle of skin cells. This rapid turnover causes skin cells to build up quickly on the surface of the skin, forming thick, red, itchy patches covered with silvery scales (plaques).",
      "symptoms": [
        "Red patches of skin covered with thick, silvery scales",
        "Dry, cracked skin that may itch, burn, or bleed",
        "Itching, burning, or soreness on the affected patches",
        "Thickened, pitted, or ridged fingernails or toenails",
        "Swollen and stiff joints (in cases of psoriatic arthritis)"
      ],
      "causes": "Psoriasis is an autoimmune disease. T-cells (a type of white blood cell) mistakenly attack healthy skin cells, triggering an overproduction of new skin cells. Instead of taking weeks to mature, new skin cells rise to the surface in days, piling up into plaques. Genetics and triggers play a major role.",
      "riskFactors": [
        "Family history and genetics (having one or both parents with psoriasis)",
        "Chronic stress (impacts the immune system)",
        "Smoking and heavy alcohol consumption",
        "Obesity (plaques often develop in skin folds and creases)"
      ],
      "complications": "Psoriasis increases the risk of developing psoriatic arthritis (causing joint pain and stiffness), eye conditions (like conjunctivitis), type 2 diabetes, high blood pressure, cardiovascular disease, and significant emotional distress or low self-esteem.",
      "diagnosis": "A dermatologist can usually diagnose psoriasis by examining your skin, scalp, and nails. In rare cases, a small skin biopsy may be taken and examined under a microscope to confirm the type of psoriasis.",
      "treatment": "Treatment aims to stop skin cells from growing so quickly and to remove scales. Options include topical creams (corticosteroids, retinoids, salicylic acid), phototherapy (light therapy), and systemic oral or injected medications (including biologics that target specific parts of the immune system).",
      "homeCare": "Take daily baths with colloidal oatmeal or Epsom salts in lukewarm water. Apply a heavy, ointment-based moisturizer immediately after bathing. Expose skin to small, controlled amounts of natural sunlight. Avoid scratching or picking at scales.",
      "prevention": "Prevent flare-ups by keeping skin well-hydrated, practicing stress management, avoiding skin injuries (cuts, severe sunburns), quitting smoking, and limiting alcohol intake.",
      "whenToSeeDoctor": "Consult a doctor or dermatologist if your skin plaques spread widely, cause discomfort or pain, do not improve with moisturizers, or if you develop joint pain and stiffness.",
      "emergencySigns": [
        "Erythrodermic Psoriasis (medical emergency): A rare, severe flare-up causing a fiery, red peeling rash that covers the entire body, accompanied by intense itching, burning, rapid heart rate, and fever (interferes with the body's temperature regulation)."
      ],
      "relatedConditions": [
        "eczema",
        "acne",
        "arthritis",
        "obesity"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "2 to 4 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Skin Scraping & KOH prep",
      "Skin Biopsy"
    ]
  },
  {
    "id": "copd",
    "title": "COPD",
    "category": "chronic",
    "keywords": [
      "copd",
      "chronic obstructive pulmonary disease",
      "emphysema",
      "chronic bronchitis",
      "smokers cough",
      "wheezing"
    ],
    "summary": "A chronic, progressive lung disease that blocks airflow, causing severe breathing difficulties and a persistent cough.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "**Stop smoking immediately** and avoid all exposure to secondhand smoke or air pollutants; this is the single most critical step to halt disease progression.",
      "Use prescribed bronchodilator inhalers (short-acting and long-acting) daily to relax and open airways.",
      "Take prescribed inhaled corticosteroids to reduce chronic airway inflammation and prevent sudden flare-ups.",
      "Participate in a structured Pulmonary Rehabilitation program to learn breathing techniques, exercises, and energy-conservation methods.",
      "For advanced cases, use supplemental oxygen therapy exactly as directed by your pulmonologist."
    ],
    "content": {
      "overview": "Chronic Obstructive Pulmonary Disease (COPD) is a progressive, chronic lung disease that makes it hard to breathe. It is characterized by long-term breathing problems and poor airflow, primarily encompassing two conditions: **Emphysema** (destruction of air sacs) and **Chronic Bronchitis** (chronic airway inflammation).",
      "symptoms": [
        "Shortness of breath, especially during physical activities",
        "Wheezing or a whistling sound when breathing",
        "Chest tightness or pressure",
        "A chronic cough that may produce clear, white, yellow, or greenish mucus ('smoker's cough')",
        "Frequent respiratory infections (like colds or flu)",
        "Lack of energy and unexplained weight loss (in advanced stages)"
      ],
      "causes": "COPD is primarily caused by long-term exposure to irritating gases and particulate matter, most commonly cigarette smoke. Other causes include exposure to secondhand smoke, pipe smoke, air pollution, chemical fumes, and dust in the workplace.",
      "riskFactors": [
        "Tobacco smoking (accountable for up to 85-90% of all cases)",
        "Occupational exposure to dusts, chemicals, and fumes",
        "Exposure to fuel-burning fumes in poorly ventilated homes",
        "Genetics (a rare hereditary deficiency in a protective protein called Alpha-1 Antitrypsin)"
      ],
      "complications": "COPD is a progressive disease. Complications include frequent respiratory infections (pneumonia), heart problems (including heart failure and pulmonary hypertension), lung cancer, high blood pressure in lung arteries, and depression due to restricted physical capability.",
      "diagnosis": "COPD is diagnosed using Spirometry (a pulmonary function test measuring how much air you can blow out and how fast), chest X-rays, CT scans, and Arterial Blood Gas analysis to check oxygen and carbon dioxide levels in the blood.",
      "treatment": "There is no cure, but treatment can control symptoms and slow progression. Key treatments include smoking cessation, bronchodilator inhalers to open airways, inhaled steroids, pulmonary rehab, oral steroids during flare-ups, oxygen therapy, and vaccines.",
      "homeCare": "Follow your COPD Action Plan. Practice pursed-lip breathing and diaphragmatic breathing. Drink plenty of water to thin mucus. Keep indoor air clean using HEPA filters. Exercise regularly to build physical stamina.",
      "prevention": "The most effective way to prevent COPD is to never smoke, or to quit smoking immediately. Avoid occupational exposure to chemical fumes and dust. Stay up to date on flu, COVID-19, and pneumonia vaccines.",
      "whenToSeeDoctor": "Consult a pulmonologist or doctor if you have a persistent cough with mucus, progressive shortness of breath during daily activities, or if your current COPD treatments are becoming less effective.",
      "emergencySigns": [
        "Severe shortness of breath where you cannot complete a single sentence without pausing for breath",
        "Lips, gums, tongue, or fingernails turning blue or gray (severe oxygen deprivation)",
        "Confusion, severe drowsiness, or rapid heartbeat during a breathing flare-up",
        "Chest pain accompanied by severe gasping for air"
      ],
      "relatedConditions": [
        "asthma",
        "acute-bronchitis",
        "influenza",
        "hypertension"
      ]
    },
    "specialist": "Pulmonologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Spirometry (Lung Function Test)",
      "Arterial Blood Gas (ABG) Analysis",
      "Chest CT Scan"
    ]
  },
  {
    "id": "allergic-rhinitis",
    "title": "Allergic Rhinitis (Hay Fever)",
    "category": "other",
    "keywords": [
      "allergic rhinitis",
      "hay fever",
      "allergies",
      "sneezing",
      "nasal congestion",
      "pollen"
    ],
    "summary": "An allergic response causing sneezing, itchy eyes, and nasal congestion in response to environmental allergens.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Identify and strictly avoid known environmental allergens (such as tree pollens, dust mites, mold spores, or animal dander).",
      "Use over-the-counter or prescription non-sedating antihistamines (like cetirizine or loratadine) daily to block allergic reactions.",
      "Apply nasal corticosteroid sprays (like fluticasone) daily to reduce chronic inflammation in the nasal passages.",
      "Perform nasal saline rinses using a neti pot or squeeze bottle to physically wash allergens out of the nasal passages.",
      "Consider allergen immunotherapy (allergy shots or sublingual tablets) under an allergist's care for long-term desensitization."
    ],
    "content": {
      "overview": "Allergic rhinitis, commonly known as hay fever, is an inflammatory response in the nasal passages triggered by breathing in environmental allergens. It affects millions of people globally and can be seasonal or perennial (year-round).",
      "symptoms": [
        "Frequent sneezing and runny nose with clear, watery discharge",
        "Nasal congestion and difficulty breathing through the nose",
        "Itchy, red, and watery eyes",
        "Itchy throat, roof of the mouth, or ears",
        "Fatigue or sleep disturbances caused by breathing difficulties"
      ],
      "causes": "Allergic rhinitis is caused by an overactive immune system reacting to harmless airborne particles. When these particles contact the nasal lining, the body releases histamine and other inflammatory chemicals, causing swelling and mucus.",
      "riskFactors": [
        "Family history of allergies, eczema, or asthma (the atopic march)",
        "Having other allergic conditions like atopic dermatitis",
        "Living or working in environments with high exposure to dust mites, pollen, mold, or pet dander"
      ],
      "complications": "Untreated allergic rhinitis can lead to chronic sinusitis (sinus infection), ear infections (otitis media), sleep apnoea, worsened asthma symptoms, and a reduced quality of life.",
      "diagnosis": "A doctor can diagnose allergic rhinitis based on symptoms and history. Skin prick testing or allergen-specific IgE blood tests can identify the exact triggering allergens.",
      "treatment": "Treatment focuses on allergen avoidance and symptom relief. Standard treatments include non-sedating antihistamines, nasal steroid sprays, oral decongestants (used short-term), and allergy shots for severe, refractory cases.",
      "homeCare": "Keep windows closed during high pollen seasons and run air conditioning. Wash bedding weekly in hot water (54\u00b0C or 130\u00b0F) to kill dust mites. Use a HEPA vacuum cleaner and wash hands after petting animals.",
      "prevention": "Avoid outdoor activity in the early morning when pollen counts are highest. Encase pillows and mattresses in dust-mite-proof covers. Shower before bed to remove allergens from your hair and skin.",
      "whenToSeeDoctor": "Consult a doctor if your allergy symptoms do not respond to OTC medications, interfere with sleep or work, or are accompanied by facial pain indicating a sinus infection.",
      "emergencySigns": [
        "Severe difficulty breathing, wheezing, or throat tightness (signs of anaphylaxis, a life-threatening allergic reaction)",
        "Swelling of the lips, tongue, or face accompanied by breathing difficulties"
      ],
      "relatedConditions": [
        "common-cold",
        "asthma",
        "eczema"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "1 to 3 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Basic Metabolic Panel (BMP)",
      "Urinalysis"
    ]
  },
  {
    "id": "gastroenteritis",
    "title": "Gastroenteritis (Stomach Flu)",
    "category": "digestive",
    "keywords": [
      "gastroenteritis",
      "stomach flu",
      "stomach bug",
      "vomiting",
      "diarrhoea",
      "norovirus",
      "rotavirus"
    ],
    "summary": "An inflammation of the stomach and intestines, typically caused by a viral or bacterial infection, presenting with vomiting and diarrhoea.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Stay strictly hydrated by taking small, frequent sips of water, oral rehydration solutions (ORS), or clear broths.",
      "Avoid solid foods for the first 4 to 6 hours to let the gastrointestinal lining and stomach rest.",
      "Gradually reintroduce bland, easy-to-digest foods (like toast, plain rice, bananas, and oatmeal) as vomiting ceases.",
      "Avoid dairy products, caffeine, alcohol, nicotine, and fatty, spicy, or sugary foods until fully recovered.",
      "Strictly practice excellent hand hygiene to prevent spreading the highly contagious virus to others."
    ],
    "content": {
      "overview": "Gastroenteritis, commonly called the 'stomach flu' (though unrelated to influenza), is an inflammation of the lining of the stomach and intestines. It is a highly common and highly contagious infection, usually resolving within 1 to 3 days.",
      "symptoms": [
        "Watery, non-bloody diarrhoea",
        "Abdominal cramps and pain",
        "Nausea, vomiting, or both",
        "Low-grade fever and occasional muscle aches",
        "Mild headache and physical weakness"
      ],
      "causes": "Gastroenteritis is most commonly caused by viruses (such as Norovirus or Rotavirus) contracted through contact with an infected person or by consuming contaminated food or water. It can also be caused by bacteria or parasites.",
      "riskFactors": [
        "Young children in childcare centers and elderly adults in nursing homes",
        "Weakened immune system or chronic gut disorders",
        "Living or traveling in areas with poor sanitation and lack of clean water"
      ],
      "complications": "The primary and most dangerous complication is severe dehydration, which can lead to electrolyte imbalances, shock, and organ failure if untreated, particularly in vulnerable populations.",
      "diagnosis": "Gastroenteritis is typically diagnosed based on symptoms, history, and a physical exam. Stool tests may be performed during outbreaks or for severe, prolonged cases to identify the specific virus, bacteria, or parasite.",
      "treatment": "There is no specific medical cure for viral gastroenteritis. Antibiotics are only prescribed if a bacterial infection is confirmed. Treatment is supportive, focusing on replacing fluids and managing symptoms.",
      "homeCare": "Drink small sips of ORS or water every 10-15 minutes. Avoid drinking large amounts at once, which can trigger vomiting. Use a warm heating pad on the stomach to soothe painful muscle cramps. Get plenty of bed rest.",
      "prevention": "Wash hands thoroughly with soap and water for at least 20 seconds, especially after using the toilet or changing diapers, and before preparing food. Disinfect contaminated surfaces with bleach. Get the rotavirus vaccine for infants.",
      "whenToSeeDoctor": "See a doctor if you cannot keep liquids down for 24 hours, have diarrhoea lasting more than 2 days, or run a high fever above 38.9\u00b0C (102\u00b0F).",
      "emergencySigns": [
        "Extreme dehydration: dry mouth, sunken eyes, inability to stand, lack of urination, or severe confusion",
        "Vomiting blood or passing bloody or black stools",
        "Sudden, severe, and localized abdominal pain"
      ],
      "relatedConditions": [
        "diarrhoea",
        "food-poisoning",
        "stomach-pain"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "osteoporosis",
    "title": "Osteoporosis",
    "category": "chronic",
    "keywords": [
      "osteoporosis",
      "bone density",
      "weak bones",
      "fracture",
      "calcium deficiency",
      "silent disease"
    ],
    "summary": "A chronic bone disease characterized by progressive loss of bone density, making bones fragile and highly susceptible to fractures.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed bone-strengthening medications (such as bisphosphonates or hormone therapies) daily or weekly as directed.",
      "Ensure adequate daily intake of Calcium (1,000 to 1,200 mg) and Vitamin D (800 to 1,000 IU) through diet and supplements.",
      "Engage in regular weight-bearing exercises (like walking, climbing stairs, or resistance training) to stimulate bone density.",
      "Modify the home environment to eliminate trip hazards (loose rugs, cluttered pathways) and prevent dangerous falls.",
      "Avoid bone-weakening habits: quit smoking, limit alcohol consumption, and manage chronic health conditions."
    ],
    "content": {
      "overview": "Osteoporosis is a chronic, progressive bone disease in which the creation of new bone doesn't keep up with the loss of old bone. This causes bones to become porous, brittle, and weak, often resulting in fractures from minor falls or even bending over.",
      "symptoms": [
        "Most people have no symptoms until a bone breaks, earning it the name 'silent disease'.",
        "When symptoms do manifest, they can include:",
        "Loss of height over time (due to vertebral fractures)",
        "A stooped posture or humpback (dowager's hump)",
        "Back pain, caused by a fractured or collapsed vertebra",
        "A bone that breaks much more easily than expected"
      ],
      "causes": "Osteoporosis occurs when bone resorption (breakdown) outpaces bone deposition (formation). It is heavily driven by the natural drop in estrogen in women after menopause and testosterone in men, as these hormones protect bone mass.",
      "riskFactors": [
        "Gender (women, especially postmenopausal, are at highest risk)",
        "Family history of osteoporosis or hip fractures",
        "Small, thin body frames (less bone reserve to draw from)",
        "Diets low in calcium and vitamin D, and inactive lifestyles",
        "Long-term use of corticosteroid medications (like prednisone)"
      ],
      "complications": "The most serious complications are bone fractures, particularly of the spine or hip. Hip fractures often require major surgery and can lead to prolonged immobility, blood clots, pneumonia, and a significant loss of independence.",
      "diagnosis": "Osteoporosis is diagnosed using a Bone Mineral Density (BMD) scan, specifically a Dual-Energy X-ray Absorptiometry (DEXA) scan. It measures bone density at the hip and spine, returning a 'T-score' (a score of -2.5 or lower indicates osteoporosis).",
      "treatment": "Treatment involves lifestyle modifications and medications. Bisphosphonates (like alendronate) are the most common prescription. Other options include monoclonal antibody therapies (denosumab) and bone-building medications for severe cases.",
      "homeCare": "Safety first: install grab bars in the bathroom, keep walkways brightly lit, wear sturdy, slip-resistant shoes, and use assistive devices if balance is impaired. Exercise gently and avoid high-impact movements that stress the spine.",
      "prevention": "Ensure rich calcium and vitamin D intake throughout childhood and adulthood. Engage in regular weight-bearing exercise from a young age to build peak bone mass. Avoid smoking and excessive alcohol.",
      "whenToSeeDoctor": "Discuss osteoporosis screening with your doctor if you are a woman over 65 (or postmenopausal with risk factors), a man over 70, or if you broke a bone after age 50.",
      "emergencySigns": [
        "Sudden, severe back pain following a minor movement, indicating a spinal compression fracture",
        "Inability to stand or bear weight on a leg after a fall, accompanied by severe pain in the hip or groin (signs of a hip fracture)"
      ],
      "relatedConditions": [
        "arthritis",
        "obesity"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "celiac-disease",
    "title": "Celiac Disease",
    "category": "digestive",
    "keywords": [
      "celiac disease",
      "coeliac",
      "gluten allergy",
      "gluten free",
      "malabsorption",
      "autoimmune gut"
    ],
    "summary": "A chronic autoimmune digestive disorder where eating gluten leads to damage in the small intestine, causing nutrient malabsorption.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Adhere strictly to a **100% gluten-free diet for life**, completely eliminating wheat, barley, rye, and cross-contaminated foods.",
      "Read ingredient labels meticulously on all foods, medications, and cosmetics to identify hidden gluten sources.",
      "Prevent cross-contamination in the kitchen by using dedicated cutting boards, toasters, and utensils for gluten-free cooking.",
      "Take prescribed vitamin and mineral supplements (like B12, iron, and calcium) to correct deficiencies caused by intestinal damage.",
      "Attend regular follow-up clinic visits to monitor intestinal healing and verify negative celiac antibody levels in blood tests."
    ],
    "content": {
      "overview": "Celiac disease is a chronic autoimmune digestive disorder triggered by eating gluten\u2014a protein found in wheat, barley, and rye. When someone with celiac disease consumes gluten, their immune system mistakenly attacks the lining of their small intestine, damaging the tiny hair-like projections (villi) that absorb nutrients.",
      "symptoms": [
        "Chronic diarrhoea or foul-smelling, fatty stools (steatorrhea)",
        "Abdominal pain, bloating, and excessive gas",
        "Unexplained weight loss and severe fatigue",
        "Anaemia (due to poor iron absorption) and vitamin deficiencies",
        "Itchy, blistering skin rash (dermatitis herpetiformis)",
        "Delayed growth and failure to thrive in children"
      ],
      "causes": "Celiac disease is caused by an abnormal autoimmune response to gluten in genetically predisposed individuals. The immune reaction damages the small intestine's villi, leading to malabsorption of vitamins, minerals, and calories.",
      "riskFactors": [
        "Having a first-degree relative (parent, child, sibling) with celiac disease",
        "Having an autoimmune disease like Type 1 Diabetes or autoimmune thyroid disease",
        "Genetic markers (HLA-DQ2 and HLA-DQ8)"
      ],
      "complications": "Without a strict gluten-free diet, celiac disease can cause long-term complications: severe malnutrition, osteoporosis (due to poor calcium absorption), infertility, neurological problems (ataxia, neuropathy), and an increased risk of intestinal cancers.",
      "diagnosis": "Celiac disease is screened using blood tests for specific antibodies (such as tTG-IgA). If positive, the diagnosis is confirmed by performing an upper endoscopy and taking a biopsy of the small intestinal lining to check for damaged villi.",
      "treatment": "The only treatment is a strict, lifelong gluten-free diet. This allows the intestinal villi to heal completely, resolving symptoms and preventing complications. There are no medications or surgeries that cure the condition.",
      "homeCare": "Thoroughly clean all kitchen surfaces. Set up separate food preparation areas. Eat whole, naturally gluten-free foods: fresh fruits, vegetables, unprocessed meats, eggs, rice, and potatoes. Join a celiac support group.",
      "prevention": "Celiac disease cannot be prevented, as it is a genetic autoimmune condition. However, diagnosing and treating it early prevents severe intestinal damage and long-term complications.",
      "whenToSeeDoctor": "Consult a doctor if you experience chronic diarrhoea, persistent bloating, unexplained weight loss, or if you suspect your child is not growing at a normal rate.",
      "emergencySigns": [
        "Severe, unrelenting abdominal pain and persistent vomiting",
        "Signs of profound malnutrition or dehydration: extreme weakness, confusion, or inability to stand"
      ],
      "relatedConditions": [
        "diarrhoea",
        "anaemia",
        "thyroid-disorders"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "gout",
    "title": "Gout",
    "category": "chronic",
    "keywords": [
      "gout",
      "uric acid",
      "joint pain",
      "big toe",
      "arthritis flare",
      "tophi"
    ],
    "summary": "A painful form of inflammatory arthritis characterized by sudden, severe attacks of joint pain, swelling, and redness, often in the big toe.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed medications for acute flares (like colchicine, NSAIDs, or corticosteroids) immediately at the start of pain.",
      "Take prescribed daily uric-acid-lowering medications (such as allopurinol) consistently to prevent future attacks.",
      "Increase daily water intake (8-12 glasses) to help the kidneys filter and flush uric acid from the bloodstream.",
      "Limit consumption of high-purine foods (red meat, organ meats, shellfish) and strictly avoid beer and sugary sodas.",
      "Achieve and maintain a healthy body weight, as obesity increases uric acid production and joint stress."
    ],
    "content": {
      "overview": "Gout is a complex and painful form of arthritis that can affect anyone. It is characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in one or more joints, most often in the big toe.",
      "symptoms": [
        "Intense joint pain, usually peaking within the first 12 to 24 hours",
        "Lingering discomfort and stiffness in the joint lasting from a few days to a few weeks",
        "Inflammation, swelling, and extreme redness around the affected joint",
        "Limited range of motion in the joint as the condition progresses"
      ],
      "causes": "Gout is caused by the accumulation of urate crystals in the joint, which triggers intense inflammation. These crystals form when you have high levels of uric acid in your blood, which the body produces when breaking down purines found naturally in the body and certain foods.",
      "riskFactors": [
        "Diet rich in red meat, shellfish, and sugary sodas",
        "Frequent alcohol consumption, particularly beer",
        "Obesity and high blood pressure",
        "Family history of gout",
        "Certain medications, such as thiazide diuretics"
      ],
      "complications": "If left untreated, recurrent gout attacks can lead to progressive joint damage, the formation of hard nodules under the skin called tophi, and an increased risk of kidney stones due to uric acid accumulation.",
      "diagnosis": "Gout is diagnosed by analyzing joint fluid under a microscope to detect urate crystals. Doctors may also perform blood tests to measure uric acid levels, or use ultrasound imaging to detect crystal deposits in joints.",
      "treatment": "Treatment focuses on managing acute flare-ups and lowering uric acid levels to prevent future attacks. Doctors prescribe medications like colchicine, NSAIDs, or corticosteroids for acute pain, and long-term drugs like allopurinol to lower uric acid.",
      "homeCare": "During an attack, rest and elevate the affected joint. Apply ice packs wrapped in towels for 15-20 minutes at a time to reduce swelling. Avoid pressure from blankets or clothing on the tender joint, and drink plenty of water.",
      "prevention": "Limit consumption of high-purine foods like red meat and seafood. Avoid sugary drinks and limit alcohol intake. Maintain a healthy body weight and stay well-hydrated throughout the day.",
      "whenToSeeDoctor": "Schedule a doctor's visit if you experience sudden, severe joint pain, particularly if it is accompanied by a fever or the joint feels hot to the touch, indicating a potential infection.",
      "emergencySigns": [
        "An extremely painful, swollen joint accompanied by a high fever and chills, which may indicate joint sepsis.",
        "Inability to move the limb at all or sudden deformity in the joint."
      ],
      "relatedConditions": [
        "arthritis",
        "obesity",
        "hypertension",
        "kidney-stones"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "pneumonia",
    "title": "Pneumonia",
    "category": "infectious",
    "keywords": [
      "pneumonia",
      "lung infection",
      "cough",
      "chest pain",
      "fluid in lungs",
      "fever"
    ],
    "summary": "An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a doctor to get prescribed antibiotics (for bacterial pneumonia) or antiviral medications.",
      "Complete the entire medication course exactly as directed to eradicate the pathogen.",
      "Get plenty of bed rest and avoid strenuous physical exertion.",
      "Drink warm fluids and water to loosen mucus in the chest.",
      "Manage fever and pain using paracetamol or ibuprofen under medical guidance."
    ],
    "content": {
      "overview": "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing a cough with phlegm, fever, chills, and difficulty breathing. It can range from mild to life-threatening.",
      "symptoms": [
        "Chest pain when you breathe or cough",
        "Cough, which may produce green, yellow, or bloody mucus",
        "Fever, sweating, and shaking chills",
        "Shortness of breath during normal activities",
        "Fatigue, loss of appetite, and confusion (especially in older adults)"
      ],
      "causes": "Pneumonia is caused by a variety of infectious agents, including bacteria (most commonly Streptococcus pneumoniae), viruses (like the flu or COVID-19), and occasionally fungi.",
      "riskFactors": [
        "Age (infants under 2 and adults over 65 are at highest risk)",
        "Chronic lung diseases like COPD or asthma, and heart disease",
        "Weakened immune systems, smoking, and being hospitalized (especially on a ventilator)"
      ],
      "complications": "Complications include bacteria entering the bloodstream (sepsis), difficulty breathing requiring a ventilator, fluid accumulation around the lungs (pleural effusion), and lung abscesses.",
      "diagnosis": "Pneumonia is diagnosed using physical exams (listening to lungs), chest X-rays, blood tests, pulse oximetry, and sputum tests to identify the pathogen.",
      "treatment": "Treatment includes antibiotics for bacterial cases, antivirals for viral cases, rest, fluids, and fever-reducing medications. Severe cases require hospitalization, oxygen, and IV fluids.",
      "homeCare": "Get plenty of rest. Stay well-hydrated. Use a humidifier or take warm baths. Avoid smoking and secondary smoke. Take all medications exactly as prescribed.",
      "prevention": "Get vaccinated (pneumococcal vaccine and annual flu shot). Practice good hand hygiene, avoid smoking, and maintain a healthy immune system.",
      "whenToSeeDoctor": "See a doctor if you have a persistent fever, cough with mucus, shortness of breath, or chest pain, especially if you are in a high-risk group.",
      "emergencySigns": [
        "Severe difficulty breathing or gasping for air",
        "Lips or fingertips turning blue or gray (cyanosis)",
        "High fever accompanied by confusion or severe lethargy"
      ],
      "relatedConditions": [
        "influenza",
        "covid-19",
        "acute-bronchitis",
        "copd"
      ]
    },
    "specialist": "Pulmonologist",
    "recoveryTime": "2 to 6 weeks",
    "diagnosticTests": [
      "Chest X-ray",
      "Sputum Culture",
      "Pulse Oximetry"
    ]
  },
  {
    "id": "strep-throat",
    "title": "Strep Throat",
    "category": "infectious",
    "keywords": [
      "strep throat",
      "sore throat",
      "streptococcus",
      "swallowing pain",
      "tonsillitis"
    ],
    "summary": "A bacterial throat infection causing sudden, severe sore throat, fever, and swollen tonsils.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Obtain a prescription for antibiotics (such as penicillin or amoxicillin) from a healthcare provider.",
      "**Complete the full 10-day course of antibiotics** to prevent complications like rheumatic fever.",
      "Gargle with warm salt water several times a day to reduce throat swelling and pain.",
      "Drink cool or warm liquids and eat soft foods to minimize throat irritation.",
      "Replace your toothbrush 24 hours after starting antibiotics to avoid reinfecting yourself."
    ],
    "content": {
      "overview": "Strep throat is a bacterial infection of the throat and tonsils caused by Group A Streptococcus bacteria. It causes sudden, severe throat pain and is highly contagious through respiratory droplets.",
      "symptoms": [
        "Sudden, severe sore throat",
        "Pain when swallowing",
        "Fever, headache, and body aches",
        "Red and swollen tonsils, often with white patches or streaks of pus",
        "Tiny red spots on the roof of the mouth (petechiae)"
      ],
      "causes": "Strep throat is caused by Group A Streptococcus bacteria. It spreads through close contact, shared utensils, or airborne droplets when an infected person coughs or sneezes.",
      "riskFactors": [
        "Age (most common in children aged 5 to 15)",
        "Crowded environments like schools, military barracks, or daycare centers",
        "Time of year (typically peaks in late fall, winter, and early spring)"
      ],
      "complications": "If untreated, the bacteria can spread, causing sinus or ear infections, tonsil abscesses, kidney inflammation (post-streptococcal glomerulonephritis), or rheumatic fever (which can damage the heart).",
      "diagnosis": "Strep throat is diagnosed using a Rapid Strep Test (a throat swab providing results in minutes) or a throat culture processed in a laboratory.",
      "treatment": "Treatment consists of a prescribed course of oral antibiotics. Over-the-counter pain relievers (paracetamol/ibuprofen) can help manage throat pain and fever.",
      "homeCare": "Rest, drink plenty of water, gargle with warm salt water (1/2 tsp salt in warm water), eat soft foods (soups, applesauce, yogurt), and use throat lozenges.",
      "prevention": "Wash hands frequently. Cover your mouth when coughing. Do not share cups, plates, or personal items with someone who has strep throat.",
      "whenToSeeDoctor": "Consult a doctor if you have a severe sore throat accompanied by a fever, difficulty swallowing, or swollen lymph nodes, to get tested for strep.",
      "emergencySigns": [
        "Difficulty breathing or inability to open your mouth fully (trismus)",
        "Inability to swallow even saliva, causing drooling"
      ],
      "relatedConditions": [
        "common-cold",
        "fever"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "shingles",
    "title": "Shingles (Herpes Zoster)",
    "category": "infectious",
    "keywords": [
      "shingles",
      "herpes zoster",
      "painful rash",
      "blisters",
      "chickenpox virus",
      "nerve pain"
    ],
    "summary": "A painful, blistering skin rash caused by the reactivation of the varicella-zoster virus, the virus that causes chickenpox.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a doctor immediately to obtain prescription antiviral medications (like acyclovir or valacyclovir) within 72 hours of rash onset.",
      "Keep the blistering rash clean, dry, and loosely covered to prevent secondary bacterial infections.",
      "Use cool compresses or take cool baths to soothe skin irritation and pain.",
      "Take prescribed nerve pain medications or over-the-counter pain relievers to manage discomfort.",
      "Avoid contact with pregnant women, newborns, or immunocompromised individuals who haven't had chickenpox."
    ],
    "content": {
      "overview": "Shingles is a viral infection that causes a painful rash, typically appearing as a single stripe or band of blisters wrapping around one side of the torso. It is caused by the reactivation of the varicella-zoster virus in people who previously had chickenpox.",
      "symptoms": [
        "Pain, burning, numbness, or tingling in a localized area, days before the rash appears",
        "A red rash that develops into fluid-filled blisters that break and crust over",
        "Intense itching, fever, headache, and sensitivity to light",
        "Sensitivity to touch in the affected area"
      ],
      "causes": "Shingles is caused by the varicella-zoster virus. After you recover from chickenpox, the virus lies dormant in nerve tissue near your spinal cord and brain. Years later, it can reactivate and travel along nerve pathways to your skin.",
      "riskFactors": [
        "Age (most common in people over 50)",
        "Having a weakened immune system due to diseases (like HIV) or medications (like steroids)",
        "Undergoing cancer treatments or experiencing high levels of physical stress"
      ],
      "complications": "The most common complication is Postherpetic Neuralgia (PHN), which causes severe, lingering nerve pain in the rash area for months or years. Other risks include vision loss (if shingles affects the eye) and skin infections.",
      "diagnosis": "Doctors usually diagnose shingles based on the history of pain and the characteristic stripe of blisters. Swabs of blister fluid can be tested in a lab for confirmation if necessary.",
      "treatment": "Antiviral drugs are the mainstay of treatment and are highly effective if started early. Pain management includes anticonvulsants (like gabapentin), topical patches, or corticosteroids.",
      "homeCare": "Take cool baths or use cool, wet compresses on the blisters. Wear loose, natural-fiber clothing. Apply calamine lotion to crusting blisters, and keep the area clean.",
      "prevention": "The shingles vaccine (Shingrix) is highly recommended for adults over 50. It is given in two doses and provides excellent long-term protection.",
      "whenToSeeDoctor": "Contact a doctor immediately at the first sign of shingles pain or rash, especially if it occurs near your eye, as early antiviral treatment is critical.",
      "emergencySigns": [
        "A rash or severe pain spreading close to or into the eye (threatens permanent vision loss)",
        "Widespread, extremely painful rash accompanied by high fever, confusion, or a stiff neck"
      ],
      "relatedConditions": [
        "chickenpox",
        "fever",
        "eczema"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "whooping-cough",
    "title": "Whooping Cough (Pertussis)",
    "category": "infectious",
    "keywords": [
      "whooping cough",
      "pertussis",
      "severe cough",
      "coughing fits",
      "whoop sound"
    ],
    "summary": "A highly contagious bacterial respiratory infection characterized by severe, hacking coughing fits followed by a high-pitched 'whoop' sound.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Obtain prescription antibiotics (like erythromycin or azithromycin) from a healthcare professional early in the illness.",
      "Complete the entire course of antibiotics, and ensure all household contacts receive preventative antibiotics.",
      "Ensure infants are monitored closely, often requiring hospitalization for breathing support.",
      "Keep the home strictly free of irritants like smoke, dust, and chemical fumes.",
      "Use a cool-mist humidifier and drink plenty of fluids to keep the airways hydrated."
    ],
    "content": {
      "overview": "Whooping cough (pertussis) is a highly contagious bacterial infection of the respiratory tract caused by Bordetella pertussis. It causes uncontrollable, violent coughing fits that make it hard to breathe, particularly dangerous and potentially fatal for infants.",
      "symptoms": [
        "Early symptoms mimic a cold: runny nose, low fever, and mild cough",
        "After 1-2 weeks: severe, violent coughing fits (paroxysms)",
        "A high-pitched 'whoop' sound when breathing in after a coughing fit",
        "Vomiting or extreme exhaustion after coughing fits",
        "Blue or red face during coughing fits due to lack of oxygen"
      ],
      "causes": "Whooping cough is caused by Bordetella pertussis bacteria. It spreads easily through the air when an infected person coughs or sneezes.",
      "riskFactors": [
        "Infants under 1 year old who are too young to be fully vaccinated",
        "Not being up to date on pertussis vaccines (DTaP or Tdap)",
        "Living in areas experiencing local whooping cough outbreaks"
      ],
      "complications": "In infants, complications are severe: pneumonia, seizures, brain damage (due to lack of oxygen), and death. In adults, complications include bruised ribs, abdominal hernias, and broken blood vessels in the eyes.",
      "diagnosis": "It is diagnosed by taking a swab of mucus from the back of the nose (nasopharyngeal swab) for PCR testing or bacterial culture, along with blood tests.",
      "treatment": "Treatment consists of oral antibiotics. If started early, they can lessen the severity. Infants often require hospitalization for oxygen therapy, suctioning of mucus, and IV fluids.",
      "homeCare": "Drink plenty of water and clear broths. Eat small, frequent meals to avoid vomiting after coughing. Use a cool-mist humidifier. Strictly avoid smoking and other airborne triggers.",
      "prevention": "The DTaP vaccine for children and Tdap booster for adolescents, adults, and pregnant individuals are highly effective at preventing whooping cough.",
      "whenToSeeDoctor": "See a doctor immediately if you or your child develops severe coughing fits, experiences vomiting after coughing, or makes a 'whoop' sound.",
      "emergencySigns": [
        "Child turns blue, purple, or gray during coughing fits, or stops breathing (apnoea)",
        "Extreme difficulty breathing, gasping, or chest pulling in deeply"
      ],
      "relatedConditions": [
        "common-cold",
        "influenza",
        "acute-bronchitis"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "measles",
    "title": "Measles (Rubeola)",
    "category": "infectious",
    "keywords": [
      "measles",
      "rubeola",
      "koplik spots",
      "red rash",
      "high fever",
      "contagious virus"
    ],
    "summary": "A highly contagious, serious viral infection causing high fever, cough, runny nose, and a characteristic widespread red skin rash.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Manage symptoms supportively as there is no specific antiviral treatment for measles.",
      "For children, administer high-dose Vitamin A supplements prescribed by a doctor, which significantly reduces complications.",
      "Isolate strictly at home to prevent spreading the highly contagious virus to unvaccinated individuals.",
      "Lower high fever using paracetamol or ibuprofen; ensure hydration with plenty of water and broths.",
      "Get absolute bed rest and rest eyes in a dimly lit room if light sensitivity is present."
    ],
    "content": {
      "overview": "Measles is a highly contagious respiratory viral infection caused by the measles virus. It spreads rapidly through the air and can cause severe, sometimes fatal complications, though it is highly preventable through vaccination.",
      "symptoms": [
        "High fever, hacking cough, runny nose, and red, watery eyes (conjunctivitis)",
        "Tiny white spots with bluish-white centers inside the mouth (Koplik's spots)",
        "A flat red rash that starts on the face and spreads downward to the neck, trunk, arms, and legs",
        "Sensitivity to light (photophobia)"
      ],
      "causes": "Measles is caused by a paramyxovirus. It is highly contagious, spreading through airborne droplets when an infected person coughs or sneezes. The virus can remain active and suspended in the air for up to two hours.",
      "riskFactors": [
        "Not being vaccinated with the MMR (Measles, Mumps, Rubella) vaccine",
        "Traveling to international regions where measles is common",
        "Having a severe vitamin A deficiency or a weakened immune system"
      ],
      "complications": "Complications include ear infections, severe diarrhoea, pneumonia (the most common cause of measles deaths), encephalitis (brain inflammation causing seizures or coma), and pregnancy complications.",
      "diagnosis": "Measles is diagnosed based on the characteristic rash and Koplik's spots, and confirmed via blood tests or throat swabs to detect measles-specific IgM antibodies or viral RNA.",
      "treatment": "There is no antiviral treatment. Care is supportive: fever reducers, rest, hydration, and Vitamin A therapy. Bacterial complications like pneumonia are treated with antibiotics.",
      "homeCare": "Get bed rest. Stay in a dimly lit room to ease eye discomfort. Drink plenty of water and clear broths. Use a humidifier to soothe the cough.",
      "prevention": "The MMR vaccine, given in two doses during childhood, provides highly effective, lifelong protection against measles.",
      "whenToSeeDoctor": "Contact your doctor immediately if you suspect you or your child has been exposed to measles, or if a high fever and rash develop, so isolation protocols can be coordinated.",
      "emergencySigns": [
        "Severe shortness of breath, rapid breathing, or chest pain",
        "Extreme drowsiness, confusion, seizures, or inability to wake up",
        "Severe, persistent headache and stiff neck"
      ],
      "relatedConditions": [
        "fever",
        "chickenpox",
        "rubella"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "mumps",
    "title": "Mumps",
    "category": "infectious",
    "keywords": [
      "mumps",
      "swollen cheeks",
      "salivary glands",
      "parotitis",
      "jaw pain",
      "fever"
    ],
    "summary": "A contagious viral infection best known for causing painful swelling of the salivary glands, leading to swollen cheeks.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Manage symptoms supportively at home as there is no specific antiviral medication for mumps.",
      "Isolate at home for at least 5 days after salivary gland swelling begins to protect others.",
      "Apply warm or cold packs to the swollen jaw area to ease discomfort.",
      "Eat a soft, bland diet and **strictly avoid acidic foods and juices** (like citrus) which stimulate painful salivary flow.",
      "Drink plenty of water and use paracetamol or ibuprofen to control fever and pain."
    ],
    "content": {
      "overview": "Mumps is a contagious viral infection caused by the mumps virus. It primarily affects the salivary glands (parotid glands) located near the ears, causing painful swelling that gives a characteristic 'chipmunk cheek' appearance.",
      "symptoms": [
        "Painful swelling of one or both parotid salivary glands (parotitis), causing swollen cheeks and jaw pain",
        "Fever, headache, muscle aches, and fatigue",
        "Loss of appetite and pain when chewing or swallowing"
      ],
      "causes": "Mumps is caused by the mumps virus, a member of the paramyxovirus family. It spreads through direct contact with saliva or respiratory droplets from an infected person's cough or sneeze.",
      "riskFactors": [
        "Not being fully vaccinated with the MMR vaccine",
        "Living in crowded environments like university dorms or boarding schools",
        "Traveling to areas where mumps is endemic"
      ],
      "complications": "Complications, though rare, can be serious: inflammation of the testicles (orchitis) in post-pubertal males, inflammation of the ovaries (oophoritis), meningitis, pancreatitis, and temporary or permanent hearing loss.",
      "diagnosis": "Mumps is diagnosed by a physical exam of the swollen glands and confirmed by testing saliva swabs or blood samples for mumps IgM antibodies or viral RNA (PCR).",
      "treatment": "There is no cure or specific treatment. Care is entirely supportive: rest, fluids, pain relievers, and applying ice or warm compresses to the swollen glands.",
      "homeCare": "Get plenty of rest. Drink water; avoid sour or acidic drinks. Eat soft foods like soups, mashed potatoes, and oatmeal. Apply warm or cold packs to the jaw.",
      "prevention": "The MMR vaccine is the most effective preventative measure, providing excellent protection when two doses are completed.",
      "whenToSeeDoctor": "Consult a doctor if you suspect mumps, especially if a male teenager or adult develops testicular pain and swelling, or if abdominal pain develops.",
      "emergencySigns": [
        "Extreme drowsiness, confusion, or a severe headache and stiff neck",
        "Severe abdominal pain and persistent vomiting (indicating pancreatitis)",
        "Difficulty breathing or swallowing"
      ],
      "relatedConditions": [
        "fever",
        "measles",
        "rubella"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "rubella",
    "title": "Rubella (German Measles)",
    "category": "infectious",
    "keywords": [
      "rubella",
      "german measles",
      "mild rash",
      "congenital rubella",
      "fever",
      "swollen nodes"
    ],
    "summary": "A contagious viral infection known for a distinctive red rash, usually mild in children but highly dangerous to unborn babies.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Manage symptoms supportively at home as the infection is typically mild and resolves on its own within a week.",
      "Isolate at home to prevent spreading the virus, especially avoiding any contact with pregnant women.",
      "Get plenty of bed rest and drink water to stay hydrated.",
      "Use paracetamol or ibuprofen to relieve mild fever and joint aches.",
      "Confirm that pregnant contacts seek immediate medical testing if they were exposed."
    ],
    "content": {
      "overview": "Rubella, also called German measles, is a contagious viral infection. While it typically causes a mild illness with a low-grade fever and rash in children and adults, it can cause devastating birth defects (Congenital Rubella Syndrome) if a pregnant woman becomes infected.",
      "symptoms": [
        "A fine, pink rash that starts on the face and spreads rapidly to the trunk and limbs, fading after 3 days",
        "Mild, low-grade fever (typically under 38.3\u00b0C or 101\u00b0F)",
        "Enlarged and tender lymph nodes, especially at the base of the skull and behind the ears",
        "Joint pain and swelling, particularly in adult women"
      ],
      "causes": "Rubella is caused by the rubella virus. It spreads through respiratory droplets when an infected person coughs or sneezes, or from mother to fetus through the placenta.",
      "riskFactors": [
        "Not being vaccinated with the MMR vaccine",
        "Traveling to countries where rubella is common or experiencing outbreaks",
        "Healthcare or childcare workers who are unvaccinated"
      ],
      "complications": "The primary complication is Congenital Rubella Syndrome (CRS). If a woman is infected early in pregnancy, it can cause miscarriage, stillbirth, or severe birth defects: deafness, cataracts, heart defects, and intellectual disabilities.",
      "diagnosis": "Rubella is diagnosed by detecting rubella-specific antibodies (IgM) in a blood sample, or by detecting the virus via PCR from throat or nasal swabs.",
      "treatment": "There is no specific antiviral treatment. Management consists of rest, hydration, and mild pain relievers. Pregnant women exposed to rubella may receive hyperimmune globulin to help fight the virus.",
      "homeCare": "Rest, drink plenty of water, and use paracetamol for fever. Isolate yourself from others, particularly anyone who might be pregnant.",
      "prevention": "The MMR vaccine is highly effective. Women planning to become pregnant should verify their rubella immunity before conceiving.",
      "whenToSeeDoctor": "Contact a doctor immediately if you develop a rash and fever and are pregnant, or if you suspect exposure to rubella.",
      "emergencySigns": [
        "Severe, unrelenting headache and stiff neck",
        "Confusion, seizures, or extreme lethargy"
      ],
      "relatedConditions": [
        "fever",
        "measles",
        "chickenpox"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "meningitis",
    "title": "Meningitis",
    "category": "infectious",
    "keywords": [
      "meningitis",
      "stiff neck",
      "brain inflammation",
      "spinal cord",
      "high fever",
      "photophobia",
      "meningococcal"
    ],
    "summary": "A life-threatening inflammation of the protective membranes covering the brain and spinal cord, requiring immediate medical care.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek emergency hospital care immediately (call 911/112).** Bacterial meningitis is a medical emergency that can be fatal within hours.",
      "For bacterial cases, receive immediate, high-dose intravenous (IV) antibiotics and corticosteroids in a hospital setting.",
      "For viral cases, rest, stay hydrated, and take supportive medications, as viral meningitis often resolves on its own.",
      "Ensure close contacts receive preventative prophylactic antibiotics if recommended by public health authorities.",
      "Complete all follow-up neurological evaluations to screen for potential long-term hearing or cognitive complications."
    ],
    "content": {
      "overview": "Meningitis is an inflammation of the fluid and membranes (meninges) surrounding your brain and spinal cord. The swelling from meningitis typically triggers symptoms such as headache, fever, and a stiff neck. Bacterial meningitis is extremely serious and requires immediate emergency treatment.",
      "symptoms": [
        "Sudden, high fever",
        "Severe, unrelenting headache",
        "Stiff neck (inability to touch chin to chest)",
        "Extreme sensitivity to light (photophobia)",
        "Confusion, difficulty concentrating, seizures, or severe sleepiness",
        "A skin rash that does not fade when pressed (in meningococcal meningitis)"
      ],
      "causes": "Meningitis is most commonly caused by a viral infection, followed by bacterial and, rarely, fungal or parasitic infections. Bacterial meningitis is caused by bacteria like Streptococcus pneumoniae or Neisseria meningitidis.",
      "riskFactors": [
        "Age (viral is common under 5; bacterial is common in teens and young adults)",
        "Living in crowded environments (boarding schools, university dorms)",
        "Skipping recommended vaccinations, pregnancy, and having a compromised immune system"
      ],
      "complications": "Delayed treatment increases the risk of permanent brain damage, hearing loss, learning disabilities, kidney failure, shock, limb amputations (due to sepsis), and death.",
      "diagnosis": "Meningitis is diagnosed urgently using a lumbar puncture (spinal tap) to analyze cerebrospinal fluid (CSF) for bacteria, protein, and glucose, along with blood cultures and CT scans of the head.",
      "treatment": "Acute bacterial meningitis requires immediate intravenous antibiotics and corticosteroid drugs. Viral meningitis is treated with bed rest, fluids, and OTC pain relievers. Antiviral drugs may be used if caused by herpes viruses.",
      "homeCare": "Meningitis cannot be managed at home initially. Once discharged from the hospital, rest in a quiet, dark room, stay hydrated, and take all follow-up medications exactly as prescribed.",
      "prevention": "Get vaccinated (meningococcal, pneumococcal, and Hib vaccines). Practice good hand hygiene, and avoid sharing drinks or utensils.",
      "whenToSeeDoctor": "Seek immediate emergency care if you or anyone in your family develops a sudden high fever, severe headache, stiff neck, and light sensitivity.",
      "emergencySigns": [
        "Inability to bend the neck forward (stiff neck) accompanied by high fever",
        "Confusion, seizures, or difficulty waking up",
        "A purple or red skin rash that does not fade when a glass is pressed firmly against it (a sign of meningococcal septicaemia)"
      ],
      "relatedConditions": [
        "fever",
        "stroke-tia",
        "kidney-infection"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Pathogen PCR or Swab Test",
      "Serology Blood Panel"
    ]
  },
  {
    "id": "ibs",
    "title": "Irritable Bowel Syndrome (IBS)",
    "category": "digestive",
    "keywords": [
      "ibs",
      "irritable bowel",
      "spastic colon",
      "stomach cramps",
      "bloating",
      "gas",
      "diarrhoea",
      "constipation"
    ],
    "summary": "A common chronic gastrointestinal disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and altered bowel habits.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Work with a dietitian to adopt a low-FODMAP diet, temporarily restricting fermentable carbohydrates.",
      "Gradually increase dietary fiber if constipation-prone, or avoid trigger foods (gluten, dairy, caffeine) if diarrhoea-prone.",
      "Manage stress levels daily through yoga, mindfulness, meditation, or cognitive behavioral therapy, as the gut and brain are highly connected.",
      "Take prescribed medications as directed (such as antispasmodics, fiber supplements, laxatives, or antidiarrheals).",
      "Keep a detailed Food and Symptom Journal to isolate specific dietary and lifestyle triggers."
    ],
    "content": {
      "overview": "Irritable Bowel Syndrome (IBS) is a common chronic disorder that affects the large intestine (colon). It causes cramping, abdominal pain, bloating, gas, and bouts of diarrhoea, constipation, or alternating cycles of both. Unlike inflammatory bowel disease, it does not damage gut tissue.",
      "symptoms": [
        "Abdominal pain, cramping, or bloating that is typically relieved or changed after a bowel movement",
        "Changes in the appearance of stool and how often you have bowel movements",
        "Excess gas, bloating, and mucus in the stool",
        "Alternating episodes of diarrhoea and constipation"
      ],
      "causes": "The precise cause of IBS is unknown. Factors include abnormal muscle contractions in the intestine, hypersensitive gut nerves, mild gut inflammation, changes in the gut microbiome, and stress, which strongly affects gut motility.",
      "riskFactors": [
        "Age (most common in people under 50)",
        "Gender (twice as common in women, linked to estrogen changes)",
        "Having a family history of IBS, or experiencing high chronic stress, anxiety, or depression"
      ],
      "complications": "While IBS does not lead to serious organic disease or cancer, chronic diarrhoea or constipation can cause hemorrhoids, and the persistent pain can significantly lower quality of life, contributing to anxiety and depression.",
      "diagnosis": "IBS is diagnosed based on a review of symptoms (using the Rome IV criteria) and history. Diagnostic tests (blood tests, stool tests, celiac screening, or colonoscopy) are only done to rule out other conditions.",
      "treatment": "Treatment focuses on relieving symptoms. Lifestyle changes include dietary adjustments (low-FODMAP, avoiding gas-producing foods) and stress reduction. Medications include antispasmodics, laxatives, antidiarrheals, or low-dose antidepressants to block pain signals.",
      "homeCare": "Eat at regular times to help regulate bowel function. Exercise regularly to stimulate intestinal contractions. Drink plenty of liquids. Avoid carbonated beverages, alcohol, and caffeine.",
      "prevention": "Manage daily stress, eat a balanced diet, avoid eating too quickly, and establish a consistent routine for bowel movements.",
      "whenToSeeDoctor": "Consult a doctor if you have persistent changes in bowel habits or other IBS symptoms, to rule out more serious gastrointestinal diseases.",
      "emergencySigns": [
        "Unexplained weight loss or persistent fever",
        "Rectal bleeding or blood in your stool",
        "Severe abdominal pain that does not go away and worsens at night",
        "Persistent vomiting or difficulty swallowing"
      ],
      "relatedConditions": [
        "diarrhoea",
        "constipation",
        "stomach-pain",
        "celiac-disease"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "peptic-ulcer",
    "title": "Peptic Ulcer Disease",
    "category": "digestive",
    "keywords": [
      "peptic ulcer",
      "stomach ulcer",
      "h pylori",
      "burning stomach",
      "duodenal ulcer",
      "acid pain"
    ],
    "summary": "Painful sores that develop on the protective lining of your stomach or the upper part of your small intestine.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "If H. pylori bacteria are detected, strictly complete the prescribed course of dual antibiotics and a proton pump inhibitor (PPI).",
      "Take prescribed acid-reducing medications (PPIs or H2 blockers) daily to lower stomach acid and allow the ulcer to heal.",
      "**Stop taking NSAID pain relievers** (such as ibuprofen, naproxen, or aspirin); switch to paracetamol for pain management.",
      "Avoid stomach irritants: completely eliminate alcohol and quit smoking, as they delay ulcer healing.",
      "Eat a mild, non-irritating diet and manage stress levels to reduce acid stimulation."
    ],
    "content": {
      "overview": "Peptic ulcers are open sores that develop on the inside lining of your stomach (gastric ulcers) and the upper portion of your small intestine (duodenal ulcers). The most common symptom is a burning stomach pain, which is worsened when stomach acid contacts the raw sore.",
      "symptoms": [
        "Burning stomach pain, often felt between the breastbone and navel, which may be temporarily relieved by eating or taking antacids",
        "Feeling of fullness, bloating, or belching",
        "Nausea and intolerance to fatty foods",
        "In severe cases: vomiting blood, dark blood in stools, or unexplained weight loss"
      ],
      "causes": "Peptic ulcers occur when stomach acid eats away at the protective mucous layer of the digestive tract. This is most commonly caused by infection with H. pylori bacteria, or long-term, frequent use of NSAID pain relievers.",
      "riskFactors": [
        "Regular use of NSAID pain relievers (like ibuprofen, naproxen, or aspirin)",
        "Infection with Helicobacter pylori bacteria",
        "Smoking, excessive alcohol use, high stress levels, and eating spicy foods (which don't cause ulcers but make symptoms worse)"
      ],
      "complications": "Complications include internal bleeding (leading to anaemia), perforation (a hole through the stomach wall causing severe abdominal infection), obstruction (swelling that blocks food passage), and increased risk of stomach cancer.",
      "diagnosis": "Peptic ulcers are diagnosed using an upper endoscopy (EGD) to visualize the ulcer and take biopsies, or barium swallow X-rays. H. pylori is detected via breath, stool, or blood tests.",
      "treatment": "Treatment includes antibiotics to kill H. pylori, PPIs and H2 blockers to reduce stomach acid, cytoprotective agents (like sucralfate) to coat and protect the ulcer, and stopping any NSAID medications.",
      "homeCare": "Eat a healthy diet rich in vitamins. Avoid trigger foods (spicy, acidic, or fatty foods). Eat smaller, frequent meals. Manage stress, get enough sleep, and avoid alcohol and smoking.",
      "prevention": "Limit the use of NSAID pain relievers. Practice good hygiene to prevent H. pylori infection. Avoid smoking and limit alcohol.",
      "whenToSeeDoctor": "Consult your doctor if you have persistent burning stomach pain or indigestion, or if your symptoms do not improve with over-the-counter antacids.",
      "emergencySigns": [
        "Vomiting blood or material that looks like coffee grounds",
        "Passing black, tarry, or bloody stools",
        "Sudden, severe, and sharp stomach pain that spreads rapidly, indicating a perforated ulcer",
        "Dizziness, fainting, or difficulty breathing"
      ],
      "relatedConditions": [
        "gastritis",
        "gerd",
        "stomach-pain",
        "anaemia"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "appendicitis",
    "title": "Appendicitis",
    "category": "digestive",
    "keywords": [
      "appendicitis",
      "appendix",
      "lower right pain",
      "rebound tenderness",
      "ruptured appendix",
      "abdominal surgery"
    ],
    "summary": "An acute inflammation of the appendix, causing severe lower right abdominal pain, requiring emergency surgical removal.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate emergency medical attention (call 911/112).** Appendicitis is a life-threatening emergency if the appendix ruptures.",
      "Do not eat, drink, or use laxatives or heating pads, as these can trigger a rupture.",
      "Undergo emergency surgical removal of the appendix (appendectomy), typically performed laparoscopically.",
      "Receive intravenous (IV) antibiotics before and after surgery to prevent or treat abdominal infection.",
      "Follow post-operative recovery guidelines: rest, manage incision sites, and gradually increase physical activity."
    ],
    "content": {
      "overview": "Appendicitis is an inflammation of the appendix, a finger-shaped pouch that projects from your colon on the lower right side of your abdomen. It causes severe, rapidly worsening pain. If left untreated, the appendix can rupture, causing a life-threatening infection in the abdominal cavity.",
      "symptoms": [
        "Pain that typically starts around the navel and then shifts to the lower right abdomen",
        "Pain that worsens with coughing, walking, or making jarring movements",
        "Nausea, vomiting, and loss of appetite",
        "Low-grade fever that may worsen as the illness progresses",
        "Abdominal bloating, flatulence, and either constipation or diarrhoea"
      ],
      "causes": "Appendicitis is caused by a blockage in the lining of the appendix, often due to hardened stool (fecalith), foreign bodies, infection, or lymph node swelling. The blockage allows bacteria to multiply rapidly, causing the appendix to swell and fill with pus.",
      "riskFactors": [
        "Age (most common in people between 10 and 30 years old)",
        "Gender (slightly more common in males)",
        "Family history of appendicitis"
      ],
      "complications": "The main complication is a ruptured appendix, which spreads infection throughout your abdomen (peritonitis). This requires emergency surgery to clean the abdominal cavity. Another complication is an abscess (pocket of pus) that forms in the abdomen.",
      "diagnosis": "Appendicitis is diagnosed using physical exams (checking for rebound tenderness in the lower right abdomen), blood tests (high white blood cell count), urine tests (to rule out UTI), and abdominal CT scans or ultrasounds.",
      "treatment": "Treatment is surgical removal of the appendix (appendectomy). If the appendix has ruptured, surgery is more complex, requiring thorough washing of the abdominal cavity and several days of IV antibiotics.",
      "homeCare": "Appendicitis cannot be treated at home. After surgery, rest, avoid heavy lifting for 2-4 weeks, keep the incision clean and dry, and take prescribed pain medications and stool softeners as directed.",
      "prevention": "There is no way to prevent appendicitis, though it is less common in people who eat diets high in fiber (fresh fruits, vegetables, and whole grains).",
      "whenToSeeDoctor": "Seek immediate emergency medical care if you or anyone in your family develops severe abdominal pain, particularly if it shifts to the lower right side.",
      "emergencySigns": [
        "Sudden, severe, and unbearable pain in the lower right abdomen",
        "Pain accompanied by persistent vomiting, high fever, and shaking chills",
        "A rigid, bloated, and extremely tender abdomen that is highly painful to touch"
      ],
      "relatedConditions": [
        "stomach-pain",
        "food-poisoning",
        "uti",
        "kidney-stones"
      ]
    },
    "specialist": "General Surgeon",
    "recoveryTime": "2 to 4 weeks (Post-Surgery)",
    "diagnosticTests": [
      "Abdominal CT Scan",
      "Abdominal Ultrasound",
      "Complete Blood Count (CBC)"
    ]
  },
  {
    "id": "gallstones",
    "title": "Gallstones",
    "category": "digestive",
    "keywords": [
      "gallstones",
      "cholelithiasis",
      "biliary colic",
      "gallbladder",
      "right shoulder pain",
      "jaundice"
    ],
    "summary": "Hardened deposits of digestive fluid that form in your gallbladder, causing severe upper right abdominal pain.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a doctor or gastroenterologist for diagnostic imaging (ultrasound) of the gallbladder.",
      "For recurring painful attacks, undergo surgical removal of the gallbladder (cholecystectomy), which is highly safe and effective.",
      "For individuals unable to undergo surgery, take prescribed oral bile acid pills (like ursodiol) to slowly dissolve cholesterol stones.",
      "Manage acute gallbladder pain (biliary colic) using prescribed pain relievers under medical guidance.",
      "Adopt a low-fat, high-fiber diet to reduce gallbladder stimulation and prevent complications."
    ],
    "content": {
      "overview": "Gallstones are hardened deposits of digestive fluid (cholesterol or bilirubin) that can form in your gallbladder\u2014a small, pear-shaped organ on the right side of your abdomen, just beneath your liver. They can range in size from sand grains to golf balls, and cause severe pain when blocking bile ducts.",
      "symptoms": [
        "Sudden and rapidly intensifying pain in the upper right portion of your abdomen",
        "Sudden and rapidly intensifying pain in the center of your abdomen, just below your breastbone",
        "Back pain between your shoulder blades, or pain in your right shoulder",
        "Nausea and vomiting",
        "Jaundice (yellowing of the skin and eyes) if a bile duct is blocked"
      ],
      "causes": "Gallstones form when your bile contains too much cholesterol or too much bilirubin, or if your gallbladder doesn't empty properly, causing the bile to become highly concentrated and crystallize.",
      "riskFactors": [
        "Being female, over 40, overweight or obese, or pregnant",
        "Eating a high-fat, high-cholesterol, or low-fiber diet",
        "Rapid weight loss, having diabetes, or a family history of gallstones",
        "Taking medications containing estrogen, such as oral contraceptives"
      ],
      "complications": "Complications include inflammation of the gallbladder (cholecystitis), blockage of the common bile duct (causing jaundice or liver infection), blockage of the pancreatic duct (causing pancreatic inflammation), and gallbladder cancer.",
      "diagnosis": "Gallstones are diagnosed primarily using abdominal ultrasound. Other tests include endoscopic ultrasound, CT scans, or hepatobiliary iminodiacetic acid (HIDA) scans to check gallbladder function.",
      "treatment": "Asymptomatic gallstones require no treatment. Symptomatic gallstones are treated by surgically removing the gallbladder (cholecystectomy). Without a gallbladder, bile flows directly from the liver into the small intestine. Non-surgical medication is rarely used due to high recurrence rates.",
      "homeCare": "During a mild attack, rest and limit solid food. Apply a warm compress to the abdomen. Once recovered, eat a low-fat diet, dividing meals into smaller portions, and drink plenty of water.",
      "prevention": "Don't skip meals. Lose weight slowly (no more than 1-2 lbs per week). Maintain a healthy weight through exercise and a balanced, high-fiber diet.",
      "whenToSeeDoctor": "Consult a doctor if you experience recurring pain in the upper right abdomen after eating fatty meals, or if symptoms interfere with daily activities.",
      "emergencySigns": [
        "Abdominal pain so severe that you cannot sit still or find a comfortable position",
        "Yellowing of your skin and the whites of your eyes (jaundice)",
        "High fever accompanied by shaking chills and severe abdominal pain",
        "Severe, persistent vomiting"
      ],
      "relatedConditions": [
        "stomach-pain",
        "food-poisoning",
        "obesity",
        "pancreatitis"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "haemorrhoids",
    "title": "Haemorrhoids",
    "category": "digestive",
    "keywords": [
      "haemorrhoids",
      "hemorrhoids",
      "piles",
      "rectal bleeding",
      "anal itching",
      "straining"
    ],
    "summary": "Swollen veins in your anus and lower rectum, similar to varicose veins, causing itching, pain, and bleeding.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Adopt a high-fiber diet and drink 8-10 glasses of water daily to soften stools and prevent straining during bowel movements.",
      "Gently clean the anal area after bowel movements using moist wipes or a bidet; avoid dry, harsh toilet paper.",
      "Take warm sitz baths (soaking the rectal area in warm water) for 10-15 minutes, two to three times a day.",
      "Apply over-the-counter topical hemorrhoid creams containing hydrocortisone or witch hazel pads to relieve itching.",
      "For severe, persistent, or prolapsed hemorrhoids, consult a physician for minor office procedures (like rubber band ligation) or surgical removal."
    ],
    "content": {
      "overview": "Haemorrhoids, also called piles, are swollen veins in your anus and lower rectum, similar to varicose veins. They can develop inside the rectum (internal hemorrhoids) or under the skin around the anus (external hemorrhoids). They are highly common and highly treatable.",
      "symptoms": [
        "Painless bleeding during bowel movements (bright red blood on toilet tissue or in the bowl)",
        "Itching, irritation, or pain in your anal region",
        "Swelling or a hard, painful lump near your anus (thrombosed hemorrhoid)",
        "Leakage of feces or mucous discharge"
      ],
      "causes": "Haemorrhoids occur due to increased pressure in the veins of the lower rectum. This is commonly caused by straining during bowel movements, sitting for long periods on the toilet, chronic diarrhea or constipation, pregnancy, and heavy lifting.",
      "riskFactors": [
        "Chronic constipation or diarrhoea, and regular straining",
        "Pregnancy (increased pressure from the uterus) and aging (tissue support weakens)",
        "Obesity, low-fiber diets, and regular heavy lifting"
      ],
      "complications": "Complications are rare but can include anaemia (due to chronic blood loss), a 'strangulated' hemorrhoid (when blood supply to an internal hemorrhoid is cut off, causing extreme pain), and blood clots (thrombosed hemorrhoids).",
      "diagnosis": "Haemorrhoids are diagnosed by a doctor via visual inspection of the anal area and a digital rectal exam. Internal hemorrhoids are examined using an anoscope, proctoscope, or sigmoidoscope.",
      "treatment": "Treatment includes high-fiber diets, stool softeners, topical creams, and sitz baths. Medical procedures for persistent cases include rubber band ligation (cutting off blood supply), sclerotherapy (injection to shrink), or surgical hemorrhoidectomy.",
      "homeCare": "Eat high-fiber foods (beans, whole grains, bran, fresh fruits). Drink plenty of water. Do not strain or hold your breath during bowel movements. Exercise regularly to prevent constipation. Avoid sitting on the toilet for too long.",
      "prevention": "Eat high-fiber foods, drink abundant fluids, stay active, go as soon as you feel the urge, and avoid long periods of sitting.",
      "whenToSeeDoctor": "See a doctor if you experience rectal bleeding during bowel movements, or if hemorrhoids don't improve after a week of home care, to rule out more serious gastrointestinal conditions.",
      "emergencySigns": [
        "Passing large amounts of rectal bleeding, accompanied by dizziness, weakness, or fainting",
        "Sudden, excruciating, and severe pain around the anus, indicating a severely clotted or strangulated hemorrhoid"
      ],
      "relatedConditions": [
        "constipation",
        "diarrhoea",
        "stomach-pain"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "lactose-intolerance",
    "title": "Lactose Intolerance",
    "category": "digestive",
    "keywords": [
      "lactose intolerance",
      "lactase deficiency",
      "dairy allergy",
      "milk bloating",
      "gas",
      "diarrhoea"
    ],
    "summary": "A common digestive disorder caused by the inability to fully digest lactose, the sugar in dairy products.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Limit or avoid consuming dairy products containing high levels of lactose (like fresh milk, soft cheeses, and ice cream).",
      "Incorporate lactose-free dairy products or plant-based milk alternatives (like almond, soy, or oat milk) into your diet.",
      "Take over-the-counter lactase enzyme tablets or drops immediately before consuming foods containing dairy.",
      "Gradually experiment with small portions of dairy to identify your personal tolerance threshold, as many can tolerate small amounts.",
      "Ensure adequate calcium and vitamin D intake from non-dairy sources (like leafy greens, fortified juices, and supplements)."
    ],
    "content": {
      "overview": "Lactose intolerance is a common digestive disorder characterized by the inability to digest lactose\u2014the primary sugar found in milk and other dairy products. It is caused by a deficiency in lactase, an enzyme produced in the small intestine.",
      "symptoms": [
        "Diarrhoea, which may be watery and acidic",
        "Abdominal cramps, pain, and bloating",
        "Excessive gas (flatulence) and gurgling stomach sounds",
        "Nausea and occasional vomiting, typically occurring 30 minutes to 2 hours after consuming dairy"
      ],
      "causes": "Lactose intolerance is caused by a deficiency of the enzyme lactase in the small intestine. Without enough lactase, the lactose you eat travels undigested into the colon, where bacteria ferment it, producing gas and acids.",
      "riskFactors": [
        "Advancing age (lactase levels naturally decrease as people grow older)",
        "Ethnicity (most common in people of East Asian, West African, Arab, and Indigenous descent)",
        "Premature birth, intestinal diseases (like celiac or Crohn's), and certain cancer treatments"
      ],
      "complications": "Lactose intolerance itself is not dangerous and doesn't damage the gut. However, avoiding all dairy can lead to complications such as calcium and vitamin D deficiencies, increasing the risk of osteoporosis.",
      "diagnosis": "Lactose intolerance is diagnosed based on symptoms following dairy consumption. It can be confirmed using a Hydrogen Breath Test (measuring hydrogen in breath after drinking a lactose-rich beverage) or a stool acidity test for infants.",
      "treatment": "There is no treatment to increase lactase production. Management involves dietary modifications: reducing dairy, using lactose-free products, or taking lactase enzyme supplements (like Lactaid) before meals.",
      "homeCare": "Choose naturally low-lactose dairy like hard cheeses (cheddar, Swiss) and yogurt with active cultures (which help digest lactose). Read food labels for whey, curds, milk byproducts, and dry milk powder. Supplement calcium if needed.",
      "prevention": "Lactose intolerance cannot be prevented, but symptoms are entirely avoidable by managing your dairy intake or using lactase enzyme supplements.",
      "whenToSeeDoctor": "Consult a doctor or registered dietitian if you experience persistent bloating, gas, and diarrhoea after eating dairy, to ensure you maintain proper nutrition.",
      "emergencySigns": [
        "Lactose intolerance does not cause medical emergencies. If you experience severe abdominal pain, high fever, or bloody stools, seek immediate medical care for a different underlying condition."
      ],
      "relatedConditions": [
        "diarrhoea",
        "stomach-pain",
        "ibs",
        "celiac-disease"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 3 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Abdominal Ultrasound",
      "Endoscopy or Colonoscopy",
      "Stool Pathogen Screen"
    ]
  },
  {
    "id": "high-cholesterol",
    "title": "High Cholesterol",
    "category": "chronic",
    "keywords": [
      "high cholesterol",
      "hypercholesterolemia",
      "ldl",
      "hdl",
      "triglycerides",
      "lipid panel",
      "statins"
    ],
    "summary": "A chronic condition characterized by elevated levels of cholesterol in the blood, raising the risk of heart disease and stroke.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed cholesterol-lowering medications (most commonly statins) daily, exactly as directed.",
      "Adopt a heart-healthy diet low in saturated fats, trans fats, and cholesterol, focusing on high-soluble-fiber foods (oats, beans).",
      "Engage in at least 150 minutes of moderate aerobic exercise weekly to raise HDL ('good') cholesterol and lower LDL ('bad') cholesterol.",
      "Achieve and maintain a healthy body weight, as weight loss helps optimize lipid profiles.",
      "Quit smoking and limit alcohol intake, as smoking lowers HDL cholesterol and damages blood vessels."
    ],
    "content": {
      "overview": "High cholesterol (hypercholesterolaemia) is a chronic condition in which you have too much cholesterol\u2014a waxy fat-like substance\u2014in your blood. Over time, excess cholesterol can build up inside your arteries, forming hard plaques that restrict blood flow and increase the risk of heart attack and stroke.",
      "symptoms": [
        "High cholesterol has no symptoms. A blood test is the only way to detect it.",
        "It is often called a 'silent' risk factor because many people are unaware they have it until they suffer a cardiovascular event."
      ],
      "causes": "High cholesterol is caused by a combination of genetics and lifestyle factors: eating a diet high in saturated and trans fats, lack of exercise, obesity, smoking, and excessive alcohol use. Certain medical conditions and medications can also raise cholesterol.",
      "riskFactors": [
        "Poor diet (consuming fatty meats, full-fat dairy, and processed snacks)",
        "Obesity, lack of physical exercise, and smoking",
        "Advancing age (cholesterol levels naturally rise with age) and diabetes",
        "Family history of high cholesterol or early heart disease (familial hypercholesterolemia)"
      ],
      "complications": "Uncontrolled high cholesterol causes plaque buildup in arteries (atherosclerosis). This can lead to chest pain (angina), coronary artery disease, heart attacks if a plaque ruptures and forms a clot, strokes, and peripheral artery disease.",
      "diagnosis": "High cholesterol is diagnosed using a blood test called a Lipid Panel or Lipid Profile. It measures four values: Total Cholesterol, LDL (bad) cholesterol, HDL (good) cholesterol, and Triglycerides (another blood fat).",
      "treatment": "Treatment involves lifestyle changes (DASH or Mediterranean diet, exercise, weight loss) and daily prescription medications. Statins (like atorvastatin or simvastatin) are the primary class, which reduce cholesterol production in the liver.",
      "homeCare": "Follow a low-cholesterol, high-fiber diet. Monitor food labels for saturated fats. Maintain a physical activity log. Attend regular follow-up appointments for blood tests to monitor medication efficacy and liver function.",
      "prevention": "Eat a diet rich in fruits, vegetables, whole grains, and fish. Limit intake of saturated fats. Exercise regularly, maintain a healthy weight, and avoid tobacco.",
      "whenToSeeDoctor": "Get a baseline lipid panel test starting at age 20, and repeat it every 4-6 years, or more frequently if you have cardiovascular risk factors.",
      "emergencySigns": [
        "High cholesterol does not cause acute emergencies directly, but it leads to heart attacks and strokes.",
        "Seek emergency care (call 911/112) if you experience crushing chest pain, sudden numbness/weakness on one side of the body, or difficulty speaking."
      ],
      "relatedConditions": [
        "hypertension",
        "diabetes-type2",
        "obesity",
        "cad",
        "stroke-tia"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "ckd",
    "title": "Chronic Kidney Disease",
    "category": "chronic",
    "keywords": [
      "ckd",
      "chronic kidney disease",
      "kidney failure",
      "gfr",
      "creatinine",
      "dialysis",
      "nephrology"
    ],
    "summary": "A progressive loss of kidney function over months or years, primarily driven by diabetes and high blood pressure.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Strictly manage underlying blood pressure (target under 130/80 mmHg) and blood glucose levels using prescribed medications.",
      "Take prescribed kidney-protective medications (such as ACE inhibitors or ARBs) daily as directed.",
      "Follow a kidney-friendly diet, carefully limiting daily intake of sodium, potassium, phosphorus, and protein.",
      "Avoid kidney-toxic substances, particularly over-the-counter NSAID pain relievers (ibuprofen, naproxen) and contrast dyes.",
      "For end-stage kidney failure, undergo scheduled dialysis treatments (hemodialysis or peritoneal) or prepare for a kidney transplant."
    ],
    "content": {
      "overview": "Chronic Kidney Disease (CKD), also called chronic kidney failure, describes the gradual loss of kidney function. Your kidneys filter wastes and excess fluids from your blood, which are then excreted in urine. When kidney disease reaches an advanced stage, dangerous levels of fluid, electrolytes, and wastes can build up in your body.",
      "symptoms": [
        "Early stages have no symptoms. Advanced symptoms include:",
        "Nausea, vomiting, loss of appetite, and fatigue",
        "Changes in how much you urinate (increased or decreased)",
        "Swelling of feet and ankles (oedema) due to fluid retention",
        "Persistent itching, chest pain, shortness of breath, and high blood pressure"
      ],
      "causes": "CKD occurs when a disease or condition impairs kidney function, causing kidney damage to worsen over months or years. The two leading causes are **Type 2 Diabetes** and **Hypertension** (high blood pressure). Other causes include glomerulonephritis and polycystic kidney disease.",
      "riskFactors": [
        "Diabetes and high blood pressure",
        "Heart disease, smoking, obesity, and family history of kidney disease",
        "Older age, and being of Black, Hispanic, or Indigenous descent"
      ],
      "complications": "Complications include fluid retention (swelling, fluid in lungs), high potassium levels (hyperkalemia, which can cause fatal heart rhythms), cardiovascular disease, weak bones, anaemia, central nervous system damage, and end-stage kidney disease.",
      "diagnosis": "CKD is diagnosed using blood tests to measure Creatinine and calculate Glomerular Filtration Rate (GFR; a GFR under 60 for 3+ months indicates CKD), urine tests to check for albumin (protein leakage), and kidney ultrasounds.",
      "treatment": "There is no cure, but treatment can slow progression. It includes treating the underlying cause (blood pressure and diabetes control), taking ACE inhibitors/ARBs, dietary changes, and managing complications (anaemia, bone health). End-stage kidney failure requires dialysis or a kidney transplant.",
      "homeCare": "Follow a low-sodium, low-potassium diet. Avoid adding salt to food. Limit fluids if swelling is severe. Weigh yourself daily and report sudden gains to your doctor. Carefully manage all medications, checking with a pharmacist before taking any OTC drugs.",
      "prevention": "Control high blood pressure and blood sugar. Maintain a healthy weight, eat a balanced diet, exercise regularly, quit smoking, and avoid regular use of NSAID pain relievers.",
      "whenToSeeDoctor": "See your doctor regularly for screening if you have diabetes, high blood pressure, or heart disease, as early detection is critical.",
      "emergencySigns": [
        "Severe shortness of breath or fluid in the lungs (feeling of drowning when lying down)",
        "Chest pain or pressure (due to pericarditis or fluid accumulation)",
        "Severe confusion, seizures, or loss of consciousness (uremic toxicity)",
        "Dangerous heart palpitations (signs of high potassium levels)"
      ],
      "relatedConditions": [
        "diabetes-type2",
        "hypertension",
        "obesity",
        "anaemia",
        "kidney-stones",
        "cad"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "fibromyalgia",
    "title": "Fibromyalgia",
    "category": "chronic",
    "keywords": [
      "fibromyalgia",
      "chronic pain",
      "fibro fog",
      "allodynia",
      "tender points",
      "fatigue"
    ],
    "summary": "A chronic disorder characterized by widespread musculoskeletal pain, profound fatigue, sleep, memory, and mood issues.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed medications daily (such as pain relievers, antidepressants, or anticonvulsants like pregabalin) to calm hyperactive nerves.",
      "Engage in regular, low-impact aerobic exercise (like swimming, walking, or warm-water therapy), starting slowly and gradually increasing.",
      "Participate in Cognitive Behavioral Therapy (CBT) to build effective coping mechanisms for chronic pain management.",
      "Establish a strict sleep hygiene routine to combat chronic fatigue and promote deep, restorative sleep.",
      "Practice stress-management techniques daily (such as meditation, deep breathing, or gentle stretching like tai chi)."
    ],
    "content": {
      "overview": "Fibromyalgia is a chronic disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory, and mood issues. Researchers believe that fibromyalgia amplifies painful sensations by affecting the way your brain and spinal cord process painful and non-painful signals.",
      "symptoms": [
        "Widespread, dull, aching pain that has lasted for at least three months, affecting both sides of the body and both above and below the waist",
        "Profound, constant fatigue, even after sleeping for long periods",
        "Sleep disturbances, including waking up tired, restless legs syndrome, or sleep apnoea",
        "Cognitive difficulties commonly referred to as 'fibro fog' (trouble focusing, paying attention, and remembering)"
      ],
      "causes": "The exact cause is unknown, but it is believed to involve a combination of genetics, infections, physical or emotional trauma, and 'central sensitization', where the central nervous system becomes hyper-responsive to pain signals.",
      "riskFactors": [
        "Gender (much more common in women)",
        "Family history of fibromyalgia",
        "Having another painful or rheumatic disease, such as osteoarthritis, rheumatoid arthritis, or lupus",
        "Experiencing severe emotional or physical trauma"
      ],
      "complications": "While fibromyalgia does not cause joint damage or organ disease, the chronic pain, fatigue, and lack of sleep can severely interfere with daily functioning, leading to high rates of depression, anxiety, and social isolation.",
      "diagnosis": "Fibromyalgia is diagnosed based on widespread pain lasting at least 3 months with no other underlying medical cause. Doctors use the Widespread Pain Index (WPI) and symptom severity scales. Blood tests are only done to rule out other diseases.",
      "treatment": "Treatment focuses on symptom management. Medications include pain relievers, antidepressants (like duloxetine), and anti-seizure drugs (like pregabalin). Physical therapy, exercise, counseling, and stress reduction are crucial components.",
      "homeCare": "Maintain a moderate exercise routine; movement actually helps reduce fibromyalgia pain. Practice strict sleep hygiene. Eat a balanced, nutrient-rich diet. Pace yourself throughout the day to avoid pain flares.",
      "prevention": "There is no known way to prevent fibromyalgia, but managing stress, staying active, and getting adequate sleep can help reduce the frequency and severity of pain flare-ups.",
      "whenToSeeDoctor": "Consult a healthcare provider if you experience widespread, chronic musculoskeletal pain and profound fatigue that interferes with your daily activities.",
      "emergencySigns": [
        "Fibromyalgia does not cause acute medical emergencies. Seek immediate care if you develop severe chest pain, sudden paralysis, high fever, or active thoughts of self-harm or suicide."
      ],
      "relatedConditions": [
        "anxiety",
        "depression",
        "insomnia",
        "migraine"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "endometriosis",
    "title": "Endometriosis",
    "category": "chronic",
    "keywords": [
      "endometriosis",
      "pelvic pain",
      "dysmenorrhea",
      "painful periods",
      "infertility",
      "laparoscopy"
    ],
    "summary": "A chronic, painful disorder where tissue similar to the lining of the uterus grows outside the uterine cavity.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Manage severe pelvic pain using over-the-counter NSAIDs (like ibuprofen or naproxen) under medical guidance.",
      "Undergo hormonal therapies (such as oral contraceptives, progestin therapy, or GnRH agonists) prescribed by a gynecologist to suppress estrogen.",
      "For severe or fertililty-related cases, undergo laparoscopic conservative surgery to remove endometrial growths.",
      "Apply heat (warm baths or heating pads) to the lower abdomen to relax pelvic muscles and relieve cramping.",
      "Engage in pelvic floor physical therapy and gentle exercise to reduce chronic pelvic floor muscle tension."
    ],
    "content": {
      "overview": "Endometriosis is a painful, chronic disorder in which tissue similar to the tissue that normally lines the inside of your uterus (the endometrium) grows outside your uterus. It most commonly involves your ovaries, fallopian tubes, and the tissue lining your pelvis.",
      "symptoms": [
        "Painful periods (dysmenorrhea): pelvic pain and cramping starting before and lasting several days into your period",
        "Pain during or after sexual intercourse",
        "Pain with bowel movements or urination, especially during your period",
        "Excessive bleeding (heavy periods or bleeding between periods)",
        "Infertility (often diagnosed during fertility evaluations)",
        "Fatigue, diarrhoea, constipation, bloating, or nausea, especially during periods"
      ],
      "causes": "The exact cause is not certain. Explanations include retrograde menstruation (menstrual blood containing endometrial cells flows back through the fallopian tubes into the pelvic cavity), transformation of peritoneal cells, embryonic cell transformation, and immune system disorders.",
      "riskFactors": [
        "Never giving birth, and starting your period at an early age",
        "Going through menopause at an older age, and short menstrual cycles (less than 27 days)",
        "Having high levels of estrogen, low body mass index, or a family history of endometriosis"
      ],
      "complications": "The primary complication is impaired fertility. Endometriosis can obstruct the fallopian tubes or affect the egg or sperm, preventing fertilization. Another complication is chronic, debilitating pelvic pain that affects daily life and mental health.",
      "diagnosis": "Endometriosis is suspected based on history and pelvic exams. While ultrasounds or MRIs can identify large cysts (endometriomas), the only way to definitively diagnose endometriosis is through a minor surgical procedure called a Laparoscopy to visualize and biopsy the tissue.",
      "treatment": "Treatment includes pain medications (NSAIDs), hormone therapies (birth control pills, progestins, GnRH agonists) to slow tissue growth and prevent ovulation, conservative surgery to remove implants, or a hysterectomy in severe, unresponsive cases.",
      "homeCare": "Apply a warm heating pad or take warm baths to help relax cramping pelvic muscles. Exercise regularly to improve blood flow. Practice stress-management techniques. Keep a detailed symptom diary.",
      "prevention": "You cannot prevent endometriosis, but you can lower your risk by keeping estrogen levels lower: use hormonal contraceptives, exercise regularly, limit alcohol, and maintain a healthy weight.",
      "whenToSeeDoctor": "Consult a gynecologist or doctor if you have severe, painful periods, pain during intercourse, or if you are having difficulty conceiving.",
      "emergencySigns": [
        "Sudden, severe, and localized pelvic pain accompanied by a high fever and vomiting (which can indicate a ruptured ovarian endometrioma or ovarian torsion)",
        "Inability to urinate or pass bowel movements due to severe pelvic blockages"
      ],
      "relatedConditions": [
        "stomach-pain",
        "uti",
        "anxiety",
        "depression"
      ]
    },
    "specialist": "Gynecologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Laparoscopy (Gold Standard)",
      "Transvaginal Ultrasound",
      "Pelvic MRI"
    ]
  },
  {
    "id": "parkinsons",
    "title": "Parkinson's Disease",
    "category": "mental",
    "keywords": [
      "parkinsons",
      "tremor",
      "rigidity",
      "bradykinesia",
      "dopamine",
      "shuffling gait",
      "neurological"
    ],
    "summary": "A progressive nervous system disorder that affects movement, causing tremors, stiffness, and slowed motion.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed dopamine-replacement medications (such as carbidopa-levodopa) daily, strictly on a consistent schedule.",
      "Participate in ongoing physical therapy to maintain balance, flexibility, and gait stability, focusing on fall prevention.",
      "Engage in speech-language therapy to maintain voice volume and clear articulation, and swallowing safety.",
      "Exercise regularly (aerobic walking, stretching, or balance activities like boxing or dance) to slow motor decline.",
      "For advanced, drug-resistant cases, consult a neurosurgeon regarding Deep Brain Stimulation (DBS) surgery."
    ],
    "content": {
      "overview": "Parkinson's disease is a progressive neurological disorder that primarily affects movement. It develops gradually, sometimes starting with a barely noticeable tremor in just one hand. While tremors are common, the disorder also commonly causes stiffness, rigidity, and slowing of movement.",
      "symptoms": [
        "Tremor: a shaking that usually begins in a limb, often your hand or fingers, occurring when resting ('pill-rolling' tremor)",
        "Slowed movement (bradykinesia): making simple tasks difficult and time-consuming, leading to a shuffling gait",
        "Rigid muscles: stiffness in limbs or trunk, which can be painful and limit range of motion",
        "Impaired posture and balance: leading to falls, and loss of automatic movements (blinking, smiling, swinging arms)",
        "Speech changes: speaking softly, quickly, slurring, or hesitating, and writing changes (micrographia)"
      ],
      "causes": "Parkinson's disease is caused by the breakdown and death of nerve cells (neurons) in a specific part of the brain called the substantia nigra. These cells produce chemical messengers called dopamine. When dopamine levels decrease, it causes abnormal brain activity, leading to motor symptoms.",
      "riskFactors": [
        "Age (typically begins in middle or late life, risk increases with age, usually diagnosed around 60+)",
        "Genetics (having a close relative with Parkinson's increases risk slightly)",
        "Exposure to toxins (herbicides, pesticides, or heavy metals)"
      ],
      "complications": "Complications include cognitive difficulties (dementia) in late stages, depression and emotional changes, swallowing difficulties (causing choking or aspiration pneumonia), chewing and eating problems, sleep disorders, and bladder issues.",
      "diagnosis": "There is no specific test for Parkinson's. A neurologist diagnoses it based on your medical history, a review of signs and symptoms, and a physical and neurological examination. A DaTscan may be used to confirm dopamine transporter levels.",
      "treatment": "Treatment aims to manage symptoms. Medications are highly effective, primarily carbidopa-levodopa, dopamine agonists, and MAO-B inhibitors. Physical, occupational, and speech therapy are vital. Deep Brain Stimulation (DBS) surgery is an option for advanced cases.",
      "homeCare": "Adapt the home: remove throw rugs, install grab bars, and ensure clear pathways to prevent falls. Eat a high-fiber diet and drink plenty of water to prevent constipation (highly common in Parkinson's). Focus on making deliberate, rhythmic movements when walking.",
      "prevention": "Some research suggests that regular aerobic exercise and consuming caffeine (coffee or green tea) may reduce the risk of developing Parkinson's, though the exact mechanisms are unclear.",
      "whenToSeeDoctor": "Consult a doctor or neurologist if you notice a persistent tremor in your hand, muscle stiffness, unexplained slowing of movement, or changes in your balance.",
      "emergencySigns": [
        "A sudden, severe fall resulting in inability to move or head trauma",
        "Choking severely on food or liquids (inability to clear the airway)",
        "Severe, acute confusion, hallucinations, or extreme agitation"
      ],
      "relatedConditions": [
        "depression",
        "insomnia",
        "stroke-tia"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "alzheimers",
    "title": "Alzheimer's Disease",
    "category": "mental",
    "keywords": [
      "alzheimers",
      "dementia",
      "memory loss",
      "cognitive decline",
      "plaques",
      "confusion"
    ],
    "summary": "A progressive, chronic neurological disease that destroys memory and other important mental functions.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a neurologist regarding prescribed medications (cholinesterase inhibitors or memantine) to temporarily slow cognitive decline.",
      "Establish a highly structured, calm, and predictable daily routine to minimize confusion and anxiety.",
      "Adapt the living environment to ensure safety: install door locks, hide stove knobs, and remove fall hazards to prevent wandering.",
      "Engage in gentle cognitive stimulation (puzzles, listening to familiar music, looking at photos) and regular social contact.",
      "Ensure a supportive care plan is in place, utilizing respite care to prevent caregiver burnout."
    ],
    "content": {
      "overview": "Alzheimer's disease is a progressive, chronic brain disorder that slowly destroys memory, thinking skills, and, eventually, the ability to carry out the simplest tasks. It is the most common cause of dementia in older adults, characterized by abnormal protein deposits (amyloid plaques and tau tangles) in the brain.",
      "symptoms": [
        "Progressive, disruptive memory loss (forgetting recently learned information, dates, or events)",
        "Difficulty planning, solving problems, or completing familiar tasks",
        "Confusion with time or place (getting lost in familiar areas)",
        "Trouble understanding visual images and spatial relationships",
        "New problems with words in speaking or writing, and misplacing things",
        "Changes in mood and personality (irritability, anxiety, or paranoia)"
      ],
      "causes": "The exact causes aren't fully understood. At a basic level, brain proteins fail to function normally, disrupting neuron work and triggering a toxic chain of events. Neurons become damaged, lose connections, and eventually die, causing brain shrinkage.",
      "riskFactors": [
        "Age (risk increases significantly after 65, doubling every 5 years)",
        "Family history and genetics (carrying the APOE e4 gene increases risk)",
        "Cardiovascular risk factors (hypertension, diabetes, smoking, physical inactivity)"
      ],
      "complications": "As the disease progresses, brain changes affect physical functions, leading to complications: inability to communicate pain or symptoms, high risk of falls and fractures, swallowing difficulties (leading to choking or inhalation of food/liquids, causing aspiration pneumonia), and malnutrition.",
      "diagnosis": "Alzheimer's is diagnosed through clinical history, cognitive and neuropsychological testing, brain imaging (MRI or CT scans to rule out other causes like strokes or tumors), and specialized PET scans or cerebrospinal fluid analysis to check for amyloid and tau proteins.",
      "treatment": "There is no cure. Treatment focuses on managing symptoms and slowing progression. Medications include cholinesterase inhibitors (donepezil) and memantine. Monoclonal antibody drugs (like lecanemab) may be used in early stages to target amyloid plaques. Behavior management and safety are crucial.",
      "homeCare": "Establish a stable, calm environment. Use visual cues (calendars, labels). Keep tasks simple and structured. Encourage regular physical activity and a balanced diet. Secure the home against wandering (alarms, locked doors). Provide support for family caregivers.",
      "prevention": "Maintain cardiovascular health: manage blood pressure, cholesterol, and diabetes. Stay physically active. Eat a Mediterranean-style diet. Stay mentally and socially engaged.",
      "whenToSeeDoctor": "Consult a doctor if you or a family member notices persistent, progressive memory lapses, difficulty managing finances, or noticeable changes in behavior or personality.",
      "emergencySigns": [
        "A sudden, severe change in mental status (acute delirium), which often indicates an underlying infection like a UTI",
        "An injury or severe fall, particularly if the person is unable to explain what happened",
        "Choking on food or fluids with inability to breathe"
      ],
      "relatedConditions": [
        "depression",
        "insomnia",
        "stroke-tia",
        "hypertension"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "epilepsy",
    "title": "Epilepsy",
    "category": "mental",
    "keywords": [
      "epilepsy",
      "seizure",
      "convulsions",
      "eeg",
      "absence seizure",
      "neurological"
    ],
    "summary": "A chronic neurological disorder in which brain activity becomes abnormal, causing recurrent, unprovoked seizures.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed anti-seizure medications (antiepileptic drugs, or AEDs) daily, exactly as directed, without skipping doses.",
      "Ensure a strict sleep schedule, as sleep deprivation is a powerful chemical trigger for seizures.",
      "Identify and avoid known personal seizure triggers (such as flashing lights, high stress, or specific visual patterns).",
      "Develop a clear Seizure Action Plan, and educate family, friends, and coworkers on seizure first aid.",
      "Consult a neurologist regarding alternative treatments (like a ketogenic diet, vagus nerve stimulation, or surgery) if medications fail."
    ],
    "content": {
      "overview": "Epilepsy is a chronic central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness. Anyone can develop epilepsy, and it is highly manageable.",
      "symptoms": [
        "Temporary confusion or a staring spell (absence seizure)",
        "Uncontrollable jerking movements of the arms and legs (convulsions/tonic-clonic seizure)",
        "Loss of consciousness or awareness",
        "Psychic symptoms such as fear, anxiety, or d\u00e9j\u00e0 vu",
        "Sensory changes: tingling, dizziness, or smelling/tasting things that aren't there"
      ],
      "causes": "Epilepsy has no identifiable cause in about half of the people with the condition. In the other half, it is traced to factors: genetics, head trauma (car accidents, falls), brain conditions (stroke, tumors), infectious diseases (meningitis, AIDS), prenatal injury, and developmental disorders.",
      "riskFactors": [
        "Age (most common in children and older adults, though it can occur at any age)",
        "Family history of epilepsy or febrile seizures",
        "Previous head injuries, strokes, brain infections, or vascular dementia"
      ],
      "complications": "Complications include severe falls, drowning (if seizing in water), car accidents, pregnancy complications, and status epilepticus (prolonged seizure lasting >5 mins, a life-threatening emergency). A rare risk is Sudden Unexpected Death in Epilepsy (SUDEP).",
      "diagnosis": "Epilepsy is diagnosed using Electroencephalograms (EEG; records electrical brain activity to find abnormal waves) and brain imaging (MRI or CT scans to identify structural lesions or scars).",
      "treatment": "The primary treatment is daily anti-seizure medication (AEDs). Most people achieve control with the first or second drug. Other options include Vagus Nerve Stimulation (VNS), a strict Ketogenic Diet (primarily for children), and brain surgery to remove the seizure-producing area.",
      "homeCare": "Take medications at the same time every day. Wear a medical alert bracelet. Keep home safety in mind: take showers instead of baths, cook on back burners, and pad sharp corners. Get adequate sleep and manage stress.",
      "prevention": "Prevent head injuries by wearing helmets and seatbelts. Control cardiovascular risk factors to prevent strokes. Practice good hygiene to prevent brain infections.",
      "whenToSeeDoctor": "Consult a doctor or neurologist after experiencing a first seizure, or if your seizure frequency increases despite medication.",
      "emergencySigns": [
        "A seizure that lasts more than 5 minutes (status epilepticus)",
        "A second seizure that starts immediately after the first, without the person regaining consciousness in between",
        "Difficulty breathing or waking up after the seizure has stopped",
        "The seizure occurs in water, or is accompanied by high fever or pregnancy"
      ],
      "relatedConditions": [
        "insomnia",
        "migraine",
        "stroke-tia"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "multiple-sclerosis",
    "title": "Multiple Sclerosis (MS)",
    "category": "mental",
    "keywords": [
      "multiple sclerosis",
      "ms",
      "myelin",
      "autoimmune nerve",
      "numbness",
      "vision loss",
      "optic neuritis"
    ],
    "summary": "A chronic autoimmune disease where the immune system attacks the protective myelin sheath covering nerve fibers.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Initiate daily or monthly prescribed Disease-Modifying Therapies (DMTs) early to reduce the frequency and severity of relapses.",
      "Take prescribed oral corticosteroids during acute flare-ups to rapidly reduce nerve inflammation.",
      "Participate in physical and occupational therapy to maintain muscle strength, balance, and manage mobility changes.",
      "Manage chronic fatigue and muscle spasms using targeted medications and energy-conservation techniques.",
      "Follow a healthy lifestyle: exercise regularly, eat a balanced diet, and avoid heat exposure (which temporarily worsens symptoms)."
    ],
    "content": {
      "overview": "Multiple Sclerosis (MS) is a chronic, potentially disabling autoimmune disease of the central nervous system. In MS, the body's immune system mistakenly attacks the protective sheath (myelin) that covers nerve fibers, causing communication problems between your brain and the rest of your body.",
      "symptoms": [
        "Numbness or weakness in one or more limbs, typically on one side of the body or the legs and trunk",
        "Electric-shock sensations that occur with certain neck movements, especially bending the neck forward (Lhermitte's sign)",
        "Tremor, lack of coordination, unsteady gait, or difficulty walking",
        "Vision problems: partial or complete loss of vision, typically in one eye at a time, often with pain during eye movement (optic neuritis), or double vision",
        "Profound fatigue, slurred speech, dizziness, and bladder/bowel dysfunction"
      ],
      "causes": "MS is an autoimmune disease. The cause is unknown, but it is believed to involve a combination of genetic susceptibility and environmental triggers (like vitamin D deficiency, viral infections like Epstein-Barr, or smoking) that prompt the immune system to attack myelin.",
      "riskFactors": [
        "Age (typically diagnosed between 20 and 40, though it can occur at any age)",
        "Gender (women are two to three times more likely to get relapsing-remitting MS)",
        "Family history of MS, and living in temperate climates (farther from the equator, linked to low vitamin D)",
        "Having other autoimmune diseases like thyroid disease or type 1 diabetes"
      ],
      "complications": "Complications include severe muscle stiffness or spasms (spasticity), paralysis (typically in the legs), bladder, bowel, or sexual dysfunction, mental changes (forgetfulness or mood swings), depression, and epilepsy.",
      "diagnosis": "MS has no specific test. Diagnosis relies on ruling out other conditions. Tests include brain and spinal cord MRIs (to identify plaques or scars), lumbar punctures (to check for oligoclonal bands in spinal fluid), and visual evoked potential tests.",
      "treatment": "There is no cure. Relapses are treated with high-dose IV corticosteroids or plasmapheresis. Progression is managed with Disease-Modifying Therapies (DMTs) that reduce relapse rates and slow disability accumulation. Supportive drugs are used for spasms, fatigue, and pain.",
      "homeCare": "Get plenty of rest. Exercise regularly (stretching, swimming, walking) to maintain muscle tone and balance. Avoid heat exposure; cool baths or cooling vests can help. Eat a balanced diet, and join an MS support group.",
      "prevention": "There is no established way to prevent MS. Maintaining adequate vitamin D levels, avoiding smoking, and eating a healthy diet may help manage risk or support general health.",
      "whenToSeeDoctor": "Consult a neurologist or doctor if you experience unexplained numbness, tingling, vision loss, or balance difficulties that last for more than 24 hours.",
      "emergencySigns": [
        "Sudden, severe loss of vision in one or both eyes",
        "Sudden, severe weakness or paralysis in your legs, making you unable to stand or walk",
        "Severe, acute confusion or difficulty swallowing"
      ],
      "relatedConditions": [
        "depression",
        "insomnia",
        "thyroid-disorders"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "bipolar",
    "title": "Bipolar Disorder",
    "category": "mental",
    "keywords": [
      "bipolar",
      "manic depression",
      "mania",
      "hypomania",
      "depressive episode",
      "mood swings"
    ],
    "summary": "A mental health condition that causes extreme mood swings, including emotional highs (mania) and lows (depression).",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Take prescribed mood stabilizers, atypical antipsychotics, or antidepressants daily, exactly as directed by a psychiatrist.",
      "Attend regular psychotherapy sessions (such as CBT or Family-Focused Therapy) to develop coping and early warning strategies.",
      "Establish a highly consistent daily routine, especially maintaining stable sleep-wake cycles, as sleep loss can trigger mania.",
      "Avoid alcohol, recreational drugs, and excessive caffeine, which can destabilize mood and trigger manic or depressive episodes.",
      "Create a Crisis Plan with trusted family members to manage safety during severe manic or depressive phases."
    ],
    "content": {
      "overview": "Bipolar disorder (formerly called manic depression) is a chronic mental health condition that causes extreme shifts in mood, energy, activity levels, and concentration. These shifts range from periods of extremely energized, euphoric behavior (manic episodes) to sad, hopeless periods (depressive episodes).",
      "symptoms": [
        "**Manic/Hypomanic Symptoms**: Abnormally upbeat, jumpy, or wired feeling; increased activity or energy; exaggerated sense of self-confidence (grandiosity); decreased need for sleep (feeling rested after 3 hours); unusual talkativeness; racing thoughts; and poor decision-making (spending sprees, risky behaviors).",
        "**Depressive Symptoms**: Persistent sad, empty, or hopeless mood; marked loss of interest in all activities; insomnia or sleeping too much; fatigue; feelings of worthlessness or guilt; difficulty concentrating; and suicidal thoughts."
      ],
      "causes": "The exact cause is not fully known. It is believed to be a combination of brain chemistry imbalances (neurotransmitters), genetic factors (highly heritable), and environmental triggers (high stress, trauma, or major life changes).",
      "riskFactors": [
        "Having a first-degree relative (parent or sibling) with bipolar disorder",
        "Periods of high stress, such as the death of a loved one or other traumatic events",
        "Drug or alcohol abuse, which can trigger or worsen mood episodes"
      ],
      "complications": "Complications are severe if untreated: problems related to drug and alcohol abuse, financial or legal difficulties, damaged relationships, poor work or school performance, self-harm, and high rates of suicide.",
      "diagnosis": "Diagnosis is made through a comprehensive psychiatric evaluation, mood charting (tracking daily mood, sleep, and activity), and diagnostic criteria from the DSM-5, ruling out medical causes like thyroid disorders.",
      "treatment": "Bipolar disorder is a lifelong illness. Treatment requires daily medication, primarily mood stabilizers (like lithium) and atypical antipsychotics. Psychotherapy is vital for education and coping. Hospitalization may be necessary during severe mania or depression.",
      "homeCare": "Take medications consistently; never stop them without medical guidance even if you feel well. Keep a daily mood and sleep log. Avoid caffeine, alcohol, and drugs. Exercise regularly and establish a stable daily structure.",
      "prevention": "Bipolar disorder cannot be prevented, but early intervention and strict adherence to treatment can help prevent minor mood swings from escalating into full manic or depressive crises.",
      "whenToSeeDoctor": "Consult a psychiatrist or mental health professional if you or a loved one experiences extreme, cyclical mood swings, severe periods of depression, or periods of unusually high energy and risky behavior.",
      "emergencySigns": [
        "Active suicidal thoughts, self-harm behaviors, or expressing a desire to die",
        "Severe manic state with extreme delusions, hallucinations, paranoia, or dangerous, reckless behaviors",
        "Inability to sleep for several days, accompanied by rapid, incoherent speech"
      ],
      "relatedConditions": [
        "depression",
        "anxiety",
        "insomnia",
        "thyroid-disorders"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "ptsd",
    "title": "PTSD",
    "category": "mental",
    "keywords": [
      "ptsd",
      "post traumatic stress",
      "trauma",
      "flashbacks",
      "hyperarousal",
      "nightmares"
    ],
    "summary": "A mental health condition triggered by experiencing or witnessing a terrifying, traumatic event, causing flashbacks and severe anxiety.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Participate in trauma-focused psychotherapy, such as Cognitive Processing Therapy (CPT) or Prolonged Exposure (PE) therapy.",
      "Undergo Eye Movement Desensitization and Reprocessing (EMDR) therapy, a highly effective clinical treatment for trauma.",
      "Take prescribed daily medications (typically SSRI antidepressants) as directed to manage core anxiety and depressive symptoms.",
      "Practice daily grounding techniques (like the 5-4-3-2-1 sensory method) to manage flashbacks and acute panic.",
      "Build a strong, trusted support system and join a specialized trauma support group to reduce isolation."
    ],
    "content": {
      "overview": "Post-Traumatic Stress Disorder (PTSD) is a mental health condition that is triggered by experiencing or witnessing a terrifying, traumatic event. Most people who go through traumatic events may have temporary difficulty adjusting, but if symptoms worsen, last for months or years, and interfere with daily functioning, it may be PTSD.",
      "symptoms": [
        "Intrusive memories: recurrent, involuntary, and distressing memories of the event, including vivid flashbacks or nightmares",
        "Avoidance: trying to avoid thinking or talking about the event, or avoiding places, activities, or people that trigger memories",
        "Negative changes in thinking and mood: hopelessness, memory problems regarding the event, feeling detached, and lack of interest",
        "Changes in physical and emotional reactions (arousal): being easily startled, feeling constantly on guard (hypervigilance), irritability, angry outbursts, and trouble sleeping"
      ],
      "causes": "PTSD can develop when you go through, see, or learn about an event involving actual or threatened death, serious injury, or sexual violence. It is believed to involve abnormal survival chemical releases in the brain during trauma.",
      "riskFactors": [
        "Experiencing intense or long-lasting trauma, or working in high-exposure jobs (military, first responders)",
        "Having other mental health risks (anxiety, depression) or lacking a good support system of family and friends",
        "Having blood relatives with mental health conditions"
      ],
      "complications": "PTSD can disrupt your entire life: work, relationships, health, and daily activities. It increases the risk of depression, anxiety, eating disorders, substance abuse (alcohol or drugs), and suicidal thoughts and behaviors.",
      "diagnosis": "A mental health professional diagnoses PTSD based on a clinical interview, symptom review, and diagnostic criteria in the DSM-5, requiring symptoms to have lasted for at least one month.",
      "treatment": "The primary treatment is psychotherapy, specifically trauma-focused therapies like CBT, CPT, Prolonged Exposure, and EMDR. Medications, primarily SSRI antidepressants (sertraline, paroxetine), help manage anxiety and sleep problems.",
      "homeCare": "Follow your treatment plan. Practice deep breathing and relaxation techniques when anxious. Exercise regularly to reduce stress. Avoid alcohol and drugs, which can worsen flashbacks and anxiety. Get adequate rest.",
      "prevention": "After a traumatic event, getting timely support from friends, family, or counselors, and processing the event in a safe environment can help prevent temporary stress reactions from developing into long-term PTSD.",
      "whenToSeeDoctor": "Consult a doctor or mental health professional if you have distressing thoughts and feelings about a traumatic event for more than a month, especially if they are severe and disrupt your life.",
      "emergencySigns": [
        "Active plans or thoughts of suicide, self-harm, or harming others",
        "Severe panic attacks accompanied by chest pain and severe shortness of breath",
        "Complete inability to function or care for basic physical needs due to severe trauma distress"
      ],
      "relatedConditions": [
        "anxiety",
        "depression",
        "insomnia"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "ocd",
    "title": "Obsessive-Compulsive Disorder",
    "category": "mental",
    "keywords": [
      "ocd",
      "obsessions",
      "compulsions",
      "intrusive thoughts",
      "hand washing",
      "erp",
      "checking"
    ],
    "summary": "A common, chronic mental health disorder characterized by uncontrollable, recurring thoughts (obsessions) and behaviors (compulsions).",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Undergo specialized Cognitive Behavioral Therapy, specifically Exposure and Response Prevention (ERP), the gold-standard treatment.",
      "Take prescribed daily medications (typically high-dose SSRIs) consistently as directed by a psychiatrist.",
      "Resist performing compulsions gradually using ERP techniques, allowing the anxiety to peak and naturally fade.",
      "Establish a highly consistent daily schedule and practice stress-reduction exercises to manage general anxiety.",
      "Involve trusted family members in your treatment plan to help prevent them from enabling compulsive rituals."
    ],
    "content": {
      "overview": "Obsessive-Compulsive Disorder (OCD) is a common, chronic, and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts (obsessions) and/or behaviors (compulsions) that he or she feels the urge to repeat over and over.",
      "symptoms": [
        "**Obsessions (Intrusive Thoughts)**: Fear of contamination or germs; unwanted forbidden thoughts about harm; aggressive thoughts; or needing things symmetrical or in perfect order.",
        "**Compulsions (Repetitive Behaviors)**: Excessive hand washing or cleaning; arranging items in a precise way; repeatedly checking things (like doors locked, stove off); or compulsive counting or repeating words silently."
      ],
      "causes": "The exact cause is unknown. Main theories include brain chemistry and structural differences (in the frontal cortex and subcortical structures), genetic factors (highly heritable, especially if onset is in childhood), and environmental triggers.",
      "riskFactors": [
        "Family history of OCD or other anxiety disorders",
        "Physical or mental trauma in childhood, or high chronic stress levels",
        "Rarely, pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections (PANDAS)"
      ],
      "complications": "Untreated OCD causes severe complications: extreme time lost to rituals (often hours daily), severe physical health issues (skin damage from washing), difficulty attending work or school, damaged relationships, and low quality of life.",
      "diagnosis": "OCD is diagnosed by a psychiatrist or psychologist through a detailed clinical evaluation, assessing the content, duration, and impact of obsessions and compulsions using scales like the Yale-Brown Obsessive Compulsive Scale (Y-BOCS).",
      "treatment": "Treatment is highly effective. It combines specialized CBT\u2014specifically **Exposure and Response Prevention (ERP)**\u2014and medications, primarily SSRIs (like fluoxetine or sertraline) often at higher doses than used for depression.",
      "homeCare": "Practice your ERP exercises daily as guided by your therapist. Join an OCD support group. Avoid using alcohol or drugs to self-medicate anxiety. Focus on accepting intrusive thoughts without reacting to them.",
      "prevention": "There is no known way to prevent OCD, but early diagnosis and starting ERP therapy promptly can prevent symptoms from becoming severe and deeply disruptive.",
      "whenToSeeDoctor": "Consult a mental health professional if your obsessions and compulsions take up significant time (more than an hour a day), cause you distress, or interfere with your work, school, or daily life.",
      "emergencySigns": [
        "Severe, unrelenting distress that leads to active thoughts of self-harm or suicide",
        "Extreme physical exhaustion or skin infections due to severe, non-stop physical rituals (like excessive washing)"
      ],
      "relatedConditions": [
        "anxiety",
        "depression",
        "insomnia"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "adhd",
    "title": "ADHD",
    "category": "mental",
    "keywords": [
      "adhd",
      "attention deficit",
      "hyperactivity",
      "inattention",
      "executive dysfunction",
      "impulsivity"
    ],
    "summary": "A chronic neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a psychiatrist regarding prescribed stimulant or non-stimulant medications to improve neurotransmitter levels.",
      "Work with an ADHD coach or therapist to build executive function skills (time management, organization, and planning).",
      "Use structured tools daily: maintain a digital calendar, keep detailed checklists, and set alarms and reminders.",
      "Minimize environmental distractions: use noise-canceling headphones and establish a dedicated, clutter-free workspace.",
      "Ensure a healthy lifestyle: engage in regular physical exercise to boost dopamine, and maintain a consistent sleep schedule."
    ],
    "content": {
      "overview": "Attention-Deficit/Hyperactivity Disorder (ADHD) is a common chronic neurodevelopmental disorder that is typically diagnosed in childhood and often lasts into adulthood. It is characterized by persistent patterns of inattention, hyperactivity, and impulsive behavior that interfere with functioning or development.",
      "symptoms": [
        "**Inattention**: Difficulty sustaining attention in tasks; making careless mistakes; failing to finish chores or schoolwork; trouble organizing tasks; avoiding mentally taxing work; losing items; and being easily distracted.",
        "**Hyperactivity & Impulsivity**: Fidgeting or squirming; inability to remain seated; running or climbing inappropriately; talking excessively; blurting out answers; and difficulty waiting one's turn."
      ],
      "causes": "ADHD is a highly heritable neurodevelopmental disorder. While the exact causes are not fully known, research shows a strong genetic basis and differences in brain structure, specifically a delay in the maturation of the prefrontal cortex which governs executive function.",
      "riskFactors": [
        "Having blood relatives (parent or sibling) with ADHD",
        "Maternal smoking, drug use, or alcohol use during pregnancy",
        "Exposure to environmental toxins (such as lead) during pregnancy or at a young age, and premature birth"
      ],
      "complications": "ADHD can lead to difficulties: poor school or work performance, higher rates of accidents and injuries, low self-esteem, unstable relationships, difficulty managing finances, and increased risk of substance abuse.",
      "diagnosis": "ADHD is diagnosed through a comprehensive evaluation. For adults, it requires a history of symptoms starting in childhood. Doctors use standardized rating scales, clinical interviews, and rule out learning disabilities or mood disorders.",
      "treatment": "Treatment is highly effective and multi-modal. It includes stimulant medications (like methylphenidate or amphetamines) or non-stimulants, behavioral therapy, executive function training, and educational or workplace accommodations.",
      "homeCare": "Create a structured daily routine. Break large tasks into small, step-by-step actions. Use planners, sticky notes, and phone alarms. Stay active; physical exercise naturally raises dopamine and norepinephrine levels in the brain.",
      "prevention": "There is no way to prevent ADHD, but managing prenatal health (avoiding alcohol, tobacco, and toxins) and early behavioral intervention can help manage the impact of symptoms.",
      "whenToSeeDoctor": "Consult a doctor, pediatrician, or psychiatrist if you or your child displays persistent symptoms of inattention or hyperactivity that cause difficulties at school, work, or home.",
      "emergencySigns": [
        "ADHD does not cause acute medical emergencies. Seek immediate care if symptoms lead to severe, unsafe impulsive behaviors that threaten physical safety."
      ],
      "relatedConditions": [
        "anxiety",
        "depression",
        "insomnia"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "rosacea",
    "title": "Rosacea",
    "category": "skin",
    "keywords": [
      "rosacea",
      "facial redness",
      "flushing",
      "broken capillaries",
      "rhinophyma",
      "papules",
      "skin triggers"
    ],
    "summary": "A chronic inflammatory skin condition causing persistent facial redness, flushing, and small, pus-filled bumps.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Apply prescribed topical treatments (such as metronidazole or ivermectin) daily to reduce facial inflammation.",
      "Keep a detailed Skin Trigger Diary to identify and strictly avoid personal triggers (spicy foods, hot beverages, alcohol, extreme temperatures).",
      "Apply a gentle, broad-spectrum sunscreen (SPF 30 or higher) daily, as UV light is the most common rosacea trigger.",
      "Adopt an ultra-gentle skincare routine: use mild cleansers, avoid scrubbing, and strictly avoid products containing alcohol or fragrances.",
      "Consult a dermatologist regarding laser or light therapies to reduce persistent redness and visible blood vessels."
    ],
    "content": {
      "overview": "Rosacea is a common chronic inflammatory skin condition that primarily affects the face, causing persistent redness, flushing, and visible blood vessels (telangiectasia). It can also produce small, red, pus-filled bumps that can be mistaken for acne.",
      "symptoms": [
        "Persistent redness and frequent flushing or blushing in the center of the face (cheeks, nose, forehead, chin)",
        "Small, red, pus-filled bumps (papules and pustules) that may sting or burn",
        "Visible broken blood vessels (capillaries) on the cheeks and nose",
        "Dry, irritated, or swollen eyes and swollen, red eyelids (ocular rosacea)",
        "Enlarged, bulbous nose due to thickened skin (rhinophyma, more common in men)"
      ],
      "causes": "The exact cause of rosacea is unknown. It is believed to be a combination of hereditary factors, an overactive immune system response to skin microbes (like Demodex mites), neurovascular dysregulation, and environmental triggers that cause blood vessels to dilate.",
      "riskFactors": [
        "Being female, having fair skin, blonde hair, and blue eyes",
        "Being between 30 and 50 years old, and having a family history of rosacea",
        "Having a history of heavy sun exposure or smoking"
      ],
      "complications": "Complications are primarily physical and emotional. Rhinophyma (thickened skin on the nose) can cause permanent facial disfigurement requiring surgery. Ocular rosacea can lead to corneal damage and vision problems. Rosacea can cause low self-esteem and social anxiety.",
      "diagnosis": "A dermatologist diagnoses rosacea during a visual examination of your facial skin and eyes. No specific tests are needed; other conditions like lupus or acne are ruled out.",
      "treatment": "Treatment aims to control signs and symptoms. It includes topical medications (ivermectin, metronidazole), oral antibiotics (doxycycline) for anti-inflammatory effects, laser therapy to treat broken blood vessels, and surgical scraping for rhinophyma.",
      "homeCare": "Apply sunscreen daily. Cleanse your face gently with your fingertips; do not scrub. Use only mild, fragrance-free products. Avoid triggers: limit hot beverages, spicy foods, alcohol, and exposure to wind and extreme cold.",
      "prevention": "Prevent flare-ups by keeping skin protected from the sun, managing stress, using gentle skincare, and avoiding your personal rosacea triggers.",
      "whenToSeeDoctor": "See a dermatologist or doctor if you experience persistent facial redness, flushing, or skin bumps, to get a proper diagnosis and start treatment before symptoms progress.",
      "emergencySigns": [
        "Rosacea does not cause acute medical emergencies. Seek prompt medical care if you develop severe eye pain, foreign body sensation, or vision changes (signs of severe ocular rosacea affecting the cornea)."
      ],
      "relatedConditions": [
        "acne",
        "eczema"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "2 to 4 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Skin Scraping & KOH prep",
      "Skin Biopsy"
    ]
  },
  {
    "id": "contact-dermatitis",
    "title": "Contact Dermatitis",
    "category": "skin",
    "keywords": [
      "contact dermatitis",
      "skin allergy",
      "poison ivy",
      "skin rash",
      "chemical burn",
      "irritant"
    ],
    "summary": "An itchy, red rash caused by direct contact with a substance or an allergic reaction to it.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Immediately identify and strictly avoid contact with the triggering substance (harsh soaps, nickel jewelry, poison ivy, fragrances).",
      "Wash the affected skin thoroughly with cool water and mild soap immediately after exposure to remove remaining traces.",
      "Apply over-the-counter hydrocortisone cream or calamine lotion to the rash twice daily to reduce itching and inflammation.",
      "Take oral antihistamines to manage severe itching, especially at night to prevent scratching.",
      "Use cool, wet compresses on the rash for 15-20 minutes several times a day to soothe the skin."
    ],
    "content": {
      "overview": "Contact dermatitis is an itchy, red skin rash caused by direct contact with a substance or an allergic reaction to it. The rash isn't contagious or life-threatening, but it can be very uncomfortable and typically resolves within 2 to 4 weeks once the trigger is removed.",
      "symptoms": [
        "A red, bumpy, or blistering rash localized to the area that touched the substance",
        "Intense itching, burning, stinging, or tenderness",
        "Dry, cracked, scaly, or leathery skin",
        "Fluid-filled blisters that may ooze and crust over in severe cases",
        "Swelling in the affected area"
      ],
      "causes": "Contact dermatitis is caused by exposure to either an irritant or an allergen. **Irritant Contact Dermatitis** (most common) occurs when a substance damages the skin's protective barrier (like solvents, bleach, or harsh soaps). **Allergic Contact Dermatitis** is an immune reaction to an allergen (like nickel, poison ivy, cosmetics, or latex).",
      "riskFactors": [
        "Occupations with frequent exposure to chemicals, water, or wet work (nurses, hairdressers, cleaners, construction workers)",
        "Having a pre-existing skin condition like eczema or sensitive skin",
        "Regular use of cosmetics, fragrances, or wearing jewelry containing nickel"
      ],
      "complications": "The primary complication is a secondary bacterial skin infection (typically staph or strep) caused by scratching and breaking the skin. Another complication is chronic, thickened skin (neurodermatitis) from persistent scratching.",
      "diagnosis": "Diagnosis is based on the rash appearance and a history of exposure. If an allergy is suspected, a dermatologist may perform **Patch Testing** (applying small amounts of allergens to the back under patches for 48 hours) to identify the trigger.",
      "treatment": "Treatment involves avoiding the trigger. Mild cases are treated with topical steroid creams (hydrocortisone), calamine, and cool compresses. Severe, widespread cases require a short course of oral corticosteroids (prednisone) and oral antihistamines.",
      "homeCare": "Wash skin immediately after exposure. Apply thick, fragrance-free barrier creams. Do not scratch; keep fingernails trimmed. Take oatmeal baths. Apply cool, wet compresses.",
      "prevention": "Avoid known irritants and allergens. Wear protective gloves and clothing when handling chemicals. Apply barrier creams to protect the skin. Use mild, fragrance-free soaps.",
      "whenToSeeDoctor": "Consult a doctor if the rash is severe, covers a large portion of your body, does not improve after 2 weeks of home care, or shows signs of infection (pus, red streaks, increased warmth).",
      "emergencySigns": [
        "The rash is near your eyes or mouth, or covers your genitals",
        "Signs of a severe, spreading skin infection: high fever, widespread painful blisters, or rapidly spreading redness and swelling",
        "Difficulty breathing or swallowing (indicates a severe, systemic allergic reaction)"
      ],
      "relatedConditions": [
        "eczema",
        "acne",
        "chickenpox"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "2 to 4 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Skin Scraping & KOH prep",
      "Skin Biopsy"
    ]
  },
  {
    "id": "hives",
    "title": "Hives (Urticaria)",
    "category": "skin",
    "keywords": [
      "hives",
      "urticaria",
      "wheals",
      "welts",
      "itchy skin",
      "allergic reaction",
      "angioedema"
    ],
    "summary": "Red, itchy, raised welts on the skin that appear suddenly, often triggered by an allergic reaction or stress.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Take an over-the-counter non-sedating antihistamine (such as cetirizine, loratadine, or fexofenadine) to block histamine and stop the hives.",
      "Identify and strictly avoid personal hives triggers (certain foods, medications, insect stings, extreme cold/heat, or high stress).",
      "Apply cool, damp compresses or ice packs wrapped in towels to the itchy welts to reduce swelling.",
      "Take lukewarm baths (optionally with colloidal oatmeal) and wear loose, soft, breathable cotton clothing.",
      "Consult a doctor if hives persist for more than 6 weeks (chronic urticaria) to discuss advanced prescription treatments."
    ],
    "content": {
      "overview": "Hives, medically known as urticaria, are red, very itchy, raised welts (wheals) that appear suddenly on the skin. They can range in size from small spots to large patches, and can appear anywhere on the body. Individual welts typically fade within 24 hours, while new ones may appear elsewhere.",
      "symptoms": [
        "Batches of red, skin-colored, or pink welts (wheals) that can appear anywhere on the body",
        "Welts that vary in size, change shape, and fade and reappear repeatedly",
        "Intense itching (pruritus), which can be severe, or a burning, stinging sensation",
        "Occasionally accompanied by swelling of the deeper layers of skin (angioedema), especially around the eyes, lips, hands, or feet"
      ],
      "causes": "Hives occur when specialized skin cells (mast cells) release histamine and other chemicals into the bloodstream, causing fluid to leak from local blood vessels into the skin, creating welts. Triggers include allergic reactions (foods, drugs, insect stings), viral infections, physical triggers (heat, cold, friction), and stress.",
      "riskFactors": [
        "Having known allergies or a history of asthma or eczema",
        "Having a recent viral or bacterial infection",
        "Experiencing high levels of physical or emotional stress, or having a family history of hives"
      ],
      "complications": "While hives themselves are harmless and temporary, they can be part of a severe, life-threatening systemic allergic reaction (anaphylaxis). Chronic hives (lasting >6 weeks) can cause significant sleep loss, anxiety, and depression.",
      "diagnosis": "Acute hives are diagnosed by visual examination of the skin. For chronic hives, doctors may recommend blood tests, allergy testing, or thyroid function tests to look for underlying autoimmune causes.",
      "treatment": "The primary treatment is oral antihistamines to block histamine release. Non-sedating second-generation antihistamines are preferred. For severe, acute hives, a short course of oral corticosteroids (prednisone) may be prescribed. Chronic hives may require targeted monoclonal antibodies (omalizumab).",
      "homeCare": "Apply cool compresses. Avoid hot showers or baths. Wear loose, light clothing. Avoid scratching. Keep a food and activity diary to help identify triggers.",
      "prevention": "Avoid known triggers. Choose gentle, fragrance-free soaps. Manage stress, and wear sunscreen when outdoors.",
      "whenToSeeDoctor": "Consult a doctor if your hives are severe, do not respond to over-the-counter antihistamines, or continue to appear daily for more than a few weeks.",
      "emergencySigns": [
        "Hives accompanied by difficulty breathing, wheezing, or shortness of breath",
        "Swelling of the tongue, lips, face, or throat, making it difficult to swallow or speak",
        "Feeling dizzy, lightheaded, or losing consciousness (signs of life-threatening anaphylactic shock)"
      ],
      "relatedConditions": [
        "allergic-rhinitis",
        "eczema",
        "uti"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "2 to 4 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Skin Scraping & KOH prep",
      "Skin Biopsy"
    ]
  },
  {
    "id": "ringworm",
    "title": "Ringworm (Tinea Corporis)",
    "category": "skin",
    "keywords": [
      "ringworm",
      "tinea",
      "fungal infection",
      "circular rash",
      "itchy ring",
      "mycosis"
    ],
    "summary": "A highly contagious fungal skin infection characterized by a red, circular, itchy rash with clearer skin in the middle.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Apply an over-the-counter antifungal cream (such as clotrimazole, miconazole, or terbinafine) twice daily to the rash.",
      "**Continue applying the antifungal cream for at least 1 to 2 weeks after the rash completely disappears** to ensure the fungus is fully eradicated.",
      "Keep the infected skin strictly clean, dry, and exposed to air; avoid tight clothing that traps moisture.",
      "Wash bedding, towels, and clothing daily in hot water, and dry them on high heat to kill fungal spores.",
      "Avoid sharing personal items (towels, hairbrushes, clothing) and have family pets checked for ringworm, as they are common carriers."
    ],
    "content": {
      "overview": "Ringworm, despite its name, is not caused by a worm. It is a highly contagious, superficial fungal infection of the skin caused by dermatophytes. It is characterized by a red, itchy, circular rash with raised edges and clearer skin in the middle, resembling a ring.",
      "symptoms": [
        "A circular or ring-shaped flat rash with raised, red, and scaly edges",
        "An itchy, burning sensation on the rash area",
        "The center of the ring may be clear, scaly, or scattered with red bumps",
        "Multiple rings that may overlap and spread to other parts of the body"
      ],
      "causes": "Ringworm is caused by tiny, mold-like fungi called dermatophytes that live on the dead tissues of your skin, hair, and nails. It spreads through direct skin-to-skin contact with an infected person or animal, or by touching contaminated surfaces, soil, or personal items.",
      "riskFactors": [
        "Living in warm, humid climates, or participating in contact sports (like wrestling)",
        "Sharing clothing, towels, or bedding with an infected person",
        "Close contact with infected animals, particularly cats, dogs, or farm animals",
        "Having a weakened immune system, or wearing tight, damp clothing"
      ],
      "complications": "Ringworm is rarely serious and does not spread below the skin. Complications include secondary bacterial infections from scratching and breaking the skin, and spreading the infection to other body areas (like the scalp or groin).",
      "diagnosis": "Dermatologists diagnose ringworm by examining the rash. They can confirm it by taking a gentle skin scraping, treating it with potassium hydroxide (KOH), and looking under a microscope to visualize the fungal hyphae.",
      "treatment": "Mild cases are highly treatable with over-the-counter topical antifungal creams applied for 2-4 weeks. Severe, widespread, or scalp ringworm requires prescription-strength oral antifungal medications (like terbinafine or griseofulvin) prescribed by a doctor.",
      "homeCare": "Keep the area clean and dry. Wash your hands thoroughly after touching the rash. Avoid scratching. Wear breathable cotton clothing. Wash all personal linens frequently in hot water.",
      "prevention": "Keep skin clean and dry. Change socks and underwear daily. Avoid sharing personal items. Wear slippers in public locker rooms and showers. Wash hands after petting animals.",
      "whenToSeeDoctor": "See a doctor if the rash does not begin to improve after 2 weeks of consistent over-the-counter antifungal treatment, or if the infection spreads to your scalp.",
      "emergencySigns": [
        "Ringworm does not cause medical emergencies. Seek prompt care if you develop signs of a severe, painful bacterial infection: spreading redness, swelling, intense pain, pus, and a high fever."
      ],
      "relatedConditions": [
        "athletes-foot",
        "eczema",
        "acne"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "2 to 4 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Skin Scraping & KOH prep",
      "Skin Biopsy"
    ]
  },
  {
    "id": "athletes-foot",
    "title": "Athlete's Foot (Tinea Pedis)",
    "category": "skin",
    "keywords": [
      "athletes foot",
      "tinea pedis",
      "foot fungus",
      "peeling toes",
      "itchy feet",
      "smelly feet"
    ],
    "summary": "A common, highly contagious fungal infection of the feet, causing peeling, cracking, redness, and intense itching between the toes.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Apply an over-the-counter topical antifungal cream, spray, or powder (like terbinafine, clotrimazole, or tolnaftate) daily.",
      "**Continue the antifungal treatment for 1 to 2 weeks after symptoms resolve** to guarantee the fungus is completely cleared.",
      "Wash feet daily with soap and water, and dry them meticulously, especially between the toes, using a clean towel.",
      "Wear clean, moisture-wicking cotton socks, changing them at least once (or twice if feet sweat heavily) daily.",
      "Wear breathable shoes, alternate footwear daily to let them dry, and wear flip-flops in public showers, pools, and locker rooms."
    ],
    "content": {
      "overview": "Athlete's foot (tinea pedis) is a highly contagious fungal infection that affects the skin on the feet, most commonly beginning between the toes. It closely relates to other fungal infections like ringworm and jock itch, thriving in warm, damp, and enclosed environments.",
      "symptoms": [
        "Intense itching, stinging, and burning sensation between the toes and on the soles of the feet",
        "Peeling, cracking, scaling, or flaking skin on the feet",
        "Red, inflamed skin, or fluid-filled blisters that can ooze and crust",
        "Dryness and scaling on the soles and sides of the feet ('moccasin' pattern)",
        "Foul foot odor and occasionally thickened, discolored toenails"
      ],
      "causes": "Athlete's foot is caused by dermatophytes, the same group of fungi that cause ringworm. It thrives in warm, moist environments and is contracted by walking barefoot in public showers or locker rooms, or sharing contaminated socks, shoes, or towels.",
      "riskFactors": [
        "Frequently wearing damp socks or tight, enclosed, plastic-lined shoes",
        "Walking barefoot in public areas where the fungus spreads (locker rooms, communal showers, public pools)",
        "Sharing shoes, socks, or towels with someone who has athlete's foot",
        "Having a weakened immune system or poor circulation in the feet"
      ],
      "complications": "Complications include the fungal infection spreading to the toenails (onychomycosis, which is harder to treat), spreading to the groin (jock itch) via hands or towels, and secondary bacterial infections (like cellulitis) entering through cracked skin.",
      "diagnosis": "Doctors diagnose athlete's foot by visual inspection. They can confirm it by taking a skin scraping, mixing it with potassium hydroxide (KOH), and examining it under a microscope to identify fungal structures.",
      "treatment": "Treatment consists of over-the-counter topical antifungal creams, sprays, or powders used for 2-4 weeks. If the infection is severe, spreads to the nails, or doesn't respond, a doctor will prescribe oral antifungal pills (terbinafine).",
      "homeCare": "Wash feet daily and dry them completely, especially between the toes. Wear clean, dry cotton socks. Alternate shoes daily. Do not scratch the peeling skin, as this spreads the fungus.",
      "prevention": "Keep feet dry. Wear breathable, well-ventilated shoes. Wear socks that wick moisture. Wear shower shoes in public facilities. Apply antifungal powder to feet and shoes daily.",
      "whenToSeeDoctor": "Consult a doctor if you have diabetes and develop athlete's foot (to prevent severe foot complications), or if the infection doesn't improve after 2 weeks of OTC treatment.",
      "emergencySigns": [
        "Signs of a spreading bacterial infection (cellulitis): rapid swelling, warmth, severe pain, red streaks spreading up the foot or leg, accompanied by high fever and chills."
      ],
      "relatedConditions": [
        "ringworm",
        "eczema"
      ]
    },
    "specialist": "Dermatologist",
    "recoveryTime": "2 to 4 weeks (Acute) or Chronic",
    "diagnosticTests": [
      "Visual Skin Examination",
      "Skin Scraping & KOH prep",
      "Skin Biopsy"
    ]
  },
  {
    "id": "kidney-infection",
    "title": "Kidney Infection",
    "category": "other",
    "keywords": [
      "kidney infection",
      "pyelonephritis",
      "flank pain",
      "back pain",
      "high fever",
      "shaking chills",
      "uti"
    ],
    "summary": "A severe, painful urinary tract infection that has traveled up to infect one or both kidneys, requiring urgent medical care.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate medical attention.** A kidney infection is a severe condition that requires prompt prescription antibiotics.",
      "Complete the entire 10-to-14-day course of prescribed oral antibiotics exactly as directed, even if you feel better within days.",
      "For severe infections (high fever, vomiting, inability to keep fluids down), undergo hospitalization for intravenous (IV) antibiotics and fluids.",
      "Drink generous amounts of water (8-10 glasses daily) to physically flush bacteria out of the kidneys and urinary tract.",
      "Use paracetamol or a warm heating pad on your side or back to manage severe flank pain; avoid NSAIDs if kidney function is compromised."
    ],
    "content": {
      "overview": "A kidney infection, medically known as pyelonephritis, is a type of urinary tract infection (UTI) that generally begins in your urethra or bladder and travels up one or both ureters to infect one or both of your kidneys. It is a serious condition requiring prompt, targeted medical treatment.",
      "symptoms": [
        "Fever, shaking chills, and sweating",
        "Pain in your back, side (flank pain), or groin, just under your ribs",
        "Frequent, painful, or burning urination (dysuria)",
        "Nausea and persistent vomiting",
        "Pus or blood in your urine (hematuria), or cloudy, foul-smelling urine",
        "Confusion or mental changes, especially in elderly adults"
      ],
      "causes": "Most kidney infections are caused by bacteria (most commonly E. coli) that enter the urinary tract through the urethra, multiply in the bladder, and ascend up the ureters into the kidneys. It can also occur if bacteria travel to the kidneys through the bloodstream from an infection elsewhere.",
      "riskFactors": [
        "Having a current untreated bladder infection (UTI)",
        "Female anatomy (shorter urethra makes it easier for bacteria to travel upward)",
        "Having a urinary tract blockage (kidney stones, enlarged prostate, or pregnancy)",
        "Having a weakened immune system, or using a urinary catheter"
      ],
      "complications": "If untreated, a kidney infection can cause serious complications: permanent kidney scarring (leading to chronic kidney disease), blood poisoning (sepsis), where bacteria spread through the bloodstream, and pregnancy complications.",
      "diagnosis": "A kidney infection is diagnosed using a urinalysis (checking for bacteria, white blood cells, and blood), a urine culture (to identify the bacteria and select the right antibiotic), and occasionally CT scans or kidney ultrasounds.",
      "treatment": "Antibiotics are the first line of treatment. A 10-14 day oral course is standard. If the infection is severe, is accompanied by persistent vomiting, or occurs in pregnant women, hospitalization for IV antibiotics and fluids is required.",
      "homeCare": "Take antibiotics exactly as prescribed. Drink plenty of water. Apply a warm heating pad to your back or side. Rest in bed until the fever resolves. Avoid strenuous activities.",
      "prevention": "Drink plenty of fluids, especially water. Urinate as soon as you feel the urge and wipe from front to back. Urinate after sexual intercourse. Treat bladder infections (UTIs) promptly to prevent them from ascending.",
      "whenToSeeDoctor": "See a doctor immediately if you experience signs of a UTI accompanied by back or side pain, a high fever, chills, or nausea and vomiting.",
      "emergencySigns": [
        "High fever accompanied by severe flank pain, shaking chills, and rapid heart rate",
        "Persistent vomiting making it impossible to keep oral fluids or antibiotics down",
        "Extreme confusion, lethargy, or loss of consciousness, especially in older adults"
      ],
      "relatedConditions": [
        "uti",
        "fever",
        "stomach-pain",
        "kidney-stones"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "1 to 3 weeks",
    "diagnosticTests": [
      "Complete Blood Count (CBC)",
      "Basic Metabolic Panel (BMP)",
      "Urinalysis"
    ]
  },
  {
    "id": "appendicitis",
    "title": "Appendicitis",
    "category": "digestive",
    "keywords": [
      "appendicitis",
      "appendix",
      "abdominal pain",
      "right lower quadrant",
      "nausea",
      "fever"
    ],
    "summary": "An inflammation of the appendix, a finger-shaped pouch that projects from your colon, representing a medical emergency.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate emergency medical attention** if you experience sudden, severe abdominal pain that migrates to the lower right side.",
      "Undergo surgical removal of the inflamed appendix (appendectomy), which is highly safe and curative.",
      "Receive intravenous (IV) or oral antibiotics under medical supervision to prevent or treat abdominal cavity infections.",
      "Get plenty of bed rest post-surgery, avoiding heavy lifting and strenuous activity for 2 to 4 weeks."
    ],
    "content": {
      "overview": "Appendicitis is an inflammation of the appendix, a narrow, finger-shaped pouch projecting from the right lower side of your large intestine (colon). It is a medical emergency that requires prompt surgical removal before the appendix ruptures and spreads infection throughout the abdomen.",
      "symptoms": [
        "Sudden pain that begins on the right side of the lower abdomen",
        "Sudden pain that begins around your navel and often shifts to your lower right abdomen",
        "Pain that worsens if you cough, walk, or make other jarring movements",
        "Nausea, persistent vomiting, loss of appetite, and a low-grade fever that may worsen",
        "Flatulence, constipation, or diarrhoea"
      ],
      "causes": "Appendicitis is typically caused by a blockage in the lining of the appendix that results in infection. Bacteria multiply rapidly, causing the appendix to become inflamed, swollen, and filled with pus.",
      "riskFactors": [
        "Age (most common in people between 10 and 30 years old)",
        "Having a family history of appendicitis",
        "Eating a low-fiber diet"
      ],
      "complications": "The most serious complication is a ruptured appendix, which spreads infection throughout the abdomen (peritonitis), a life-threatening condition requiring emergency surgery. It can also lead to a pocket of pus (abdominal abscess) that must be drained.",
      "diagnosis": "Appendicitis is diagnosed using a physical exam (checking for rebound tenderness), blood tests (high white blood cell count indicates infection), urine tests (to rule out UTI), and imaging scans (ultrasound or CT scan of the abdomen).",
      "treatment": "Treatment is almost always emergency surgical removal of the appendix (appendectomy), performed laparoscopically or through a small open incision. Antibiotics are administered before and after surgery to prevent infection.",
      "homeCare": "Keep the surgical incision clean and dry. Limit physical activity as advised by your surgeon. Manage pain using prescribed pain relievers. Eat a light, high-fiber diet to avoid constipation.",
      "prevention": "Appendicitis cannot be prevented, but it is less common in people who eat diets high in fiber, such as fresh fruits, vegetables, and whole grains.",
      "whenToSeeDoctor": "Seek immediate emergency care if you or your child develops severe, unexplained pain in the center or lower right side of the abdomen.",
      "emergencySigns": [
        "Severe abdominal pain that spreads across the entire abdomen",
        "High fever accompanied by severe, rigid abdominal tenderness and vomiting",
        "Feeling lightheaded, dizzy, or fainting due to intense abdominal pain"
      ],
      "relatedConditions": [
        "stomach-pain",
        "food-poisoning",
        "kidney-stones",
        "pancreatitis"
      ]
    },
    "specialist": "General Surgeon",
    "recoveryTime": "2 to 4 weeks (Post-Surgery)",
    "diagnosticTests": [
      "Abdominal CT Scan",
      "Abdominal Ultrasound",
      "Complete Blood Count (CBC)"
    ]
  },
  {
    "id": "lyme-disease",
    "title": "Lyme Disease",
    "category": "infectious",
    "keywords": [
      "lyme disease",
      "tick bite",
      "borrelia",
      "bullseye rash",
      "erythema migrans",
      "joint pain"
    ],
    "summary": "A tick-borne bacterial infection characterized by a classic 'bullseye' skin rash, fever, fatigue, and potential joint or nervous system complications.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a doctor immediately to obtain a prescription for oral antibiotics (such as doxycycline or amoxicillin).",
      "**Complete the full 14-to-21-day course of antibiotics** exactly as directed to ensure the bacteria are fully eradicated.",
      "Monitor closely for lingering symptoms (Post-Treatment Lyme Disease Syndrome) and manage them under medical guidance.",
      "Practice strict tick prevention (using insect repellent, wearing long pants, and performing thorough tick checks after outdoor activities)."
    ],
    "content": {
      "overview": "Lyme disease is an infectious disease caused by the bacterium Borrelia burgdorferi, transmitted to humans through the bite of infected blacklegged ticks (deer ticks). If caught early, it is highly curable with standard antibiotics, but if left untreated, it can spread to joints, the heart, and the nervous system.",
      "symptoms": [
        "A circular, expanding red skin rash, often resembling a bullseye (erythema migrans), appearing 3-30 days after a tick bite",
        "Fever, chills, fatigue, body aches, and a stiff neck",
        "Swollen lymph nodes and a severe headache",
        "Migrating joint pain and swelling (particularly in the knees), weeks or months later",
        "Neurological problems, such as facial palsy (droop on one or both sides of the face)"
      ],
      "causes": "Lyme disease is caused by Borrelia burgdorferi and Borrelia mayonii bacteria. It is transmitted when an infected blacklegged tick bites a human and remains attached for 36 to 48 hours or more.",
      "riskFactors": [
        "Spending time in wooded, grassy, or brushy areas in regions where Lyme disease is endemic (e.g., Northeast, Mid-Atlantic, and Upper Midwest US)",
        "Having exposed skin while outdoors in tick-infested areas",
        "Improperly removing ticks or failing to perform tick checks"
      ],
      "complications": "Untreated Lyme disease can cause chronic joint inflammation (Lyme arthritis), neurological symptoms (meningitis, temporary facial paralysis, numbness, cognitive decline), and heart rhythm irregularities (Lyme carditis).",
      "diagnosis": "Lyme disease is diagnosed based on symptoms, history of tick exposure, and confirmed via a two-step blood test (ELISA followed by a Western Blot test) to detect antibodies against the bacteria.",
      "treatment": "Early-stage Lyme disease is treated with a 2-to-3-week course of oral antibiotics. Late-stage or neurological Lyme disease may require intravenous (IV) antibiotics for 14 to 28 days.",
      "homeCare": "Take all antibiotics exactly as prescribed. Get plenty of rest. Use warm compresses to ease joint pain. Eat a balanced diet to support immune recovery.",
      "prevention": "Wear long-sleeved shirts and long pants tucked into socks when outdoors. Use EPA-registered insect repellents containing DEET or permethrin. Perform thorough tick checks on yourself, children, and pets after outdoor activities. Shower within two hours of coming indoors.",
      "whenToSeeDoctor": "Consult a doctor if you develop a circular, expanding rash, fever, or joint pain after spending time outdoors in wooded or grassy areas, or if you suspect a tick bite.",
      "emergencySigns": [
        "Severe shortness of breath, chest pain, or palpitations (indicating Lyme carditis)",
        "Severe headache accompanied by a stiff neck, high fever, and sensitivity to light (indicating meningitis)",
        "Sudden weakness or paralysis on one or both sides of the face"
      ],
      "relatedConditions": [
        "fever",
        "meningitis",
        "rheumatoid-arthritis"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks (Early)",
    "diagnosticTests": [
      "ELISA Blood Screen",
      "Western Blot Confirmation Test"
    ]
  },
  {
    "id": "psoriatic-arthritis",
    "title": "Psoriatic Arthritis",
    "category": "chronic",
    "keywords": [
      "psoriatic arthritis",
      "joint pain",
      "psoriasis",
      "inflammatory arthritis",
      "swollen fingers",
      "dactylitis"
    ],
    "summary": "A chronic, inflammatory form of arthritis that affects some people who have psoriasis, causing joint pain, stiffness, and swelling.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a rheumatologist early for an accurate diagnosis and customized management plan.",
      "Take prescribed disease-modifying antirheumatic drugs (DMARDs) or biologic therapies to slow disease progression and protect joints.",
      "Engage in regular, low-impact physical exercise (such as swimming or walking) to maintain joint flexibility and strength.",
      "Apply topical treatments or undergo light therapy under medical guidance to manage skin psoriasis flare-ups.",
      "Protect your joints during daily activities by using assistive devices and maintaining a healthy body weight."
    ],
    "content": {
      "overview": "Psoriatic arthritis is a chronic, autoimmune inflammatory condition that affects some people who have psoriasis\u2014a condition that causes red, scaly patches on the skin. It causes joint pain, stiffness, swelling, and can lead to progressive, permanent joint damage if not managed early.",
      "symptoms": [
        "Painful, swollen, and warm joints, often affecting the fingers, toes, wrists, or knees",
        "Generalized joint stiffness, particularly in the morning or after periods of inactivity",
        "Swollen fingers and toes that resemble sausages (dactylitis)",
        "Nail changes, such as pitting, crumbling, or separation from the nail bed",
        "Red, scaly skin patches (psoriasis) and fatigue"
      ],
      "causes": "Psoriatic arthritis occurs when your body's immune system begins to attack healthy cells and tissue, particularly the joints and skin. The exact cause is unknown, but it is believed to involve a combination of genetic and environmental factors.",
      "riskFactors": [
        "Having psoriasis (the single greatest risk factor; about 30% of people with psoriasis develop arthritis)",
        "Having a family history of psoriatic arthritis or psoriasis",
        "Age (most commonly develops in adults between 30 and 50 years old)"
      ],
      "complications": "A small percentage of patients develop arthritis mutilans\u2014a severe, painful, and disabling form of arthritis that destroys the small bones in the hands. It also increases the risk of cardiovascular disease, obesity, and depression.",
      "diagnosis": "Diagnosis is made by a rheumatologist based on clinical exams, joint X-rays or MRIs to check for joint damage, blood tests (to rule out rheumatoid arthritis), and skin exams to identify psoriasis.",
      "treatment": "Treatment aims to control inflammation, relieve pain, and prevent joint damage. Medications include NSAIDs, traditional DMARDs (like methotrexate), and advanced biologic therapies (TNF inhibitors). Corticosteroid injections can relieve acute joint swelling.",
      "homeCare": "Stay active to keep joints flexible. Maintain a healthy weight to reduce stress on your joints. Protect your joints by using your larger joints to lift objects. Apply cold packs for joint swelling and warm compresses for muscle stiffness.",
      "prevention": "Psoriatic arthritis cannot be prevented, but early detection and treatment of psoriasis and joint symptoms can help prevent severe joint damage and disability.",
      "whenToSeeDoctor": "Consult a doctor or rheumatologist if you have psoriasis and begin to experience joint pain, stiffness, or swelling, even if it is mild.",
      "emergencySigns": [
        "Sudden, severe, and disabling joint pain accompanied by a high fever and chills (suggests a joint infection, which is a medical emergency)",
        "Severe chest pain or difficulty breathing (increased risk of acute cardiovascular events)"
      ],
      "relatedConditions": [
        "psoriasis",
        "rheumatoid-arthritis",
        "osteoarthritis"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "fibromyalgia",
    "title": "Fibromyalgia",
    "category": "mental",
    "keywords": [
      "fibromyalgia",
      "chronic pain",
      "widespread pain",
      "fatigue",
      "brain fog",
      "sleep issues"
    ],
    "summary": "A chronic disorder characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive difficulties.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a healthcare professional to establish a multi-disciplinary management plan.",
      "Engage in regular, gentle aerobic physical exercise (like walking, cycling, or water aerobics) to reduce pain and fatigue over time.",
      "Establish a consistent sleep schedule and practice good sleep hygiene to improve rest quality.",
      "Learn and practice stress-reduction techniques, such as mindfulness, meditation, or cognitive behavioral therapy (CBT).",
      "Take prescribed medications (such as gabapentinoids, SNRIs, or low-dose tricyclic antidepressants) under medical guidance to regulate pain signals."
    ],
    "content": {
      "overview": "Fibromyalgia is a chronic disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory, and mood issues. Researchers believe that fibromyalgia amplifies painful sensations by affecting the way your brain and spinal cord process painful and non-painful signals.",
      "symptoms": [
        "Widespread pain throughout the body, described as a constant dull ache lasting at least three months",
        "Overwhelming fatigue and waking up tired, even after sleeping for long periods",
        "Cognitive difficulties (often called 'fibro fog'), impairing focus, attention, and mental concentration",
        "Sleep disorders, such as restless legs syndrome or sleep apnoea",
        "Headaches, depression, anxiety, and pain or cramping in the lower abdomen"
      ],
      "causes": "The exact cause of fibromyalgia is unknown, but it is believed to involve repeated nerve stimulation that causes the brain and spinal cord of people with fibromyalgia to change. This involves an abnormal increase in levels of certain chemicals in the brain that signal pain (neurotransmitters).",
      "riskFactors": [
        "Gender (fibromyalgia is much more commonly diagnosed in women than in men)",
        "Having a family history of fibromyalgia",
        "Having another chronic painful condition, such as osteoarthritis, rheumatoid arthritis, or lupus"
      ],
      "complications": "While fibromyalgia does not cause physical damage to joints or organs, the chronic pain and lack of sleep can interfere significantly with daily function and work, leading to high rates of depression, anxiety, and social isolation.",
      "diagnosis": "Diagnosis is based on a clinical evaluation of widespread pain lasting at least three months, with no other underlying medical condition that could explain the pain. Doctors may run blood tests to rule out other conditions.",
      "treatment": "Treatment focuses on managing symptoms and improving function. Medications include pain relievers, antidepressants (like duloxetine or amitriptyline), and anti-seizure drugs (like pregabalin). Physical therapy and counseling are highly beneficial.",
      "homeCare": "Maintain a regular sleep routine (avoid caffeine and screens before bed). Exercise regularly, starting slowly and gradually increasing intensity. Practice stress management. Eat a healthy, balanced diet.",
      "prevention": "There is no known way to prevent fibromyalgia, but managing stress, staying physically active, and maintaining healthy sleep habits can support nervous system health and lower the risk of chronic pain syndromes.",
      "whenToSeeDoctor": "Consult a doctor if you experience widespread, persistent muscle and joint pain accompanied by unexplained fatigue and sleep difficulties.",
      "emergencySigns": [
        "Severe, sudden depression accompanied by thoughts of self-harm or suicide",
        "Extreme, debilitating fatigue and pain accompanied by chest pressure or severe difficulty breathing"
      ],
      "relatedConditions": [
        "insomnia",
        "anxiety",
        "depression",
        "osteoarthritis"
      ]
    },
    "specialist": "Psychiatrist or Neurologist",
    "recoveryTime": "Ongoing / Long-term Management",
    "diagnosticTests": [
      "Clinical Psychological Assessment",
      "Neurological Exam",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "cataracts",
    "title": "Cataracts",
    "category": "other",
    "keywords": [
      "cataracts",
      "cloudy vision",
      "blurry vision",
      "eye lens",
      "cataract surgery",
      "night glare"
    ],
    "summary": "A progressive clouding of the eye's natural lens, leading to blurry, faded vision, glare sensitivity, and double vision.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Monitor visual changes closely and obtain regular comprehensive eye exams with an optometrist or ophthalmologist.",
      "Improve home and work lighting, and wear anti-glare sunglasses to manage early-stage symptoms.",
      "Undergo safe, highly effective outpatient cataract surgery to remove the cloudy lens and replace it with a clear artificial lens (IOL).",
      "Follow post-operative eye drop schedules and care instructions to ensure proper healing and prevent infection."
    ],
    "content": {
      "overview": "A cataract is a progressive clouding of the eye's natural, normally clear lens. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window, making it difficult to read, drive a car (especially at night), or see the expression on a friend's face.",
      "symptoms": [
        "Cloudy, blurry, or dim vision that gradually worsens",
        "Increasing difficulty with vision at night, and sensitivity to light and glare",
        "Need for brighter light for reading and other activities",
        "Seeing 'halos' around lights, and colors appearing faded or yellowed",
        "Double vision in a single eye, and frequent changes in eyeglass prescriptions"
      ],
      "causes": "Most cataracts develop slowly when aging or injury changes the tissue that makes up your eye's lens. Over time, the proteins and fibers within the lens begin to break down and clump together, clouding the lens and scattering light as it passes through.",
      "riskFactors": [
        "Increasing age (most common in people over 40; risk rises significantly after 60)",
        "Having diabetes, high blood pressure, or obesity",
        "Excessive exposure to sunlight (ultraviolet light) without eye protection",
        "Smoking, prolonged use of corticosteroid medications, and previous eye injury or surgery"
      ],
      "complications": "If left untreated, cataracts will slowly worsen, eventually leading to severe visual impairment or legal blindness. Advanced cataracts can become rigid and swollen, potentially triggering secondary glaucoma (increased eye pressure).",
      "diagnosis": "Cataracts are diagnosed through a comprehensive eye exam, including a visual acuity test, a slit-lamp examination (which allows the doctor to see the lens in detail), and a retinal exam.",
      "treatment": "In the early stages, vision can be improved with stronger eyeglasses or brighter lighting. Once cataracts interfere with daily activities, the only effective treatment is surgical removal, where the cloudy lens is replaced with a clear, synthetic intraocular lens (IOL).",
      "homeCare": "Ensure your home has bright, well-positioned lighting. Wear polarizing sunglasses with UV protection outdoors. Avoid driving at night if glare is bothersome. Get regular eye exams.",
      "prevention": "Cataracts cannot be completely prevented, but you can reduce your risk by wearing sunglasses that block UVB rays, quitting smoking, managing diabetes, and eating a diet rich in eye-healthy antioxidants (like leafy greens).",
      "whenToSeeDoctor": "Schedule an eye exam if you notice gradual changes in your vision, such as increased blurriness, glare sensitivity, or difficulty seeing at night.",
      "emergencySigns": [
        "Sudden, severe eye pain accompanied by redness, headache, or a sudden loss of vision (indicates a medical emergency like acute glaucoma)"
      ],
      "relatedConditions": [
        "obesity",
        "hypertension"
      ]
    },
    "specialist": "Ophthalmologist",
    "recoveryTime": "2 to 4 weeks (Post-Surgery)",
    "diagnosticTests": [
      "Visual Acuity Test",
      "Slit-Lamp Examination",
      "Applanation Tonometry"
    ]
  },
  {
    "id": "snake-bite",
    "title": "Snake Bite",
    "category": "other",
    "keywords": [
      "snake bite",
      "venomous snake",
      "viper",
      "cobra",
      "fang marks",
      "antivenom"
    ],
    "summary": "A puncture wound inflicted by a snake, which may be venomous and constitutes a medical emergency requiring rapid antivenom treatment.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate emergency medical care (call 911/112).** Venomous snake bites require rapid hospital evaluation and antivenom.",
      "Remain completely calm and still; **minimize physical movement** to slow the spread of venom through the lymphatic system.",
      "Remove all tight clothing, jewelry, or bands from the bitten limb, as rapid swelling is highly common.",
      "Keep the bitten area positioned **at or below the level of the heart**; do not apply tourniquets, ice, or cut the wound.",
      "Never attempt to suck out the venom by mouth or use suction devices, as this is ineffective and causes secondary tissue damage."
    ],
    "content": {
      "overview": "A snake bite is an injury caused by the bite of a snake, particularly a venomous one. While many snakes are non-venomous, certain species (like vipers, cobras, and elapids) inject toxic venom that can cause rapid tissue damage, bleeding disorders, paralysis, or systemic organ failure. All snake bites should be treated as emergencies.",
      "symptoms": [
        "Two puncture marks (fang marks) at the site of the wound",
        "Severe, burning pain and rapid swelling around the bite area",
        "Redness, bruising, and warmth spreading up the affected limb",
        "Nausea, vomiting, sweating, and extreme weakness",
        "Difficulty breathing, slurred speech, blurred vision, or numbness in the face and limbs"
      ],
      "causes": "Snake bites occur when a snake bites a human, typically as a defensive reaction when startled, stepped on, or provoked.",
      "riskFactors": [
        "Walking or working in tall grass, rocky areas, or thick underbrush in snake-populated regions",
        "Handling or attempting to capture or kill wild snakes",
        "Failing to wear protective footwear (boots) in wooded or rural areas"
      ],
      "complications": "Complications of venomous bites include severe tissue death (necrosis) requiring amputation, internal bleeding, acute kidney injury, respiratory paralysis, shock, and death.",
      "diagnosis": "Snake bites are diagnosed based on the presence of fang marks and clinical symptoms. Hospital staff monitor blood clotting metrics (coagulation panels) and systemic signs to determine if venom was injected and to select the correct antivenom.",
      "treatment": "The primary treatment is the administration of intravenous (IV) antivenom, which neutralizes the toxins. Supportive care includes IV fluids, tetanus immunization, wound care, and monitoring of vital signs and limb circumference.",
      "homeCare": "Snake bites cannot be treated at home. After hospital discharge, keep the wound clean, elevate the limb slightly to reduce residual swelling, monitor for signs of secondary infection, and attend all follow-up appointments.",
      "prevention": "Avoid tall grass and piles of wood or rocks where snakes hide. Wear thick leather boots and long pants when hiking. Never reach into areas where you cannot see. If you encounter a snake, back away slowly and do not disturb it.",
      "whenToSeeDoctor": "Seek immediate emergency medical attention for any snake bite, even if you believe the snake was non-venomous, as some vipers inject slow-acting venom.",
      "emergencySigns": [
        "Rapid swelling, bruising, or severe pain spreading up the bitten limb",
        "Difficulty breathing, swallowing, or paralysis of facial muscles",
        "Dizziness, fainting, rapid heart rate, or bleeding from the gums or nose"
      ],
      "relatedConditions": [
        "bee-wasp-sting",
        "dog-bite",
        "first-aid"
      ]
    },
    "specialist": "Emergency Physician or Toxicologist",
    "recoveryTime": "1 to 4 weeks",
    "diagnosticTests": [
      "Coagulation Panels (PT/INR/PTT)",
      "Complete Blood Count (CBC)",
      "Fibrinogen Levels"
    ]
  },
  {
    "id": "bee-wasp-sting",
    "title": "Bee & Wasp Stings",
    "category": "other",
    "keywords": [
      "bee sting",
      "wasp sting",
      "hornet",
      "stinger",
      "anaphylaxis",
      "allergic reaction",
      "swelling"
    ],
    "summary": "A puncture wound caused by a stinging insect, typically causing localized pain and swelling, but posing a risk of severe allergic reaction (anaphylaxis).",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Remove the stinger immediately** by scraping it off with a flat edge (like a credit card); do not squeeze it, to avoid releasing more venom.",
      "Wash the sting site thoroughly with soap and cool water to prevent secondary infection.",
      "Apply a cold pack or ice wrapped in a cloth for 10-15 minutes to reduce localized pain and swelling.",
      "Take oral antihistamines or apply hydrocortisone cream to alleviate intense itching and redness.",
      "Monitor closely for signs of a systemic allergic reaction; **inject epinephrine immediately** if anaphylaxis occurs."
    ],
    "content": {
      "overview": "Bee and wasp stings are common outdoor nuisances that cause temporary localized pain, redness, and swelling. However, for individuals who are allergic to insect venom, a single sting can trigger a life-threatening, systemic allergic reaction called anaphylaxis, which requires emergency medical intervention.",
      "symptoms": [
        "Instant, sharp, burning pain at the sting site",
        "A red welt with a small white spot in the center where the stinger punctured the skin",
        "Slight swelling and itching around the sting area",
        "For moderate reactions: extreme redness and swelling that gradually enlarges over 1-2 days",
        "For severe reactions (anaphylaxis): hives, breathing difficulty, throat swelling, and dizziness"
      ],
      "causes": "Stings occur when a bee, wasp, hornet, or yellowjacket punctures the skin with its stinger, injecting venom containing toxic proteins that trigger pain and immune responses.",
      "riskFactors": [
        "Spending time outdoors near flowering plants, nests, or trash bins",
        "Disturbing active hives or nests, or wearing bright clothing and sweet perfumes",
        "Having a known history of severe allergic reactions to insect stings"
      ],
      "complications": "The primary complication is anaphylaxis, a life-threatening allergic emergency. Multiple stings (e.g., from a swarm) can cause toxic venom accumulation, leading to kidney injury, muscle breakdown, or cardiac arrest.",
      "diagnosis": "Stings are diagnosed visually. If a severe allergy is suspected, an allergist can perform skin prick tests or blood tests (IgE antibody levels) to confirm sensitivity to specific insect venoms.",
      "treatment": "For mild stings, treatment is supportive (cleaning, ice, antihistamines). For severe allergic reactions, immediate intramuscular injection of epinephrine is required, followed by emergency hospital treatment with IV fluids, oxygen, and steroids.",
      "homeCare": "Clean the area daily. Avoid scratching the welt to prevent bacterial infection. Apply baking soda paste (baking soda and water) or calamine lotion to soothe skin irritation.",
      "prevention": "Avoid wearing bright floral patterns or sweet fragrances outdoors. Keep food and drinks covered when eating outside. Wear shoes outdoors. If a stinging insect is near, stay calm and walk away slowly; do not swat at it.",
      "whenToSeeDoctor": "Consult a doctor if localized swelling continues to enlarge after 2 days, or if signs of a secondary bacterial infection (pus, warmth, red streaks) develop.",
      "emergencySigns": [
        "Difficulty breathing, wheezing, or a feeling of throat tightness and choking",
        "Swelling of the tongue, lips, face, or difficulty swallowing",
        "Dizziness, fainting, a weak, rapid pulse, or a widespread itchy skin rash (hives)"
      ],
      "relatedConditions": [
        "anaphylaxis",
        "snake-bite",
        "first-aid"
      ]
    },
    "specialist": "Allergist or Primary Care",
    "recoveryTime": "2 to 5 days",
    "diagnosticTests": [
      "Clinical Evaluation",
      "Venom Skin Prick Test (for allergies)"
    ]
  },
  {
    "id": "dog-bite",
    "title": "Dog Bite",
    "category": "other",
    "keywords": [
      "dog bite",
      "animal bite",
      "rabies",
      "tetanus",
      "infection",
      "pasteurella",
      "wound care"
    ],
    "summary": "A wound caused by a dog's teeth, carrying a high risk of bacterial infection and potential transmission of rabies or tetanus.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Wash the wound immediately under running water** with soap for at least 10 to 15 minutes to flush out bacteria and viral particles.",
      "Apply gentle pressure with a clean cloth to control bleeding, then apply over-the-counter antibiotic ointment.",
      "Cover the wound with a sterile bandage and seek professional medical evaluation within 24 hours.",
      "Receive preventative prescription antibiotics (like amoxicillin-clavulanate) and a tetanus booster if it has been over 5 years since your last vaccine.",
      "Determine the dog's vaccination history; **undergo rabies post-exposure prophylaxis** immediately if rabies risk is present."
    ],
    "content": {
      "overview": "A dog bite is an injury caused by a dog's teeth puncturing or tearing the skin. While some bites are superficial, dog bites carry a high risk of infection due to the abundant bacteria in a dog's mouth (including Pasteurella, Streptococcus, and Capnocytophaga). Deep puncture wounds can damage nerves, muscles, and bones.",
      "symptoms": [
        "Puncture wounds, scratches, or jagged tears in the skin",
        "Bleeding, localized pain, swelling, and redness around the bite",
        "Within hours/days (if infected): warmth, throbbing pain, pus discharge, and red streaks spreading from the wound",
        "Systemic signs (if infection spreads): fever, chills, and body aches"
      ],
      "causes": "Dog bites occur due to territorial defense, fear, pain, play, or predatory behavior. Most bites are from familiar dogs.",
      "riskFactors": [
        "Interacting with unfamiliar, stray, or unattended dogs",
        "Approaching a dog that is eating, sleeping, or caring for puppies",
        "Attempting to break up a fight between dogs"
      ],
      "complications": "Complications include severe bacterial infections (cellulitis, sepsis), osteomyelitis (bone infection), nerve damage, permanent scarring, and fatal viral infections like rabies or tetanus.",
      "diagnosis": "Dog bites are diagnosed by physical examination. Doctors assess wound depth, check for tendon or nerve damage, obtain wound cultures if infected, and order X-rays if bone damage or foreign objects are suspected.",
      "treatment": "Treatment consists of thorough wound irrigation, debridement of dead tissue, and a course of preventative oral antibiotics. Tetanus and rabies immunizations are administered if indicated. Bites on the face may require careful suturing, but most bite wounds are left open to heal to reduce infection risk.",
      "homeCare": "Keep the wound clean and dry. Change bandages daily, applying antibiotic ointment. Monitor closely for signs of infection (redness, heat, pus). Elevate the injured limb above the heart to reduce swelling.",
      "prevention": "Never approach an unfamiliar dog. Do not disturb a dog that is sleeping, eating, or caring for puppies. Always ask an owner's permission before petting a dog. Avoid screaming or running away from a dog; stand still ('like a tree') if approached.",
      "whenToSeeDoctor": "Consult a doctor within 24 hours for any dog bite that breaks the skin, especially if the bite is on the hand, foot, or face, or if the dog's rabies vaccination status is unknown.",
      "emergencySigns": [
        "Severe, uncontrolled bleeding from the bite wound",
        "Redness, swelling, heat, throbbing pain, and red streaks spreading rapidly from the wound, accompanied by a high fever",
        "Loss of sensation or inability to move fingers, toes, or the affected limb"
      ],
      "relatedConditions": [
        "rabies",
        "snake-bite",
        "first-aid"
      ]
    },
    "specialist": "Primary Care or Wound Specialist",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Wound Culture",
      "Visual Damage Assessment"
    ]
  },
  {
    "id": "anaphylaxis",
    "title": "Anaphylaxis",
    "category": "other",
    "keywords": [
      "anaphylaxis",
      "severe allergy",
      "epinephrine",
      "epipen",
      "airway swelling",
      "hives",
      "shock"
    ],
    "summary": "A severe, life-threatening systemic allergic reaction that occurs rapidly and requires immediate treatment with epinephrine.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Administer an immediate injection of epinephrine** into the outer thigh (using an auto-injector like an EpiPen).",
      "**Call emergency services (911/112) immediately**; do not wait to see if symptoms improve.",
      "Have the person lay flat on their back with their legs elevated to support blood flow; if breathing is difficult, keep them seated.",
      "Administer a second dose of epinephrine after 5 to 15 minutes if emergency services have not arrived and symptoms persist.",
      "Undergo hospital emergency department observation for at least 4 to 6 hours to monitor for a secondary reaction (biphasic anaphylaxis)."
    ],
    "content": {
      "overview": "Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur within seconds or minutes of exposure to an allergen (such as peanuts, bee venom, latex, or certain medications). It causes the immune system to release a flood of chemicals that can cause the body to go into shock, airways to narrow, and blood pressure to drop rapidly.",
      "symptoms": [
        "Hives, itching, and flushed or pale skin",
        "Constriction of the airways, swelling of the tongue or throat, causing wheezing and difficulty breathing",
        "A weak and rapid pulse",
        "Nausea, vomiting, abdominal cramps, or diarrhoea",
        "Dizziness, lightheadedness, or loss of consciousness"
      ],
      "causes": "Anaphylaxis is caused by a hypersensitive immune response to an allergen. Common triggers include foods (peanuts, tree nuts, shellfish, milk, eggs), insect stings (bees, wasps), medications (penicillin, NSAIDs), and latex.",
      "riskFactors": [
        "Having a personal history of anaphylaxis",
        "Having asthma or other allergies",
        "Having certain chronic conditions, such as mastocytosis or heart disease"
      ],
      "complications": "Complications include respiratory arrest (breathing stops), cardiac arrest (heart stops), brain damage (due to lack of oxygen), and fatal anaphylactic shock.",
      "diagnosis": "Anaphylaxis is diagnosed clinically based on the rapid onset of characteristic symptoms following exposure to a potential allergen. After recovery, blood tests (measuring tryptase levels) and allergy testing can identify the trigger.",
      "treatment": "Epinephrine is the first-line and only effective treatment for anaphylaxis. Additional emergency treatments include oxygen, intravenous (IV) antihistamines and cortisone, and beta-agonists (like albuterol) to relieve breathing difficulties.",
      "homeCare": "Anaphylaxis cannot be managed at home. After emergency treatment, carry two epinephrine auto-injectors at all times. Educate family, friends, and coworkers on how to recognize symptoms and administer epinephrine.",
      "prevention": "Avoid known allergic triggers. Read food labels carefully. Inform all healthcare providers of drug allergies. Wear a medical alert bracelet indicating your severe allergies.",
      "whenToSeeDoctor": "See an allergist after experiencing an anaphylactic reaction to identify the exact cause and receive a comprehensive emergency action plan.",
      "emergencySigns": [
        "Swelling of the throat, tongue, or lips causing difficulty breathing or swallowing",
        "Wheezing, gasping for air, or a high-pitched breathing sound (stridor)",
        "Feeling dizzy, fainting, confusion, or bluish lips or skin"
      ],
      "relatedConditions": [
        "bee-wasp-sting",
        "food-allergies",
        "first-aid"
      ]
    },
    "specialist": "Allergist",
    "recoveryTime": "24 to 48 hours (Acute)",
    "diagnosticTests": [
      "Clinical Evaluation",
      "Serum Tryptase Blood Test"
    ]
  },
  {
    "id": "food-allergies",
    "title": "Food Allergies",
    "category": "chronic",
    "keywords": [
      "food allergy",
      "peanut allergy",
      "gluten",
      "allergen",
      "hives",
      "anaphylaxis"
    ],
    "summary": "An immune system reaction that occurs soon after eating a certain food, ranging from mild hives to life-threatening anaphylaxis.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "**Strictly identify and avoid the trigger food** by reading ingredient labels carefully and asking about ingredients when dining out.",
      "Carry a prescribed epinephrine auto-injector (EpiPen) at all times in case of accidental exposure.",
      "Learn to recognize the early symptoms of an allergic reaction, such as lip tingling, hives, or stomach cramps.",
      "Create a clear, written Allergy Action Plan and share it with school, work, and family members.",
      "Consult an allergist to discuss potential allergen immunotherapy (like oral immunotherapy for peanuts) if eligible."
    ],
    "content": {
      "overview": "A food allergy is an immune system reaction that occurs soon after eating a specific food. Even a tiny amount of the allergenic food can trigger signs and symptoms such as digestive problems, hives, or swollen airways. In some people, a food allergy can cause severe symptoms or even a life-threatening reaction (anaphylaxis).",
      "symptoms": [
        "Tingling or itching in the mouth",
        "Hives, itching, or eczema on the skin",
        "Swelling of the lips, face, tongue, and throat, or other parts of the body",
        "Wheezing, nasal congestion, or trouble breathing",
        "Abdominal pain, diarrhoea, nausea, or vomiting"
      ],
      "causes": "Food allergies are caused when your immune system mistakenly identifies a specific protein in a food as harmful. Antibodies called immunoglobulin E (IgE) trigger the release of chemicals like histamine, causing allergic symptoms. Eight foods cause 90% of reactions: milk, eggs, peanuts, tree nuts, wheat, soy, fish, and shellfish.",
      "riskFactors": [
        "Family history of food allergies, asthma, eczema, or hay fever",
        "Age (more common in toddlers and young children, though some outgrow them)",
        "Having eczema or asthma (increases the risk of severe reactions)"
      ],
      "complications": "The primary complication is anaphylaxis, a medical emergency. Food allergies also cause significant anxiety, dietary deficiencies (if major food groups are avoided without guidance), and social limitations.",
      "diagnosis": "Diagnosed by an allergist using skin prick tests, blood tests (measuring food-specific IgE antibodies), elimination diets, or a medically supervised oral food challenge.",
      "treatment": "There is no cure for food allergies. Treatment consists of strict avoidance. Mild reactions are managed with antihistamines. Severe reactions require immediate epinephrine injection and emergency medical care.",
      "homeCare": "Avoid cross-contamination when preparing food. Read food labels every time, as ingredients change. Inform restaurant staff of your allergy. Wear a medical alert bracelet.",
      "prevention": "Introduce common allergenic foods (like peanuts and eggs) to infants around 4 to 6 months of age, under medical guidance, as this has been shown to reduce the risk of developing food allergies.",
      "whenToSeeDoctor": "Consult a doctor or allergist if you experience symptoms of an allergic reaction shortly after eating.",
      "emergencySigns": [
        "Tightening of the throat, hoarseness, or difficulty breathing and swallowing",
        "Widespread hives accompanied by dizziness, lightheadedness, or fainting",
        "Bluish tint to the lips or face, indicating a severe lack of oxygen"
      ],
      "relatedConditions": [
        "anaphylaxis",
        "eczema",
        "asthma"
      ]
    },
    "specialist": "Primary Care Physician or Specialist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Routine Blood Panels",
      "Symptom Log tracking",
      "Organ Function Monitoring"
    ]
  },
  {
    "id": "heat-stroke",
    "title": "Heat Stroke",
    "category": "other",
    "keywords": [
      "heat stroke",
      "heat exhaustion",
      "hyperthermia",
      "high body temperature",
      "hot skin",
      "delirium"
    ],
    "summary": "A life-threatening heat-related emergency characterized by a body temperature above 40\u00b0C, altered mental state, and hot, dry, or flushed skin.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate emergency medical care (call 911/112).** Heat stroke is a fatal medical emergency.",
      "Move the person to a cool, shaded area or air-conditioned room immediately.",
      "**Cool the body rapidly** by spraying with cool water and fanning, wrapping in damp sheets, or placing ice packs on the neck, groin, and armpits.",
      "Do not give the person fluids to drink if they are confused, unconscious, or vomiting, to prevent choking.",
      "Monitor breathing and heart rate, and begin CPR immediately if the person stops breathing or loses their pulse."
    ],
    "content": {
      "overview": "Heat stroke is the most severe form of heat illness and is a life-threatening emergency. It occurs when the body's temperature-regulating system fails, causing the core body temperature to rise rapidly above 40\u00b0C (104\u00b0F). It causes central nervous system dysfunction, leading to confusion, delirium, or unconsciousness.",
      "symptoms": [
        "Core body temperature of 40\u00b0C (104\u00b0F) or higher",
        "Altered mental state: confusion, agitation, slurred speech, delirium, seizures, or coma",
        "Hot, dry skin, or heavy sweating (in exertional heat stroke)",
        "Nausea, vomiting, rapid breathing, and a racing heart rate",
        "Severe headache and throbbing pain"
      ],
      "causes": "Heat stroke is caused by prolonged exposure to high temperatures or intense physical exertion in hot weather, combined with dehydration and a failure of the body's cooling mechanisms (sweating).",
      "riskFactors": [
        "Age (infants and adults over 65 have less efficient temperature regulation)",
        "Exertion in hot weather (military training, outdoor sports, agricultural work)",
        "Lack of air conditioning, dehydration, and drinking alcohol",
        "Certain medications (diuretics, beta-blockers, antihistamines)"
      ],
      "complications": "If not cooled rapidly, heat stroke causes permanent brain damage, kidney failure, liver failure, muscle breakdown (rhabdomyolysis), cardiovascular collapse, and death.",
      "diagnosis": "Heat stroke is diagnosed based on clinical presentation: high core body temperature (measured rectally in emergencies), altered mental state, and history of heat exposure. Blood and urine tests check for organ damage.",
      "treatment": "Emergency treatment focuses on rapid cooling. Methods include cold-water immersion (ice bath), evaporative cooling (mist and fan), and cooling blankets. Intravenous (IV) fluids are administered to correct dehydration and protect kidneys.",
      "homeCare": "Heat stroke cannot be treated at home. After hospital recovery, avoid hot environments, drink abundant fluids, and rest for several weeks to allow organs to fully recover.",
      "prevention": "Wear loose, lightweight, light-colored clothing in hot weather. Drink plenty of fluids (water or sports drinks); do not wait until you are thirsty. Avoid strenuous activity during the hottest parts of the day. Never leave anyone, especially children or pets, in a parked car.",
      "whenToSeeDoctor": "Seek immediate emergency medical attention for anyone showing signs of heat-related illness accompanied by confusion, high fever, or vomiting.",
      "emergencySigns": [
        "High body temperature (above 40\u00b0C/104\u00b0F) accompanied by confusion, delirium, or loss of consciousness",
        "Hot, red, dry, or heavily sweating skin, rapid pulse, and shallow breathing",
        "Seizures, convulsions, or inability to respond to voice or touch"
      ],
      "relatedConditions": [
        "hypothermia",
        "fever",
        "first-aid"
      ]
    },
    "specialist": "Emergency Physician",
    "recoveryTime": "2 to 5 days (Acute recovery)",
    "diagnosticTests": [
      "Core Temperature Measurement",
      "Basic Metabolic Panel (BMP) for electrolytes"
    ]
  },
  {
    "id": "hypothermia",
    "title": "Hypothermia",
    "category": "other",
    "keywords": [
      "hypothermia",
      "frostbite",
      "cold exposure",
      "shivering",
      "low body temperature",
      "slurred speech"
    ],
    "summary": "A dangerous drop in body temperature below 35\u00b0C, caused by prolonged exposure to cold temperatures, leading to confusion, slurred speech, and lethargy.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek emergency medical care immediately.** Move the person out of the cold and wind to a warm, dry shelter.",
      "Gently remove all wet clothing, avoiding rough handling, as jarring movements can trigger dangerous heart rhythms.",
      "**Warm the core first:** wrap the person's chest, neck, and groin in warm, dry blankets or use skin-to-skin contact.",
      "Provide warm, sweet, non-caffeinated, and non-alcoholic drinks if the person is fully conscious and able to swallow.",
      "Do not apply direct heat (like hot water, heating pads, or heat lamps) directly to the limbs, as this causes tissue burns and shock."
    ],
    "content": {
      "overview": "Hypothermia is a medical emergency that occurs when your body loses heat faster than it can produce heat, causing a dangerously low body temperature. Normal body temperature is around 37\u00b0C (98.6\u00b0F). Hypothermia is defined as a core body temperature below 35\u00b0C (95\u00b0F). It impairs brain and heart function, leading to confusion and cardiac arrest.",
      "symptoms": [
        "Intense shivering, though this may stop as hypothermia worsens",
        "Slurred speech, mumbling, and slow, shallow breathing",
        "Weak pulse, clumsiness, lack of coordination, and extreme drowsiness",
        "Confusion, memory loss, and poor decision-making (such as shedding clothes due to false warmth)",
        "In infants: bright red, cold skin, and very low energy"
      ],
      "causes": "Hypothermia is caused by prolonged exposure to cold environments (air or water), made worse by wind, wet clothing, physical exhaustion, or inadequate shelter and clothing.",
      "riskFactors": [
        "Age (infants and elderly adults lose heat quickly and have weaker regulatory systems)",
        "Alcohol or drug use (dilates blood vessels, causing rapid heat loss, and impairs judgment)",
        "Mental illness or cognitive decline (prevents proper dress or seeking shelter)",
        "Accidental immersion in cold water (water conducts heat away from the body 25 times faster than air)"
      ],
      "complications": "Complications include frostbite (tissue freezing and death, potentially requiring amputation), chilblains, gangrene, severe heart rhythm disturbances (arrhythmias), coma, and death.",
      "diagnosis": "Hypothermia is diagnosed by measuring core body temperature using a specialized low-reading thermometer (rectally or via esophageal probe). Blood tests, ECGs, and chest X-rays monitor organ function and cardiac rhythm.",
      "treatment": "Hospital treatment focuses on active rewarming: warm humidified oxygen, intravenous (IV) warmed fluids, and active internal rewarming methods (warmed fluid irrigation of the bladder or chest cavity, or bypass machine rewarming).",
      "homeCare": "Once body temperature is restored, rest in a warm environment. Stay well-hydrated. Keep skin protected from cold. Monitor for lingering neurological or circulatory problems.",
      "prevention": "Dress in layers (wool, silk, or synthetic inner layers; wind- and water-proof outer layers). Wear a hat, scarf, and mittens. Stay dry; remove wet clothing immediately. Avoid sweating during cold outdoor activities, as moisture cools the body.",
      "whenToSeeDoctor": "Consult a doctor if you or someone else shows signs of hypothermia or frostbite after exposure to cold.",
      "emergencySigns": [
        "Core body temperature below 35\u00b0C (95\u00b0F) accompanied by confusion, slurred speech, or loss of consciousness",
        "Slow, shallow breathing, extremely weak pulse, and lack of coordination",
        "No signs of breathing or pulse (begin CPR immediately; keep warming the person during CPR)"
      ],
      "relatedConditions": [
        "heat-stroke",
        "first-aid"
      ]
    },
    "specialist": "Emergency Physician",
    "recoveryTime": "2 to 5 days (Acute recovery)",
    "diagnosticTests": [
      "Core Temperature Measurement",
      "Electrocardiogram (ECG)"
    ]
  },
  {
    "id": "carbon-monoxide-poisoning",
    "title": "Carbon Monoxide Poisoning",
    "category": "other",
    "keywords": [
      "carbon monoxide",
      "co poisoning",
      "silent killer",
      "gas leak",
      "headache",
      "dizziness",
      "oxygen therapy"
    ],
    "summary": "A toxic accumulation of carbon monoxide in the bloodstream, caused by inhaling odorless, colorless gas, leading to headache, dizziness, and unconsciousness.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Get into fresh air immediately** if you suspect carbon monoxide exposure or if a CO alarm sounds.",
      "**Call emergency services (911/112) or go to an emergency room** immediately.",
      "Receive high-flow, 100% oxygen therapy through a tight-fitting mask in a hospital setting.",
      "For severe cases (unconsciousness, pregnancy, or high CO levels), undergo **hyperbaric oxygen therapy** in a pressurized chamber.",
      "Strictly identify and repair the faulty combustion source (furnace, heater, car engine) before returning to the building."
    ],
    "content": {
      "overview": "Carbon monoxide (CO) is an odorless, colorless, and tasteless gas produced by burning gasoline, wood, propane, charcoal, or other fuel. Carbon monoxide poisoning occurs when carbon monoxide builds up in your bloodstream. When too much CO is in the air, your body replaces the oxygen in your red blood cells with CO, leading to serious tissue damage or death.",
      "symptoms": [
        "Dull, throbbing headache (the most common early symptom)",
        "Dizziness, weakness, and lightheadedness",
        "Nausea, vomiting, and abdominal discomfort",
        "Shortness of breath, chest pain, and blurred vision",
        "Confusion, disorientation, and loss of consciousness (often leading to death during sleep)"
      ],
      "causes": "Carbon monoxide poisoning is caused by inhaling CO gas produced by poorly ventilated combustion appliances, including fuel-burning furnaces, gas water heaters, wood-burning stoves, generators, space heaters, and running car engines in enclosed spaces.",
      "riskFactors": [
        "Using unvented gas or kerosene heaters, or charcoal grills indoors",
        "Running a car or generator in a garage, even with the door open",
        "Sleeping in a room with a faulty or unvented combustion appliance",
        "Being an unborn baby, infant, or elderly adult (more susceptible to oxygen deprivation)"
      ],
      "complications": "Complications include permanent brain damage (causing memory issues, personality changes, or Parkinsonism), heart damage, miscarriage, and death.",
      "diagnosis": "CO poisoning is diagnosed by measuring carboxyhemoglobin levels in a blood sample. Pulse oximetry is not reliable, as standard oximeters cannot distinguish between oxygen and carbon monoxide bound to hemoglobin.",
      "treatment": "Treatment consists of breathing pure, 100% oxygen to accelerate the clearance of carbon monoxide from hemoglobin. Severe cases are treated with hyperbaric oxygen therapy, which forces oxygen into tissues under high pressure, protecting the brain and heart.",
      "homeCare": "CO poisoning cannot be treated at home. After hospital discharge, rest and monitor for delayed neurological symptoms (which can appear weeks later). Install carbon monoxide detectors on every level of your home.",
      "prevention": "Install carbon monoxide alarms near sleeping areas. Have fuel-burning appliances inspected annually by a professional. Never run a generator, grill, or camp stove indoors. Do not leave a car running in a garage. Vent combustion appliances properly.",
      "whenToSeeDoctor": "Seek immediate emergency medical care if you experience headaches, dizziness, or nausea when indoors, especially if others in the same building share symptoms or if symptoms improve when you go outside.",
      "emergencySigns": [
        "Unconsciousness, confusion, or severe disorientation after being indoors near fuel-burning appliances",
        "Chest pain, rapid heart rate, or severe difficulty breathing",
        "Seizures or convulsions"
      ],
      "relatedConditions": [
        "headache",
        "first-aid"
      ]
    },
    "specialist": "Hyperbaric Medicine Specialist",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Carboxyhemoglobin Blood Test",
      "Electrocardiogram (ECG)"
    ]
  },
  {
    "id": "concussion",
    "title": "Concussion",
    "category": "other",
    "keywords": [
      "concussion",
      "traumatic brain injury",
      "tbi",
      "head injury",
      "dizziness",
      "confusion",
      "memory loss"
    ],
    "summary": "A mild traumatic brain injury caused by a blow to the head or violent shaking, leading to temporary confusion, headache, dizziness, and memory disruption.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Obtain a medical evaluation** immediately to rule out serious brain bleeds or skull fractures.",
      "**Rest physically and mentally:** avoid strenuous physical activity, contact sports, and limit cognitive strain (screens, reading, intense focus).",
      "Gradually return to light physical and cognitive activities only after symptoms begin to resolve and under medical guidance.",
      "Avoid alcohol, sleeping pills, and aspirin (which can increase bleeding risks) during the acute recovery phase.",
      "Follow a structured 'Return to Play' and 'Return to Learn' protocol, stepping back if symptoms recur."
    ],
    "content": {
      "overview": "A concussion is a mild traumatic brain injury (TBI) that affects your brain function. Effects are usually temporary but can include headaches and problems with concentration, memory, balance, and coordination. It is typically caused by a blow to the head, but can also occur due to violent shaking of the head and upper body.",
      "symptoms": [
        "Headache or a feeling of pressure in the head",
        "Temporary loss of consciousness (though this occurs in less than 10% of cases)",
        "Confusion, feeling 'in a fog', and slurred speech",
        "Dizziness, balance problems, nausea, and vomiting",
        "Sensitivity to light and noise, sleep disturbances, and irritability"
      ],
      "causes": "Concussions are caused by a sudden impact, blow, or jolt to the head, or by an acceleration-deceleration force that causes the brain to slide back and forth violently against the inner walls of the skull (such as in car accidents or falls).",
      "riskFactors": [
        "Participating in high-impact or contact sports (football, rugby, soccer, hockey)",
        "Being involved in a motor vehicle collision, or being a victim of physical abuse",
        "Being a toddler or elderly adult (increased risk of falls)"
      ],
      "complications": "Complications include Post-Concussion Syndrome (symptoms lasting months or years), Second Impact Syndrome (a rare, fatal swelling of the brain if a second concussion occurs before the first heals), and cumulative brain damage from repeated concussions.",
      "diagnosis": "Concussions are diagnosed via neurological exams (checking balance, reflexes, coordination, memory, and concentration). Head CT scans or MRIs are ordered if there are red flags indicating a brain bleed or fracture, though concussions themselves do not show up on standard imaging.",
      "treatment": "The primary treatment is physical and cognitive rest. Over-the-counter pain relievers (like paracetamol) can manage headaches. A gradual, step-by-step return to activity is monitored by a healthcare professional.",
      "homeCare": "Get plenty of sleep. Avoid screens (phones, computers, TV) and video games for the first 24-48 hours. Stay hydrated. Do not return to sports or physical exertion until cleared by a doctor.",
      "prevention": "Wear protective gear (helmets) during sports and bicycling. Wear seat belts in vehicles. Child-proof your home to prevent falls. Install grab bars and remove tripping hazards for elderly adults.",
      "whenToSeeDoctor": "See a doctor within 1 to 2 days of any significant head injury, even if emergency care is not required.",
      "emergencySigns": [
        "Repeated vomiting or a headache that worsens and does not go away",
        "Loss of consciousness lasting more than 30 seconds, or inability to wake up",
        "Slurred speech, weakness or numbness in limbs, or unequal pupil sizes (one pupil larger than the other)"
      ],
      "relatedConditions": [
        "headache",
        "first-aid"
      ]
    },
    "specialist": "Neurologist or Sports Medicine Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Standardized Assessment of Concussion (SAC)",
      "Neurological Exam"
    ]
  },
  {
    "id": "sepsis",
    "title": "Sepsis",
    "category": "other",
    "keywords": [
      "sepsis",
      "septicaemia",
      "blood poisoning",
      "extreme infection",
      "septic shock",
      "organ failure"
    ],
    "summary": "A life-threatening medical emergency caused by the body's extreme, systemic response to an infection, leading to rapid organ damage and shock.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate emergency medical care (call 911/112).** Sepsis is a critical, time-sensitive emergency.",
      "Receive rapid, broad-spectrum **intravenous (IV) antibiotics** in a hospital setting within the first hour of recognition.",
      "Undergo aggressive **IV fluid resuscitation** to maintain blood pressure and protect vital organs from hypoperfusion.",
      "Take vasopressor medications if blood pressure remains dangerously low despite fluid resuscitation (septic shock).",
      "Identify and surgically or medically control the source of the infection (e.g., draining abscesses, treating UTIs or pneumonia)."
    ],
    "content": {
      "overview": "Sepsis is a life-threatening medical emergency caused by your body's extreme and dysregulated response to an infection. It occurs when an existing infection (in the lungs, urinary tract, skin, or gut) triggers a chain reaction throughout the body. Without rapid treatment, it leads to tissue damage, multi-organ failure, septic shock, and death.",
      "symptoms": [
        "High fever and shaking chills, or a abnormally low body temperature (hypothermia)",
        "Extreme pain, discomfort, or feeling 'the worst you have ever felt'",
        "Confusion, disorientation, extreme sleepiness, or difficulty waking up",
        "Shortness of breath, rapid breathing, and a high heart rate (above 90 bpm)",
        "Pale, clammy, sweaty, or mottled skin, and very low urine output"
      ],
      "causes": "Sepsis is caused by the body's immune system releasing chemicals into the bloodstream to fight an infection, which instead triggers widespread inflammation. The most common underlying infections are pneumonia, UTIs, abdominal infections, and skin wounds.",
      "riskFactors": [
        "Being an infant, elderly adult (over 65), or pregnant woman",
        "Having a compromised immune system (due to HIV, chemotherapy, or diabetes)",
        "Having chronic medical conditions, or being hospitalized with invasive devices (catheters, IV lines)"
      ],
      "complications": "Complications include septic shock (a critical drop in blood pressure), disseminated intravascular coagulation (DIC - blood clots block blood flow, causing gangrene), acute respiratory distress syndrome (ARDS), kidney failure, and death.",
      "diagnosis": "Sepsis is diagnosed urgently using blood cultures (to identify the pathogen), lactate tests (high lactate indicates tissue oxygen deprivation), complete blood counts, kidney and liver function tests, and imaging to locate the infection source.",
      "treatment": "Treatment must start immediately, typically in an intensive care unit (ICU). It includes IV antibiotics, abundant IV fluids, oxygen support, and vasopressor drugs. Surgery may be needed to remove infected tissue or drain abscesses.",
      "homeCare": "Sepsis cannot be managed at home. After discharge, recover gradually, eat a balanced diet, attend physical therapy if needed, and monitor closely for signs of recurring infection or Post-Sepsis Syndrome.",
      "prevention": "Prevent infections by washing hands regularly, practicing good wound care, getting vaccinated (flu, pneumonia, meningitis), and seeking prompt treatment for minor infections before they worsen.",
      "whenToSeeDoctor": "Seek immediate emergency medical care if you suspect sepsis, especially if you have a current infection that is not improving and is accompanied by confusion, rapid breathing, or extreme weakness.",
      "emergencySigns": [
        "Extreme confusion, slurred speech, or inability to stay awake",
        "Rapid breathing (above 22 breaths per minute) and a weak, rapid heart rate",
        "Very low blood pressure, pale or mottled skin, and no urination for a day"
      ],
      "relatedConditions": [
        "pneumonia",
        "uti",
        "kidney-infection",
        "fever"
      ]
    },
    "specialist": "Critical Care Specialist",
    "recoveryTime": "Weeks to Months (Recovery)",
    "diagnosticTests": [
      "Blood Cultures",
      "Serum Lactate Level",
      "Complete Blood Count (CBC)"
    ]
  },
  {
    "id": "tetanus",
    "title": "Tetanus",
    "category": "infectious",
    "keywords": [
      "tetanus",
      "lockjaw",
      "clostridium tetani",
      "muscle spasms",
      "rust nail",
      "wound infection"
    ],
    "summary": "A serious bacterial infection characterized by painful muscle stiffness and spasms, particularly in the jaw (lockjaw), preventable via vaccination.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Seek immediate emergency hospital care.** Tetanus is a life-threatening infection requiring critical care.",
      "Receive **tetanus immune globulin (TIG)** intravenously or intramuscularly to neutralize circulating toxins.",
      "Undergo thorough surgical cleaning and removal of dead tissue from the wound (debridement) to stop bacterial growth.",
      "Take prescribed intravenous antibiotics (like metronidazole) and muscle relaxants (like diazepam) to control spasms.",
      "Complete a primary tetanus vaccination series or receive a booster, as having tetanus does not grant natural immunity."
    ],
    "content": {
      "overview": "Tetanus, commonly known as lockjaw, is a serious bacterial infection caused by Clostridium tetani. The bacteria produce a potent toxin that affects the nervous system, leading to painful muscle contractions, particularly of the jaw and neck muscles. It can interfere with breathing and is highly dangerous, though easily preventable through vaccination.",
      "symptoms": [
        "Painful spasms and stiffness in the jaw muscles (lockjaw)",
        "Stiffness of the neck, abdominal, and back muscles, causing a backward arching of the spine (opisthotonos)",
        "Difficulty swallowing and painful, rigid muscle spasms triggered by light, noise, or touch",
        "High blood pressure, rapid heart rate, fever, and heavy sweating"
      ],
      "causes": "Tetanus is caused by Clostridium tetani spores, which are found in soil, dust, and animal feces. The spores enter the body through breaks in the skin (deep puncture wounds, cuts, burns, or animal bites) and multiply in low-oxygen environments, releasing a neurotoxin.",
      "riskFactors": [
        "Failing to get vaccinated against tetanus, or failing to receive a booster shot every 10 years",
        "Sustaining a deep puncture wound (e.g., stepping on a rusty nail) or contaminated cut outdoors",
        "Injuries involving soil, manure, or agricultural environments"
      ],
      "complications": "Complications include fractures (spasms can break bones), vocal cord spasms (laryngospasm) causing suffocation, blood clots in the lungs (pulmonary embolism), pneumonia, and death.",
      "diagnosis": "Tetanus is diagnosed clinically based on history of a wound and characteristic muscle stiffness and spasms. Lab tests are rarely helpful, as the bacteria are difficult to isolate from the wound.",
      "treatment": "Treatment requires hospitalization, often in the ICU. It consists of tetanus immune globulin (TIG), aggressive wound cleaning, IV antibiotics, muscle relaxants, and sedatives. Severe cases require mechanical ventilation and tracheostomy.",
      "homeCare": "Tetanus cannot be treated at home. After discharge, participate in physical therapy to rebuild muscle strength and coordination. Keep a record of your vaccinations.",
      "prevention": "Get vaccinated. The DTaP vaccine is given to children, followed by a Tdap booster for adolescents and adults. A Td booster is required every 10 years. Clean all wounds thoroughly and seek medical care for deep or dirty wounds.",
      "whenToSeeDoctor": "Consult a doctor immediately if you sustain a deep puncture wound, a dirty cut, or an animal bite, especially if you have not had a tetanus vaccine in the last 5 years.",
      "emergencySigns": [
        "Stiffness or painful spasms in your jaw, neck, or abdominal muscles",
        "Difficulty swallowing, breathing, or gasping for air",
        "Severe, painful muscle spasms throughout the body triggered by minor stimuli"
      ],
      "relatedConditions": [
        "dog-bite",
        "first-aid"
      ]
    },
    "specialist": "Critical Care Specialist",
    "recoveryTime": "1 to 2 months",
    "diagnosticTests": [
      "Clinical Evaluation (Spatula Test)"
    ]
  },
  {
    "id": "rabies",
    "title": "Rabies",
    "category": "infectious",
    "keywords": [
      "rabies",
      "hydrophobia",
      "rabid animal",
      "animal bite",
      "lyssavirus",
      "post-exposure prophylaxis",
      "pep"
    ],
    "summary": "A fatal viral disease of the central nervous system, transmitted through the saliva of infected animals, preventable if treated immediately after exposure.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Wash the animal bite wound immediately** with soap and running water for at least 15 minutes to physically remove viral particles.",
      "**Seek emergency medical care immediately.** Rabies is 100% fatal once symptoms appear; prompt treatment is life-saving.",
      "Receive **Rabies Immune Globulin (HRIG)** injected around the bite wound to provide immediate, local antibodies.",
      "Complete the full **4-dose rabies vaccine series** (given on days 0, 3, 7, and 14) to stimulate active immunity.",
      "Strictly avoid contact with wild or stray animals showing unusual behavior (such as lack of fear, drooling, or aggression)."
    ],
    "content": {
      "overview": "Rabies is a fatal viral zoonotic disease caused by the rabies virus (a Lyssavirus). It is transmitted to humans through the saliva of infected animals, typically via bites, scratches, or licks on broken skin. The virus travels along nerves to the brain, causing acute encephalitis. Once symptoms appear, rabies is virtually 100% fatal, making immediate post-exposure prophylaxis (PEP) critical.",
      "symptoms": [
        "Initial symptoms: fever, headache, general weakness, and pain or tingling at the site of the bite",
        "As it progresses to the brain: anxiety, confusion, agitation, and hyperactivity",
        "Fear of water (hydrophobia) due to painful throat spasms when attempting to swallow",
        "Excessive salivation (foaming at the mouth), hallucinations, insomnia, and paralysis",
        "Coma and death within days of neurological symptom onset"
      ],
      "causes": "Rabies is caused by the rabies virus, transmitted via the saliva of an infected mammal (such as bats, raccoons, skunks, foxes, and stray dogs) entering the body through a bite, scratch, or open wound.",
      "riskFactors": [
        "Living in or traveling to areas where rabies is common (e.g., parts of Asia and Africa with stray dog rabies)",
        "Handling or exploring caves with bats, or interacting with wild or stray mammals",
        "Failing to seek medical care immediately after an animal bite"
      ],
      "complications": "The primary complication is progressive brain inflammation, leading to coma, respiratory failure, and death.",
      "diagnosis": "In humans, rabies is diagnosed prior to death using saliva tests, skin biopsies from the neck, and cerebrospinal fluid (CSF) analysis. In animals, it is diagnosed by examining brain tissue after euthanasia.",
      "treatment": "There is no effective treatment for rabies once symptoms develop. Prevention via Post-Exposure Prophylaxis (PEP) is the only cure: it consists of immediate wound cleansing, one dose of rabies immune globulin (HRIG), and a series of four rabies vaccine injections.",
      "homeCare": "Rabies cannot be treated at home. After receiving PEP, keep the bite wound clean, monitor for secondary bacterial infections, and complete the vaccine schedule precisely.",
      "prevention": "Vaccinate your pets against rabies. Do not approach, touch, or feed wild or stray animals. Keep trash bins secured. Seal openings in your home to prevent bats from entering. Get pre-exposure rabies vaccines if you work with wildlife or travel to high-risk areas.",
      "whenToSeeDoctor": "Seek immediate emergency medical care for any bite, scratch, or contact with a wild or stray animal, especially if it was a bat, raccoon, or dog in a rabies-endemic region.",
      "emergencySigns": [
        "Any bite or scratch from a bat, or a wild animal that behaved aggressively or unnaturally",
        "Experiencing fever, headache, or tingling at the site of a previous animal bite",
        "Anxiety, confusion, difficulty swallowing, or fear of drinking water"
      ],
      "relatedConditions": [
        "dog-bite",
        "first-aid"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "Post-Exposure Prophylaxis (Immediate)",
    "diagnosticTests": [
      "Direct Fluorescent Antibody (DFA) Test",
      "Skin Biopsy (Neck)"
    ]
  },
  {
    "id": "cholera",
    "title": "Cholera",
    "category": "infectious",
    "keywords": [
      "cholera",
      "vibrio cholerae",
      "watery diarrhoea",
      "rice water stool",
      "dehydration",
      "contaminated water"
    ],
    "summary": "An acute bacterial diarrheal infection caused by ingestion of contaminated water or food, leading to rapid, severe dehydration.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "**Begin aggressive rehydration immediately** using Oral Rehydration Salts (ORS) dissolved in clean water.",
      "Seek urgent medical evaluation; severe cases require **intravenous (IV) fluids** to prevent fatal circulatory collapse.",
      "Take prescribed oral antibiotics (like doxycycline or azithromycin) to reduce fluid loss and shorten the illness duration.",
      "Maintain a soft, easily digestible diet once vomiting stops, and continue breastfeeding infants.",
      "Ensure all drinking water is boiled, chemically treated, or bottled, to prevent reinfection."
    ],
    "content": {
      "overview": "Cholera is an acute diarrheal infection caused by ingestion of food or water contaminated with the bacterium Vibrio cholerae. It causes rapid, massive loss of fluids and electrolytes, which can lead to severe dehydration and death within hours if left untreated. It is highly common in areas with poor sanitation and lack of clean water.",
      "symptoms": [
        "Sudden, massive watery diarrhoea, often described as 'rice-water stools' (looks cloudy and white)",
        "Frequent vomiting, which can worsen fluid loss",
        "Rapid heart rate, loss of skin elasticity (skin tenting), and dry mouth",
        "Muscle cramps caused by rapid loss of salts (sodium, potassium, chloride)",
        "Extreme thirst, low blood pressure, and listlessness or lethargy"
      ],
      "causes": "Cholera is caused by Vibrio cholerae bacteria. The bacteria release a toxin in the small intestine that causes the body to secrete massive amounts of water and electrolytes, leading to watery diarrhoea. It spreads through water or food contaminated with the feces of an infected person.",
      "riskFactors": [
        "Living in or traveling to areas with poor sanitation and lack of clean drinking water",
        "Eating raw or undercooked shellfish harvested from contaminated waters",
        "Having low stomach acid (which reduces the body's natural defense against the bacteria)"
      ],
      "complications": "The primary complication is severe hypovolemic shock (due to low blood volume) leading to rapid death. Other complications include severe electrolyte imbalances (hypokalemia), kidney failure, and coma.",
      "diagnosis": "Cholera is diagnosed by isolating Vibrio cholerae from a stool sample or rectal swab, or rapidly confirmed using rapid diagnostic test (RDT) dipsticks in outbreak settings.",
      "treatment": "Rehydration is the cornerstone of treatment. Up to 80% of cases can be treated successfully with Oral Rehydration Salts (ORS). Severe dehydration requires rapid intravenous (IV) fluids (Ringer's lactate). Antibiotics and zinc supplements (for children) are also administered.",
      "homeCare": "Prepare ORS using boiled or treated water. Drink small sips continuously. Eat soft, plain foods once vomiting stops. Wash hands thoroughly with soap after using the toilet and before preparing food.",
      "prevention": "Drink only safe water (boiled, chlorinated, or bottled). Wash hands frequently with soap. Eat food that is completely cooked and served hot. Avoid raw fruits and vegetables unless you peel them yourself. Get the oral cholera vaccine if traveling to active outbreak areas.",
      "whenToSeeDoctor": "Consult a doctor immediately if you develop severe, watery diarrhoea and vomiting, especially after traveling to an area experiencing a cholera outbreak.",
      "emergencySigns": [
        "Massive, continuous watery diarrhoea accompanied by rapid heart rate and low blood pressure",
        "Extreme lethargy, confusion, sunken eyes, dry tongue, or inability to urinate",
        "Severe, painful muscle cramps throughout the body"
      ],
      "relatedConditions": [
        "diarrhoea",
        "food-poisoning",
        "fever"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Stool Culture",
      "Rapid Cholera Dipstick Test"
    ]
  },
  {
    "id": "typhoid-fever",
    "title": "Typhoid Fever",
    "category": "infectious",
    "keywords": [
      "typhoid",
      "salmonella typhi",
      "sustained fever",
      "rose spots",
      "constipation",
      "contaminated food"
    ],
    "summary": "A systemic bacterial infection caused by Salmonella Typhi, characterized by sustained high fever, abdominal pain, rose spots, and headache.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Obtain a prescription for **targeted antibiotics** (such as ciprofloxacin, ceftriaxone, or azithromycin) from a doctor.",
      "**Complete the entire course of antibiotics** exactly as directed to prevent relapse or becoming a chronic carrier.",
      "Stay well-hydrated by drinking clean, boiled, or bottled water and oral rehydration solutions.",
      "Practice strict hand hygiene and avoid preparing food for others while actively sick to prevent spreading the bacteria.",
      "Attend follow-up stool tests to confirm the bacteria have been fully cleared from your system."
    ],
    "content": {
      "overview": "Typhoid fever is a systemic, life-threatening infection caused by the bacterium Salmonella enterica serovar Typhi. It is transmitted through the ingestion of food or water contaminated with the feces of infected individuals or chronic carriers. It causes a sustained, step-wise fever, severe abdominal pain, and can lead to intestinal perforation.",
      "symptoms": [
        "A sustained, high fever that increases stepwise, reaching 39\u00b0C to 40\u00b0C (103\u00b0F to 104\u00b0F)",
        "Severe, constant headache, generalized weakness, and fatigue",
        "Abdominal pain, bloating, and either constipation (common in adults) or diarrhoea (common in children)",
        "A faint, pink rash consisting of small spots (rose spots), typically on the chest or abdomen",
        "Dry cough, loss of appetite, and weight loss"
      ],
      "causes": "Typhoid fever is caused by Salmonella Typhi bacteria. It spreads through the fecal-oral route, typically via sewage-contaminated water or food prepared by an infected person or an asymptomatic chronic carrier (who harbors the bacteria in their gallbladder).",
      "riskFactors": [
        "Traveling to or working in developing nations where typhoid is common (e.g., South Asia, parts of Africa, and Latin America)",
        "Having close contact with someone who has typhoid fever or is a chronic carrier",
        "Drinking contaminated water or eating food washed with contaminated water"
      ],
      "complications": "The most serious complications are intestinal bleeding or perforation (tearing of the bowel wall), which causes severe abdominal infection (peritonitis) and sepsis, a life-threatening emergency. Other complications include myocarditis and pneumonia.",
      "diagnosis": "Typhoid fever is diagnosed by blood cultures, bone marrow cultures (the most sensitive test), or stool and urine cultures to isolate Salmonella Typhi. Widal tests are sometimes used but are less reliable.",
      "treatment": "Antibiotics are the only effective treatment. A 7-to-14-day course of oral or IV antibiotics is standard. Surgery is required immediately if intestinal perforation occurs.",
      "homeCare": "Take all prescribed antibiotics. Drink safe, boiled, or bottled water. Eat small, frequent, soft meals that are easy to digest. Wash hands thoroughly with soap. Do not prepare food for others.",
      "prevention": "Get vaccinated against typhoid before traveling to high-risk areas (injectable vaccine or oral capsules). Practice safe eating habits: 'Boil it, cook it, peel it, or forget it.' Drink only safe water. Wash hands frequently.",
      "whenToSeeDoctor": "Consult a doctor if you develop a high, persistent fever accompanied by headache and abdominal pain, especially if you have recently traveled to a developing country.",
      "emergencySigns": [
        "Sudden, severe abdominal pain, swelling, and rigidity accompanied by vomiting (indicates intestinal perforation)",
        "Passing blood or dark, tarry stools",
        "High fever accompanied by extreme confusion, delirium, or inability to stay awake"
      ],
      "relatedConditions": [
        "fever",
        "diarrhoea",
        "food-poisoning"
      ]
    },
    "specialist": "Infectious Disease Specialist",
    "recoveryTime": "2 to 4 weeks",
    "diagnosticTests": [
      "Blood Culture",
      "Bone Marrow Culture",
      "Stool/Urine Culture"
    ]
  },
  {
    "id": "hepatitis-a",
    "title": "Hepatitis A",
    "category": "infectious",
    "keywords": [
      "hepatitis a",
      "hav",
      "jaundice",
      "yellow eyes",
      "liver infection",
      "dark urine",
      "fecal oral"
    ],
    "summary": "A highly contagious, short-term viral liver infection transmitted via the fecal-oral route, causing fatigue, nausea, and jaundice.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Manage symptoms supportively at home, as Hepatitis A is an acute infection that **resolves on its own** within 1 to 2 months.",
      "**Get abundant rest** and limit physical exertion to help your liver recover.",
      "Avoid alcohol, and **consult a doctor before taking any medications** (including paracetamol), as your liver's ability to process drugs is compromised.",
      "Maintain hydration and eat small, frequent, low-fat meals to combat nausea and vomiting.",
      "Wash hands thoroughly with soap and water after using the toilet to avoid spreading the virus to others."
    ],
    "content": {
      "overview": "Hepatitis A is a highly contagious, short-term liver infection caused by the Hepatitis A virus (HAV). Unlike Hepatitis B and C, Hepatitis A does not cause chronic liver disease and is rarely fatal, though it can cause debilitating symptoms. It spreads primarily when an uninfected person ingests food or water contaminated with the feces of an infected person.",
      "symptoms": [
        "Sudden onset of extreme fatigue, malaise, and loss of appetite",
        "Nausea, vomiting, and abdominal pain or discomfort, especially on the upper right side under the ribs (liver area)",
        "Jaundice (yellowing of the skin and the whites of the eyes)",
        "Dark, tea-colored urine and clay-colored or pale stools",
        "Joint pain and a low-grade fever"
      ],
      "causes": "Hepatitis A is caused by the Hepatitis A virus. It is transmitted via the fecal-oral route, typically by eating food prepared by an infected person who did not wash their hands, drinking contaminated water, or having close personal contact with an infected individual.",
      "riskFactors": [
        "Traveling to or working in regions with poor sanitation and lack of clean water",
        "Living with an infected person, or attending childcare centers during outbreaks",
        "Being a man who has sex with men, or using recreational drugs"
      ],
      "complications": "Complications are rare, but in older adults or individuals with pre-existing liver disease, Hepatitis A can cause acute liver failure, a life-threatening emergency requiring a liver transplant.",
      "diagnosis": "Hepatitis A is diagnosed using blood tests to detect HAV-specific IgM antibodies, which indicate an active, acute infection.",
      "treatment": "There is no specific treatment for Hepatitis A. Care is supportive and focused on rest, managing nausea, ensuring adequate fluid intake, and avoiding liver irritants like alcohol and certain drugs.",
      "homeCare": "Get plenty of bed rest. Eat small, simple, low-fat meals to minimize nausea. Drink plenty of water. Avoid alcohol completely. Practice strict hand hygiene.",
      "prevention": "The Hepatitis A vaccine is highly effective and recommended for all children and high-risk travelers. Practice good hand hygiene, and avoid eating raw or undercooked shellfish or unwashed fruits and vegetables in areas with poor sanitation.",
      "whenToSeeDoctor": "Consult a doctor if you develop symptoms of hepatitis, especially jaundice, dark urine, or severe fatigue, or if you have been exposed to someone with Hepatitis A.",
      "emergencySigns": [
        "Sudden, severe vomiting making it impossible to keep fluids down",
        "Extreme confusion, disorientation, personality changes, or severe sleepiness (indicating acute liver failure)",
        "Severe bleeding from the gums, nose, or easy bruising"
      ],
      "relatedConditions": [
        "fever",
        "hepatitis-b",
        "hepatitis-c"
      ]
    },
    "specialist": "Gastroenterologist",
    "recoveryTime": "1 to 2 months",
    "diagnosticTests": [
      "Anti-HAV IgM Blood Test",
      "Liver Function Tests (ALT/AST)"
    ]
  },
  {
    "id": "hepatitis-b",
    "title": "Hepatitis B",
    "category": "chronic",
    "keywords": [
      "hepatitis b",
      "hbv",
      "liver disease",
      "cirrhosis",
      "jaundice",
      "bloodborne virus",
      "antivirals"
    ],
    "summary": "A viral liver infection transmitted through blood or bodily fluids, which can cause acute illness or develop into a chronic, life-threatening liver disease.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a hepatologist or gastroenterologist for regular monitoring of liver health and viral load.",
      "Take prescribed daily oral antiviral medications (such as tenofovir or entecavir) to suppress the virus and protect the liver.",
      "Avoid alcohol and liver-toxic substances completely to prevent accelerating liver damage.",
      "Screen close household and sexual contacts for Hepatitis B, and ensure they receive the vaccine series if negative.",
      "Undergo regular abdominal ultrasounds and blood tests to monitor for liver cirrhosis and screen for liver cancer."
    ],
    "content": {
      "overview": "Hepatitis B is a serious liver infection caused by the Hepatitis B virus (HBV). It can be acute (short-term) or become chronic (long-term, lasting more than six months). Chronic Hepatitis B increases the risk of developing liver failure, liver cirrhosis (scarring), and liver cancer, though it is highly manageable with modern antiviral therapies.",
      "symptoms": [
        "Many people, especially children, show no symptoms",
        "Abdominal pain, dark urine, and pale stools",
        "Fever, joint pain, loss of appetite, nausea, and vomiting",
        "Extreme fatigue, weakness, and jaundice (yellowing of skin and eyes)"
      ],
      "causes": "Hepatitis B is caused by the Hepatitis B virus. It is highly contagious and transmits through contact with infectious blood, semen, or other body fluids, commonly via sexual contact, sharing needles, accidental needle sticks, or from mother to baby during childbirth.",
      "riskFactors": [
        "Having unprotected sex with multiple partners or an infected partner",
        "Sharing needles, syringes, or personal items (razors, toothbrushes) contaminated with blood",
        "Being a healthcare worker exposed to blood, or undergoing hemodialysis"
      ],
      "complications": "Complications of chronic Hepatitis B include liver cirrhosis (extensive scarring that impairs function), liver failure, liver cancer (hepatocellular carcinoma), and kidney disease.",
      "diagnosis": "Hepatitis B is diagnosed using blood tests: Hepatitis B surface antigen (HBsAg) indicates active infection, while antibodies (anti-HBs) indicate immunity. Liver function tests, viral load (HBV DNA), and transient elastography (FibroScan) assess liver health.",
      "treatment": "Acute cases require only supportive care. Chronic cases require long-term treatment with daily oral antiviral medications (like tenofovir or entecavir) to suppress viral replication, or interferon injections. Liver transplantation is required for liver failure.",
      "homeCare": "Eat a healthy, balanced diet. Avoid alcohol completely. Do not take any new medications, supplements, or herbal remedies without consulting your liver specialist.",
      "prevention": "The Hepatitis B vaccine is extremely safe and highly effective, providing lifelong protection. Use barrier methods (condoms) during sexual activity. Never share needles or personal grooming items. Ensure sterile equipment is used for tattoos or piercings.",
      "whenToSeeDoctor": "Consult a doctor if you experience symptoms of hepatitis, or if you believe you have been exposed to the virus, as post-exposure treatment (HBIG and vaccine) within 24 hours can prevent infection.",
      "emergencySigns": [
        "Extreme confusion, sleepiness, slurred speech, or personality changes (hepatic encephalopathy)",
        "Vomiting blood or passing black, tarry stools (indicating bleeding esophageal varices)",
        "Rapid swelling of the abdomen (ascites) accompanied by high fever"
      ],
      "relatedConditions": [
        "hepatitis-a",
        "hepatitis-c",
        "obesity"
      ]
    },
    "specialist": "Hepatologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "HBsAg Blood Test",
      "HBV DNA Viral Load",
      "Transient Elastography (FibroScan)"
    ]
  },
  {
    "id": "hepatitis-c",
    "title": "Hepatitis C",
    "category": "chronic",
    "keywords": [
      "hepatitis c",
      "hcv",
      "direct acting antivirals",
      "silent epidemic",
      "cirrhosis",
      "liver transplant"
    ],
    "summary": "A bloodborne viral liver infection that often becomes chronic, leading to liver scarring (cirrhosis), now highly curable with oral antiviral medications.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a liver specialist to determine your Hepatitis C genotype and assess liver scarring.",
      "Take a **8-to-12-week course of daily oral Direct-Acting Antiviral (DAA) pills** (such as sofosbuvir-velpatasvir) exactly as prescribed.",
      "Undergo blood testing 12 weeks after completing treatment to confirm a **Sustained Virologic Response (SVR)**, indicating a complete cure.",
      "Avoid alcohol completely and maintain a healthy weight to allow the liver to heal from chronic inflammation.",
      "Undergo ongoing screening for liver cancer if you had advanced liver scarring (cirrhosis) prior to being cured."
    ],
    "content": {
      "overview": "Hepatitis C is an infection of the liver caused by the bloodborne Hepatitis C virus (HCV). It is often called a 'silent epidemic' because many infected individuals show no symptoms for decades until significant liver damage occurs. Unlike other forms, chronic Hepatitis C is now highly curable in over 95% of cases using modern, well-tolerated oral antiviral pills.",
      "symptoms": [
        "Most people with chronic Hepatitis C have no symptoms for years",
        "Fatigue, muscle aches, joint pain, and poor appetite",
        "Jaundice, dark urine, and pale stools (typically only during acute phase or advanced liver failure)",
        "Easy bleeding, bruising, itchy skin, and swelling in the legs (edema)"
      ],
      "causes": "Hepatitis C is caused by the Hepatitis C virus. It is transmitted primarily through direct contact with infected blood, most commonly via sharing contaminated needles or drug preparation equipment, unsafe medical injections, or transfusion of unscreened blood.",
      "riskFactors": [
        "Having injected or inhaled illicit drugs, even once in the past",
        "Receiving a blood transfusion or organ transplant before 1992 (when reliable screening began)",
        "Being born between 1945 and 1965 (baby boomers have higher prevalence)",
        "Healthcare workers exposed to needle sticks, or individuals receiving tattoos with non-sterile equipment"
      ],
      "complications": "Complications of untreated chronic Hepatitis C include liver cirrhosis, liver failure, liver cancer, and systemic conditions like cryoglobulinemia and glomerulonephritis.",
      "diagnosis": "Diagnosis is a two-step process: a blood test for HCV antibodies (indicates exposure), followed by an HCV RNA PCR test (confirms active infection). Liver scarring is assessed using transient elastography (FibroScan) or blood panels.",
      "treatment": "Treatment consists of oral Direct-Acting Antivirals (DAAs) taken daily for 8 to 12 weeks. These drugs have minimal side effects and cure the infection by blocking viral replication. Liver transplant is required for end-stage liver failure.",
      "homeCare": "Take your antiviral medication every day without missing doses. Avoid alcohol completely. Maintain a healthy, low-fat diet. Do not share razors, toothbrushes, or nail clippers.",
      "prevention": "There is no vaccine for Hepatitis C. Prevention relies on avoiding exposure to infected blood: never share needles or syringes, ensure tattoo and piercing shops use sterile single-use needles, and practice safe sex.",
      "whenToSeeDoctor": "Get screened for Hepatitis C if you belong to a high-risk group (such as having ever injected drugs or being born between 1945 and 1965).",
      "emergencySigns": [
        "Confusion, severe drowsiness, disorientation, or combativeness (hepatic encephalopathy)",
        "Vomiting blood, or passing dark, black, foul-smelling stools",
        "Severe abdominal swelling (ascites) accompanied by pain and fever"
      ],
      "relatedConditions": [
        "hepatitis-b",
        "obesity",
        "hypertension"
      ]
    },
    "specialist": "Hepatologist",
    "recoveryTime": "8 to 12 weeks (Antiviral course)",
    "diagnosticTests": [
      "HCV Antibody Test",
      "HCV RNA PCR Test",
      "Transient Elastography (FibroScan)"
    ]
  },
  {
    "id": "tonsillitis",
    "title": "Tonsillitis",
    "category": "infectious",
    "keywords": [
      "tonsillitis",
      "tonsils",
      "sore throat",
      "swallowing pain",
      "white patches",
      "tonsillectomy"
    ],
    "summary": "An inflammation of the tonsils, typically caused by a viral or bacterial infection, leading to sore throat, swollen glands, and difficulty swallowing.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Consult a doctor to undergo a rapid strep test to determine if the tonsillitis is bacterial or viral.",
      "For bacterial tonsillitis, **complete the entire course of prescribed antibiotics** exactly as directed.",
      "Rest your voice and body, and drink warm or cool liquids to soothe throat irritation.",
      "Gargle with warm salt water several times a day to reduce tonsil swelling and pain.",
      "For chronic, recurrent tonsillitis (frequent infections interfering with breathing or sleep), undergo surgical tonsillectomy."
    ],
    "content": {
      "overview": "Tonsillitis is inflammation of the tonsils\u2014the two oval-shaped pads of tissue at the back of the throat. It is highly common in children and is most often caused by a viral infection, though bacterial infections (such as strep throat) are also frequent causes. It causes painful sore throat, swelling, and difficulty swallowing.",
      "symptoms": [
        "Red, swollen tonsils, often with white or yellow patches or streaks of pus",
        "Sore throat, pain or difficulty when swallowing",
        "Fever, chills, headache, and body aches",
        "Enlarged, tender lymph nodes (glands) in the neck",
        "A scratchy, muffled, or throbbing voice, and bad breath (halitosis)"
      ],
      "causes": "Tonsillitis is caused by common viruses (like cold viruses, influenza, or Epstein-Barr virus) or bacterial infections (most commonly Group A Streptococcus). The tonsils are the immune system's first line of defense against pathogens entering the mouth, making them vulnerable to infection.",
      "riskFactors": [
        "Young age (most common in children aged 5 to 15)",
        "Frequent exposure to germs in school or daycare environments",
        "Having a weakened immune system"
      ],
      "complications": "Complications, primarily associated with bacterial tonsillitis, include accumulation of pus around the tonsils (peritonsillar abscess or 'quinsy'), middle ear infections, difficulty breathing during sleep (obstructive sleep apnoea), and rheumatic fever.",
      "diagnosis": "Tonsillitis is diagnosed by examining the throat, neck, and ears. A rapid throat swab is performed to rule out strep throat. A complete blood count may be ordered if mononucleosis is suspected.",
      "treatment": "Viral tonsillitis is treated supportively (rest, fluids, pain relievers). Bacterial tonsillitis requires a 10-day course of oral antibiotics (penicillin or amoxicillin). Surgical removal of the tonsils (tonsillectomy) is recommended for recurrent infections.",
      "homeCare": "Drink plenty of warm liquids (teas, broths) or very cold liquids (ice water, popsicles) to numb the throat. Gargle with warm salt water (1/2 tsp salt in 1 cup warm water). Use a cool-mist humidifier. Rest your voice.",
      "prevention": "Wash hands frequently. Avoid sharing food, cups, or utensils with someone who is sick. Replace your toothbrush after recovering from tonsillitis to prevent reinfection.",
      "whenToSeeDoctor": "Consult a doctor if you or your child experiences a severe sore throat accompanied by fever, difficulty swallowing, or swollen neck glands, or if symptoms do not improve after 3 days.",
      "emergencySigns": [
        "Difficulty breathing, gasping, or noisy breathing (stridor) due to swollen tonsils",
        "Inability to swallow even saliva, causing drooling (indicating a peritonsillar abscess)",
        "Inability to open the mouth fully (trismus) accompanied by severe one-sided throat pain"
      ],
      "relatedConditions": [
        "strep-throat",
        "common-cold",
        "fever"
      ]
    },
    "specialist": "Otolaryngologist (ENT)",
    "recoveryTime": "1 to 2 weeks",
    "diagnosticTests": [
      "Rapid Throat Swab",
      "Visual Examination of Tonsils"
    ]
  },
  {
    "id": "sinusitis",
    "title": "Sinusitis",
    "category": "other",
    "keywords": [
      "sinusitis",
      "sinus infection",
      "facial pressure",
      "nasal congestion",
      "postnasal drip",
      "maxillary sinus"
    ],
    "summary": "An inflammation or infection of the tissue lining the sinuses, causing facial pain, pressure, nasal congestion, and thick discharge.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Use saline nasal sprays or a nasal irrigation pot (Neti pot) with sterile water to flush out mucus and allergens.",
      "Apply warm, damp compresses to your forehead, nose, and cheeks to relieve facial pressure and pain.",
      "Stay well-hydrated and inhale steam from a hot shower or humidifier to thin sinus secretions.",
      "Take over-the-counter nasal decongestants (limit use to 3-5 days to avoid rebound congestion) or pain relievers.",
      "Consult a doctor for prescription nasal steroid sprays or oral antibiotics if symptoms are severe or last over 10 days."
    ],
    "content": {
      "overview": "Sinusitis, commonly known as a sinus infection, is an inflammation of the tissue lining the sinuses\u2014hollow, air-filled cavities in the bones of the face around the nose. When these cavities become blocked and filled with fluid, bacteria, viruses, or fungi can grow, causing infection. It can be acute (short-term) or chronic (lasting over 12 weeks).",
      "symptoms": [
        "Pain, tenderness, swelling, and pressure around your eyes, cheeks, nose, or forehead",
        "Thick, discolored (yellow or green) nasal discharge or postnasal drip draining down the throat",
        "Nasal congestion, making it difficult to breathe through your nose",
        "Reduced sense of smell and taste, headache, and toothache (especially in the upper jaw)",
        "Cough, sore throat, fatigue, and bad breath"
      ],
      "causes": "Most cases of acute sinusitis are caused by viral infections (like the common cold). Bacterial sinusitis occurs when bacteria multiply in blocked sinuses. Chronic sinusitis can be caused by nasal polyps, a deviated septum, allergies, or respiratory tract infections.",
      "riskFactors": [
        "Having a cold, allergic rhinitis (hay fever), or asthma",
        "Nasal passage abnormalities (deviated nasal septum, nasal polyps)",
        "Exposure to pollutants, tobacco smoke, or flying/swimming (causes pressure changes)"
      ],
      "complications": "Complications are rare but serious: spread of infection to the eye socket (orbital cellulitis, risking blindness), meningitis (spread to brain membranes), and blood clots in sinus veins.",
      "diagnosis": "Sinusitis is diagnosed based on symptoms and nasal examination. Chronic cases may require nasal endoscopy (looking inside with a scope), CT scans of the sinuses, or allergy testing.",
      "treatment": "Viral sinusitis resolves on its own and requires supportive care. Bacterial sinusitis is treated with oral antibiotics. Nasal corticosteroid sprays reduce inflammation. Chronic cases may require nasal steroid rinses, allergy shots, or endoscopic sinus surgery.",
      "homeCare": "Drink plenty of water. Inhale steam. Apply a warm washcloth to your face. Sleep with your head elevated to promote sinus drainage. Wash your nasal passages daily with sterile saline.",
      "prevention": "Avoid upper respiratory infections (wash hands, avoid sick contacts). Manage allergies under medical guidance. Avoid cigarette smoke and dry air (use a humidifier).",
      "whenToSeeDoctor": "See a doctor if symptoms last more than 10 days without improvement, worsen after starting to get better, or are accompanied by a high fever.",
      "emergencySigns": [
        "Swelling, redness, or pain around one or both eyes, or changes in vision (double vision)",
        "Severe, unrelenting headache and stiff neck, accompanied by high fever",
        "Confusion, disorientation, or swelling of the forehead"
      ],
      "relatedConditions": [
        "common-cold",
        "headache",
        "asthma"
      ]
    },
    "specialist": "Otolaryngologist (ENT)",
    "recoveryTime": "1 to 3 weeks (Acute)",
    "diagnosticTests": [
      "Nasal Endoscopy",
      "CT Scan of Sinuses"
    ]
  },
  {
    "id": "acute-bronchitis",
    "title": "Acute Bronchitis",
    "category": "infectious",
    "keywords": [
      "bronchitis",
      "chest cold",
      "cough",
      "phlegm",
      "bronchial tubes",
      "wheezing"
    ],
    "summary": "A temporary inflammation of the airways (bronchial tubes) in the lungs, usually caused by a viral infection, leading to a persistent cough and phlegm.",
    "cureStatus": "Curable",
    "stepsToCure": [
      "Allow the inflammation to resolve naturally, as acute bronchitis is **typically viral** and antibiotics are ineffective.",
      "Get plenty of rest and stay well-hydrated by drinking water, warm teas, and broths to loosen bronchial mucus.",
      "Use a clean cool-mist humidifier or inhale steam in a hot shower to ease chest tightness and coughing.",
      "Take over-the-counter cough suppressants (at night to aid sleep) or expectorants (during the day to clear phlegm).",
      "Avoid all exposure to tobacco smoke, air pollution, and chemical fumes, which irritate the bronchial lining."
    ],
    "content": {
      "overview": "Acute bronchitis, often called a 'chest cold', is a temporary inflammation of the lining of your bronchial tubes\u2014the large airways that carry air to and from your lungs. It causes a persistent cough that often produces mucus. It typically develops after a cold or flu and resolves within 2 to 3 weeks.",
      "symptoms": [
        "A persistent cough, which may produce clear, white, yellowish-gray, or green mucus (phlegm)",
        "Fatigue, shortness of breath, and mild chest discomfort or tightness",
        "Slight fever, shaking chills, and body aches",
        "Wheezing or a whistling sound when breathing"
      ],
      "causes": "Acute bronchitis is caused by the same viruses that cause colds and flu (rhinoviruses, influenza). The virus infects the lining of the bronchial tubes, causing them to swell and produce excess mucus. Bacterial bronchitis is rare, occurring in less than 10% of cases.",
      "riskFactors": [
        "Cigarette smoke (active smoking or exposure to secondhand smoke)",
        "Weakened immune system or chronic conditions like asthma or COPD",
        "Occupational exposure to lung irritants (dust, grains, chemical fumes)"
      ],
      "complications": "The most common complication is pneumonia, which occurs when the infection spreads deeper into the lung tissues. Chronic bronchitis is a distinct, long-term condition representing a form of COPD.",
      "diagnosis": "Bronchitis is diagnosed based on clinical symptoms and listening to your lungs with a stethoscope. A chest X-ray may be ordered to rule out pneumonia if you have a high fever, rapid heart rate, or crackling sounds in your lungs.",
      "treatment": "Since most cases are viral, treatment focuses on symptom relief. Pain relievers, cough medicines, and bronchodilator inhalers (like albuterol, to open airways if wheezing is present) are used. Antibiotics are not prescribed unless a bacterial infection is confirmed.",
      "homeCare": "Get plenty of rest. Drink warm fluids. Use a humidifier. Avoid smoke and cold air (wear a mask or scarf outdoors). Sucking on cough drops or honey (for children over 1 year) can soothe throat tickles.",
      "prevention": "Wash hands frequently. Get an annual flu shot. Avoid smoking and secondary smoke. Wear a mask when exposed to dust or chemical fumes.",
      "whenToSeeDoctor": "Consult a doctor if your cough lasts more than 3 weeks, prevents you from sleeping, is accompanied by a fever over 38\u00b0C (100.4\u00b0F), or if you cough up blood.",
      "emergencySigns": [
        "Severe difficulty breathing, gasping for air, or persistent wheezing",
        "Coughing up blood or rust-colored phlegm",
        "Chest pain that worsens when breathing deeply or coughing"
      ],
      "relatedConditions": [
        "common-cold",
        "influenza",
        "pneumonia",
        "asthma"
      ]
    },
    "specialist": "Primary Care Physician",
    "recoveryTime": "2 to 3 weeks",
    "diagnosticTests": [
      "Auscultation (Stethoscope)",
      "Chest X-ray (to rule out pneumonia)"
    ]
  },
  {
    "id": "parkinsons-disease",
    "title": "Parkinson's Disease",
    "category": "chronic",
    "keywords": [
      "parkinson",
      "tremor",
      "rigidity",
      "bradykinesia",
      "dopamine",
      "shuffling gait",
      "substantia nigra"
    ],
    "summary": "A progressive chronic nervous system disorder that affects movement, characterized by tremors, stiffness, and slow movement.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a neurologist specializing in movement disorders for a comprehensive treatment plan.",
      "Take prescribed dopaminergic medications (such as levodopa-carbidopa or dopamine agonists) strictly on schedule to manage symptoms.",
      "Participate in physical and occupational therapy to maintain mobility, balance, and independence in daily tasks.",
      "Engage in regular, structured exercise (such as balance training, cycling, or boxing) to support neuroplasticity and motor function.",
      "Consider advanced therapies, such as Deep Brain Stimulation (DBS) surgery, if medications become less effective or cause side effects."
    ],
    "content": {
      "overview": "Parkinson's disease is a progressive, chronic neurodegenerative disorder that primarily affects movement. It develops gradually, often starting with a barely noticeable tremor in just one hand. The disease is characterized by the loss of dopamine-producing brain cells in a region called the substantia nigra, leading to motor and non-motor symptoms.",
      "symptoms": [
        "Tremor: a rhythmic shaking, typically starting in a hand or fingers at rest (pill-rolling tremor)",
        "Slowed movement (bradykinesia): making simple tasks difficult and time-consuming; shuffling steps",
        "Rigid muscles: stiffness in limbs or trunk, limiting range of motion and causing pain",
        "Impaired posture and balance: leading to falls; loss of automatic movements (blinking, swinging arms)",
        "Non-motor symptoms: soft speech, micrographia (small handwriting), depression, sleep disorders, and cognitive decline"
      ],
      "causes": "Parkinson's disease is caused by the degeneration of dopamine-producing neurons in the substantia nigra of the brain. Without dopamine, the brain cannot properly coordinate muscle movement. The exact trigger involves genetic mutations, environmental toxins (pesticides), and the accumulation of abnormal proteins (Lewy bodies).",
      "riskFactors": [
        "Age (typically begins in middle or late life, risk increases with age; average onset is 60)",
        "Heredity (having close relatives with Parkinson's increases risk slightly)",
        "Exposure to toxins (ongoing exposure to herbicides, pesticides, or well water in agricultural areas)"
      ],
      "complications": "Complications include cognitive difficulties (dementia in late stages), depression, anxiety, swallowing problems (risking aspiration pneumonia), chewing and eating issues, sleep disorders, and falls.",
      "diagnosis": "There is no specific test for Parkinson's. Diagnosis is made by a neurologist based on medical history, review of signs, and a physical and neurological exam. A significant improvement when taking levodopa helps confirm the diagnosis.",
      "treatment": "While there is no cure, medications can manage symptoms dramatically. Levodopa (combined with carbidopa) is the most effective drug. Other drugs include dopamine agonists, MAO-B inhibitors, and anticholinergics. Deep Brain Stimulation (DBS) surgery is highly effective for advanced cases.",
      "homeCare": "Modify your home to prevent falls (remove rugs, install grab bars). Eat a balanced, high-fiber diet to prevent constipation. Exercise regularly (walking, swimming, stretching). Practice speech exercises.",
      "prevention": "Because the cause is unknown, proven prevention methods do not exist. However, research suggests that regular aerobic exercise and caffeine consumption (coffee or green tea) may reduce the risk of developing the disease.",
      "whenToSeeDoctor": "Consult a doctor if you experience any of the early signs, such as a resting tremor, stiffness, slow movement, or changes in your walking posture.",
      "emergencySigns": [
        "A sudden, severe fall resulting in inability to stand or suspected fractures",
        "Inability to swallow food, liquids, or saliva, causing choking or severe coughing (aspiration risk)",
        "Sudden, severe confusion, hallucinations, or psychotic symptoms"
      ],
      "relatedConditions": [
        "insomnia",
        "depression",
        "anxiety"
      ]
    },
    "specialist": "Neurologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Clinical Neurological Examination",
      "DaTscan (dopamine transporter imaging)"
    ]
  },
  {
    "id": "alzheimers-disease",
    "title": "Alzheimer's Disease",
    "category": "chronic",
    "keywords": [
      "alzheimer",
      "dementia",
      "memory loss",
      "cognitive decline",
      "amyloid plaques",
      "confusion",
      "tau tangles"
    ],
    "summary": "A progressive chronic brain disorder that slowly destroys memory, thinking skills, and the ability to carry out simple tasks, representing the most common cause of dementia.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a geriatrician or neurologist for early diagnostic evaluation and cognitive baseline testing.",
      "Take prescribed cognitive-enhancing medications (such as cholinesterase inhibitors or memantine) under medical supervision.",
      "Establish a structured, predictable, and safe daily routine at home to reduce confusion and anxiety.",
      "Engage in regular, mild physical activity and cognitive exercises (such as puzzles, social interaction, or music therapy).",
      "Secure the home environment (install locks, remove hazards) and build a comprehensive caregiver support network."
    ],
    "content": {
      "overview": "Alzheimer's disease is a progressive, chronic neurodegenerative brain disorder. It is the most common cause of dementia\u2014a continuous decline in thinking, behavioral, and social skills that disrupts a person's ability to function independently. The disease is characterized by the accumulation of abnormal protein deposits in the brain (amyloid plaques and tau tangles), leading to nerve cell death.",
      "symptoms": [
        "Progressive memory loss: forgetting recent conversations, events, names, and misplacing items",
        "Disorientation in time and space: getting lost in familiar places, forgetting the date or season",
        "Difficulty with abstract thinking, planning, and performing familiar tasks (cooking, managing finances)",
        "Changes in personality and behavior: depression, apathy, social withdrawal, mood swings, aggressiveness, and wandering",
        "In late stages: loss of ability to converse, recognize loved ones, and control motor functions (swallowing, walking)"
      ],
      "causes": "Alzheimer's disease is caused by the progressive death of brain cells. This is linked to two major structural abnormalities in the brain: amyloid plaques (clumps of beta-amyloid protein outside cells) and neurofibrillary tangles (twisted fibers of tau protein inside cells), which disrupt cellular communication and nutrient transport.",
      "riskFactors": [
        "Age (the greatest risk factor; double the risk every 5 years after age 65)",
        "Family history and genetics (having a parent or sibling with Alzheimer's; carrying the APOE e4 gene)",
        "Poor cardiovascular health (hypertension, high cholesterol, diabetes, smoking) and history of head trauma"
      ],
      "complications": "As the disease progresses, cognitive loss leads to inability to communicate pain, vulnerability to infections (especially aspiration pneumonia due to swallowing difficulties), falls, fractures, malnutrition, and dehydration.",
      "diagnosis": "Alzheimer's is diagnosed via cognitive and memory tests, neurological exams, and ruling out other causes (thyroid issues, vitamin deficiencies). Brain imaging (MRI, CT, or PET scans) can detect brain shrinkage (atrophy) and rule out strokes or tumors. Biomarker tests (CSF or blood) can identify amyloid and tau.",
      "treatment": "There is no cure. Medications like cholinesterase inhibitors (donepezil, galantamine) and memantine can temporarily improve or stabilize symptoms. New monoclonal antibody therapies (like lecanemab) target amyloid plaques to slow cognitive decline in early stages. Behavioral symptoms are managed with counseling or targeted medications.",
      "homeCare": "Keep a daily routine. Write down tasks, appointments, and phone numbers. Install safety locks and safety gates to prevent wandering. Keep the home well-lit. Label drawers and cupboards with their contents.",
      "prevention": "Promote brain health by managing cardiovascular risk factors (blood pressure, cholesterol, diabetes). Exercise regularly. Eat a heart-healthy Mediterranean diet. Stay socially active, get adequate sleep, and engage in lifelong learning.",
      "whenToSeeDoctor": "Consult a doctor if you or a family member notices gradual memory loss, confusion, or changes in planning and thinking skills that interfere with daily life.",
      "emergencySigns": [
        "Wandering away from home and getting lost in cold or dangerous conditions",
        "Sudden, severe aggression, combativeness, or panic that poses a danger to themselves or others",
        "Severe choking or inability to swallow food or liquids"
      ],
      "relatedConditions": [
        "insomnia",
        "depression",
        "anxiety",
        "hypertension"
      ]
    },
    "specialist": "Geriatrician or Neurologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Cognitive Baseline Testing (MMSE)",
      "Brain MRI or CT Scan"
    ]
  },
  {
    "id": "endometriosis",
    "title": "Endometriosis",
    "category": "chronic",
    "keywords": [
      "endometriosis",
      "pelvic pain",
      "painful periods",
      "dysmenorrhea",
      "infertility",
      "endometrial tissue"
    ],
    "summary": "A painful chronic disorder in which tissue similar to the lining of the uterus grows outside the uterus, causing severe pelvic pain and fertility issues.",
    "cureStatus": "Chronic Management",
    "stepsToCure": [
      "Consult a gynecologist specializing in pelvic pain for a comprehensive diagnostic and treatment plan.",
      "Manage moderate to severe pain using prescribed nonsteroidal anti-inflammatory drugs (NSAIDs).",
      "Undergo hormonal therapies (such as oral contraceptives, progestin-only pills, or GnRH agonists) to suppress endometrial tissue growth.",
      "Consider conservative laparoscopic surgery to surgically remove or ablate endometrial implants while preserving fertility.",
      "For severe, intractable pain in individuals who do not wish to bear children, discuss definitive surgical options (hysterectomy) with your specialist."
    ],
    "content": {
      "overview": "Endometriosis is a painful, chronic gynecological disorder in which tissue similar to the tissue that normally lines the inside of your uterus\u2014the endometrium\u2014grows outside your uterus. It most commonly involves your ovaries, fallopian tubes, and the tissue lining your pelvis. This displaced tissue thickens, breaks down, and bleeds with each menstrual cycle, but has no way to exit the body, causing severe inflammation, pain, and scar tissue (adhesions).",
      "symptoms": [
        "Painful periods (dysmenorrhea): pelvic pain and cramping starting before and extending several days into your period",
        "Pain during or after sexual intercourse (dyspareunia)",
        "Pain with bowel movements or urination, especially during your period",
        "Excessive bleeding: heavy menstrual periods or bleeding between periods (intermenstrual bleeding)",
        "Infertility (difficulty conceiving) and chronic fatigue, diarrhoea, constipation, bloating, or nausea during periods"
      ],
      "causes": "The exact cause of endometriosis is not certain. Explanations include retrograde menstruation (menstrual blood containing endometrial cells flows back through the fallopian tubes into the pelvic cavity), transformation of peritoneal cells, embryonic cell transformation, surgical scar implantation, or immune system disorders.",
      "riskFactors": [
        "Never giving birth, starting your period at an early age, or going through menopause at an older age",
        "Short menstrual cycles (e.g., less than 27 days) or heavy periods lasting more than 7 days",
        "Having high levels of estrogen in your body, having a low body mass index (BMI), or a family history of endometriosis"
      ],
      "complications": "The main complication is impaired fertility; about one-third to one-half of women with endometriosis have difficulty getting pregnant. It also causes chronic pelvic pain, scar tissue adhesions, ovarian cysts (endometriomas), and increases the risk of ovarian cancer slightly.",
      "diagnosis": "Diagnosed by medical history and pelvic exam. Ultrasounds or MRIs can identify large cysts. The gold standard for definitive diagnosis is laparoscopy\u2014a minor surgical procedure where a surgeon views the abdominal cavity with a scope and biopsies suspicious tissue.",
      "treatment": "Treatment includes pain medications (NSAIDs) and hormone therapies (birth control pills, patch, ring, progestin therapy, or GnRH agonists to create temporary menopause). Surgical options include laparoscopic removal of implants, and, in severe cases, removal of the uterus and ovaries (hysterectomy).",
      "homeCare": "Use a warm heating pad or take warm baths to relax pelvic muscles and ease cramps. Exercise regularly to improve circulation and reduce estrogen production. Practice stress management techniques.",
      "prevention": "Endometriosis cannot be prevented, but you can lower your risk by keeping estrogen levels lower in your body. This is aided by using hormonal contraceptives, exercising regularly, avoiding heavy alcohol consumption, and limiting caffeine.",
      "whenToSeeDoctor": "Consult a doctor or gynecologist if you experience severe pelvic pain, extremely painful periods, pain during intercourse, or difficulty conceiving.",
      "emergencySigns": [
        "Sudden, excruciating, and severe pelvic pain accompanied by fever and vomiting (suggests rupture of an endometrioma or ovarian torsion)",
        "Severe, uncontrolled bleeding from the vagina resulting in dizziness, weakness, or fainting"
      ],
      "relatedConditions": [
        "constipation",
        "diarrhoea",
        "stomach-pain"
      ]
    },
    "specialist": "Gynecologist",
    "recoveryTime": "Chronic / Lifetime Management",
    "diagnosticTests": [
      "Laparoscopy (Gold Standard)",
      "Transvaginal Ultrasound",
      "Pelvic MRI"
    ]
  }
];

// Export to global scope for client-side inclusion
if (typeof window !== 'undefined') {
  window.knowledgeBase = knowledgeBase;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { knowledgeBase };
}

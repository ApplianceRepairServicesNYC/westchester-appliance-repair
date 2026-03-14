// Comprehensive brand data with unique content for each subdomain
const brandData = {
  'asko': {
    name: 'ASKO',
    title: 'ASKO Appliance Repair of Westchester County - Same Day',
    description: 'Expert ASKO appliance repair in Westchester County NY. Skilled technicians for ASKO dishwashers, washers, dryers & laundry systems. Same day service in White Plains, Yonkers, New Rochelle & all Westchester County.',
    heroTitle: 'ASKO Appliance Repair of Westchester County',
    about: 'ASKO represents the pinnacle of Scandinavian appliance design, crafted in Sweden since 1950. These premium machines combine environmental responsibility with outstanding longevity, often exceeding two decades of reliable service in Westchester County homes.',
    specialty: 'dishwashers, front-load washers, heat pump dryers, and integrated laundry systems',
    commonIssues: 'ASKO dishwasher drainage failures, spin cycle malfunctions, heat pump dryer issues, electronic control problems',
    whyChoose: 'Westchester County homeowners trust us for ASKO repairs because we understand their distinctive Scandinavian technology, from Steel Seal door systems to ActiveDrum wash action and Logic control interfaces.'
  },
  'speedqueen': {
    name: 'Speed Queen',
    title: 'Speed Queen Appliance Repair of Westchester County - Same Day',
    description: 'Expert Speed Queen washer and dryer repair in Westchester County NY. Industrial-strength laundry specialists. Same day service in White Plains, Yonkers, Scarsdale & all Westchester County.',
    heroTitle: 'Speed Queen Appliance Repair of Westchester County',
    about: 'Speed Queen has manufactured America\'s most durable laundry equipment in Wisconsin since 1908. Their commercial-grade machines deliver 25+ years of heavy-duty performance, trusted by Westchester County families and businesses alike.',
    specialty: 'top-load washers, front-load washers, tumble dryers, and stacked laundry units',
    commonIssues: 'Speed Queen transmission failures, agitator problems, thermal fuse issues, timer malfunctions, bearing wear',
    whyChoose: 'We specialize in Speed Queen\'s commercial-grade components and metal construction that sets them apart from typical residential machines in Westchester County.'
  },
  'viking': {
    name: 'Viking',
    title: 'Viking Appliance Repair of Westchester County - Same Day',
    description: 'Expert Viking range, refrigerator & dishwasher repair in Westchester County NY. Professional cooking equipment specialists. Same day service in Bronxville, Larchmont, Bedford & all Westchester County.',
    heroTitle: 'Viking Appliance Repair of Westchester County',
    about: 'Since 1987, Viking has defined professional-style home cooking from their Mississippi headquarters. Westchester County\'s most discerning home chefs rely on Viking\'s restaurant-quality ranges and refrigeration for culinary excellence.',
    specialty: 'pro-style gas ranges, induction cooktops, column refrigerators, panel-ready dishwashers, and commercial ventilation',
    commonIssues: 'Viking burner ignition failures, convection fan problems, sealed system leaks, control board errors, door seal deterioration',
    whyChoose: 'Westchester County\'s luxury kitchens deserve technicians who understand Viking\'s TruConvec systems, VariSimmer burners, and ProChill refrigeration technology.'
  },
  'samsung': {
    name: 'Samsung',
    title: 'Samsung Appliance Repair of Westchester County - Same Day',
    description: 'Expert Samsung refrigerator, washer, dryer & range repair in Westchester County NY. Connected home specialists. Same day service in White Plains, Yonkers, Mount Vernon & all Westchester County.',
    heroTitle: 'Samsung Appliance Repair of Westchester County',
    about: 'Samsung leads the connected home revolution with WiFi-enabled appliances featuring Family Hub touchscreens and Bespoke customization. Westchester County homes embrace Samsung\'s blend of Korean innovation and smart functionality.',
    specialty: 'Bespoke refrigerators, FlexWash systems, AI-powered dryers, smart ranges, and connected dishwashers',
    commonIssues: 'Samsung ice maker defrost failures, VRT washer balance sensors, moisture sensor malfunctions, WiFi connectivity drops, touchscreen issues',
    whyChoose: 'Our Westchester County team masters Samsung\'s digital inverter compressors, SmartThings integration, and can resolve error codes across the entire Samsung ecosystem.'
  },
  'ge': {
    name: 'GE',
    title: 'GE Appliance Repair of Westchester County - Same Day',
    description: 'Expert GE refrigerator, washer, dryer, dishwasher & range repair in Westchester County NY. American innovation specialists. Same day service in White Plains, Yonkers, Scarsdale & all Westchester County.',
    heroTitle: 'GE Appliance Repair of Westchester County',
    about: 'GE Appliances has powered American kitchens since 1892, headquartered in Louisville, Kentucky. Westchester County homes feature GE\'s trusted reliability from basic models to sophisticated Profile and Cafe collections.',
    specialty: 'Profile French door refrigerators, UltraFresh washers, Cafe designer ranges, Profile dishwashers, and smart wall ovens',
    commonIssues: 'GE motherboard failures, defrost system malfunctions, UltraFresh gasket issues, Cafe induction problems, ice maker cycling errors',
    whyChoose: 'From legacy GE models to cutting-edge Cafe smart appliances, our Westchester County team services the complete General Electric family.'
  },
  'lg': {
    name: 'LG',
    title: 'LG Appliance Repair of Westchester County - Same Day',
    description: 'Expert LG refrigerator, washer, dryer & range repair in Westchester County NY. Korean technology specialists. Same day service in White Plains, New Rochelle, Mount Vernon & all Westchester County.',
    heroTitle: 'LG Appliance Repair of Westchester County',
    about: 'LG Electronics delivers Korean innovation to Westchester County with InstaView Door-in-Door refrigerators, TurboWash 360 laundry, and ThinQ smart connectivity across their entire appliance ecosystem.',
    specialty: 'InstaView refrigerators, WashTower laundry systems, ProBake ranges, QuadWash dishwashers, and ThinQ connected appliances',
    commonIssues: 'LG linear compressor failures, LE error codes, InstaView panel issues, ThinQ connectivity drops, inverter control board problems',
    whyChoose: 'We diagnose LG\'s proprietary error codes and service their Inverter Linear Compressor technology trusted throughout Westchester County.'
  },
  'whirlpool': {
    name: 'Whirlpool',
    title: 'Whirlpool Appliance Repair of Westchester County - Same Day',
    description: 'Expert Whirlpool refrigerator, washer, dryer, dishwasher & range repair in Westchester County NY. Market leader specialists. Same day service throughout Westchester County.',
    heroTitle: 'Whirlpool Appliance Repair of Westchester County',
    about: 'From Benton Harbor, Michigan since 1911, Whirlpool Corporation leads global home appliances. Westchester County families rely on Whirlpool\'s proven dependability across kitchens and laundry rooms.',
    specialty: 'counter-depth refrigerators, Load & Go washers, Intuitive Touch dryers, third-rack dishwashers, and smart ranges',
    commonIssues: 'Whirlpool control board failures, F-codes, Load & Go dispenser clogs, ice maker assembly problems, heating element burnout',
    whyChoose: 'Our extensive Whirlpool parts inventory and diagnostic expertise keep Westchester County\'s most popular appliance brand running smoothly.'
  },
  'maytag': {
    name: 'Maytag',
    title: 'Maytag Appliance Repair of Westchester County - Same Day',
    description: 'Expert Maytag washer, dryer, dishwasher & refrigerator repair in Westchester County NY. Heavy-duty appliance specialists. Same day service in Yonkers, White Plains & all Westchester County.',
    heroTitle: 'Maytag Appliance Repair of Westchester County',
    about: 'Newton, Iowa\'s Maytag has built America\'s most dependable appliances since 1893. Westchester County families with demanding laundry needs trust Maytag\'s commercial-grade residential construction.',
    specialty: 'Commercial Technology washers, Extra Power dryers, dual power filtration dishwashers, and wide-door refrigerators',
    commonIssues: 'Maytag direct-drive transmission issues, Extra Power button malfunctions, PowerWash agitator problems, dual-power filtration clogs',
    whyChoose: 'We service Maytag\'s robust PowerWash systems and commercial-grade components built for Westchester County\'s busiest households.'
  },
  'frigidaire': {
    name: 'Frigidaire',
    title: 'Frigidaire Appliance Repair of Westchester County - Same Day',
    description: 'Expert Frigidaire refrigerator, range, dishwasher & laundry repair in Westchester County NY. Classic American brand specialists. Same day service throughout Westchester County.',
    heroTitle: 'Frigidaire Appliance Repair of Westchester County',
    about: 'Frigidaire pioneered household refrigeration in 1916 and continues delivering exceptional value and reliability to American homes. Westchester County homeowners appreciate Frigidaire\'s practical innovation across all appliance categories.',
    specialty: 'Gallery French doors, Professional ranges, front-control dishwashers, stackable laundry, and upright freezers',
    commonIssues: 'Frigidaire adaptive defrost failures, Gallery control panel errors, Professional burner issues, front-load bearing wear',
    whyChoose: 'From entry-level to Professional series, we cover Frigidaire\'s complete lineup serving Westchester County homes at every price point.'
  },
  'bosch': {
    name: 'Bosch',
    title: 'Bosch Appliance Repair of Westchester County - Same Day',
    description: 'Expert Bosch dishwasher, refrigerator, washer & dryer repair in Westchester County NY. Precision engineering specialists. Same day service in Scarsdale, Bronxville & all Westchester County.',
    heroTitle: 'Bosch Appliance Repair of Westchester County',
    about: 'German-engineered Bosch appliances deliver whisper-quiet operation and space-efficient design. Westchester County\'s modern kitchens and compact laundry spaces benefit from Bosch\'s European precision.',
    specialty: '800 Series dishwashers, 24-inch compact laundry, Benchmark refrigerators, speed ovens, and induction cooktops',
    commonIssues: 'Bosch E15 and E24 error codes, aquastop sensor failures, heat pump efficiency loss, PrecisionWash spray arm blockages',
    whyChoose: 'We master Bosch\'s CrystalDry zeolite technology and AutoAir drying systems preferred in Westchester County\'s quality-conscious homes.'
  },
  'amana': {
    name: 'Amana',
    title: 'Amana Appliance Repair of Westchester County - Same Day',
    description: 'Expert Amana refrigerator, washer, dryer, dishwasher & range repair in Westchester County NY. Reliable appliance specialists. Same day service throughout Westchester County.',
    heroTitle: 'Amana Appliance Repair of Westchester County',
    about: 'Amana has been making quality appliances in Middle America since 1934. Originally famous for refrigeration innovations, Amana now offers a full line of dependable, affordable home appliances.',
    specialty: 'refrigerators, washers, dryers, dishwashers, ranges, and microwaves',
    commonIssues: 'Amana refrigerator not cooling, washer not draining, dryer not heating, dishwasher not cleaning, oven temperature issues',
    whyChoose: 'Our technicians are experienced with Amana\'s straightforward, reliable designs and maintain parts for quick repairs on all Amana appliances.'
  },
  'kitchenaid': {
    name: 'KitchenAid',
    title: 'KitchenAid Appliance Repair of Westchester County - Same Day',
    description: 'Expert KitchenAid refrigerator, dishwasher, range & mixer repair in Westchester County NY. Culinary appliance experts. Same day service in Yonkers, Bronxville & all Westchester County.',
    heroTitle: 'KitchenAid Appliance Repair of Westchester County',
    about: 'KitchenAid has equipped America\'s home kitchens since 1919, earning legendary status with their commercial-grade stand mixers. Westchester County\'s culinary enthusiasts trust KitchenAid for serious cooking performance.',
    specialty: 'professional stand mixers, counter-depth refrigerators, FreeFlex dishwashers, double wall ovens, and induction cooktops',
    commonIssues: 'KitchenAid mixer gear failures, dishwasher spray arm blockages, refrigerator ice buildup, convection element issues',
    whyChoose: 'From repairing planetary mixer gears to servicing their premium kitchen suites, our Westchester County team handles the full KitchenAid lineup with expertise.'
  },
  'kenmore': {
    name: 'Kenmore',
    title: 'Kenmore Appliance Repair of Westchester County - Same Day',
    description: 'Expert Kenmore washer, dryer, refrigerator & dishwasher repair in Westchester County NY. Over 100 years of American reliability. Same day service throughout Westchester County.',
    heroTitle: 'Kenmore Appliance Repair of Westchester County',
    about: 'Kenmore has been a trusted name in American homes since 1913. While Kenmore appliances are manufactured by various brands, our technicians know every model and can service all Kenmore appliances in Westchester County.',
    specialty: 'washers, dryers, refrigerators, dishwashers, ranges, and freezers',
    commonIssues: 'Kenmore washer not draining, dryer not heating, refrigerator running constantly, dishwasher not filling, oven igniter problems',
    whyChoose: 'Since Kenmore appliances are made by different manufacturers, our technicians are trained across multiple brands to properly service every Kenmore model.'
  },
  'subzero': {
    name: 'Sub-Zero',
    title: 'Sub-Zero Appliance Repair of Westchester County - Same Day',
    description: 'Expert Sub-Zero refrigerator and freezer repair in Westchester County NY. Elite refrigeration specialists serving Bedford, Purchase, Chappaqua & all Westchester County.',
    heroTitle: 'Sub-Zero Appliance Repair of Westchester County',
    about: 'Handcrafted in Wisconsin since 1945, Sub-Zero defines luxury refrigeration with separate cooling systems for fresh and frozen foods. Westchester County\'s distinguished estates feature Sub-Zero for unmatched food preservation.',
    specialty: 'Designer Series columns, Classic Series built-ins, PRO 48 refrigerators, wine preservation units, and undercounter drawers',
    commonIssues: 'Sub-Zero sealed system repairs, condenser maintenance, evaporator frost buildup, ice maker cycling issues, temperature sensor calibration',
    whyChoose: 'We understand Sub-Zero\'s dual-compressor architecture and microprocessor controls that preserve food at optimal conditions in Westchester County\'s finest residences.'
  },
  'thermador': {
    name: 'Thermador',
    title: 'Thermador Appliance Repair of Westchester County - Same Day',
    description: 'Expert Thermador range, cooktop & refrigerator repair in Westchester County NY. High-performance cooking specialists. Same day service in Bronxville, Larchmont, Irvington & all Westchester County.',
    heroTitle: 'Thermador Appliance Repair of Westchester County',
    about: 'Thermador pioneered American cooktop technology in 1947 and remains at the forefront of culinary innovation. Westchester County\'s gourmet kitchens feature Thermador\'s signature Star Burners and Freedom modular refrigeration.',
    specialty: 'Pro Grand ranges, Masterpiece cooktops, Freedom column refrigeration, Emerald dishwashers, and combination steam ovens',
    commonIssues: 'Thermador igniter replacements, ExtraLow simmer adjustments, column temperature regulation, Zeolite drying system repairs',
    whyChoose: 'Our Westchester County experts service Thermador\'s innovative Star Burner system and Home Connect technology that define modern luxury cooking.'
  },
  'miele': {
    name: 'Miele',
    title: 'Miele Appliance Repair of Westchester County - Same Day',
    description: 'Expert Miele dishwasher, washer, dryer & vacuum repair in Westchester County NY. Precision engineering experts. Same day service in Mount Vernon, Larchmont, Tarrytown & all Westchester County.',
    heroTitle: 'Miele Appliance Repair of Westchester County',
    about: 'Family-owned since 1899, Miele embodies German precision with their "Immer Besser" commitment to continuous improvement. Westchester County homeowners choose Miele for appliances engineered to perform flawlessly for two decades.',
    specialty: 'G7000 dishwashers, W1 washing machines, T1 heat-pump dryers, Complete C3 vacuums, and CM coffee centers',
    commonIssues: 'Miele intake valve failures, TwinDos dispenser issues, heat pump efficiency drops, powerhead malfunctions, brew unit blockages',
    whyChoose: 'We service Miele\'s sophisticated honeycomb drum systems, AutoDos dispensing, and WiFiConn@ct features that Westchester County residents depend on.'
  },
  'jennair': {
    name: 'JennAir',
    title: 'JennAir Appliance Repair of Westchester County - Same Day',
    description: 'Expert JennAir range, cooktop & refrigerator repair in Westchester County NY. Designer kitchen specialists. Same day service in Yonkers, Rye, Chappaqua & all Westchester County.',
    heroTitle: 'JennAir Appliance Repair of Westchester County',
    about: 'Since inventing the downdraft cooktop in 1961, JennAir has defined kitchen innovation. Their RISE and NOIR collections deliver bold design statements in Westchester County\'s most stylish contemporary kitchens.',
    specialty: 'downdraft ventilation systems, RISE pro-style ranges, NOIR column refrigeration, speed ovens, and WiFi-connected suites',
    commonIssues: 'JennAir downdraft blower failures, Culinary Center calibration, column compressor issues, WiFi connectivity problems',
    whyChoose: 'Our Westchester County technicians master JennAir\'s signature downdraft technology and connected cooking features that define modern luxury.'
  },
  'dacor': {
    name: 'Dacor',
    title: 'Dacor Appliance Repair of Westchester County - Same Day',
    description: 'Expert Dacor range, cooktop & wall oven repair in Westchester County NY. West Coast luxury specialists. Same day service in Bedford, Purchase & all Westchester County.',
    heroTitle: 'Dacor Appliance Repair of Westchester County',
    about: 'Los Angeles-born Dacor has brought California innovation to luxury kitchens since 1965. Dacor\'s Modernist collection features groundbreaking technology in Westchester County\'s architectural showcase homes.',
    specialty: 'Modernist 48" ranges, Graphite cooktops, Contemporary wall ovens, panel-ready columns, and combination steam ovens',
    commonIssues: 'Dacor iQ controller errors, dual-fuel burner issues, SoftShut door mechanisms, graphite surface maintenance',
    whyChoose: 'We understand Dacor\'s innovative Four-Part Pure Convection and iQ Kitchen connectivity that power Westchester County\'s most advanced cooking spaces.'
  },
  'electrolux': {
    name: 'Electrolux',
    title: 'Electrolux Appliance Repair of Westchester County - Same Day',
    description: 'Expert Electrolux washer, dryer, refrigerator & dishwasher repair in Westchester County NY. Scandinavian engineering specialists. Same day service throughout Westchester County.',
    heroTitle: 'Electrolux Appliance Repair of Westchester County',
    about: 'Swedish-born Electrolux has championed sustainable home technology since 1919. Westchester County\'s environmentally-conscious households embrace Electrolux\'s energy-efficient designs and Perfect Steam innovations.',
    specialty: 'Perfect Steam washers, ventless heat-pump dryers, counter-depth refrigerators, 45dBA dishwashers, and air fry ranges',
    commonIssues: 'Electrolux door boot seal tears, SmartBoost heater failures, ventless condenser maintenance, control board errors',
    whyChoose: 'Our Westchester County team services Electrolux\'s LuxCare systems and sustainable technologies that reduce environmental impact.'
  },
  'hotpoint': {
    name: 'Hotpoint',
    title: 'Hotpoint Appliance Repair of Westchester County - Same Day',
    description: 'Expert Hotpoint washer, dryer, refrigerator & range repair in Westchester County NY. Reliable and affordable service. Same day appointments throughout Westchester County.',
    heroTitle: 'Hotpoint Appliance Repair of Westchester County',
    about: 'Hotpoint has provided reliable, affordable appliances to American homes for over a century. Dependable and budget-friendly, Hotpoint is a Westchester County household staple.',
    specialty: 'top-load washers, electric dryers, refrigerators, electric ranges, and dishwashers',
    commonIssues: 'Hotpoint washer not spinning, dryer not heating, refrigerator not cooling, range burner problems, dishwasher not draining',
    whyChoose: 'Hotpoint shares proven technology and our technicians have extensive experience with these reliable appliances.'
  },
  'gaggenau': {
    name: 'Gaggenau',
    title: 'Gaggenau Appliance Repair of Westchester County - Same Day',
    description: 'Expert Gaggenau oven, cooktop & refrigerator repair in Westchester County NY. Ultra-luxury German specialists. Same day service in Bedford, Purchase & all Westchester County.',
    heroTitle: 'Gaggenau Appliance Repair of Westchester County',
    about: 'With 340 years of German heritage, Gaggenau creates the world\'s most prestigious kitchen appliances. Westchester County\'s architectural masterpiece kitchens feature Gaggenau\'s signature anthracite aesthetic and culinary precision.',
    specialty: 'Vario 400 modular cooktops, combi-steam ovens, EB espresso systems, climate-controlled wine storage, and 400 Series dishwashers',
    commonIssues: 'Gaggenau Vario flex induction calibration, steam generator descaling, espresso brew unit servicing, wine cabinet humidity control',
    whyChoose: 'We service Gaggenau\'s bespoke Vario modular systems and understand the museum-quality craftsmanship in Westchester County\'s most exclusive residences.'
  },
  'liebherr': {
    name: 'Liebherr',
    title: 'Liebherr Appliance Repair of Westchester County - Same Day',
    description: 'Expert Liebherr refrigerator and freezer repair in Westchester County NY. European refrigeration specialists. Same day service in Bronxville, Pelham & all Westchester County.',
    heroTitle: 'Liebherr Appliance Repair of Westchester County',
    about: 'Liebherr brings Swiss precision and German engineering to premium refrigeration. Known for their BioFresh technology and wine storage solutions, Liebherr refrigerators preserve food longer in Westchester County homes.',
    specialty: 'integrated refrigerators, freestanding refrigerators, wine cabinets, and freezers',
    commonIssues: 'Liebherr compressor issues, BioFresh drawer problems, ice maker failures, temperature control malfunctions',
    whyChoose: 'Our technicians understand Liebherr\'s unique BioFresh and DuoCooling technologies that extend food preservation in Westchester County homes.'
  },
  'monogram': {
    name: 'Monogram',
    title: 'Monogram Appliance Repair of Westchester County - Same Day',
    description: 'Expert Monogram refrigerator, range & dishwasher repair in Westchester County NY. Luxury appliance specialists. Same day service in Chappaqua, Rye & all Westchester County.',
    heroTitle: 'Monogram Appliance Repair of Westchester County',
    about: 'Monogram represents American luxury craftsmanship, handcrafted in Louisville, Kentucky. These professional-grade appliances with restaurant-inspired design are found in Westchester County\'s finest chef\'s kitchens.',
    specialty: 'professional ranges, French door refrigerators, built-in refrigerators, dishwashers, and wall ovens',
    commonIssues: 'Monogram refrigerator ice maker problems, range igniter issues, oven temperature inconsistency, dishwasher drainage',
    whyChoose: 'We have deep expertise in Monogram\'s professional features and WiFi-connected smart home integration.'
  },
  'smeg': {
    name: 'Smeg',
    title: 'Smeg Appliance Repair of Westchester County - Same Day',
    description: 'Expert Smeg refrigerator, range & dishwasher repair in Westchester County NY. Italian design appliance specialists. Same day service in Montclair, Mamaroneck & all Westchester County.',
    heroTitle: 'Smeg Appliance Repair of Westchester County',
    about: 'Smeg brings iconic Italian design to home appliances since 1948. Their retro-styled refrigerators and professional ranges add European flair to Westchester County kitchens while delivering serious performance.',
    specialty: 'retro-style refrigerators, freestanding ranges, dishwashers, and small appliances',
    commonIssues: 'Smeg refrigerator compressor issues, range burner problems, oven temperature calibration, dishwasher pump failures',
    whyChoose: 'We understand Smeg\'s unique Italian engineering and can maintain the iconic style while ensuring peak performance in your Westchester County home.'
  },
  'bertazzoni': {
    name: 'Bertazzoni',
    title: 'Bertazzoni Appliance Repair of Westchester County - Same Day',
    description: 'Expert Bertazzoni range and oven repair in Westchester County NY. Italian luxury cooking specialists. Same day service in Bronxville, Mamaroneck & all Westchester County.',
    heroTitle: 'Bertazzoni Appliance Repair of Westchester County',
    about: 'Bertazzoni has crafted professional cooking appliances in Guastalla, Italy since 1882. Six generations of family expertise bring authentic Italian cooking performance to Westchester County\'s passionate home chefs.',
    specialty: 'professional ranges, wall ovens, cooktops, range hoods, and refrigerators',
    commonIssues: 'Bertazzoni burner ignition problems, oven temperature issues, convection fan problems, range hood motor failures',
    whyChoose: 'Our technicians understand Bertazzoni\'s traditional Italian craftsmanship and dual-fuel technology that brings authentic cooking to Westchester County homes.'
  },
  'fisher-paykel': {
    name: 'Fisher & Paykel',
    title: 'Fisher & Paykel Appliance Repair of Westchester County - Same Day',
    description: 'Expert Fisher & Paykel dishwasher, refrigerator & laundry repair in Westchester County NY. New Zealand innovation specialists. Same day service throughout Westchester County.',
    heroTitle: 'Fisher & Paykel Appliance Repair of Westchester County',
    about: 'Fisher & Paykel brings New Zealand innovation to kitchen and laundry appliances since 1934. Their DishDrawer dishwashers and ActiveSmart refrigerators offer unique solutions for Westchester County homes.',
    specialty: 'DishDrawer dishwashers, ActiveSmart refrigerators, front-load washers, and ranges',
    commonIssues: 'Fisher & Paykel DishDrawer not draining, refrigerator temperature problems, washer motor issues, range igniter failures',
    whyChoose: 'We specialize in Fisher & Paykel\'s unique DishDrawer technology and ActiveSmart refrigeration systems popular in Westchester County kitchens.'
  },
  'admiral': { name: 'Admiral', title: 'Admiral Appliance Repair of Westchester County - Same Day', heroTitle: 'Admiral Appliance Repair of Westchester County', description: 'Expert Admiral refrigerator, washer & dryer repair in Westchester County NY. Reliable service for classic Admiral appliances. Same day service throughout Westchester County.', about: 'Admiral appliances built a reputation for reliability and value in American homes. Our Westchester County technicians keep these dependable machines running.', specialty: 'refrigerators, washers, dryers, and freezers', commonIssues: 'Admiral refrigerator not cooling, washer not spinning, dryer not heating', whyChoose: 'We have experience with Admiral\'s straightforward engineering and maintain parts for these reliable appliances.' },
  'aeg': { name: 'AEG', title: 'AEG Appliance Repair of Westchester County - Same Day', heroTitle: 'AEG Appliance Repair of Westchester County', description: 'Expert AEG dishwasher, washer & oven repair in Westchester County NY. German engineering specialists. Same day service throughout Westchester County.', about: 'AEG has pioneered German appliance innovation since 1883. Their premium laundry and kitchen appliances bring European quality to Westchester County homes.', specialty: 'dishwashers, washing machines, dryers, ovens, and cooktops', commonIssues: 'AEG dishwasher drainage issues, washer motor problems, oven heating element failures', whyChoose: 'Our technicians understand AEG\'s German precision engineering and can service these premium European appliances.' },
  'blomberg': { name: 'Blomberg', title: 'Blomberg Appliance Repair of Westchester County - Same Day', heroTitle: 'Blomberg Appliance Repair of Westchester County', description: 'Expert Blomberg dishwasher, washer & refrigerator repair in Westchester County NY. European compact appliance specialists. Same day service throughout Westchester County.', about: 'Blomberg brings German engineering and Turkish manufacturing to create efficient, compact appliances perfect for Westchester County apartments and smaller kitchens.', specialty: 'compact dishwashers, ventless dryers, refrigerators, and ranges', commonIssues: 'Blomberg dishwasher not draining, ventless dryer issues, refrigerator temperature problems', whyChoose: 'We specialize in Blomberg\'s space-saving European designs popular in Westchester County condos and apartments.' },
  'bluestar': { name: 'BlueStar', title: 'BlueStar Appliance Repair of Westchester County - Same Day', heroTitle: 'BlueStar Appliance Repair of Westchester County', description: 'Expert BlueStar range and cooktop repair in Westchester County NY. Professional cooking specialists. Same day service in Bedford, Purchase & all Westchester County.', about: 'BlueStar handcrafts professional ranges in Reading, Pennsylvania with 750+ color options and 25,000 BTU burners. Serious Westchester County chefs demand BlueStar performance.', specialty: 'professional ranges, cooktops, wall ovens, and range hoods', commonIssues: 'BlueStar burner ignition problems, oven temperature calibration, infrared broiler issues', whyChoose: 'Our technicians understand BlueStar\'s restaurant-grade open burner system and can maintain peak performance for Westchester County\'s serious home chefs.' },
  'cafe': { name: 'Cafe', title: 'Cafe Appliance Repair of Westchester County - Same Day', heroTitle: 'Cafe Appliance Repair of Westchester County', description: 'Expert Cafe refrigerator, range & dishwasher repair in Westchester County NY. Customizable luxury appliances. Same day service throughout Westchester County.', about: 'Cafe offers customizable hardware finishes and smart home connectivity. These design-forward appliances let Westchester County homeowners personalize their kitchens.', specialty: 'French door refrigerators, dual-fuel ranges, dishwashers, and wall ovens', commonIssues: 'Cafe refrigerator ice maker problems, range igniter issues, dishwasher not draining, smart connectivity', whyChoose: 'We have deep expertise in Cafe\'s premium features and WiFi-connected smart capabilities.' },
  'cove': { name: 'Cove', title: 'Cove Appliance Repair of Westchester County - Same Day', heroTitle: 'Cove Appliance Repair of Westchester County', description: 'Expert Cove dishwasher repair in Westchester County NY. Luxury dishwasher specialists. Same day service in Bedford, Purchase & all Westchester County.', about: 'Cove is a premium luxury dishwasher brand bringing exceptional performance to dishwashing. Westchester County\'s finest kitchens feature Cove\'s quiet, powerful cleaning.', specialty: 'built-in dishwashers and dishwasher drawers', commonIssues: 'Cove dishwasher not draining, cleaning performance issues, door latch problems, error codes', whyChoose: 'Our certified technicians maintain Cove dishwashers to the highest standards for Westchester County\'s luxury kitchens.' },
  'dcs': { name: 'DCS', title: 'DCS Appliance Repair of Westchester County - Same Day', heroTitle: 'DCS Appliance Repair of Westchester County', description: 'Expert DCS grill, range & refrigerator repair in Westchester County NY. Professional outdoor and indoor specialists. Same day service throughout Westchester County.', about: 'DCS creates professional-grade indoor and outdoor cooking appliances. Their stainless steel ranges and outdoor grills serve Westchester County\'s demanding home chefs.', specialty: 'professional ranges, outdoor grills, refrigerators, and cooktops', commonIssues: 'DCS grill igniter problems, range burner issues, refrigerator compressor failures', whyChoose: 'We specialize in DCS\'s professional construction and can service both their indoor and outdoor appliance lines.' },
  'haier': { name: 'Haier', title: 'Haier Appliance Repair of Westchester County - Same Day', heroTitle: 'Haier Appliance Repair of Westchester County', description: 'Expert Haier refrigerator, washer, dryer & wine cooler repair in Westchester County NY. Compact and full-size specialists. Same day service throughout Westchester County.', about: 'Haier is the world\'s largest appliance manufacturer, offering compact to full-size options. Their wine coolers and compact appliances are popular in Westchester County apartments.', specialty: 'compact refrigerators, wine coolers, portable washers, and window AC units', commonIssues: 'Haier wine cooler temperature problems, compact washer drainage, refrigerator not cooling', whyChoose: 'We service Haier\'s diverse product line from compact units for Westchester County apartments to full-size appliances for homes.' },
  'hestan': { name: 'Hestan', title: 'Hestan Appliance Repair of Westchester County - Same Day', heroTitle: 'Hestan Appliance Repair of Westchester County', description: 'Expert Hestan range, grill & refrigerator repair in Westchester County NY. Ultra-premium cooking specialists. Same day service in Bedford, Purchase & all Westchester County.', about: 'Hestan creates the world\'s finest cooking equipment in Anaheim, California. Their commercial-grade ranges and outdoor grills represent the pinnacle of culinary performance for Westchester County\'s most demanding kitchens.', specialty: 'professional ranges, outdoor grills, refrigerators, and wine storage', commonIssues: 'Hestan burner problems, grill ignition issues, refrigerator temperature control', whyChoose: 'Our technicians are trained on Hestan\'s commercial-grade construction and can maintain these ultra-premium appliances to exacting standards.' },
  'broan': { name: 'Broan', title: 'Broan Appliance Repair of Westchester County - Same Day', heroTitle: 'Broan Appliance Repair of Westchester County', description: 'Expert Broan range hood, ventilation & exhaust fan repair in Westchester County NY. Ventilation specialists. Same day service throughout Westchester County.', about: 'Broan has been America\'s ventilation leader since 1932. Their range hoods, bathroom fans, and ventilation systems keep Westchester County homes fresh and comfortable.', specialty: 'range hoods, bathroom exhaust fans, ventilation systems, and trash compactors', commonIssues: 'Broan range hood motor failure, exhaust fan not working, light problems, loud operation', whyChoose: 'We specialize in Broan\'s ventilation systems and can restore proper airflow to your Westchester County kitchen and bathrooms.' },
  'capital-cooking': { name: 'Capital Cooking', title: 'Capital Cooking Appliance Repair of Westchester County - Same Day', heroTitle: 'Capital Cooking Appliance Repair of Westchester County', description: 'Expert Capital range and cooktop repair in Westchester County NY. Professional cooking equipment specialists. Same day service in Bronxville, Rye & all Westchester County.', about: 'Capital Cooking creates restaurant-quality ranges in California with open burners delivering 25,000 BTUs. Serious Westchester County home chefs rely on Capital\'s commercial performance.', specialty: 'professional ranges, rangetops, wall ovens, and outdoor grills', commonIssues: 'Capital burner ignition problems, oven temperature inconsistency, convection fan issues', whyChoose: 'We understand Capital\'s commercial-style open burner system and can maintain restaurant-grade performance in your Westchester County home.' },
  'danby': { name: 'Danby', title: 'Danby Appliance Repair of Westchester County - Same Day', heroTitle: 'Danby Appliance Repair of Westchester County', description: 'Expert Danby compact refrigerator, freezer & wine cooler repair in Westchester County NY. Compact appliance specialists. Same day service throughout Westchester County.', about: 'Danby specializes in compact appliances perfect for Westchester County apartments, dorms, and offices. Their wine coolers, mini fridges, and portable ACs offer space-saving solutions.', specialty: 'compact refrigerators, wine coolers, chest freezers, and portable air conditioners', commonIssues: 'Danby wine cooler not cooling, mini fridge temperature problems, freezer frost buildup', whyChoose: 'We service Danby\'s full line of compact appliances popular in Westchester County apartments and smaller living spaces.' },
  'avanti': { name: 'Avanti', title: 'Avanti Appliance Repair of Westchester County - Same Day', heroTitle: 'Avanti Appliance Repair of Westchester County', description: 'Expert Avanti compact refrigerator, wine cooler & appliance repair in Westchester County NY. Compact living specialists. Same day service throughout Westchester County.', about: 'Avanti creates compact appliances for modern living, from wine coolers to mini kitchens. Westchester County apartments and offices rely on Avanti\'s space-efficient designs.', specialty: 'wine coolers, compact refrigerators, mini kitchens, and beverage centers', commonIssues: 'Avanti wine cooler temperature issues, compact fridge not cooling, beverage center problems', whyChoose: 'We specialize in Avanti\'s compact appliance line serving Westchester County apartments and small spaces.' },
  'magic-chef': { name: 'Magic Chef', title: 'Magic Chef Appliance Repair of Westchester County - Same Day', heroTitle: 'Magic Chef Appliance Repair of Westchester County', description: 'Expert Magic Chef refrigerator, microwave & compact appliance repair in Westchester County NY. Affordable reliability specialists. Same day service throughout Westchester County.', about: 'Magic Chef has provided affordable, reliable appliances to American homes for decades. Their compact refrigerators and microwaves serve Westchester County apartments and offices.', specialty: 'compact refrigerators, microwaves, wine coolers, and small appliances', commonIssues: 'Magic Chef microwave not heating, compact fridge problems, wine cooler temperature issues', whyChoose: 'We service Magic Chef\'s affordable appliance line and can keep your Westchester County compact appliances running reliably.' },
  'sharp': { name: 'Sharp', title: 'Sharp Appliance Repair of Westchester County - Same Day', heroTitle: 'Sharp Appliance Repair of Westchester County', description: 'Expert Sharp microwave, microwave drawer & appliance repair in Westchester County NY. Microwave innovation specialists. Same day service throughout Westchester County.', about: 'Sharp pioneered microwave technology and continues innovating with microwave drawers and SuperSteam ovens. Westchester County kitchens feature Sharp\'s space-saving designs.', specialty: 'microwave drawers, over-the-range microwaves, countertop microwaves, and SuperSteam ovens', commonIssues: 'Sharp microwave not heating, drawer mechanism problems, turntable issues, door latch failures', whyChoose: 'We specialize in Sharp\'s innovative microwave drawer technology and can service all Sharp microwave products.' },
  'panasonic': { name: 'Panasonic', title: 'Panasonic Appliance Repair of Westchester County - Same Day', heroTitle: 'Panasonic Appliance Repair of Westchester County', description: 'Expert Panasonic microwave and appliance repair in Westchester County NY. Japanese technology specialists. Same day service throughout Westchester County.', about: 'Panasonic brings Japanese technology to home appliances with their Inverter microwaves and innovative cooking solutions. Westchester County homes trust Panasonic\'s reliability.', specialty: 'inverter microwaves, countertop microwaves, and small appliances', commonIssues: 'Panasonic microwave inverter problems, not heating, turntable issues, door problems', whyChoose: 'Our technicians understand Panasonic\'s Inverter microwave technology that delivers superior cooking results.' },
  'la-cornue': { name: 'La Cornue', title: 'La Cornue Appliance Repair of Westchester County - Same Day', heroTitle: 'La Cornue Appliance Repair of Westchester County', description: 'Expert La Cornue range repair in Westchester County NY. French luxury range specialists. Same day service in Bedford, Purchase, Mount Vernon Cliffs & all Westchester County.', about: 'La Cornue has handcrafted the world\'s finest French ranges since 1908. Each range takes over 100 hours to build, making La Cornue the ultimate statement in Westchester County\'s luxury kitchens.', specialty: 'Château ranges, CornuFé ranges, and custom cooking suites', commonIssues: 'La Cornue oven temperature calibration, gas burner problems, custom door issues', whyChoose: 'We are trained to service La Cornue\'s bespoke French ranges and understand the craftsmanship required for these extraordinary appliances.' },
  'true-residential': { name: 'True Residential', title: 'True Residential Appliance Repair of Westchester County - Same Day', heroTitle: 'True Residential Appliance Repair of Westchester County', description: 'Expert True refrigerator, freezer & wine cabinet repair in Westchester County NY. Commercial-grade residential refrigeration. Same day service in Bedford, Chappaqua & all Westchester County.', about: 'True brings 75 years of commercial refrigeration expertise to luxury homes. Their stainless steel refrigerators and wine cabinets deliver restaurant-grade performance in Westchester County\'s finest kitchens.', specialty: 'column refrigerators, undercounter refrigerators, wine cabinets, and freezers', commonIssues: 'True compressor issues, temperature fluctuations, ice maker problems, door seal failures', whyChoose: 'Our technicians understand True\'s commercial-grade construction and can maintain their precision refrigeration systems.' },
  'vent-a-hood': { name: 'Vent-A-Hood', title: 'Vent-A-Hood Appliance Repair of Westchester County - Same Day', heroTitle: 'Vent-A-Hood Appliance Repair of Westchester County', description: 'Expert Vent-A-Hood range hood repair in Westchester County NY. Magic Lung ventilation specialists. Same day service throughout Westchester County.', about: 'Vent-A-Hood invented the residential range hood in 1933 and their patented Magic Lung blower technology remains the quietest in the industry. Westchester County\'s serious kitchens demand Vent-A-Hood quality.', specialty: 'range hoods, ventilation systems, and blower units', commonIssues: 'Vent-A-Hood Magic Lung motor problems, light failures, grease filter issues, blower not working', whyChoose: 'We specialize in Vent-A-Hood\'s unique Magic Lung centrifugal blower system that captures smoke and grease more effectively.' },
  'wolf': { name: 'Wolf', title: 'Wolf Appliance Repair of Westchester County - Same Day', heroTitle: 'Wolf Appliance Repair of Westchester County', description: 'Expert Wolf range, oven & cooktop repair in Westchester County NY. Professional cooking specialists. Same day service in Scarsdale, Bronxville, Bedford & all Westchester County.', about: 'Wolf has been crafting professional-grade cooking equipment in Wisconsin since 1934. Wolf ranges and ovens are the choice of serious home chefs and professional kitchens throughout Westchester County.', specialty: 'professional ranges, dual fuel ranges, wall ovens, cooktops, and ventilation', commonIssues: 'Wolf range igniter problems, oven temperature calibration, burner issues, convection fan failures, control panel malfunctions', whyChoose: 'Our technicians are trained on Wolf\'s professional dual-stacked burners, VertiCross convection systems, and precise temperature controls found in Westchester County\'s finest kitchens.' },
  'zline': { name: 'ZLINE', title: 'ZLINE Appliance Repair of Westchester County - Same Day', heroTitle: 'ZLINE Appliance Repair of Westchester County', description: 'Expert ZLINE range, range hood & dishwasher repair in Westchester County NY. Professional style at accessible prices. Same day service throughout Westchester County.', about: 'ZLINE brings professional-style kitchen appliances at accessible prices. Their stainless steel ranges and dramatic range hoods add chef-inspired style to Westchester County kitchens.', specialty: 'gas and dual-fuel ranges, range hoods, dishwashers, and microwaves', commonIssues: 'ZLINE range igniter problems, hood motor issues, dishwasher drainage, oven temperature calibration', whyChoose: 'We service ZLINE\'s professional-style appliances and can maintain their commercial-inspired performance.' },
  'thor-kitchen': { name: 'Thor Kitchen', title: 'Thor Kitchen Appliance Repair of Westchester County - Same Day', heroTitle: 'Thor Kitchen Appliance Repair of Westchester County', description: 'Expert Thor Kitchen range and appliance repair in Westchester County NY. Professional-style cooking specialists. Same day service throughout Westchester County.', about: 'Thor Kitchen delivers professional-grade cooking appliances with bold styling. Their stainless steel ranges and range hoods bring commercial kitchen aesthetics to Westchester County homes.', specialty: 'professional ranges, range hoods, dishwashers, and refrigerators', commonIssues: 'Thor Kitchen burner ignition problems, oven not heating, range hood motor failures', whyChoose: 'We service Thor Kitchen\'s professional-style appliances and understand their commercial-inspired construction.' },
  'summit': { name: 'Summit', title: 'Summit Appliance Repair of Westchester County - Same Day', heroTitle: 'Summit Appliance Repair of Westchester County', description: 'Expert Summit refrigerator, freezer & wine cooler repair in Westchester County NY. Compact and ADA-compliant specialists. Same day service throughout Westchester County.', about: 'Summit specializes in compact, ADA-compliant, and medical-grade refrigeration. Their space-saving solutions serve Westchester County apartments, offices, and healthcare facilities.', specialty: 'compact refrigerators, ADA-compliant appliances, medical refrigerators, and wine storage', commonIssues: 'Summit compressor problems, temperature control issues, door seal failures', whyChoose: 'We understand Summit\'s specialized refrigeration including their medical and ADA-compliant units serving Westchester County facilities.' },
  'tappan': { name: 'Tappan', title: 'Tappan Appliance Repair of Westchester County - Same Day', heroTitle: 'Tappan Appliance Repair of Westchester County', description: 'Expert Tappan range and appliance repair in Westchester County NY. Classic American brand specialists. Same day service throughout Westchester County.', about: 'Tappan has been an American kitchen brand since 1881, pioneering innovations in gas cooking. Tappan appliances continue serving Westchester County homes with reliable performance.', specialty: 'gas ranges, electric ranges, wall ovens, and cooktops', commonIssues: 'Tappan oven igniter problems, burner issues, temperature inconsistency', whyChoose: 'We service Tappan\'s reliable American-made ranges and can source parts for both newer and older models.' },
  'roper': { name: 'Roper', title: 'Roper Appliance Repair of Westchester County - Same Day', heroTitle: 'Roper Appliance Repair of Westchester County', description: 'Expert Roper washer, dryer & appliance repair in Westchester County NY. Affordable reliability. Same day service throughout Westchester County.', about: 'Roper delivers quality at budget-friendly prices. These no-frills appliances deliver reliable performance for Westchester County families watching their budget.', specialty: 'washers, dryers, refrigerators, and ranges', commonIssues: 'Roper washer not spinning, dryer not heating, refrigerator problems', whyChoose: 'Roper shares proven technology and parts availability for reliable Westchester County repairs.' },
  'ikea': { name: 'IKEA', title: 'IKEA Appliance Repair of Westchester County - Same Day', heroTitle: 'IKEA Appliance Repair of Westchester County', description: 'Expert IKEA appliance repair in Westchester County NY. Swedish design appliance specialists. Same day service throughout Westchester County.', about: 'IKEA appliances bring Swedish design to integrated kitchens. IKEA appliances fit seamlessly into Westchester County\'s modern kitchen designs with clean Scandinavian aesthetics.', specialty: 'integrated refrigerators, dishwashers, cooktops, and wall ovens', commonIssues: 'IKEA dishwasher drainage, refrigerator temperature, oven heating problems', whyChoose: 'We have extensive experience with IKEA appliances and can service them expertly.' },
  'westinghouse': { name: 'Westinghouse', title: 'Westinghouse Appliance Repair of Westchester County - Same Day', heroTitle: 'Westinghouse Appliance Repair of Westchester County', description: 'Expert Westinghouse appliance repair in Westchester County NY. Classic American brand specialists. Same day service throughout Westchester County.', about: 'Westinghouse pioneered American electrical appliances over a century ago. Today the brand continues through various manufacturers, and we service all Westinghouse appliances in Westchester County.', specialty: 'refrigerators, freezers, dehumidifiers, and small appliances', commonIssues: 'Westinghouse refrigerator not cooling, freezer problems, dehumidifier issues', whyChoose: 'We have experience with Westinghouse\'s various product generations and can service both vintage and modern appliances.' },
  'insignia': { name: 'Insignia', title: 'Insignia Appliance Repair of Westchester County - Same Day', heroTitle: 'Insignia Appliance Repair of Westchester County', description: 'Expert Insignia compact refrigerator, freezer & appliance repair in Westchester County NY. Best Buy brand specialists. Same day service throughout Westchester County.', about: 'Insignia is Best Buy\'s house brand offering affordable compact appliances. Their mini fridges, freezers, and wine coolers serve Westchester County students and apartment dwellers.', specialty: 'compact refrigerators, chest freezers, wine coolers, and ice makers', commonIssues: 'Insignia mini fridge not cooling, freezer temperature problems, ice maker failures', whyChoose: 'We service Insignia\'s affordable appliances and can provide reliable repairs for these budget-friendly units.' },
  'crossover-commercial-laundry': { name: 'Crossover', title: 'Crossover Appliance Repair of Westchester County - Same Day', heroTitle: 'Crossover Commercial Laundry Repair of Westchester County', description: 'Expert Crossover commercial washer and dryer repair in Westchester County NY. Commercial laundry specialists. Same day service for laundromats throughout Westchester County.', about: 'Crossover by Wascomat brings European commercial laundry technology to North American markets. Westchester County laundromats trust Crossover for heavy-duty reliability.', specialty: 'commercial washers, commercial dryers, and stacked laundry units', commonIssues: 'Crossover washer drainage problems, dryer heating issues, coin mechanism failures', whyChoose: 'We specialize in commercial laundry equipment and understand the demanding requirements of Westchester County laundromat operations.' },
  'wascomat': { name: 'Wascomat', title: 'Wascomat Appliance Repair of Westchester County - Same Day', heroTitle: 'Wascomat Appliance Repair of Westchester County', description: 'Expert Wascomat commercial washer and dryer repair in Westchester County NY. European commercial laundry specialists. Same day service throughout Westchester County.', about: 'Wascomat is a leading European commercial laundry equipment manufacturer. Westchester County laundromats and multi-housing facilities rely on Wascomat\'s industrial-grade durability.', specialty: 'commercial washers, commercial dryers, and washer-extractors', commonIssues: 'Wascomat washer not draining, dryer heating problems, bearing failures, coin mechanism issues', whyChoose: 'Our technicians have commercial laundry expertise and can service Wascomat\'s industrial-grade equipment used in Westchester County businesses.' },
  'huebsch': { name: 'Huebsch', title: 'Huebsch Appliance Repair of Westchester County - Same Day', heroTitle: 'Huebsch Appliance Repair of Westchester County', description: 'Expert Huebsch commercial washer and dryer repair in Westchester County NY. Commercial laundry specialists. Same day service throughout Westchester County.', about: 'Huebsch commercial laundry equipment is built with commercial-grade construction. Westchester County laundromats and apartments trust Huebsch\'s durability and reliability.', specialty: 'commercial washers, commercial dryers, and on-premise laundry equipment', commonIssues: 'Huebsch washer transmission problems, dryer not heating, control board failures', whyChoose: 'We understand Huebsch\'s commercial construction used in Westchester County multi-housing facilities.' },
  'alliance-laundry-systems': { name: 'Alliance Laundry Systems', title: 'Alliance Laundry Systems Repair of Westchester County - Same Day', heroTitle: 'Alliance Laundry Systems Repair of Westchester County', description: 'Expert Alliance Laundry Systems commercial laundry repair in Westchester County NY. The world\'s largest commercial laundry manufacturer. Same day service throughout Westchester County.', about: 'Alliance Laundry Systems manufactures commercial laundry equipment in Ripon, Wisconsin. Westchester County laundromats and facilities trust Alliance\'s legendary durability.', specialty: 'commercial washers, dryers, ironers, and multi-housing laundry', commonIssues: 'Commercial washer drainage, dryer heating problems, coin mechanism failures, control board issues', whyChoose: 'We are specialists in Alliance Laundry Systems\' full product line serving Westchester County commercial customers.' },
  'hobart': { name: 'Hobart', title: 'Hobart Appliance Repair of Westchester County - Same Day', heroTitle: 'Hobart Appliance Repair of Westchester County', description: 'Expert Hobart commercial dishwasher, mixer & food equipment repair in Westchester County NY. Commercial kitchen specialists. Same day service throughout Westchester County.', about: 'Hobart has been the leader in commercial food equipment since 1897. Westchester County restaurants and institutions rely on Hobart dishwashers, mixers, and food preparation equipment.', specialty: 'commercial dishwashers, floor mixers, food processors, and slicers', commonIssues: 'Hobart dishwasher not cleaning, mixer motor problems, slicer blade issues', whyChoose: 'We have commercial kitchen equipment expertise and can service Hobart\'s institutional-grade appliances used in Westchester County restaurants and facilities.' },
  'forno': { name: 'Forno', title: 'Forno Appliance Repair of Westchester County - Same Day', heroTitle: 'Forno Appliance Repair of Westchester County', description: 'Expert Forno range and refrigerator repair in Westchester County NY. Italian cooking specialists. Same day service throughout Westchester County.', about: 'Forno brings authentic Italian cooking craftsmanship to professional-style ranges. Their stainless steel appliances add European flair to Westchester County kitchens.', specialty: 'professional ranges, range hoods, and refrigerators', commonIssues: 'Forno range igniter problems, oven temperature inconsistency, burner issues', whyChoose: 'We service Forno\'s Italian-inspired professional ranges and can maintain their European cooking performance.' },
  'fulgor-milano': { name: 'Fulgor Milano', title: 'Fulgor Milano Appliance Repair of Westchester County - Same Day', heroTitle: 'Fulgor Milano Appliance Repair of Westchester County', description: 'Expert Fulgor Milano range and cooktop repair in Westchester County NY. Italian luxury cooking specialists. Same day service in Bronxville, Mamaroneck & all Westchester County.', about: 'Fulgor Milano has crafted professional cooking appliances in Milan, Italy since 1949. Their Sofia and Sophia ranges bring authentic Italian design to Westchester County\'s sophisticated kitchens.', specialty: 'professional ranges, wall ovens, cooktops, and range hoods', commonIssues: 'Fulgor Milano burner ignition problems, oven temperature calibration, convection fan issues', whyChoose: 'We understand Fulgor Milano\'s Italian engineering and can maintain their professional cooking performance.' },
  'panda': { name: 'Panda', title: 'Panda Appliance Repair of Westchester County - Same Day', heroTitle: 'Panda Appliance Repair of Westchester County', description: 'Expert Panda compact washer and dryer repair in Westchester County NY. Portable laundry specialists. Same day service throughout Westchester County.', about: 'Panda specializes in compact and portable laundry solutions perfect for Westchester County apartments without laundry hookups. Their portable washers and ventless dryers enable laundry anywhere.', specialty: 'portable washers, compact dryers, and twin tub washers', commonIssues: 'Panda washer not draining, compact dryer heating problems, spin cycle issues', whyChoose: 'We service Panda\'s portable laundry equipment popular in Westchester County apartments and small spaces.' },
  'equator': { name: 'Equator', title: 'Equator Appliance Repair of Westchester County - Same Day', heroTitle: 'Equator Appliance Repair of Westchester County', description: 'Expert Equator compact washer, dryer & dishwasher repair in Westchester County NY. Space-saving appliance specialists. Same day service throughout Westchester County.', about: 'Equator Advanced Appliances creates compact, combo, and portable appliances for space-constrained living. Westchester County condos and apartments benefit from Equator\'s innovative designs.', specialty: 'washer-dryer combos, compact dishwashers, and portable washers', commonIssues: 'Equator combo washer/dryer problems, compact dishwasher drainage, ventless drying issues', whyChoose: 'We specialize in Equator\'s unique combo appliances and compact designs that maximize space in Westchester County apartments.' },
  'ariston': { name: 'Ariston', title: 'Ariston Appliance Repair of Westchester County - Same Day', heroTitle: 'Ariston Appliance Repair of Westchester County', description: 'Expert Ariston washer, dryer & appliance repair in Westchester County NY. European appliance specialists. Same day service throughout Westchester County.', about: 'Ariston is an Italian appliance brand known for elegant European design and efficient performance. Westchester County homes appreciate Ariston\'s Mediterranean engineering.', specialty: 'washing machines, dryers, dishwashers, and ranges', commonIssues: 'Ariston washer door lock problems, dryer heating issues, dishwasher drainage', whyChoose: 'We service European brands and understand Ariston\'s Italian engineering popular in Westchester County homes.' },
  'beaumark': { name: 'Beaumark', title: 'Beaumark Appliance Repair of Westchester County - Same Day', heroTitle: 'Beaumark Appliance Repair of Westchester County', description: 'Expert Beaumark appliance repair in Westchester County NY. Canadian brand specialists. Same day service throughout Westchester County.', about: 'Beaumark was a Canadian house brand offering reliable home appliances. Our Westchester County technicians can service and maintain existing Beaumark appliances.', specialty: 'refrigerators, ranges, dishwashers, and laundry', commonIssues: 'Beaumark refrigerator not cooling, range problems, appliance age-related issues', whyChoose: 'We have experience with Beaumark appliances and can source parts to keep these units running.' },
  'brada': { name: 'Brada', title: 'Brada Appliance Repair of Westchester County - Same Day', heroTitle: 'Brada Appliance Repair of Westchester County', description: 'Expert Brada appliance repair in Westchester County NY. Compact and portable specialists. Same day service throughout Westchester County.', about: 'Brada offers compact and portable appliances for space-constrained living. Westchester County apartments and small homes benefit from Brada\'s efficient designs.', specialty: 'portable washers, compact dryers, and small appliances', commonIssues: 'Brada washer drainage problems, compact dryer issues, motor failures', whyChoose: 'We service compact appliance brands and can repair Brada units in Westchester County apartments.' },
  'avantgarde': { name: 'Avantgarde', title: 'Avantgarde Appliance Repair of Westchester County - Same Day', heroTitle: 'Avantgarde Appliance Repair of Westchester County', description: 'Expert Avantgarde appliance repair in Westchester County NY. European design specialists. Same day service throughout Westchester County.', about: 'Avantgarde brings European design sensibility to home appliances. Westchester County homeowners appreciate the modern aesthetics and efficient performance.', specialty: 'washers, dryers, and kitchen appliances', commonIssues: 'Avantgarde appliance performance issues, parts sourcing, maintenance', whyChoose: 'We service European-styled brands and can maintain Avantgarde appliances in Westchester County homes.' },
  'five-star': { name: 'Five Star', title: 'Five Star Appliance Repair of Westchester County - Same Day', heroTitle: 'Five Star Appliance Repair of Westchester County', description: 'Expert Five Star range repair in Westchester County NY. Professional cooking specialists. Same day service throughout Westchester County.', about: 'Five Star ranges are built by Brown Stove Works in Tennessee, delivering professional-style cooking at competitive prices. Westchester County home chefs appreciate Five Star\'s open burner performance.', specialty: 'professional ranges, cooktops, and wall ovens', commonIssues: 'Five Star burner ignition problems, oven temperature issues, convection problems', whyChoose: 'We service Five Star\'s professional-style ranges and understand their open burner cooking systems.' },
  'galanz': { name: 'Galanz', title: 'Galanz Appliance Repair of Westchester County - Same Day', heroTitle: 'Galanz Appliance Repair of Westchester County', description: 'Expert Galanz retro refrigerator and microwave repair in Westchester County NY. Retro-style appliance specialists. Same day service throughout Westchester County.', about: 'Galanz is the world\'s largest microwave manufacturer, now offering retro-styled refrigerators and appliances. Their colorful designs add personality to Westchester County kitchens.', specialty: 'retro refrigerators, microwaves, and toaster ovens', commonIssues: 'Galanz refrigerator compressor issues, microwave not heating, temperature problems', whyChoose: 'We service Galanz\'s retro-styled appliances and can maintain their distinctive designs.' },
  'gibson': { name: 'Gibson', title: 'Gibson Appliance Repair of Westchester County - Same Day', heroTitle: 'Gibson Appliance Repair of Westchester County', description: 'Expert Gibson refrigerator, range & appliance repair in Westchester County NY. Classic American brand specialists. Same day service throughout Westchester County.', about: 'Gibson has been an American appliance brand since 1877. Westchester County homes with Gibson appliances trust our reliable repair service.', specialty: 'refrigerators, ranges, dishwashers, and laundry', commonIssues: 'Gibson refrigerator not cooling, range problems, appliance age-related issues', whyChoose: 'We service Gibson appliances and can source parts for reliable repairs.' },
  'hercules': { name: 'Hercules', title: 'Hercules Appliance Repair of Westchester County - Same Day', heroTitle: 'Hercules Appliance Repair of Westchester County', description: 'Expert Hercules commercial laundry repair in Westchester County NY. Commercial equipment specialists. Same day service throughout Westchester County.', about: 'Hercules commercial laundry equipment serves laundromats and multi-housing facilities with heavy-duty performance. Westchester County businesses trust Hercules durability.', specialty: 'commercial washers, commercial dryers, and coin-operated laundry', commonIssues: 'Hercules washer not draining, dryer heating problems, coin mechanism failures', whyChoose: 'We specialize in commercial laundry equipment and can service Hercules machines in Westchester County facilities.' },
  'hisense': { name: 'Hisense', title: 'Hisense Appliance Repair of Westchester County - Same Day', heroTitle: 'Hisense Appliance Repair of Westchester County', description: 'Expert Hisense refrigerator, washer & appliance repair in Westchester County NY. Value brand specialists. Same day service throughout Westchester County.', about: 'Hisense is a major Chinese electronics company offering affordable appliances worldwide. Westchester County budget-conscious shoppers appreciate Hisense\'s value proposition.', specialty: 'refrigerators, washing machines, dehumidifiers, and wine coolers', commonIssues: 'Hisense refrigerator temperature problems, washer drainage issues, dehumidifier failures', whyChoose: 'We service Hisense appliances and can provide reliable repairs for these value-oriented products.' },
  'inglis': { name: 'Inglis', title: 'Inglis Appliance Repair of Westchester County - Same Day', heroTitle: 'Inglis Appliance Repair of Westchester County', description: 'Expert Inglis washer, dryer & appliance repair in Westchester County NY. Reliable laundry specialists. Same day service throughout Westchester County.', about: 'Inglis is historically sold in Canada, known for reliable laundry appliances. Westchester County residents with Inglis appliances trust our experienced service.', specialty: 'washers, dryers, and refrigerators', commonIssues: 'Inglis washer not spinning, dryer not heating, appliance performance issues', whyChoose: 'Inglis shares proven technology and parts availability for reliable Westchester County repairs.' },
  'marvel': { name: 'Marvel', title: 'Marvel Appliance Repair of Westchester County - Same Day', heroTitle: 'Marvel Appliance Repair of Westchester County', description: 'Expert Marvel wine cooler, beverage center & undercounter refrigerator repair in Westchester County NY. Luxury refrigeration specialists. Same day service throughout Westchester County.', about: 'Marvel has specialized in undercounter refrigeration since 1892. Their wine coolers, beverage centers, and ice machines grace Westchester County\'s finest entertainment spaces.', specialty: 'wine coolers, beverage centers, undercounter refrigerators, and ice machines', commonIssues: 'Marvel wine cooler temperature problems, beverage center not cooling, ice maker failures', whyChoose: 'We specialize in Marvel\'s undercounter refrigeration and can maintain their precision cooling in Westchester County homes.' },
  'midea': { name: 'Midea', title: 'Midea Appliance Repair of Westchester County - Same Day', heroTitle: 'Midea Appliance Repair of Westchester County', description: 'Expert Midea washer, dryer, refrigerator & appliance repair in Westchester County NY. World\'s largest appliance manufacturer. Same day service throughout Westchester County.', about: 'Midea is the world\'s largest appliance manufacturer, offering quality products at competitive prices. Westchester County value-seekers appreciate Midea\'s combination of features and affordability.', specialty: 'washers, dryers, refrigerators, dishwashers, and air conditioners', commonIssues: 'Midea washer drainage problems, dryer heating issues, refrigerator temperature control', whyChoose: 'We service Midea\'s diverse appliance line and can provide reliable repairs throughout Westchester County.' },
  'modern-maid': { name: 'Modern Maid', title: 'Modern Maid Appliance Repair of Westchester County - Same Day', heroTitle: 'Modern Maid Appliance Repair of Westchester County', description: 'Expert Modern Maid range and oven repair in Westchester County NY. Classic kitchen appliance specialists. Same day service throughout Westchester County.', about: 'Modern Maid was a premium cooking brand known for innovative oven designs. Our Westchester County technicians can service and maintain existing Modern Maid appliances.', specialty: 'wall ovens, cooktops, and ranges', commonIssues: 'Modern Maid oven heating element failures, temperature calibration, igniter problems', whyChoose: 'We have experience with Modern Maid\'s cooking appliances and can source parts for these classic units.' },
  'moffat': { name: 'Moffat', title: 'Moffat Appliance Repair of Westchester County - Same Day', heroTitle: 'Moffat Appliance Repair of Westchester County', description: 'Expert Moffat range and appliance repair in Westchester County NY. Reliable kitchen specialists. Same day service throughout Westchester County.', about: 'Moffat is historically sold in Canada, offering reliable kitchen appliances. Westchester County residents with Moffat appliances trust our knowledgeable service.', specialty: 'ranges, refrigerators, and dishwashers', commonIssues: 'Moffat range igniter problems, oven temperature issues, refrigerator not cooling', whyChoose: 'Moffat shares proven technology and our technicians have extensive experience with these reliable appliances.' },
  'northland-refrigeration': { name: 'Northland', title: 'Northland Appliance Repair of Westchester County - Same Day', heroTitle: 'Northland Appliance Repair of Westchester County', description: 'Expert Northland refrigerator and freezer repair in Westchester County NY. Built-in refrigeration specialists. Same day service throughout Westchester County.', about: 'Northland specializes in built-in refrigeration with professional styling. Their stainless steel refrigerators and freezers serve Westchester County\'s custom kitchen designs.', specialty: 'built-in refrigerators, built-in freezers, and wine storage', commonIssues: 'Northland compressor issues, temperature fluctuations, ice maker problems', whyChoose: 'We service built-in refrigeration brands and can maintain Northland units in Westchester County\'s custom kitchens.' },
  'porter-charles': { name: 'Porter & Charles', title: 'Porter & Charles Appliance Repair of Westchester County - Same Day', heroTitle: 'Porter & Charles Appliance Repair of Westchester County', description: 'Expert Porter & Charles appliance repair in Westchester County NY. European-style appliance specialists. Same day service throughout Westchester County.', about: 'Porter & Charles offers European-styled kitchen appliances with clean design aesthetics. Westchester County homeowners appreciate their modern, space-efficient designs.', specialty: 'refrigerators, dishwashers, and cooking appliances', commonIssues: 'Porter & Charles appliance performance issues, maintenance, parts sourcing', whyChoose: 'We service European-style brands and can maintain Porter & Charles appliances in Westchester County homes.' },
  'premier': { name: 'Premier', title: 'Premier Appliance Repair of Westchester County - Same Day', heroTitle: 'Premier Appliance Repair of Westchester County', description: 'Expert Premier range and oven repair in Westchester County NY. American-made cooking specialists. Same day service throughout Westchester County.', about: 'Premier ranges are built by Brown Stove Works in Tennessee, offering reliable American-made cooking at affordable prices. Westchester County families trust Premier\'s dependable performance.', specialty: 'gas ranges, electric ranges, and wall ovens', commonIssues: 'Premier range igniter problems, oven temperature calibration, burner issues', whyChoose: 'We service Premier\'s American-made ranges and understand their straightforward, reliable construction.' },
  'signature-kitchen-suite': { name: 'Signature Kitchen Suite', title: 'Signature Kitchen Suite Appliance Repair of Westchester County - Same Day', heroTitle: 'Signature Kitchen Suite Appliance Repair of Westchester County', description: 'Expert Signature Kitchen Suite refrigerator, range & dishwasher repair in Westchester County NY. Ultra-luxury appliance specialists. Same day service in Bedford, Purchase & all Westchester County.', about: 'Signature Kitchen Suite is an ultra-luxury appliance brand, combining Korean innovation with professional performance. Westchester County\'s most sophisticated kitchens feature Signature\'s precision engineering.', specialty: 'built-in refrigerators, professional ranges, dishwashers, and wine storage', commonIssues: 'Signature refrigerator temperature issues, range igniter problems, dishwasher drainage', whyChoose: 'We are trained on Signature Kitchen Suite\'s premium technologies and can service their advanced features in Westchester County\'s luxury kitchens.' },
  'sirius': { name: 'Sirius', title: 'Sirius Appliance Repair of Westchester County - Same Day', heroTitle: 'Sirius Appliance Repair of Westchester County', description: 'Expert Sirius range hood and ventilation repair in Westchester County NY. European ventilation specialists. Same day service throughout Westchester County.', about: 'Sirius creates European-designed range hoods with elegant styling and powerful ventilation. Westchester County\'s design-forward kitchens feature Sirius\'s distinctive hood designs.', specialty: 'range hoods, ventilation systems, and downdraft ventilation', commonIssues: 'Sirius hood motor problems, light failures, control panel issues', whyChoose: 'We service European ventilation brands and can maintain Sirius hoods\' performance and distinctive styling.' },
  'venmar': { name: 'Venmar', title: 'Venmar Appliance Repair of Westchester County - Same Day', heroTitle: 'Venmar Appliance Repair of Westchester County', description: 'Expert Venmar range hood and ventilation repair in Westchester County NY. Canadian ventilation specialists. Same day service throughout Westchester County.', about: 'Venmar is a leading Canadian range hood manufacturer offering powerful ventilation in stylish designs. Westchester County kitchens benefit from Venmar\'s effective smoke and odor removal.', specialty: 'range hoods, downdraft systems, and ventilation', commonIssues: 'Venmar hood motor failures, blower problems, light issues', whyChoose: 'We service Venmar range hoods and can restore powerful ventilation to your Westchester County kitchen.' },
  'black-decker': { name: 'Black & Decker', title: 'Black & Decker Appliance Repair of Westchester County - Same Day', heroTitle: 'Black & Decker Appliance Repair of Westchester County', description: 'Expert Black & Decker small appliance repair in Westchester County NY. Countertop appliance specialists. Same day service throughout Westchester County.', about: 'Black & Decker has been an American household name since 1910. Their countertop appliances and small kitchen products serve Westchester County homes reliably.', specialty: 'toaster ovens, coffee makers, microwaves, and small appliances', commonIssues: 'Black & Decker toaster oven heating issues, coffee maker problems, microwave failures', whyChoose: 'We service Black & Decker small appliances and can keep your Westchester County countertop products working.' }
};

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  // Add noindex for pages.dev domains
  if (hostname.includes('pages.dev')) {
    const response = await next();
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      let html = await response.text();
      html = html.replace(
        /<meta name="robots" content="index, follow">/,
        '<meta name="robots" content="noindex, nofollow">'
      );
      return new Response(html, {
        status: response.status,
        headers: response.headers
      });
    }
    return response;
  }

  // Extract subdomain
  const subdomain = hostname.split('.')[0];

  // Check if this is a brand subdomain
  const brand = brandData[subdomain];

  if (!brand) {
    // Not a brand subdomain, serve normally
    return next();
  }

  // Fetch the original page
  const response = await next();

  // Only modify HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    return response;
  }

  let html = await response.text();

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${brand.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${brand.description}">`
  );

  // Replace meta author
  html = html.replace(
    /<meta name="author" content=".*?">/,
    `<meta name="author" content="${brand.heroTitle}">`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?">/,
    `<link rel="canonical" href="https://${hostname}/">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?">/,
    `<meta property="og:title" content="${brand.title}">`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?">/,
    `<meta property="og:description" content="${brand.description}">`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?">/,
    `<meta property="og:url" content="https://${hostname}/">`
  );

  // Replace hero title - look for the main h1
  html = html.replace(
    /Westchester County Appliance Repair Service(?=<\/)/g,
    brand.heroTitle
  );

  // Add brand-specific hero subtitle after "Same-Day Repairs"
  html = html.replace(
    /Professional Same-Day Appliance Repair/,
    `Professional ${brand.name} Appliance Repair`
  );

  // Replace "Trusted Local Experts" section content if it exists
  html = html.replace(
    /Your Trusted Local Appliance Repair Experts/g,
    `Your Trusted ${brand.name} Repair Experts in Westchester County`
  );

  // Update schema.org name
  html = html.replace(
    /"name": "Westchester County Appliance Repair Service"/,
    `"name": "${brand.heroTitle}"`
  );
  html = html.replace(
    /"name": "Westchester County Appliance Repair"/,
    `"name": "${brand.heroTitle}"`
  );

  // Update schema.org @id and url
  html = html.replace(
    /"@id": "https:\/\/bergencountyappliancerepair\.com\/"/g,
    `"@id": "https://${hostname}/"`
  );
  html = html.replace(
    /"url": "https:\/\/bergencountyappliancerepair\.com\/"/g,
    `"url": "https://${hostname}/"`
  );
  html = html.replace(
    /"image": "https:\/\/bergencountyappliancerepair\.com\//g,
    `"image": "https://${hostname}/`
  );

  // Add brand indicator for styling
  html = html.replace(
    /<body/,
    `<body data-brand="${subdomain}"`
  );

  // Update footer with brand name
  html = html.replace(
    /Westchester County Appliance Repair Service\. All rights reserved/g,
    `${brand.heroTitle}. All rights reserved`
  );
  html = html.replace(
    />Westchester County Appliance Repair Service</g,
    `>${brand.heroTitle}<`
  );
  html = html.replace(
    />Westchester County Appliance Repair</g,
    `>${brand.heroTitle}<`
  );

  // Replace services section heading with brand name
  html = html.replace(
    /Expert Repair for All appliance Appliances/g,
    `Expert Repair for All ${brand.name} Appliances`
  );

  // Replace service areas dropdown with all Westchester County towns
  const allTownsHtml = `<div class="service-areas-submenu" id="serviceAreasSubmenu">
    <li><a href="#sa-service-areas" class="scroll-link">Ardsley</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Bedford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Briarcliff Manor</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Bronxville</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Buchanan</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Cortlandt</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Croton-on-Hudson</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Tarrytown</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Irvington</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Dobbs Ferry</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Eastchester</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Elmsford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Greenburgh</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Harrison</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Mount Vernon</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Mount Vernon Cliffs</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Hastings-on-Hudson</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Katonah</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">New Rochelle</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Chappaqua</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Lewisboro</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Mamaroneck</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">White Plains</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Harrington Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Hasbrouck Heights</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Haworth</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Hillsdale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Pelham</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Leonia</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Little Ferry</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Lodi</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Lyndhurst</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Mahwah</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Maywood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Midland Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Montvale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Moonachie</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">New Milford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">North Arlington</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Northvale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Norwood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Oakland</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Old Tappan</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Oradell</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Palisades Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Yonkers</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Park Ridge</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ramsey</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ridgefield</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ridgefield Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Bronxville</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">River Edge</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">River Vale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rochelle Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rockleigh</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rutherford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Saddle Brook</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Purchase</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">South White Plains</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Scarsdale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Larchmont</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Teterboro</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Upper Purchase</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Waldwick</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Wallington</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Washington Township</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Westwood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Woodcliff Lake</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Wood-Ridge</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rye</a></li>
  </div>`;

  html = html.replace(
    /<div class="service-areas-submenu" id="serviceAreasSubmenu">[\s\S]*?<\/div>/,
    allTownsHtml
  );

  // Add brand prefix to appliance type dropdown options
  html = html.replace(/value="Washer Repair">Washer<\/option>/g, `value="Washer Repair">${brand.name} Washer</option>`);
  html = html.replace(/value="Dryer Repair">Dryer<\/option>/g, `value="Dryer Repair">${brand.name} Dryer</option>`);
  html = html.replace(/value="Refrigerator Repair">Refrigerator<\/option>/g, `value="Refrigerator Repair">${brand.name} Refrigerator</option>`);
  html = html.replace(/value="Dishwasher Repair">Dishwasher<\/option>/g, `value="Dishwasher Repair">${brand.name} Dishwasher</option>`);
  html = html.replace(/value="Oven Repair">Oven<\/option>/g, `value="Oven Repair">${brand.name} Oven</option>`);
  html = html.replace(/value="Microwave Repair">Microwave<\/option>/g, `value="Microwave Repair">${brand.name} Microwave</option>`);
  html = html.replace(/value="Freezer Repair">Freezer<\/option>/g, `value="Freezer Repair">${brand.name} Freezer</option>`);
  html = html.replace(/value="Cooktop Repair">Cooktop<\/option>/g, `value="Cooktop Repair">${brand.name} Cooktop</option>`);
  html = html.replace(/value="Hood Vent Repair">Hood Vent<\/option>/g, `value="Hood Vent Repair">${brand.name} Hood Vent</option>`);
  html = html.replace(/value="Other">Other<\/option>/g, `value="Other">${brand.name} Other</option>`);

  // Remove cross-brand contamination - replace generic brand references with specific brand
  html = html.replace(/all major appliance brands/gi, `all ${brand.name} appliances`);
  html = html.replace(/all major home appliance brands/gi, `all ${brand.name} appliances`);
  html = html.replace(/At Westchester County Appliance Repair/g, `At ${brand.name} Appliance Repair of Westchester County`);
  html = html.replace(/When you choose Westchester County Appliance Repair/g, `When you choose ${brand.name} Appliance Repair of Westchester County`);
  html = html.replace(/When you trust us with your appliances/g, `When you trust us with your ${brand.name} appliances`);
  html = html.replace(/all appliance categories/gi, `all ${brand.name} appliance categories`);
  html = html.replace(/any appliance regardless/gi, `any ${brand.name} appliance regardless`);
  html = html.replace(/appliance engineering/gi, `${brand.name} engineering`);
  html = html.replace(/understanding the sophisticated engineering/gi, `understanding ${brand.name}'s sophisticated engineering`);
  html = html.replace(/Oven Models We Service/g, `${brand.name} Oven Models We Service`);
  html = html.replace(/Cooktop Models We Service/g, `${brand.name} Cooktop Models We Service`);
  html = html.replace(/Microwave Models We Service/g, `${brand.name} Microwave Models We Service`);
  html = html.replace(/Refrigerator Models We Service/g, `${brand.name} Refrigerator Models We Service`);
  html = html.replace(/Dryer Models We Service/g, `${brand.name} Dryer Models We Service`);
  html = html.replace(/Washer Models We Service/g, `${brand.name} Washer Models We Service`);
  html = html.replace(/Dishwasher Models We Service/g, `${brand.name} Dishwasher Models We Service`);
  html = html.replace(/Hood Vent Models We Service/g, `${brand.name} Hood Vent Models We Service`);
  html = html.replace(/qualified to service all major brands/gi, `qualified to service all ${brand.name} models`);
  html = html.replace(/We service all dryer models/gi, `We service all ${brand.name} dryer models`);
  html = html.replace(/We service all washer models/gi, `We service all ${brand.name} washer models`);
  html = html.replace(/service all hood and ventilation models/gi, `service all ${brand.name} hood and ventilation models`);
  html = html.replace(/dryers require specialized knowledge/gi, `${brand.name} dryers require specialized knowledge`);
  html = html.replace(/require understanding of electrical systems/gi, `${brand.name} repairs require understanding of electrical systems`);

  // Remove authorized and factory claims for Bertazzoni and Gaggenau
  if (subdomain === 'bertazzoni' || subdomain === 'gaggenau') {
    html = html.replace(/Authorized/gi, 'Expert');
    html = html.replace(/Factory[- ]?Certified/gi, 'Yearly Training');
    html = html.replace(/Factory[- ]?Trained/gi, 'Trained');
    html = html.replace(/factory certified/gi, 'yearly training');
    html = html.replace(/factory trained/gi, 'trained');
    html = html.replace(/factory training/gi, 'yearly training');
    html = html.replace(/Factory Expert/gi, 'Professional');
    html = html.replace(/Factory Certification/gi, 'Yearly Training');
    html = html.replace(/factory certification/gi, 'yearly training');
    html = html.replace(/With factory certification/gi, 'With yearly training');
    html = html.replace(/Certified Technicians/gi, 'Expert Technicians');
    html = html.replace(/certified technicians/gi, 'expert technicians');
    html = html.replace(/Certified/g, 'Trained');
    html = html.replace(/certified/g, 'trained');
    // Replace the certification explanation content
    html = html.replace(
      /<h3>What is Professional Certification\?<\/h3>[\s\S]*?<p>With professional certification, our team is qualified to service[^<]*<\/p>/,
      `<h3>What is Yearly Training?</h3>
            <p>Our technicians participate in ongoing yearly training programs to stay current with the latest appliance repair techniques and technologies. This continuous education ensures our team maintains expertise in general appliance repair, diagnostics, and service procedures across all major appliance types.</p>
            <p>Through yearly training, our technicians develop hands-on experience with a wide range of appliances, learning the latest troubleshooting methods and repair techniques. This commitment to ongoing education means our team brings current knowledge and proven expertise to every service call.</p>
            <p>With yearly training, our team is qualified to service all major appliance brands and models.</p>`
    );
    // Make training content general but keep brand identity
    html = html.replace(/Trained and trained to/gi, 'trained to');
    html = html.replace(/This certification represents/gi, 'Our yearly training represents');

    // Replace the Professional Service section entirely
    html = html.replace(
      /<p><strong>Professional Service<\/strong><\/p>[\s\S]*?<h3>What is Yearly Training\?<\/h3>[\s\S]*?genuine replacement parts\.<\/p>/,
      `<p><strong>Professional Service</strong></p>
            <p>At ${brand.name} Appliance Repair of Westchester County, our technicians are experts in all ${brand.name} appliances. Our team receives yearly training on general appliance repair techniques, diagnostics, and service procedures to ensure we deliver the highest standard of repair service.</p>

            <h3>What is Yearly Training?</h3>
            <p>Our technicians participate in yearly training programs covering general appliance repair, advanced diagnostics, and the latest service techniques. This ongoing education ensures our team stays current with evolving appliance technology and repair methods, bringing expert knowledge to every ${brand.name} service call.</p>`
    );
  }

  return new Response(html, {
    status: response.status,
    headers: response.headers
  });
}

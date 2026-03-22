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
    description: 'Expert Kenmore washer, dryer, refrigerator & dishwasher repair in Westchester County NY. Century-old American heritage. Same day service throughout Westchester County.',
    heroTitle: 'Kenmore Appliance Repair of Westchester County',
    about: 'Kenmore launched in 1913 as a Sears exclusive, becoming America\'s most recognized appliance name. Westchester County households spanning generations have equipped their homes with Kenmore reliability.',
    specialty: 'Elite series laundry, Pro series cooking, bottom-freezer refrigerators, and stainless dishwashers',
    commonIssues: 'Kenmore Elite control board diagnostics, direct-drive motor coupling replacement, adaptive defrost system repair, touch-panel calibration',
    whyChoose: 'Our Westchester County technicians decode Kenmore model numbers to identify original manufacturers and apply correct service procedures for every unit.'
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
    description: 'Expert Hotpoint washer, dryer, refrigerator & range repair in Westchester County NY. Value-focused appliance specialists. Same day appointments throughout Westchester County.',
    heroTitle: 'Hotpoint Appliance Repair of Westchester County',
    about: 'Hotpoint entered American kitchens over a century ago with practical, budget-conscious appliances. Westchester County renters and homeowners seeking dependable performance without premium prices continue choosing Hotpoint.',
    specialty: 'agitator washers, coil-top ranges, wire-shelf refrigerators, and front-control dishwashers',
    commonIssues: 'Hotpoint agitator coupling wear, dryer drum belt failures, defrost timer malfunctions, range infinite switch problems',
    whyChoose: 'Our Westchester County technicians efficiently diagnose and repair Hotpoint appliances using readily available parts for fast, affordable service.'
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
    description: 'Expert Liebherr refrigerator and freezer repair in Westchester County NY. Austrian-German precision refrigeration. Same day service in Bronxville, Pelham & all Westchester County.',
    heroTitle: 'Liebherr Appliance Repair of Westchester County',
    about: 'Liebherr combines Austrian manufacturing excellence with German engineering precision for refrigeration that outperforms. Their NoFrost technology and BioFresh compartments extend freshness in Westchester County kitchens.',
    specialty: 'Monolith columns, freestanding BioFresh units, Vinidor wine cabinets, and NoFrost freezers',
    commonIssues: 'Liebherr variable speed compressor diagnostics, BioFresh humidity sensor calibration, Monolith door alignment, SoftSystem hinge adjustment',
    whyChoose: 'Westchester County homeowners trust us with their Liebherr investments because we understand European refrigeration engineering from compressor to climate control.'
  },
  'monogram': {
    name: 'Monogram',
    title: 'Monogram Appliance Repair of Westchester County - Same Day',
    description: 'Expert Monogram refrigerator, range & dishwasher repair in Westchester County NY. American luxury specialists. Same day service in Chappaqua, Rye & all Westchester County.',
    heroTitle: 'Monogram Appliance Repair of Westchester County',
    about: 'Monogram elevates the American kitchen with professional performance crafted in Louisville. Statement pieces featuring brass accents and customizable aesthetics distinguish Westchester County\'s most thoughtfully designed culinary spaces.',
    specialty: 'Statement Collection ranges, integrated columns, Advantium speedcook ovens, and professional vent hoods',
    commonIssues: 'Monogram Advantium magnetron failures, column refrigerator sealed system service, induction element diagnostics, Zoneline HVAC integration',
    whyChoose: 'We deliver the white-glove service Monogram owners expect, with expertise in their connected features and professional-grade components throughout Westchester County.'
  },
  'smeg': {
    name: 'Smeg',
    title: 'Smeg Appliance Repair of Westchester County - Same Day',
    description: 'Expert Smeg refrigerator, range & dishwasher repair in Westchester County NY. Iconic Italian design specialists. Same day service in Mamaroneck, Larchmont & all Westchester County.',
    heroTitle: 'Smeg Appliance Repair of Westchester County',
    about: 'From Guastalla, Italy, Smeg transforms kitchens into design statements with their iconic FAB refrigerators and Portofino ranges. Westchester County homes embrace Smeg\'s bold colors and retro-modern aesthetic.',
    specialty: 'FAB retro refrigerators, Portofino ranges, Planetarium dishwashers, and Victoria collection ovens',
    commonIssues: 'Smeg FAB compressor longevity, Portofino ignition system service, Planetarium orbital wash arm repairs, Victoria thermostat calibration',
    whyChoose: 'We preserve Smeg\'s distinctive aesthetic while ensuring flawless operation, understanding both the Italian design philosophy and mechanical precision Westchester County owners demand.'
  },
  'bertazzoni': {
    name: 'Bertazzoni',
    title: 'Bertazzoni Appliance Repair of Westchester County - Same Day',
    description: 'Expert Bertazzoni range and oven repair in Westchester County NY. Six generations of Italian craftsmanship. Same day service in Bronxville, Mamaroneck & all Westchester County.',
    heroTitle: 'Bertazzoni Appliance Repair of Westchester County',
    about: 'The Bertazzoni family has perfected cooking appliances in Emilia-Romagna since 1882. Their Heritage and Professional series deliver Italian engineering and colorful Mediterranean style to Westchester County\'s food-focused homes.',
    specialty: 'Heritage series ranges, Professional series dual-fuel, Master series cooktops, and matching refrigeration',
    commonIssues: 'Bertazzoni brass burner maintenance, dual-fuel transition valve service, soft-close hinge adjustment, electronic ignition timing',
    whyChoose: 'Westchester County\'s Italian cooking enthusiasts trust our deep understanding of Bertazzoni\'s unique combination of traditional craftsmanship and modern precision.'
  },
  'fisher-paykel': {
    name: 'Fisher & Paykel',
    title: 'Fisher & Paykel Appliance Repair of Westchester County - Same Day',
    description: 'Expert Fisher & Paykel dishwasher, refrigerator & laundry repair in Westchester County NY. New Zealand engineering excellence. Same day service throughout Westchester County.',
    heroTitle: 'Fisher & Paykel Appliance Repair of Westchester County',
    about: 'Auckland-based Fisher & Paykel rethinks appliance design with innovations like DishDrawer and ActiveSmart AI. Their human-centered approach creates intuitive appliances embraced by Westchester County\'s modern households.',
    specialty: 'DishDrawer single and double units, ActiveSmart refrigerators, FabricSmart washers, and Professional cooking',
    commonIssues: 'DishDrawer motor controller diagnostics, ActiveSmart temperature learning resets, SmartDrive direct-drive motor service, CoolDrawer mode calibration',
    whyChoose: 'Our Westchester County technicians master Fisher & Paykel\'s unconventional engineering, from drawer-based dishwashing to artificial intelligence refrigeration.'
  },
  'admiral': { name: 'Admiral', title: 'Admiral Appliance Repair of Westchester County - Same Day', heroTitle: 'Admiral Appliance Repair of Westchester County', description: 'Expert Admiral refrigerator, washer & dryer repair in Westchester County NY. Classic American appliance service. Same day service throughout Westchester County.', about: 'Admiral established itself as an American value leader with straightforward, repairable appliances. Many Westchester County homes still run Admiral units from decades past.', specialty: 'frost-free refrigerators, belt-drive washers, conventional dryers, and chest freezers', commonIssues: 'Admiral evaporator fan failures, washer transmission wear, dryer thermal fuse trips, freezer gasket deterioration', whyChoose: 'We maintain expertise in Admiral\'s classic designs and stock parts for these enduring Westchester County appliances.' },
  'aeg': { name: 'AEG', title: 'AEG Appliance Repair of Westchester County - Same Day', heroTitle: 'AEG Appliance Repair of Westchester County', description: 'Expert AEG dishwasher, washer & oven repair in Westchester County NY. Pioneering German technology. Same day service throughout Westchester County.', about: 'AEG invented the electric motor-driven appliance in 1889 and continues advancing German engineering. Their ProSteam and SoftWater technologies deliver premium results in Westchester County laundry rooms.', specialty: 'ProSteam washers, AbsoluteCare dryers, ComfortLift dishwashers, and SteamBake ovens', commonIssues: 'AEG ProSteam generator descaling, ComfortLift mechanism adjustment, inverter motor diagnostics, SteamBake element service', whyChoose: 'Westchester County owners of German-engineered AEG appliances trust our understanding of their sophisticated ProSense and OptiSense technologies.' },
  'blomberg': { name: 'Blomberg', title: 'Blomberg Appliance Repair of Westchester County - Same Day', heroTitle: 'Blomberg Appliance Repair of Westchester County', description: 'Expert Blomberg dishwasher, washer & refrigerator repair in Westchester County NY. European efficiency specialists. Same day service throughout Westchester County.', about: 'Blomberg delivers German-designed, Turkish-built appliances engineered for efficiency and compact spaces. Their 24-inch appliance suite fits perfectly in Westchester County apartments and townhomes.', specialty: '24-inch dishwashers, heat pump dryers, counter-depth refrigerators, and slim-profile ranges', commonIssues: 'Blomberg heat pump condenser cleaning, WaterSafe leak detection resets, compact drum bearing service, slim refrigerator fan motor replacement', whyChoose: 'We specialize in Blomberg\'s space-optimized European engineering that maximizes performance in Westchester County\'s smaller kitchens.' },
  'bluestar': { name: 'BlueStar', title: 'BlueStar Appliance Repair of Westchester County - Same Day', heroTitle: 'BlueStar Appliance Repair of Westchester County', description: 'Expert BlueStar range and cooktop repair in Westchester County NY. American-made professional cooking. Same day service in Bedford, Purchase & all Westchester County.', about: 'BlueStar manufactures restaurant-grade ranges in Reading, Pennsylvania, offering 1,000+ custom colors and 25,000 BTU open burners. Westchester County\'s most passionate cooks demand BlueStar\'s professional performance.', specialty: 'Platinum series ranges, RNB open-burner cooktops, PowR infrared broilers, and Prizer Painter hoods', commonIssues: 'BlueStar open burner clog cleaning, PowR infrared element replacement, convection blower service, heavy-duty hinge adjustment', whyChoose: 'Westchester County\'s serious home chefs trust our expertise with BlueStar\'s restaurant-derived open burner technology and commercial-grade construction.' },
  'cafe': { name: 'Cafe', title: 'Cafe Appliance Repair of Westchester County - Same Day', heroTitle: 'Cafe Appliance Repair of Westchester County', description: 'Expert Cafe refrigerator, range & dishwasher repair in Westchester County NY. Designer kitchen specialists. Same day service throughout Westchester County.', about: 'Cafe empowers Westchester County homeowners to personalize their kitchens with interchangeable hardware in matte black, brushed brass, copper, and stainless finishes. SmartHQ connectivity adds intelligent control.', specialty: 'Matte Collection refrigerators, customizable ranges, bottle-wash dishwashers, and connected wall ovens', commonIssues: 'Cafe Keurig K-Cup brewer service, autofill dispenser calibration, SmartHQ WiFi troubleshooting, precision cooking probe diagnostics', whyChoose: 'We understand Cafe\'s unique customizable design philosophy and connected features that distinguish Westchester County\'s personalized kitchens.' },
  'cove': { name: 'Cove', title: 'Cove Appliance Repair of Westchester County - Same Day', heroTitle: 'Cove Appliance Repair of Westchester County', description: 'Expert Cove dishwasher repair in Westchester County NY. Wisconsin-crafted luxury. Same day service in Bedford, Purchase & all Westchester County.', about: 'Handcrafted in Wisconsin, Cove dishwashers feature 44 dBA quiet operation, bottle-wash jets, and stainless steel interiors. Westchester County\'s luxury kitchens showcase Cove\'s exceptional cleaning performance.', specialty: '24-inch panel-ready dishwashers, bottle-wash spray arms, and triple-filtration systems', commonIssues: 'Cove triple-rack rail adjustment, bottle-wash jet calibration, panel-ready door alignment, drain pump diagnostics', whyChoose: 'Westchester County\'s discerning homeowners trust us with their Cove dishwashers because we understand Wisconsin luxury craftsmanship.' },
  'dcs': { name: 'DCS', title: 'DCS Appliance Repair of Westchester County - Same Day', heroTitle: 'DCS Appliance Repair of Westchester County', description: 'Expert DCS grill, range & refrigerator repair in Westchester County NY. Indoor-outdoor cooking specialists. Same day service throughout Westchester County.', about: 'DCS by Fisher & Paykel bridges professional kitchens and outdoor entertaining with commercial-grade construction. Westchester County\'s alfresco cooks and indoor chefs rely on DCS durability.', specialty: 'Series 9 grills, professional rangetops, ActiveSmart refrigeration, and outdoor cabinetry', commonIssues: 'DCS infrared rotisserie burner service, ceramic radiant grill maintenance, outdoor refrigerator compressor care, rangetop thermocouple replacement', whyChoose: 'We service DCS\'s professional-grade construction for both indoor and outdoor applications throughout Westchester County estates.' },
  'haier': { name: 'Haier', title: 'Haier Appliance Repair of Westchester County - Same Day', heroTitle: 'Haier Appliance Repair of Westchester County', description: 'Expert Haier refrigerator, washer, dryer & wine cooler repair in Westchester County NY. Global innovation specialists. Same day service throughout Westchester County.', about: 'Haier, headquartered in Qingdao, China, leads global appliance manufacturing with solutions from compact wine coolers to full-size laundry. Westchester County apartments and homes benefit from Haier\'s versatile lineup.', specialty: 'dual-zone wine cellars, combo washer-dryers, counter-depth refrigerators, and portable air conditioners', commonIssues: 'Haier wine cellar thermoelectric cooling service, combo unit ventless drying optimization, compact refrigerator defrost system repair', whyChoose: 'From studio apartments to Westchester County estates, we service Haier\'s full range of innovative appliance solutions.' },
  'hestan': { name: 'Hestan', title: 'Hestan Appliance Repair of Westchester County - Same Day', heroTitle: 'Hestan Appliance Repair of Westchester County', description: 'Expert Hestan range, grill & refrigerator repair in Westchester County NY. California ultra-luxury specialists. Same day service in Bedford, Purchase & all Westchester County.', about: 'Hestan, built in Anaheim, California, represents the pinnacle of American cooking innovation with proprietary Marquise burners and 30,000 BTU output. Westchester County\'s culinary perfectionists demand Hestan excellence.', specialty: 'KRS ranges, Aspire grills, undercounter refrigeration, and commercial wine storage', commonIssues: 'Hestan Marquise burner optimization, Aspire grill ceramic rod maintenance, column refrigerator temperature calibration, wine storage humidity control', whyChoose: 'We deliver the precision service Hestan\'s ultra-premium engineering demands for Westchester County\'s most sophisticated culinary installations.' },
  'broan': { name: 'Broan', title: 'Broan Appliance Repair of Westchester County - Same Day', heroTitle: 'Broan Appliance Repair of Westchester County', description: 'Expert Broan range hood, ventilation & exhaust fan repair in Westchester County NY. Indoor air quality specialists. Same day service throughout Westchester County.', about: 'Broan-NuTone has maintained healthy indoor air in American homes since 1932, now combining ventilation with smart home integration. Westchester County kitchens and bathrooms breathe easier with Broan systems.', specialty: 'Elite series range hoods, Sensonic bathroom fans, Overture smart ventilation, and NuTone central vacuums', commonIssues: 'Broan blower motor bearing wear, humidity sensor calibration, LED driver replacement, ductwork optimization', whyChoose: 'Our Westchester County technicians restore optimal airflow and quiet operation to Broan ventilation systems protecting your indoor air quality.' },
  'capital-cooking': { name: 'Capital Cooking', title: 'Capital Cooking Appliance Repair of Westchester County - Same Day', heroTitle: 'Capital Cooking Appliance Repair of Westchester County', description: 'Expert Capital range and cooktop repair in Westchester County NY. California professional cooking. Same day service in Bronxville, Rye & all Westchester County.', about: 'Capital Cooking Equipment builds commercial-inspired ranges in the City of Industry, California, with open burners reaching 25,000 BTU. Westchester County\'s accomplished home cooks achieve restaurant results with Capital.', specialty: 'Culinarian series ranges, Precision series cooktops, Connoisseurian outdoor grills, and commercial wall ovens', commonIssues: 'Capital open burner flame distribution, Moist-Heat self-cleaning diagnostics, dual-fuel crossover ignition service, outdoor grill ceramic element care', whyChoose: 'Westchester County\'s professional-style kitchens trust our understanding of Capital\'s true open-burner technology and commercial construction standards.' },
  'danby': { name: 'Danby', title: 'Danby Appliance Repair of Westchester County - Same Day', heroTitle: 'Danby Appliance Repair of Westchester County', description: 'Expert Danby compact refrigerator, freezer & wine cooler repair in Westchester County NY. Canadian compact specialists. Same day service throughout Westchester County.', about: 'Ontario-based Danby designs compact and specialty appliances for North American living spaces. Their Silhouette wine coolers and Diplomat mini fridges serve Westchester County apartments, offices, and entertaining spaces.', specialty: 'Silhouette wine cellars, Designer mini refrigerators, Diplomat chest freezers, and portable air conditioners', commonIssues: 'Danby Silhouette compressor cycle optimization, thermoelectric wine cooler element service, mini-fridge evaporator frost, portable AC capacitor replacement', whyChoose: 'We maintain Danby\'s compact appliance line that maximizes functionality in Westchester County\'s space-conscious settings.' },
  'avanti': { name: 'Avanti', title: 'Avanti Appliance Repair of Westchester County - Same Day', heroTitle: 'Avanti Appliance Repair of Westchester County', description: 'Expert Avanti compact refrigerator, wine cooler & appliance repair in Westchester County NY. Space-efficient living. Same day service throughout Westchester County.', about: 'Miami-based Avanti Products develops compact appliances that maximize small living spaces. Their wine enthusiast coolers and efficiency kitchens enhance Westchester County studio apartments and guest suites.', specialty: 'dual-zone wine coolers, complete mini kitchens, beverage centers, and countertop dishwashers', commonIssues: 'Avanti dual-zone temperature balancing, mini kitchen range element replacement, beverage center fan motor service, compact dishwasher pump diagnostics', whyChoose: 'We understand the unique engineering of Avanti\'s compact appliances that bring full functionality to Westchester County\'s smaller spaces.' },
  'magic-chef': { name: 'Magic Chef', title: 'Magic Chef Appliance Repair of Westchester County - Same Day', heroTitle: 'Magic Chef Appliance Repair of Westchester County', description: 'Expert Magic Chef refrigerator, microwave & compact appliance repair in Westchester County NY. Value-focused solutions. Same day service throughout Westchester County.', about: 'Magic Chef delivers practical compact appliances at accessible prices. Their ENERGY STAR refrigerators and versatile microwaves provide reliable performance for Westchester County budget-conscious homes and rental units.', specialty: 'energy-efficient compact refrigerators, over-the-range microwaves, wine coolers, and ice makers', commonIssues: 'Magic Chef magnetron replacement, compact fridge thermostat adjustment, wine cooler vibration dampening, portable ice maker water line maintenance', whyChoose: 'We provide cost-effective repairs for Magic Chef appliances, keeping Westchester County households running without major expense.' },
  'sharp': { name: 'Sharp', title: 'Sharp Appliance Repair of Westchester County - Same Day', heroTitle: 'Sharp Appliance Repair of Westchester County', description: 'Expert Sharp microwave, microwave drawer & appliance repair in Westchester County NY. Japanese microwave pioneers. Same day service throughout Westchester County.', about: 'Sharp Corporation of Japan invented the turntable microwave and now leads with drawer-style installations and SuperSteam+ technology. Westchester County\'s modern kitchens showcase Sharp innovation.', specialty: 'SMD microwave drawers, SuperSteam+ countertop ovens, Insight Pro commercial units, and carousel microwaves', commonIssues: 'Sharp drawer glide roller replacement, SuperSteam boiler descaling, inverter circuit diagnostics, door interlock switch service', whyChoose: 'We master Sharp\'s pioneering microwave technology, from classic carousels to the innovative drawer installations popular in Westchester County.' },
  'panasonic': { name: 'Panasonic', title: 'Panasonic Appliance Repair of Westchester County - Same Day', heroTitle: 'Panasonic Appliance Repair of Westchester County', description: 'Expert Panasonic microwave and appliance repair in Westchester County NY. Osaka engineering excellence. Same day service throughout Westchester County.', about: 'Panasonic\'s Osaka engineers pioneered Inverter microwave technology, enabling precise power control impossible with conventional units. Westchester County cooks achieve professional results with Panasonic precision.', specialty: 'Inverter microwaves, Genius Sensor cooking, Cyclonic Inverter technology, and FlashXpress toasters', commonIssues: 'Panasonic Inverter board diagnostics, Genius Sensor humidity calibration, turntable motor replacement, door latch mechanism repair', whyChoose: 'Our Westchester County technicians specialize in Panasonic\'s proprietary Inverter technology that sets their microwaves apart from conventional models.' },
  'la-cornue': { name: 'La Cornue', title: 'La Cornue Appliance Repair of Westchester County - Same Day', heroTitle: 'La Cornue Appliance Repair of Westchester County', description: 'Expert La Cornue range repair in Westchester County NY. Parisian haute cuisine. Same day service in Bedford, Purchase & all Westchester County.', about: 'Saint-Ouen-l\'Aumône artisans have handcrafted La Cornue ranges since 1908, each requiring over 100 hours of expert assembly. Westchester County\'s most distinguished kitchens feature these Parisian culinary instruments.', specialty: 'Château grand ranges, CornuFé contemporary series, Flamberge rotisseries, and bespoke color matching', commonIssues: 'La Cornue vaulted oven thermocouple calibration, French top heat distribution, gas valve regulation, porcelain enamel care', whyChoose: 'We honor La Cornue\'s century-old French tradition with service befitting Westchester County\'s most prestigious culinary installations.' },
  'true-residential': { name: 'True Residential', title: 'True Residential Appliance Repair of Westchester County - Same Day', heroTitle: 'True Residential Appliance Repair of Westchester County', description: 'Expert True refrigerator, freezer & wine cabinet repair in Westchester County NY. Restaurant-grade home refrigeration. Same day service in Bedford, Chappaqua & all Westchester County.', about: 'St. Louis-based True Manufacturing brings 75 years of restaurant refrigeration expertise to luxury residences. Their commercial DNA delivers walk-in cold performance in Westchester County\'s most demanding home kitchens.', specialty: 'stainless column refrigerators, glass door undercounter units, wine columns, and ice machines', commonIssues: 'True commercial compressor service, glass door heater maintenance, ice machine sanitization, stainless interior temperature mapping', whyChoose: 'Westchester County homeowners with True refrigeration trust our understanding of commercial-grade compressors and restaurant-derived construction.' },
  'vent-a-hood': { name: 'Vent-A-Hood', title: 'Vent-A-Hood Appliance Repair of Westchester County - Same Day', heroTitle: 'Vent-A-Hood Appliance Repair of Westchester County', description: 'Expert Vent-A-Hood range hood repair in Westchester County NY. Texas-built Magic Lung technology. Same day service throughout Westchester County.', about: 'Richardson, Texas-based Vent-A-Hood invented residential ventilation in 1933. Their patented Magic Lung centrifugal blower operates at whisper-quiet levels while capturing grease in Westchester County\'s most active kitchens.', specialty: 'Magic Lung blowers, ARS duct-free systems, contemporary designer hoods, and professional series ventilation', commonIssues: 'Vent-A-Hood Magic Lung motor bearing service, capacitor replacement, SensaSource auto-on repair, ARS filter element replacement', whyChoose: 'Westchester County\'s serious cooks trust our expertise with Vent-A-Hood\'s unique Magic Lung technology that outperforms conventional blowers.' },
  'wolf': { name: 'Wolf', title: 'Wolf Appliance Repair of Westchester County - Same Day', heroTitle: 'Wolf Appliance Repair of Westchester County', description: 'Expert Wolf range, oven & cooktop repair in Westchester County NY. Professional cooking specialists. Same day service in Scarsdale, Bronxville, Bedford & all Westchester County.', about: 'Wolf has been crafting professional-grade cooking equipment in Wisconsin since 1934. Wolf ranges and ovens are the choice of serious home chefs and professional kitchens throughout Westchester County.', specialty: 'professional ranges, dual fuel ranges, wall ovens, cooktops, and ventilation', commonIssues: 'Wolf range igniter problems, oven temperature calibration, burner issues, convection fan failures, control panel malfunctions', whyChoose: 'Our technicians are trained on Wolf\'s professional dual-stacked burners, VertiCross convection systems, and precise temperature controls found in Westchester County\'s finest kitchens.' },
  'zline': { name: 'ZLINE', title: 'ZLINE Appliance Repair of Westchester County - Same Day', heroTitle: 'ZLINE Appliance Repair of Westchester County', description: 'Expert ZLINE range, range hood & dishwasher repair in Westchester County NY. Luxury look, accessible price. Same day service throughout Westchester County.', about: 'Lake Tahoe-based ZLINE Kitchen delivers professional aesthetics at attainable prices. Their Italian-burner ranges and statement range hoods bring designer kitchen style to Westchester County homes.', specialty: 'Autograph Edition ranges, glass and stainless range hoods, Tallac dishwashers, and Farmi microwaves', commonIssues: 'ZLINE Italian burner flame adjustment, brass accent hardware care, range hood blower motor service, Tallac dishwasher rack wheel replacement', whyChoose: 'We maintain ZLINE\'s professional styling and Italian-sourced components that bring designer kitchen aesthetics to Westchester County at accessible prices.' },
  'thor-kitchen': { name: 'Thor Kitchen', title: 'Thor Kitchen Appliance Repair of Westchester County - Same Day', heroTitle: 'Thor Kitchen Appliance Repair of Westchester County', description: 'Expert Thor Kitchen range and appliance repair in Westchester County NY. Bold professional styling. Same day service throughout Westchester County.', about: 'Thor Kitchen brings commercial kitchen presence to residential spaces with robust 304 stainless steel construction and high-output burners. Westchester County homeowners achieve professional aesthetics at practical prices.', specialty: 'HRG professional ranges, HRH range hoods, HDW dishwashers, and TRF refrigerators', commonIssues: 'Thor Kitchen continuous grate alignment, high-output burner tuning, heavy-duty hinge adjustment, commercial-style thermostat calibration', whyChoose: 'We maintain Thor Kitchen\'s heavy-duty construction, keeping Westchester County\'s professional-style kitchens performing at peak capacity.' },
  'summit': { name: 'Summit', title: 'Summit Appliance Repair of Westchester County - Same Day', heroTitle: 'Summit Appliance Repair of Westchester County', description: 'Expert Summit refrigerator, freezer & wine cooler repair in Westchester County NY. Specialized refrigeration solutions. Same day service throughout Westchester County.', about: 'Bronx-based Summit Appliances manufactures specialized refrigeration for unique applications: ADA accessibility, medical vaccine storage, and space-constrained installations serving Westchester County facilities and homes.', specialty: 'ADA-compliant units, medical vaccine refrigerators, pharmaceutical freezers, and commercial undercounter units', commonIssues: 'Summit wheelchair-accessible drawer repair, vaccine storage temperature alarm service, pharmacy freezer compressor diagnostics, ADA handle replacement', whyChoose: 'Westchester County healthcare facilities and accessible homes trust our expertise with Summit\'s specialized refrigeration requirements.' },
  'tappan': { name: 'Tappan', title: 'Tappan Appliance Repair of Westchester County - Same Day', heroTitle: 'Tappan Appliance Repair of Westchester County', description: 'Expert Tappan range and appliance repair in Westchester County NY. American cooking heritage. Same day service throughout Westchester County.', about: 'Tappan introduced the first residential microwave and built America\'s first gas range in Mansfield, Ohio in 1881. Many Westchester County homes still rely on Tappan\'s straightforward, dependable cooking.', specialty: 'freestanding gas ranges, electric smooth-tops, self-cleaning wall ovens, and drop-in cooktops', commonIssues: 'Tappan clock timer repair, bake element replacement, glow-bar igniter service, oven door hinge realignment', whyChoose: 'We maintain expertise in Tappan\'s classic American construction, servicing both vintage and recent models throughout Westchester County.' },
  'roper': { name: 'Roper', title: 'Roper Appliance Repair of Westchester County - Same Day', heroTitle: 'Roper Appliance Repair of Westchester County', description: 'Expert Roper washer, dryer & appliance repair in Westchester County NY. Essential functionality. Same day service throughout Westchester County.', about: 'Roper focuses on essential features without unnecessary complexity, delivering dependable performance for budget-conscious buyers. Westchester County rental properties and first-time homeowners appreciate Roper\'s value.', specialty: 'basic top-load washers, electric dryers, apartment-size refrigerators, and coil-element ranges', commonIssues: 'Roper lid switch replacement, dryer drum belt service, refrigerator defrost timer repair, range surface element connection', whyChoose: 'We provide economical repairs for Roper appliances, maximizing value for Westchester County homeowners on a budget.' },
  'ikea': { name: 'IKEA', title: 'IKEA Appliance Repair of Westchester County - Same Day', heroTitle: 'IKEA Appliance Repair of Westchester County', description: 'Expert IKEA appliance repair in Westchester County NY. Swedish integrated kitchen specialists. Same day service throughout Westchester County.', about: 'IKEA\'s SEKTION kitchen system features panel-ready appliances that disappear into cabinetry. These Scandinavian-designed integrated units create seamless modern kitchens throughout Westchester County.', specialty: 'NUTID induction cooktops, HYGIENISK dishwashers, FROSTIG refrigerators, and MATTRADITION ovens', commonIssues: 'IKEA panel door alignment, integrated unit mounting adjustment, NUTID touch control calibration, HYGIENISK spray arm replacement', whyChoose: 'We understand IKEA\'s unique integrated installation requirements, maintaining the seamless aesthetic Westchester County homeowners designed.' },
  'westinghouse': { name: 'Westinghouse', title: 'Westinghouse Appliance Repair of Westchester County - Same Day', heroTitle: 'Westinghouse Appliance Repair of Westchester County', description: 'Expert Westinghouse appliance repair in Westchester County NY. Historic American innovation. Same day service throughout Westchester County.', about: 'Westinghouse powered American homes from the dawn of electricity. Though the brand has transitioned through various owners, Westchester County households still operate Westinghouse appliances spanning decades of innovation.', specialty: 'frost-free refrigerators, chest and upright freezers, dehumidifiers, and window air conditioners', commonIssues: 'Westinghouse vintage compressor service, modern dehumidifier bucket switch repair, window AC fan motor replacement, freezer gasket restoration', whyChoose: 'We service Westinghouse appliances across all eras, from historic models to current production in Westchester County homes.' },
  'insignia': { name: 'Insignia', title: 'Insignia Appliance Repair of Westchester County - Same Day', heroTitle: 'Insignia Appliance Repair of Westchester County', description: 'Expert Insignia compact refrigerator, freezer & appliance repair in Westchester County NY. Affordable compact solutions. Same day service throughout Westchester County.', about: 'Insignia, Best Buy\'s private label, delivers affordable compact appliances for everyday needs. Westchester County college students, apartment dwellers, and home office setups rely on Insignia value.', specialty: 'dorm-size refrigerators, compact chest freezers, thermoelectric wine coolers, and portable ice makers', commonIssues: 'Insignia thermostat calibration, compact compressor diagnostics, wine cooler fan replacement, ice maker water valve service', whyChoose: 'We provide affordable service for Insignia compact appliances throughout Westchester County, maximizing value on budget-friendly units.' },
  'crossover-commercial-laundry': { name: 'Crossover', title: 'Crossover Appliance Repair of Westchester County - Same Day', heroTitle: 'Crossover Commercial Laundry Repair of Westchester County', description: 'Expert Crossover commercial washer and dryer repair in Westchester County NY. Commercial laundry specialists. Same day service for laundromats throughout Westchester County.', about: 'Crossover brings European commercial laundry technology to North American markets with industrial-grade construction. Westchester County laundromats trust Crossover for heavy-duty reliability.', specialty: 'commercial washers, commercial dryers, and stacked laundry units', commonIssues: 'Crossover washer drainage problems, dryer heating issues, coin mechanism failures', whyChoose: 'We specialize in commercial laundry equipment and understand the demanding requirements of Westchester County laundromat operations.' },
  'wascomat': { name: 'Wascomat', title: 'Wascomat Appliance Repair of Westchester County - Same Day', heroTitle: 'Wascomat Appliance Repair of Westchester County', description: 'Expert Wascomat commercial washer and dryer repair in Westchester County NY. European heavy-duty laundry. Same day service throughout Westchester County.', about: 'Wascomat builds heavy-duty commercial laundry equipment engineered for European quality standards and American durability demands. Westchester County laundromats depend on Wascomat reliability.', specialty: 'Exspress soft-mount washers, TD tumble dryers, washer-extractors, and commercial stack units', commonIssues: 'Wascomat inverter drive diagnostics, soft-mount suspension service, commercial bearing replacement, Compass Pro control programming', whyChoose: 'Westchester County laundromat operators trust our commercial laundry expertise to minimize Wascomat downtime and maximize revenue.' },
  'huebsch': { name: 'Huebsch', title: 'Huebsch Appliance Repair of Westchester County - Same Day', heroTitle: 'Huebsch Appliance Repair of Westchester County', description: 'Expert Huebsch commercial washer and dryer repair in Westchester County NY. Built for profit. Same day service throughout Westchester County.', about: 'Huebsch, manufactured in Ripon, Wisconsin, engineers commercial laundry for maximum vended revenue and minimum downtime. Westchester County vended laundry operators trust Huebsch durability.', specialty: 'Galaxy 600 controls, Quantum Touch controls, on-premises washers, and single-pocket dryers', commonIssues: 'Huebsch Galaxy control board service, Quantum payment system repair, commercial suspension damper replacement, high-G extract motor diagnostics', whyChoose: 'We minimize Huebsch commercial equipment downtime for Westchester County vended and on-premises laundry operations.' },
  'alliance-laundry-systems': { name: 'Alliance Laundry Systems', title: 'Alliance Laundry Systems Repair of Westchester County - Same Day', heroTitle: 'Alliance Laundry Systems Repair of Westchester County', description: 'Expert Alliance Laundry Systems commercial laundry repair in Westchester County NY. World\'s largest commercial laundry. Same day service throughout Westchester County.', about: 'Alliance Laundry Systems dominates global commercial laundry manufacturing from Ripon, Wisconsin. Their industrial-grade engineering serves Westchester County vended, on-premises, and multi-housing applications.', specialty: 'industrial washer-extractors, tumble dryers, flatwork ironers, and multi-housing payment systems', commonIssues: 'Alliance high-extract bearing service, commercial control system programming, coin-drop mechanism repair, industrial heating element replacement', whyChoose: 'We maintain comprehensive expertise across Alliance Laundry Systems products serving Westchester County\'s commercial laundry sector.' },
  'hobart': { name: 'Hobart', title: 'Hobart Appliance Repair of Westchester County - Same Day', heroTitle: 'Hobart Appliance Repair of Westchester County', description: 'Expert Hobart commercial dishwasher, mixer & food equipment repair in Westchester County NY. Troy, Ohio industrial quality. Same day service throughout Westchester County.', about: 'Hobart, headquartered in Troy, Ohio since 1897, builds the commercial food equipment backbone of American foodservice. Westchester County restaurants, hotels, and institutions depend on Hobart reliability.', specialty: 'AM commercial dishwashers, Legacy floor mixers, HL series slicers, and FP food processors', commonIssues: 'Hobart AM series wash arm rebuild, Legacy mixer planetary gear service, slicer blade sharpening, commercial dishwasher deliming', whyChoose: 'Westchester County foodservice operations trust our commercial equipment expertise to keep Hobart machines running at institutional capacity.' },
  'forno': { name: 'Forno', title: 'Forno Appliance Repair of Westchester County - Same Day', heroTitle: 'Forno Appliance Repair of Westchester County', description: 'Expert Forno range and refrigerator repair in Westchester County NY. Italian brass burners. Same day service throughout Westchester County.', about: 'Forno equips professional-style ranges with authentic Italian brass burners and commercial-grade construction. Westchester County home chefs achieve restaurant cooking with Forno performance.', specialty: 'Lseo series ranges, Capriasca brass-burner ranges, Massimo refrigerators, and Vicchio range hoods', commonIssues: 'Forno brass burner cleaning, dual-fuel ignition timing, soft-close door adjustment, commercial thermostat calibration', whyChoose: 'We maintain Forno\'s Italian brass burner technology and commercial construction throughout Westchester County kitchens.' },
  'fulgor-milano': { name: 'Fulgor Milano', title: 'Fulgor Milano Appliance Repair of Westchester County - Same Day', heroTitle: 'Fulgor Milano Appliance Repair of Westchester County', description: 'Expert Fulgor Milano range and cooktop repair in Westchester County NY. Milan luxury since 1949. Same day service in Bronxville, Mamaroneck & all Westchester County.', about: 'Fulgor Milano, founded in Milan\'s design district in 1949, creates authentic Italian cooking appliances. Their Sofia Pro and Sophia collections grace Westchester County\'s design-conscious culinary spaces.', specialty: 'Sofia Pro dual-fuel ranges, Sophia induction cooktops, Distinto wall ovens, and chimney hoods', commonIssues: 'Fulgor Milano dual-fuel valve service, induction board diagnostics, soft-close hinge calibration, TFT display troubleshooting', whyChoose: 'We honor Fulgor Milano\'s Milanese design heritage while maintaining professional cooking performance in Westchester County homes.' },
  'panda': { name: 'Panda', title: 'Panda Appliance Repair of Westchester County - Same Day', heroTitle: 'Panda Appliance Repair of Westchester County', description: 'Expert Panda compact washer and dryer repair in Westchester County NY. Hookup-free laundry solutions. Same day service throughout Westchester County.', about: 'Panda creates portable and compact laundry for spaces without traditional hookups. Westchester County apartment dwellers and RV owners achieve laundry independence with Panda portability.', specialty: 'portable spin dryers, twin-tub washers, compact automatic washers, and ventless dryers', commonIssues: 'Panda drain pump service, portable hose connection repair, spin dryer motor replacement, compact tub bearing service', whyChoose: 'We service Panda\'s unique portable laundry solutions enabling hookup-free washing throughout Westchester County apartments.' },
  'equator': { name: 'Equator', title: 'Equator Appliance Repair of Westchester County - Same Day', heroTitle: 'Equator Appliance Repair of Westchester County', description: 'Expert Equator compact washer, dryer & dishwasher repair in Westchester County NY. Houston innovation. Same day service throughout Westchester County.', about: 'Houston-based Equator Advanced Appliances pioneers space-saving solutions including all-in-one washer-dryers and super-compact dishwashers. Westchester County micro-living spaces maximize function with Equator.', specialty: 'EZ 4400 combo washer-dryers, 18-inch compact dishwashers, convertible hookup washers, and stackable units', commonIssues: 'Equator combo unit ventless drying optimization, compact dishwasher spray arm service, convertible washer hookup adjustment, inverter motor diagnostics', whyChoose: 'We specialize in Equator\'s space-maximizing combo units and compact designs serving Westchester County\'s efficient living spaces.' },
  'ariston': { name: 'Ariston', title: 'Ariston Appliance Repair of Westchester County - Same Day', heroTitle: 'Ariston Appliance Repair of Westchester County', description: 'Expert Ariston washer, dryer & appliance repair in Westchester County NY. Fabriano Italian engineering. Same day service throughout Westchester County.', about: 'From Fabriano, Italy, Ariston engineers elegant laundry and kitchen appliances with Mediterranean style. Westchester County homeowners selecting European quality choose Ariston craftsmanship.', specialty: 'front-load washers, heat pump dryers, fully integrated dishwashers, and built-in ovens', commonIssues: 'Ariston door boot seal replacement, heat pump lint system service, AquaStop leak sensor diagnostics, multifunction oven element repair', whyChoose: 'We understand Ariston\'s Italian engineering standards, maintaining European performance in Westchester County homes.' },
  'beaumark': { name: 'Beaumark', title: 'Beaumark Appliance Repair of Westchester County - Same Day', heroTitle: 'Beaumark Appliance Repair of Westchester County', description: 'Expert Beaumark appliance repair in Westchester County NY. Canadian heritage maintenance. Same day service throughout Westchester County.', about: 'Beaumark, formerly Hudson\'s Bay Company\'s appliance brand, built a loyal following in North American homes. Westchester County households with existing Beaumark units trust our continued maintenance expertise.', specialty: 'legacy refrigerators, freestanding ranges, built-in dishwashers, and stackable laundry', commonIssues: 'Beaumark compressor longevity service, vintage range thermostat calibration, legacy dishwasher pump repair, parts cross-referencing', whyChoose: 'We maintain expertise in discontinued Beaumark appliances, sourcing compatible parts for Westchester County households.' },
  'brada': { name: 'Brada', title: 'Brada Appliance Repair of Westchester County - Same Day', heroTitle: 'Brada Appliance Repair of Westchester County', description: 'Expert Brada appliance repair in Westchester County NY. Compact living solutions. Same day service throughout Westchester County.', about: 'Brada manufactures compact and portable appliances designed for efficient living. Westchester County apartment dwellers and small-space homeowners appreciate Brada\'s targeted functionality.', specialty: 'portable washing machines, compact tumble dryers, mini dishwashers, and small refrigerators', commonIssues: 'Brada portable drain pump service, compact motor brush replacement, mini dishwasher spray arm repair, small fridge thermostat adjustment', whyChoose: 'We service Brada\'s compact appliance line, maintaining efficient operation in Westchester County\'s space-conscious settings.' },
  'avantgarde': { name: 'Avantgarde', title: 'Avantgarde Appliance Repair of Westchester County - Same Day', heroTitle: 'Avantgarde Appliance Repair of Westchester County', description: 'Expert Avantgarde appliance repair in Westchester County NY. Contemporary European styling. Same day service throughout Westchester County.', about: 'Avantgarde delivers contemporary European appliance aesthetics with minimalist design philosophy. Westchester County modern homes embrace Avantgarde\'s forward-thinking style and performance.', specialty: 'front-load laundry pairs, integrated dishwashers, built-in cooking, and counter-depth refrigeration', commonIssues: 'Avantgarde European control board diagnostics, integrated mounting alignment, touch panel calibration, parts sourcing for European models', whyChoose: 'We maintain Avantgarde\'s European-designed appliances with proper understanding of continental engineering standards.' },
  'five-star': { name: 'Five Star', title: 'Five Star Appliance Repair of Westchester County - Same Day', heroTitle: 'Five Star Appliance Repair of Westchester County', description: 'Expert Five Star range repair in Westchester County NY. Tennessee-built open burners. Same day service throughout Westchester County.', about: 'Five Star, manufactured by Brown Stove Works in Cleveland, Tennessee, delivers authentic open-burner cooking without premium pricing. Westchester County value-conscious cooks achieve professional results with Five Star.', specialty: 'open-burner gas ranges, sealed burner options, self-cleaning ovens, and commercial-style grates', commonIssues: 'Five Star open burner orifice cleaning, pilot ignition service, continuous grate leveling, heavy-duty oven calibration', whyChoose: 'We maintain Five Star\'s authentic open-burner technology at accessible service rates for Westchester County homes.' },
  'galanz': { name: 'Galanz', title: 'Galanz Appliance Repair of Westchester County - Same Day', heroTitle: 'Galanz Appliance Repair of Westchester County', description: 'Expert Galanz retro refrigerator and microwave repair in Westchester County NY. World microwave leader. Same day service throughout Westchester County.', about: 'Guangdong-based Galanz manufactures more microwaves than any company worldwide and now brings retro-style refrigerators in bold colors. Westchester County kitchens embrace Galanz\'s playful personality.', specialty: 'Retro series refrigerators, inverter microwaves, air fry toaster ovens, and ExpressWave microwaves', commonIssues: 'Galanz retro compressor service, inverter microwave board repair, air fry element replacement, vintage-style thermostat calibration', whyChoose: 'We maintain Galanz\'s distinctive retro styling while ensuring modern performance throughout Westchester County.' },
  'gibson': { name: 'Gibson', title: 'Gibson Appliance Repair of Westchester County - Same Day', heroTitle: 'Gibson Appliance Repair of Westchester County', description: 'Expert Gibson refrigerator, range & appliance repair in Westchester County NY. 1877 American heritage. Same day service throughout Westchester County.', about: 'Gibson began manufacturing in Greenville, Michigan in 1877, building a legacy of American reliability. Westchester County homes with vintage and recent Gibson appliances receive expert care.', specialty: 'frost-free refrigerators, freestanding ranges, automatic dishwashers, and top-load laundry', commonIssues: 'Gibson defrost system service, range ignition repair, legacy dishwasher pump replacement, washer lid switch diagnostics', whyChoose: 'We maintain Gibson\'s American legacy appliances, sourcing parts for both vintage and current models in Westchester County.' },
  'hercules': { name: 'Hercules', title: 'Hercules Appliance Repair of Westchester County - Same Day', heroTitle: 'Hercules Appliance Repair of Westchester County', description: 'Expert Hercules commercial laundry repair in Westchester County NY. Industrial-strength laundry. Same day service throughout Westchester County.', about: 'Hercules builds commercial laundry equipment engineered for maximum throughput and durability. Westchester County laundromats and multi-housing facilities depend on Hercules industrial strength.', specialty: 'high-extract commercial washers, high-capacity tumble dryers, stacked vended units, and multi-housing systems', commonIssues: 'Hercules high-G bearing service, commercial suspension repair, card reader integration, industrial heating element replacement', whyChoose: 'We minimize Hercules commercial equipment downtime, protecting Westchester County laundry business revenue.' },
  'hisense': { name: 'Hisense', title: 'Hisense Appliance Repair of Westchester County - Same Day', heroTitle: 'Hisense Appliance Repair of Westchester County', description: 'Expert Hisense refrigerator, washer & appliance repair in Westchester County NY. Qingdao global value. Same day service throughout Westchester County.', about: 'Qingdao-based Hisense delivers feature-rich appliances at value prices, combining Chinese manufacturing efficiency with global design. Westchester County cost-conscious buyers choose Hisense.', specialty: 'French door refrigerators, top-load washers, portable dehumidifiers, and dual-zone wine coolers', commonIssues: 'Hisense inverter compressor diagnostics, washer control board service, dehumidifier compressor repair, wine cooler temperature calibration', whyChoose: 'We provide value-oriented service for Hisense appliances throughout Westchester County.' },
  'inglis': { name: 'Inglis', title: 'Inglis Appliance Repair of Westchester County - Same Day', heroTitle: 'Inglis Appliance Repair of Westchester County', description: 'Expert Inglis washer, dryer & appliance repair in Westchester County NY. Canadian reliability. Same day service throughout Westchester County.', about: 'Inglis, originally from Cambridge, Ontario, built Canadian laundry reliability. Westchester County homes near the border and those with Canadian roots trust Inglis dependability.', specialty: 'top-load washers, automatic dryers, frost-free refrigerators, and freestanding ranges', commonIssues: 'Inglis direct-drive transmission service, dryer heating element replacement, refrigerator fan motor repair, washer timer diagnostics', whyChoose: 'We service Inglis appliances with access to North American parts networks serving Westchester County homes.' },
  'marvel': { name: 'Marvel', title: 'Marvel Appliance Repair of Westchester County - Same Day', heroTitle: 'Marvel Appliance Repair of Westchester County', description: 'Expert Marvel wine cooler, beverage center & undercounter refrigerator repair in Westchester County NY. Since 1892. Same day service throughout Westchester County.', about: 'Marvel, headquartered in Greenville, Michigan since 1892, pioneered undercounter refrigeration. Their wine cellars and beverage centers anchor Westchester County\'s entertainment spaces.', specialty: 'Professional series wine cellars, beverage centers, clear ice machines, and outdoor undercounter units', commonIssues: 'Marvel Marvel close-door seal service, wine cellar humidity control, outdoor unit weatherproofing, clear ice production optimization', whyChoose: 'We specialize in Marvel\'s luxury undercounter refrigeration serving Westchester County\'s entertainment-focused homes.' },
  'midea': { name: 'Midea', title: 'Midea Appliance Repair of Westchester County - Same Day', heroTitle: 'Midea Appliance Repair of Westchester County', description: 'Expert Midea washer, dryer, refrigerator & appliance repair in Westchester County NY. Global manufacturing leader. Same day service throughout Westchester County.', about: 'Guangdong-based Midea ranks as the world\'s largest appliance manufacturer by revenue. Their feature-rich products at accessible prices serve Westchester County\'s value-focused households.', specialty: 'front-load laundry, French door refrigerators, built-in dishwashers, and U-shaped air conditioners', commonIssues: 'Midea inverter motor diagnostics, U-shaped AC installation support, refrigerator defrost system service, dishwasher spray arm repair', whyChoose: 'We provide reliable service for Midea\'s extensive product line throughout Westchester County.' },
  'modern-maid': { name: 'Modern Maid', title: 'Modern Maid Appliance Repair of Westchester County - Same Day', heroTitle: 'Modern Maid Appliance Repair of Westchester County', description: 'Expert Modern Maid range and oven repair in Westchester County NY. Classic built-in specialists. Same day service throughout Westchester County.', about: 'Modern Maid pioneered built-in cooking with innovative gas-on-glass cooktops and thermal ovens. Many Westchester County kitchens still feature these quality vintage installations.', specialty: 'built-in wall ovens, gas-on-glass cooktops, slide-in ranges, and vintage downdraft systems', commonIssues: 'Modern Maid vintage element sourcing, thermal oven calibration, gas-on-glass burner service, downdraft motor restoration', whyChoose: 'We maintain expertise in vintage Modern Maid built-ins, preserving classic Westchester County kitchen installations.' },
  'moffat': { name: 'Moffat', title: 'Moffat Appliance Repair of Westchester County - Same Day', heroTitle: 'Moffat Appliance Repair of Westchester County', description: 'Expert Moffat range and appliance repair in Westchester County NY. Canadian kitchen tradition. Same day service throughout Westchester County.', about: 'Moffat, a Canadian appliance brand, delivers reliable kitchen performance at practical prices. Westchester County households near the border and beyond trust Moffat simplicity.', specialty: 'freestanding ranges, top-freezer refrigerators, front-control dishwashers, and coil-top cooktops', commonIssues: 'Moffat coil element connection repair, oven thermostat calibration, dishwasher door latch adjustment, refrigerator defrost timer service', whyChoose: 'We service Moffat\'s straightforward Canadian designs with accessible parts availability for Westchester County.' },
  'northland-refrigeration': { name: 'Northland', title: 'Northland Appliance Repair of Westchester County - Same Day', heroTitle: 'Northland Appliance Repair of Westchester County', description: 'Expert Northland refrigerator and freezer repair in Westchester County NY. Professional built-in specialists. Same day service throughout Westchester County.', about: 'Northland manufactures built-in refrigeration with professional-kitchen aesthetics and panel-ready integration. Westchester County\'s custom kitchen designs feature Northland seamless installation.', specialty: 'panel-ready refrigerators, all-freezer columns, wine preservation, and outdoor undercounter units', commonIssues: 'Northland panel alignment, sealed system service, wine column humidity control, outdoor compressor maintenance', whyChoose: 'We maintain Northland\'s custom-integrated refrigeration, preserving seamless design in Westchester County luxury kitchens.' },
  'porter-charles': { name: 'Porter & Charles', title: 'Porter & Charles Appliance Repair of Westchester County - Same Day', heroTitle: 'Porter & Charles Appliance Repair of Westchester County', description: 'Expert Porter & Charles appliance repair in Westchester County NY. European aesthetic specialists. Same day service throughout Westchester County.', about: 'Porter & Charles delivers European design language at approachable prices. Their sleek appliance profiles complement Westchester County\'s contemporary kitchen renovations.', specialty: 'counter-depth refrigerators, integrated dishwashers, slide-in ranges, and built-in microwaves', commonIssues: 'Porter & Charles European control interface service, counter-depth installation adjustment, integrated unit panel alignment, parts cross-referencing', whyChoose: 'We maintain Porter & Charles European-styled appliances with proper understanding of continental design requirements.' },
  'premier': { name: 'Premier', title: 'Premier Appliance Repair of Westchester County - Same Day', heroTitle: 'Premier Appliance Repair of Westchester County', description: 'Expert Premier range and oven repair in Westchester County NY. Cleveland, Tennessee craftsmanship. Same day service throughout Westchester County.', about: 'Premier ranges, manufactured by Brown Stove Works in Cleveland, Tennessee since 1933, deliver American-made reliability at budget prices. Westchester County landlords and homeowners trust Premier durability.', specialty: 'freestanding gas ranges, electric smooth-top ranges, 20-inch apartment ranges, and battery ignition systems', commonIssues: 'Premier pilot light adjustment, battery ignition system service, oven thermostat calibration, continuous grate repair', whyChoose: 'We maintain Premier\'s straightforward American construction with readily available parts for Westchester County.' },
  'signature-kitchen-suite': { name: 'Signature Kitchen Suite', title: 'Signature Kitchen Suite Appliance Repair of Westchester County - Same Day', heroTitle: 'Signature Kitchen Suite Appliance Repair of Westchester County', description: 'Expert Signature Kitchen Suite refrigerator, range & dishwasher repair in Westchester County NY. Korean ultra-luxury. Same day service in Bedford, Purchase & all Westchester County.', about: 'Signature Kitchen Suite represents Korean engineering excellence at the ultra-luxury tier. Built in Clarksville, Tennessee with innovative sous vide integration, these appliances anchor Westchester County\'s most advanced kitchens.', specialty: 'built-in column refrigeration, dual-fuel sous vide ranges, QuadWash Pro dishwashers, and wine columns', commonIssues: 'Signature sous vide probe calibration, ThinQ connectivity troubleshooting, wine column temperature zoning, QuadWash Pro spray arm service', whyChoose: 'We deliver premium service matching Signature Kitchen Suite\'s ultra-luxury standards throughout Westchester County.' },
  'sirius': { name: 'Sirius', title: 'Sirius Appliance Repair of Westchester County - Same Day', heroTitle: 'Sirius Appliance Repair of Westchester County', description: 'Expert Sirius range hood and ventilation repair in Westchester County NY. Italian design ventilation. Same day service throughout Westchester County.', about: 'Sirius, with Italian design heritage, creates sculptural range hoods that function as kitchen art. Westchester County\'s architect-designed kitchens feature Sirius statement pieces.', specialty: 'island hoods, wall-mount hoods, downdraft systems, and ceiling-mount extractors', commonIssues: 'Sirius blower motor service, LED driver replacement, touch control calibration, ceiling-mount installation support', whyChoose: 'We preserve Sirius\'s distinctive Italian design while maintaining ventilation performance in Westchester County kitchens.' },
  'venmar': { name: 'Venmar', title: 'Venmar Appliance Repair of Westchester County - Same Day', heroTitle: 'Venmar Appliance Repair of Westchester County', description: 'Expert Venmar range hood and ventilation repair in Westchester County NY. Quebec ventilation leader. Same day service throughout Westchester County.', about: 'Quebec-based Venmar leads Canadian ventilation with heat recovery ventilators and powerful range hoods. Westchester County homes benefit from Venmar\'s effective air quality management.', specialty: 'under-cabinet range hoods, island hoods, HRV systems, and inline blowers', commonIssues: 'Venmar HRV core cleaning, range hood blower motor service, inline booster repair, control board diagnostics', whyChoose: 'We maintain Venmar\'s ventilation systems including HRV technology for healthy Westchester County indoor air.' },
  'black-decker': { name: 'Black & Decker', title: 'Black & Decker Appliance Repair of Westchester County - Same Day', heroTitle: 'Black & Decker Appliance Repair of Westchester County', description: 'Expert Black & Decker small appliance repair in Westchester County NY. Baltimore heritage since 1910. Same day service throughout Westchester County.', about: 'Black & Decker, headquartered in Towson, Maryland since 1910, equips American kitchens with reliable countertop appliances. Westchester County homes depend on Black & Decker everyday performance.', specialty: 'SpaceMaker appliances, Rapid Bake ovens, 12-cup programmable coffee makers, and air fryer toaster ovens', commonIssues: 'Black & Decker heating element replacement, coffee maker thermal fuse service, air fryer fan repair, SpaceMaker mounting adjustment', whyChoose: 'We keep Black & Decker countertop appliances running reliably throughout Westchester County.' }
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
    /Expert Repair for All Appliances/g,
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
  html = html.replace(/Oven Types We Service/g, `${brand.name} Oven Types We Service`);
  html = html.replace(/Cooktop Types We Service/g, `${brand.name} Cooktop Types We Service`);
  html = html.replace(/Microwave Types We Service/g, `${brand.name} Microwave Types We Service`);
  html = html.replace(/Refrigerator Types We Service/g, `${brand.name} Refrigerator Types We Service`);
  html = html.replace(/Dryer Types We Service/g, `${brand.name} Dryer Types We Service`);
  html = html.replace(/Washer Types We Service/g, `${brand.name} Washer Types We Service`);
  html = html.replace(/Dishwasher Types We Service/g, `${brand.name} Dishwasher Types We Service`);
  html = html.replace(/Hood Vent Types We Service/g, `${brand.name} Hood Vent Types We Service`);
  html = html.replace(/qualified to service all major brands/gi, `qualified to service all ${brand.name} models`);
  html = html.replace(/We service all dryer models/gi, `We service all ${brand.name} dryer models`);
  html = html.replace(/We service all washer models/gi, `We service all ${brand.name} washer models`);
  html = html.replace(/service all hood and ventilation models/gi, `service all ${brand.name} hood and ventilation models`);
  html = html.replace(/dryers require specialized knowledge/gi, `${brand.name} dryers require specialized knowledge`);
  html = html.replace(/require understanding of electrical systems/gi, `${brand.name} repairs require understanding of electrical systems`);

  // Remove authorized and factory claims for Bertazzoni and Gaggenau
  if (subdomain === 'bertazzoni' || subdomain === 'gaggenau') {
    html = html.replace(/Authorized/gi, 'Expert');
    html = html.replace(/Factory[- ]?Certified Technicians/gi, 'Professionally Trained Technicians');
    html = html.replace(/Factory[- ]?Certified/gi, 'Professionally Trained');
    html = html.replace(/Factory[- ]?Trained/gi, 'Professionally Trained');
    html = html.replace(/factory certified/gi, 'professionally trained');
    html = html.replace(/factory trained/gi, 'professionally trained');
    html = html.replace(/factory training/gi, 'professional training');
    html = html.replace(/Factory Expert/gi, 'Professional');
    html = html.replace(/Factory Certification/gi, 'Professional Training');
    html = html.replace(/factory certification/gi, 'professional training');
    html = html.replace(/With factory certification/gi, 'With professional training');
    html = html.replace(/Certified Technicians/gi, 'Expert Technicians');
    html = html.replace(/certified technicians/gi, 'expert technicians');
    html = html.replace(/Certified/g, 'Trained');
    html = html.replace(/certified/g, 'trained');
    // Replace the certification explanation content
    html = html.replace(
      /<h3>What is Professional Certification\?<\/h3>[\s\S]*?<p>With professional certification, our team is qualified to service[^<]*<\/p>/,
      `<h3>Our Professional Training</h3>
            <p>Our technicians participate in ongoing training programs to stay current with the latest appliance repair techniques and technologies. This continuous education ensures our team maintains expertise in general appliance repair, diagnostics, and service procedures across all major appliance types.</p>
            <p>Through professional training, our technicians develop hands-on experience with a wide range of appliances, learning the latest troubleshooting methods and repair techniques. This commitment to ongoing education means our team brings current knowledge and proven expertise to every service call.</p>
            <p>With professional training, our team is qualified to service all major appliance brands and models.</p>`
    );
    // Make training content general but keep brand identity
    html = html.replace(/Trained and trained to/gi, 'trained to');
    html = html.replace(/This certification represents/gi, 'Our professional training represents');

    // Replace the Professional Service section entirely
    html = html.replace(
      /<p><strong>Professional Service<\/strong><\/p>[\s\S]*?<h3>What is Yearly Training\?<\/h3>[\s\S]*?genuine replacement parts\.<\/p>/,
      `<p><strong>Professional Service</strong></p>
            <p>At ${brand.name} Appliance Repair of Westchester County, our technicians are experts in all ${brand.name} appliances. Our team receives ongoing training on general appliance repair techniques, diagnostics, and service procedures to ensure we deliver the highest standard of repair service.</p>

            <h3>Our Professional Training</h3>
            <p>Our technicians participate in training programs covering general appliance repair, advanced diagnostics, and the latest service techniques. This ongoing education ensures our team stays current with evolving appliance technology and repair methods, bringing expert knowledge to every ${brand.name} service call.</p>`
    );
  }

  // Update copyright to include brand name
  html = html.replace(
    /© 2025 Westchester County Appliance Repair\. All Rights Reserved\./g,
    `© 2025 ${brand.name} Appliance Repair Service of Westchester County. All Rights Reserved.`
  );

  return new Response(html, {
    status: response.status,
    headers: response.headers
  });
}

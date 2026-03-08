const f = (codigo) => `https://flagcdn.com/w160/${codigo}.png`;

// Base de Datos
const baseDatosMundo = {
    "africa": {
        nombre: { es: "África", en: "Africa", nat: "Africa" },
        paises: [
            { id: "ao", nombre: { es: "Angola", en: "Angola", nat: "Angola" }, capital: { es: "Luanda", en: "Luanda", nat: "Luanda" }, bandera: f('ao') },
            { id: "dz", nombre: { es: "Argelia", en: "Algeria", nat: "الجزائر" }, capital: { es: "Argel", en: "Algiers", nat: "الجزائر" }, bandera: f('dz') },
            { id: "bj", nombre: { es: "Benín", en: "Benin", nat: "Bénin" }, capital: { es: "Porto Novo", en: "Porto-Novo", nat: "Porto-Novo" }, bandera: f('bj') },
            { id: "bw", nombre: { es: "Botsuana", en: "Botswana", nat: "Botswana" }, capital: { es: "Gaborone", en: "Gaborone", nat: "Gaborone" }, bandera: f('bw') },
            { id: "bf", nombre: { es: "Burkina Faso", en: "Burkina Faso", nat: "Burkina Faso" }, capital: { es: "Uagadugú", en: "Ouagadougou", nat: "Ouagadougou" }, bandera: f('bf') },
            { id: "bi", nombre: { es: "Burundi", en: "Burundi", nat: "Burundi" }, capital: { es: "Guitega", en: "Gitega", nat: "Gitega" }, bandera: f('bi') },
            { id: "cv", nombre: { es: "Cabo Verde", en: "Cape Verde", nat: "Cabo Verde" }, capital: { es: "Praia", en: "Praia", nat: "Praia" }, bandera: f('cv') },
            { id: "cm", nombre: { es: "Camerún", en: "Cameroon", nat: "Cameroun" }, capital: { es: "Yaundé", en: "Yaoundé", nat: "Yaoundé" }, bandera: f('cm') },
            { id: "td", nombre: { es: "Chad", en: "Chad", nat: "تشاد" }, capital: { es: "Yamena", en: "N'Djamena", nat: "انجمينا" }, bandera: f('td') },
            { id: "km", nombre: { es: "Comoras", en: "Comoros", nat: "Komori" }, capital: { es: "Moroni", en: "Moroni", nat: "Moroni" }, bandera: f('km') },
            { id: "ci", nombre: { es: "Costa de Marfil", en: "Ivory Coast", nat: "Côte d'Ivoire" }, capital: { es: "Yamusukro", en: "Yamoussoukro", nat: "Yamoussoukro" }, bandera: f('ci') },
            { id: "eg", nombre: { es: "Egipto", en: "Egypt", nat: "مصر" }, capital: { es: "El Cairo", en: "Cairo", nat: "القاهرة" }, bandera: f('eg') },
            { id: "er", nombre: { es: "Eritrea", en: "Eritrea", nat: "ኤርትራ" }, capital: { es: "Asmara", en: "Asmara", nat: "ኣስመራ" }, bandera: f('er') },
            { id: "sz", nombre: { es: "Esuatini", en: "Eswatini", nat: "eSwatini" }, capital: { es: "Mbabane", en: "Mbabane", nat: "Mbabane" }, bandera: f('sz') },
            { id: "et", nombre: { es: "Etiopía", en: "Ethiopia", nat: "ኢትዮጵያ" }, capital: { es: "Adís Abeba", en: "Addis Ababa", nat: "አዲስ አበባ" }, bandera: f('et') },
            { id: "ga", nombre: { es: "Gabón", en: "Gabon", nat: "Gabon" }, capital: { es: "Libreville", en: "Libreville", nat: "Libreville" }, bandera: f('ga') },
            { id: "gm", nombre: { es: "Gambia", en: "Gambia", nat: "Gambia" }, capital: { es: "Banjul", en: "Banjul", nat: "Banjul" }, bandera: f('gm') },
            { id: "gh", nombre: { es: "Ghana", en: "Ghana", nat: "Ghana" }, capital: { es: "Acra", en: "Accra", nat: "Accra" }, bandera: f('gh') },
            { id: "gn", nombre: { es: "Guinea", en: "Guinea", nat: "Guinée" }, capital: { es: "Conakri", en: "Conakry", nat: "Conakry" }, bandera: f('gn') },
            { id: "gq", nombre: { es: "Guinea Ecuatorial", en: "Equatorial Guinea", nat: "Guinea Ecuatorial" }, capital: { es: "Malabo", en: "Malabo", nat: "Malabo" }, bandera: f('gq') },
            { id: "gw", nombre: { es: "Guinea Bisáu", en: "Guinea Bissau", nat: "Guiné-Bissau" }, capital: { es: "Bisáu", en: "Bissau", nat: "Bissau" }, bandera: f('gw') },
            { id: "ke", nombre: { es: "Kenia", en: "Kenya", nat: "Kenya" }, capital: { es: "Nairobi", en: "Nairobi", nat: "Nairobi" }, bandera: f('ke') },
            { id: "ls", nombre: { es: "Lesoto", en: "Lesotho", nat: "Lesotho" }, capital: { es: "Maseru", en: "Maseru", nat: "Maseru" }, bandera: f('ls') },
            { id: "lr", nombre: { es: "Liberia", en: "Liberia", nat: "Liberia" }, capital: { es: "Monrovia", en: "Monrovia", nat: "Monrovia" }, bandera: f('lr') },
            { id: "ly", nombre: { es: "Libia", en: "Libya", nat: "ليبيا" }, capital: { es: "Trípoli", en: "Tripoli", nat: "طرابلس" }, bandera: f('ly') },
            { id: "mg", nombre: { es: "Madagascar", en: "Madagascar", nat: "Madagasikara" }, capital: { es: "Antananarivo", en: "Antananarivo", nat: "Antananarivo" }, bandera: f('mg') },
            { id: "mw", nombre: { es: "Malaui", en: "Malawi", nat: "Malawi" }, capital: { es: "Lilongüe", en: "Lilongwe", nat: "Lilongwe" }, bandera: f('mw') },
            { id: "ml", nombre: { es: "Malí", en: "Mali", nat: "Mali" }, capital: { es: "Bamako", en: "Bamako", nat: "Bamako" }, bandera: f('ml') },
            { id: "ma", nombre: { es: "Marruecos", en: "Morocco", nat: "المغرب" }, capital: { es: "Rabat", en: "Rabat", nat: "الرباط" }, bandera: f('ma') },
            { id: "mu", nombre: { es: "Mauricio", en: "Mauritius", nat: "Maurice" }, capital: { es: "Port Louis", en: "Port Louis", nat: "Port Louis" }, bandera: f('mu') },
            { id: "mr", nombre: { es: "Mauritania", en: "Mauritania", nat: "موريتانيا" }, capital: { es: "Nuakchot", en: "Nouakchott", nat: "نواكشوط" }, bandera: f('mr') },
            { id: "mz", nombre: { es: "Mozambique", en: "Mozambique", nat: "Moçambique" }, capital: { es: "Maputo", en: "Maputo", nat: "Maputo" }, bandera: f('mz') },
            { id: "na", nombre: { es: "Namibia", en: "Namibia", nat: "Namibia" }, capital: { es: "Windhoek", en: "Windhoek", nat: "Windhoek" }, bandera: f('na') },
            { id: "ne", nombre: { es: "Níger", en: "Niger", nat: "Niger" }, capital: { es: "Niamey", en: "Niamey", nat: "Niamey" }, bandera: f('ne') },
            { id: "ng", nombre: { es: "Nigeria", en: "Nigeria", nat: "Nigeria" }, capital: { es: "Abuya", en: "Abuja", nat: "Abuja" }, bandera: f('ng') },
            { id: "cf", nombre: { es: "República Centroafricana", en: "Central African Republic", nat: "Ködörösêse tî Bêafrîka" }, capital: { es: "Bangui", en: "Bangui", nat: "Bangui" }, bandera: f('cf') },
            { id: "cd", nombre: { es: "República Democrática del Congo", en: "Democratic Republic of the Congo", nat: "République Démocratique du Congo" }, capital: { es: "Kinsasa", en: "Kinshasa", nat: "Kinshasa" }, bandera: f('cd') },
            { id: "cg", nombre: { es: "República del Congo", en: "Republic of the Congo", nat: "République du Congo" }, capital: { es: "Brazzaville", en: "Brazzaville", nat: "Brazzaville" }, bandera: f('cg') },
            { id: "rw", nombre: { es: "Ruanda", en: "Rwanda", nat: "Rwanda" }, capital: { es: "Kigali", en: "Kigali", nat: "Kigali" }, bandera: f('rw') },
            { id: "st", nombre: { es: "Santo Tomé y Príncipe", en: "São Tomé and Príncipe", nat: "São Tomé e Príncipe" }, capital: { es: "Santo Tomé", en: "São Tomé", nat: "São Tomé" }, bandera: f('st') },
            { id: "sn", nombre: { es: "Senegal", en: "Senegal", nat: "Sénégal" }, capital: { es: "Dakar", en: "Dakar", nat: "Dakar" }, bandera: f('sn') },
            { id: "sc", nombre: { es: "Seychelles", en: "Seychelles", nat: "Sesel" }, capital: { es: "Victoria", en: "Victoria", nat: "Victoria" }, bandera: f('sc') },
            { id: "sl", nombre: { es: "Sierra Leona", en: "Sierra Leone", nat: "Sierra Leone" }, capital: { es: "Freetown", en: "Freetown", nat: "Freetown" }, bandera: f('sl') },
            { id: "so", nombre: { es: "Somalia", en: "Somalia", nat: "Soomaaliya" }, capital: { es: "Mogadiscio", en: "Mogadishu", nat: "Muqdisho" }, bandera: f('so') },
            { id: "za", nombre: { es: "Sudáfrica", en: "South Africa", nat: "Suid-Afrika" }, capital: { es: "Pretoria", en: "Pretoria", nat: "Pretoria" }, bandera: f('za') },
            { id: "sd", nombre: { es: "Sudán", en: "Sudan", nat: "السودان" }, capital: { es: "Jartum", en: "Khartoum", nat: "الخرطوم" }, bandera: f('sd') },
            { id: "ss", nombre: { es: "Sudán del Sur", en: "South Sudan", nat: "South Sudan" }, capital: { es: "Yuba", en: "Juba", nat: "Juba" }, bandera: f('ss') },
            { id: "tz", nombre: { es: "Tanzania", en: "Tanzania", nat: "Tanzania" }, capital: { es: "Dodoma", en: "Dodoma", nat: "Dodoma" }, bandera: f('tz') },
            { id: "tg", nombre: { es: "Togo", en: "Togo", nat: "Togo" }, capital: { es: "Lomé", en: "Lomé", nat: "Lomé" }, bandera: f('tg') },
            { id: "tn", nombre: { es: "Túnez", en: "Tunisia", nat: "تونس" }, capital: { es: "Túnez", en: "Tunis", nat: "تونس" }, bandera: f('tn') },
            { id: "ug", nombre: { es: "Uganda", en: "Uganda", nat: "Uganda" }, capital: { es: "Kampala", en: "Kampala", nat: "Kampala" }, bandera: f('ug') },
            { id: "dj", nombre: { es: "Yibuti", en: "Djibouti", nat: "جيبوتي" }, capital: { es: "Yibuti", en: "Djibouti", nat: "جيبوتي" }, bandera: f('dj') },
            { id: "zm", nombre: { es: "Zambia", en: "Zambia", nat: "Zambia" }, capital: { es: "Lusaka", en: "Lusaka", nat: "Lusaka" }, bandera: f('zm') },
            { id: "zw", nombre: { es: "Zimbabue", en: "Zimbabwe", nat: "Zimbabwe" }, capital: { es: "Harare", en: "Harare", nat: "Harare" }, bandera: f('zw') }
        ]
    },
    "america": {
        nombre: { es: "América", en: "America", nat: "América" },
        paises: [
            { id: "ag", nombre: { es: "Antigua y Barbuda", en: "Antigua and Barbuda", nat: "Antigua and Barbuda" }, capital: { es: "Saint John", en: "Saint John's", nat: "Saint John's" }, bandera: f('ag') },
            { id: "ar", nombre: { es: "Argentina", en: "Argentina", nat: "Argentina" }, capital: { es: "Buenos Aires", en: "Buenos Aires", nat: "Buenos Aires" }, bandera: f('ar') },
            { id: "bs", nombre: { es: "Bahamas", en: "Bahamas", nat: "Bahamas" }, capital: { es: "Nasáu", en: "Nassau", nat: "Nassau" }, bandera: f('bs') },
            { id: "bb", nombre: { es: "Barbados", en: "Barbados", nat: "Barbados" }, capital: { es: "Bridgetown", en: "Bridgetown", nat: "Bridgetown" }, bandera: f('bb') },
            { id: "bz", nombre: { es: "Belice", en: "Belize", nat: "Belize" }, capital: { es: "Belmopán", en: "Belmopan", nat: "Belmopan" }, bandera: f('bz') },
            { id: "bo", nombre: { es: "Bolivia", en: "Bolivia", nat: "Wuliwya" }, capital: { es: "La Paz", en: "La Paz", nat: "Chuqiyapu" }, bandera: f('bo') },
            { id: "br", nombre: { es: "Brasil", en: "Brazil", nat: "Brasil" }, capital: { es: "Brasilia", en: "Brasília", nat: "Brasília" }, bandera: f('br') },
            { id: "ca", nombre: { es: "Canadá", en: "Canada", nat: "Canada" }, capital: { es: "Ottawa", en: "Ottawa", nat: "Ottawa" }, bandera: f('ca') },
            { id: "cl", nombre: { es: "Chile", en: "Chile", nat: "Chile" }, capital: { es: "Santiago", en: "Santiago", nat: "Santiago" }, bandera: f('cl') },
            { id: "co", nombre: { es: "Colombia", en: "Colombia", nat: "Colombia" }, capital: { es: "Bogotá", en: "Bogotá", nat: "Bogotá" }, bandera: f('co') },
            { id: "cr", nombre: { es: "Costa Rica", en: "Costa Rica", nat: "Costa Rica" }, capital: { es: "San José", en: "San José", nat: "San José" }, bandera: f('cr') },
            { id: "cu", nombre: { es: "Cuba", en: "Cuba", nat: "Cuba" }, capital: { es: "La Habana", en: "Havana", nat: "La Habana" }, bandera: f('cu') },
            { id: "dm", nombre: { es: "Dominica", en: "Dominica", nat: "Dominica" }, capital: { es: "Roseau", en: "Roseau", nat: "Roseau" }, bandera: f('dm') },
            { id: "ec", nombre: { es: "Ecuador", en: "Ecuador", nat: "Ecuador" }, capital: { es: "Quito", en: "Quito", nat: "Quito" }, bandera: f('ec') },
            { id: "sv", nombre: { es: "El Salvador", en: "El Salvador", nat: "El Salvador" }, capital: { es: "San Salvador", en: "San Salvador", nat: "San Salvador" }, bandera: f('sv') },
            { id: "us", nombre: { es: "Estados Unidos", en: "United States of America", nat: "United States of America" }, capital: { es: "Washington DC", en: "Washington DC", nat: "Washington DC" }, bandera: f('us') },
            { id: "gd", nombre: { es: "Granada", en: "Grenada", nat: "Grenada" }, capital: { es: "Saint George", en: "Saint George's", nat: "Saint George's" }, bandera: f('gd') },
            { id: "gt", nombre: { es: "Guatemala", en: "Guatemala", nat: "Guatemala" }, capital: { es: "Ciudad de Guatemala", en: "Guatemala City", nat: "Ciudad de Guatemala" }, bandera: f('gt') },
            { id: "gy", nombre: { es: "Guyana", en: "Guyana", nat: "Guyana" }, capital: { es: "Georgetown", en: "Georgetown", nat: "Georgetown" }, bandera: f('gy') },
            { id: "ht", nombre: { es: "Haití", en: "Haiti", nat: "Ayiti" }, capital: { es: "Puerto Príncipe", en: "Port-au-Prince", nat: "Pòtoprens" }, bandera: f('ht') },
            { id: "hn", nombre: { es: "Honduras", en: "Honduras", nat: "Honduras" }, capital: { es: "Tegucigalpa", en: "Tegucigalpa", nat: "Tegucigalpa" }, bandera: f('hn') },
            { id: "jm", nombre: { es: "Jamaica", en: "Jamaica", nat: "Jamaica" }, capital: { es: "Kingston", en: "Kingston", nat: "Kingston" }, bandera: f('jm') },
            { id: "mx", nombre: { es: "México", en: "Mexico", nat: "México" }, capital: { es: "Ciudad de México", en: "Mexico City", nat: "Ciudad de México" }, bandera: f('mx') },
            { id: "ni", nombre: { es: "Nicaragua", en: "Nicaragua", nat: "Nicaragua" }, capital: { es: "Managua", en: "Managua", nat: "Managua" }, bandera: f('ni') },
            { id: "pa", nombre: { es: "Panamá", en: "Panama", nat: "Panamá" }, capital: { es: "Ciudad de Panamá", en: "Panama City", nat: "Ciudad de Panamá" }, bandera: f('pa') },
            { id: "py", nombre: { es: "Paraguay", en: "Paraguay", nat: "Paraguái" }, capital: { es: "Asunción", en: "Asunción", nat: "Asunción" }, bandera: f('py') },
            { id: "pe", nombre: { es: "Perú", en: "Peru", nat: "Piruw" }, capital: { es: "Lima", en: "Lima", nat: "Lima" }, bandera: f('pe') },
            { id: "do", nombre: { es: "República Dominicana", en: "Dominican Republic", nat: "República Dominicana" }, capital: { es: "Santo Domingo", en: "Santo Domingo", nat: "Santo Domingo" }, bandera: f('do') },
            { id: "kn", nombre: { es: "San Cristóbal y Nieves", en: "Saint Kitts and Nevis", nat: "Saint Kitts and Nevis" }, capital: { es: "Basseterre", en: "Basseterre", nat: "Basseterre" }, bandera: f('kn') },
            { id: "vc", nombre: { es: "San Vicente y las Granadinas", en: "Saint Vincent and the Grenadines", nat: "Saint Vincent and the Grenadines" }, capital: { es: "Kingstown", en: "Kingstown", nat: "Kingstown" }, bandera: f('vc') },
            { id: "lc", nombre: { es: "Santa Lucía", en: "Saint Lucia", nat: "Saint Lucia" }, capital: { es: "Castries", en: "Castries", nat: "Castries" }, bandera: f('lc') },
            { id: "sr", nombre: { es: "Surinam", en: "Suriname", nat: "Suriname" }, capital: { es: "Paramaribo", en: "Paramaribo", nat: "Paramaribo" }, bandera: f('sr') },
            { id: "tt", nombre: { es: "Trinidad y Tobago", en: "Trinidad and Tobago", nat: "Trinidad and Tobago" }, capital: { es: "Puerto España", en: "Port of Spain", nat: "Port of Spain" }, bandera: f('tt') },
            { id: "uy", nombre: { es: "Uruguay", en: "Uruguay", nat: "Uruguay" }, capital: { es: "Montevideo", en: "Montevideo", nat: "Montevideo" }, bandera: f('uy') },
            { id: "ve", nombre: { es: "Venezuela", en: "Venezuela", nat: "Venezuela" }, capital: { es: "Caracas", en: "Caracas", nat: "Caracas" }, bandera: f('ve') }
        ]
    },
    "asia": {
        nombre: { es: "Asia", en: "Asia", nat: "Asia" },
        paises: [
            { id: "af", nombre: { es: "Afganistán", en: "Afghanistan", nat: "افغانستان" }, capital: { es: "Kabul", en: "Kabul", nat: "کابل" }, bandera: f('af') },
            { id: "sa", nombre: { es: "Arabia Saudita", en: "Saudi Arabia", nat: "السعودية" }, capital: { es: "Riad", en: "Riyadh", nat: "الرياض" }, bandera: f('sa') },
            { id: "am", nombre: { es: "Armenia", en: "Armenia", nat: "Հայաստան" }, capital: { es: "Ereván", en: "Yerevan", nat: "Երևան" }, bandera: f('am') },
            { id: "az", nombre: { es: "Azerbaiyán", en: "Azerbaijan", nat: "Azərbaycan" }, capital: { es: "Bakú", en: "Baku", nat: "Bakı" }, bandera: f('az') },
            { id: "bd", nombre: { es: "Bangladés", en: "Bangladesh", nat: "বাংলাদেশ" }, capital: { es: "Daca", en: "Dhaka", nat: "ঢাকা" }, bandera: f('bd') },
            { id: "bh", nombre: { es: "Baréin", en: "Bahrain", nat: "البحرين" }, capital: { es: "Manama", en: "Manama", nat: "المنامة" }, bandera: f('bh') },
            { id: "mm", nombre: { es: "Myanmar", en: "Myanmar", nat: "မြန်မာ" }, capital: { es: "Naipyidó", en: "Naypyidaw", nat: "နေပြည်တော်" }, bandera: f('mm') },
            { id: "bn", nombre: { es: "Brunéi", en: "Brunei", nat: "بروناي" }, capital: { es: "Bandar Seri Begawan", en: "Bandar Seri Begawan", nat: "بندر سري بڬاوان" }, bandera: f('bn') },
            { id: "bt", nombre: { es: "Bután", en: "Bhutan", nat: "འབྲུག་ཡུལ་" }, capital: { es: "Timbu", en: "Thimphu", nat: "ཐིམ་ཕུ" }, bandera: f('bt') },
            { id: "kh", nombre: { es: "Camboya", en: "Cambodia", nat: "កម្ពុជា" }, capital: { es: "Nom Pen", en: "Phnom Penh", nat: "ភ្នំពេញ" }, bandera: f('kh') },
            { id: "qa", nombre: { es: "Catar", en: "Qatar", nat: "قطر" }, capital: { es: "Doha", en: "Doha", nat: "الدوحة" }, bandera: f('qa') },
            { id: "cn", nombre: { es: "China", en: "China", nat: "中国" }, capital: { es: "Pekín", en: "Beijing", nat: "北京" }, bandera: f('cn') },
            { id: "kp", nombre: { es: "Corea del Norte", en: "North Korea", nat: "조선" }, capital: { es: "Pionyang", en: "Pyongyang", nat: "평양" }, bandera: f('kp') },
            { id: "kr", nombre: { es: "Corea del Sur", en: "South Korea", nat: "한국" }, capital: { es: "Seúl", en: "Seoul", nat: "서울" }, bandera: f('kr') },
            { id: "ae", nombre: { es: "Emiratos Árabes", en: "United Arab Emirates", nat: "الإمارات" }, capital: { es: "Abu Dabi", en: "Abu Dhabi", nat: "أبو ظبي" }, bandera: f('ae') },
            { id: "ph", nombre: { es: "Filipinas", en: "Philippines", nat: "Pilipinas" }, capital: { es: "Manila", en: "Manila", nat: "Maynila" }, bandera: f('ph') },
            { id: "ge", nombre: { es: "Georgia", en: "Georgia", nat: "საქართველო" }, capital: { es: "Tiflis", en: "Tbilisi", nat: "თბილისი" }, bandera: f('ge') },
            { id: "in", nombre: { es: "India", en: "India", nat: "भारत" }, capital: { es: "Nueva Delhi", en: "New Delhi", nat: "नई दिल्ली" }, bandera: f('in') },
            { id: "id", nombre: { es: "Indonesia", en: "Indonesia", nat: "Indonesia" }, capital: { es: "Yakarta", en: "Jakarta", nat: "Jakarta" }, bandera: f('id') },
            { id: "iq", nombre: { es: "Irak", en: "Iraq", nat: "العراق" }, capital: { es: "Bagdad", en: "Baghdad", nat: "بغداد" }, bandera: f('iq') },
            { id: "ir", nombre: { es: "Irán", en: "Iran", nat: "ایران" }, capital: { es: "Teherán", en: "Tehran", nat: "تهران" }, bandera: f('ir') },
            { id: "il", nombre: { es: "Israel", en: "Israel", nat: "ישראל" }, capital: { es: "Jerusalén", en: "Jerusalem", nat: "ירושלים" }, bandera: f('il') },
            { id: "jp", nombre: { es: "Japón", en: "Japan", nat: "日本" }, capital: { es: "Tokio", en: "Tokyo", nat: "東京" }, bandera: f('jp') },
            { id: "jo", nombre: { es: "Jordania", en: "Jordan", nat: "الأردن)" }, capital: { es: "Amán", en: "Amman", nat: "عمان" }, bandera: f('jo') },
            { id: "kz", nombre: { es: "Kazajistán", en: "Kazakhstan", nat: "Қазақстан" }, capital: { es: "Astaná", en: "Astana", nat: "Астана" }, bandera: f('kz') },
            { id: "kg", nombre: { es: "Kirguistán", en: "Kyrgyzstan", nat: "Кыргызстан" }, capital: { es: "Biskek", en: "Bishkek", nat: "Бишкек" }, bandera: f('kg') },
            { id: "kw", nombre: { es: "Kuwait", en: "Kuwait", nat: "الكويت" }, capital: { es: "Ciudad de Kuwait", en: "Kuwait City", nat: "مدينة الكويت" }, bandera: f('kw') },
            { id: "la", nombre: { es: "Laos", en: "Laos", nat: "ປະເທດລາວ" }, capital: { es: "Vientián", en: "Vientiane", nat: "ວຽງຈັນ" }, bandera: f('la') },
            { id: "lb", nombre: { es: "Líbano", en: "Lebanon", nat: "لبنان" }, capital: { es: "Beirut", en: "Beirut", nat: "بيروت" }, bandera: f('lb') },
            { id: "my", nombre: { es: "Malasia", en: "Malaysia", nat: "مليسيا" }, capital: { es: "Kuala Lumpur", en: "Kuala Lumpur", nat: "كوالا لومڤور" }, bandera: f('my') },
            { id: "mv", nombre: { es: "Maldivas", en: "Maldives", nat: "ދިވެހިރާއްޖެ" }, capital: { es: "Malé", en: "Malé", nat: "މާލެ" }, bandera: f('mv') },
            { id: "mn", nombre: { es: "Mongolia", en: "Mongolia", nat: "Монгол Улс" }, capital: { es: "Ulán Bator", en: "Ulaanbaatar", nat: "Улаанбаатар" }, bandera: f('mn') },
            { id: "np", nombre: { es: "Nepal", en: "Nepal", nat: "नेपाल" }, capital: { es: "Katmandú", en: "Kathmandu", nat: "काठमाडौं" }, bandera: f('np') },
            { id: "om", nombre: { es: "Omán", en: "Oman", nat: "عمان" }, capital: { es: "Mascate", en: "Muscat", nat: "مسقط" }, bandera: f('om') },
            { id: "pk", nombre: { es: "Pakistán", en: "Pakistan", nat: "پاکستان" }, capital: { es: "Islamabad", en: "Islamabad", nat: "اسلام آباد" }, bandera: f('pk') },
            { id: "ps", nombre: { es: "Palestina", en: "Palestine", nat: "فلسطين" }, capital: { es: "Ramala", en: "Ramallah", nat: "رام الله" }, bandera: f('ps') },
            { id: "sg", nombre: { es: "Singapur", en: "Singapore", nat: "新加坡" }, capital: { es: "Singapur", en: "Singapore", nat: "新加坡" }, bandera: f('sg') },
            { id: "sy", nombre: { es: "Siria", en: "Syria", nat: "سوريا" }, capital: { es: "Damasco", en: "Damascus", nat: "دمشق" }, bandera: f('sy') },
            { id: "lk", nombre: { es: "Sri Lanka", en: "Sri Lanka", nat: "ශ්‍රී ලංකාව" }, capital: { es: "Sri Jayawardenapura", en: "Sri Jayawardenepura", nat: "ශ්‍රී ජයවර්ධනපුර කෝට්ටේ" }, bandera: f('lk') },
            { id: "th", nombre: { es: "Tailandia", en: "Thailand", nat: "ประเทศไทย" }, capital: { es: "Bangkok", en: "Bangkok", nat: "กรุงเทพมหานคร" }, bandera: f('th') },
            { id: "tw", nombre: { es: "Taiwán", en: "Taiwan", nat: "臺灣" }, capital: { es: "Taipéi", en: "Taipei", nat: "臺北" }, bandera: f('tw') },
            { id: "tj", nombre: { es: "Tayikistán", en: "Tajikistan", nat: "Тоҷикистон" }, capital: { es: "Dusambé", en: "Dushanbe", nat: "Душанбе" }, bandera: f('tj') },
            { id: "tl", nombre: { es: "Timor Oriental", en: "Timor Leste", nat: "Timor Leste" }, capital: { es: "Dili", en: "Dili", nat: "Díli" }, bandera: f('tl') },
            { id: "tm", nombre: { es: "Turkmenistán", en: "Turkmenistan", nat: "Türkmenistan" }, capital: { es: "Asjabad", en: "Ashgabat", nat: "Aşgabat" }, bandera: f('tm') },
            { id: "uz", nombre: { es: "Uzbekistán", en: "Uzbekistan", nat: "Oʻzbekiston" }, capital: { es: "Taskent", en: "Tashkent", nat: "Toshkent" }, bandera: f('uz') },
            { id: "vn", nombre: { es: "Vietnam", en: "Vietnam", nat: "Việt Nam" }, capital: { es: "Hanói", en: "Hanoi", nat: "Hà Nội" }, bandera: f('vn') },
            { id: "ye", nombre: { es: "Yemen", en: "Yemen", nat: "اليمن" }, capital: { es: "Saná", en: "Sana'a", nat: "صنعاء" }, bandera: f('ye') }
        ]
    },
    "europa": {
        nombre: { es: "Europa", en: "Europe", nat: "Europa" },
        paises: [
            { id: "al", nombre: { es: "Albania", en: "Albania", nat: "Shqipëria" }, capital: { es: "Tirana", en: "Tirana", nat: "Tiranë" }, bandera: f('al') },
            { id: "de", nombre: { es: "Alemania", en: "Germany", nat: "Deutschland" }, capital: { es: "Berlín", en: "Berlin", nat: "Berlin" }, bandera: f('de') },
            { id: "ad", nombre: { es: "Andorra", en: "Andorra", nat: "Andorra" }, capital: { es: "Andorra la Vieja", en: "Andorra la Vella", nat: "Andorra la Vella" }, bandera: f('ad') },
            { id: "at", nombre: { es: "Austria", en: "Austria", nat: "Österreich" }, capital: { es: "Viena", en: "Vienna", nat: "Wien" }, bandera: f('at') },
            { id: "be", nombre: { es: "Bélgica", en: "Belgium", nat: "Belgique" }, capital: { es: "Bruselas", en: "Brussels", nat: "Bruxelles" }, bandera: f('be') },
            { id: "by", nombre: { es: "Bielorrusia", en: "Belarus", nat: "Беларусь" }, capital: { es: "Minsk", en: "Minsk", nat: "Мінск" }, bandera: f('by') },
            { id: "ba", nombre: { es: "Bosnia y Herzegovina", en: "Bosnia and Herzegovina", nat: "Bosna i Hercegovina" }, capital: { es: "Sarajevo", en: "Sarajevo", nat: "Сарајево" }, bandera: f('ba') },
            { id: "bg", nombre: { es: "Bulgaria", en: "Bulgaria", nat: "България)" }, capital: { es: "Sofía", en: "Sofia", nat: "София" }, bandera: f('bg') },
            { id: "cy", nombre: { es: "Chipre", en: "Cyprus", nat: "Κύπρος" }, capital: { es: "Nicosia", en: "Nicosia", nat: "Λευκωσία" }, bandera: f('cy') },
            { id: "hr", nombre: { es: "Croacia", en: "Croatia", nat: "Hrvatska" }, capital: { es: "Zagreb", en: "Zagreb", nat: "Zagreb" }, bandera: f('hr') },
            { id: "dk", nombre: { es: "Dinamarca", en: "Denmark", nat: "Danmark" }, capital: { es: "Copenhague", en: "Copenhagen", nat: "København" }, bandera: f('dk') },
            { id: "sk", nombre: { es: "Eslovaquia", en: "Slovakia", nat: "Slovensko" }, capital: { es: "Bratislava", en: "Bratislava", nat: "Bratislava" }, bandera: f('sk') },
            { id: "si", nombre: { es: "Eslovenia", en: "Slovenia", nat: "Slovenija" }, capital: { es: "Liubliana", en: "Ljubljana", nat: "Ljubljana" }, bandera: f('si') },
            { id: "es", nombre: { es: "España", en: "Spain", nat: "España" }, capital: { es: "Madrid", en: "Madrid", nat: "Madrid" }, bandera: f('es') },
            { id: "ee", nombre: { es: "Estonia", en: "Estonia", nat: "Eesti" }, capital: { es: "Tallin", en: "Tallinn", nat: "Tallinn" }, bandera: f('ee') },
            { id: "fi", nombre: { es: "Finlandia", en: "Finland", nat: "Suomi" }, capital: { es: "Helsinki", en: "Helsinki", nat: "Helsinki" }, bandera: f('fi') },
            { id: "fr", nombre: { es: "Francia", en: "France", nat: "France" }, capital: { es: "París", en: "Paris", nat: "Paris" }, bandera: f('fr') },
            { id: "gr", nombre: { es: "Grecia", en: "Greece", nat: "Ελλάδα" }, capital: { es: "Atenas", en: "Athens", nat: "Αθήνα" }, bandera: f('gr') },
            { id: "hu", nombre: { es: "Hungría", en: "Hungary", nat: "Magyarország" }, capital: { es: "Budapest", en: "Budapest", nat: "Budapest" }, bandera: f('hu') },
            { id: "ie", nombre: { es: "Irlanda", en: "Ireland", nat: "Éire" }, capital: { es: "Dublín", en: "Dublin", nat: "Baile Átha Cliath" }, bandera: f('ie') },
            { id: "is", nombre: { es: "Islandia", en: "Iceland", nat: "Ísland" }, capital: { es: "Reikiavik", en: "Reykjavik", nat: "Reykjavík" }, bandera: f('is') },
            { id: "it", nombre: { es: "Italia", en: "Italy", nat: "Italia" }, capital: { es: "Roma", en: "Rome", nat: "Roma" }, bandera: f('it') },
            { id: "xk", nombre: { es: "Kosovo", en: "Kosovo", nat: "Косово" }, capital: { es: "Pristina", en: "Pristina", nat: "Prishtinë" }, bandera: f('xk') },
            { id: "lv", nombre: { es: "Letonia", en: "Latvia", nat: "Latvija" }, capital: { es: "Riga", en: "Riga", nat: "Rīga" }, bandera: f('lv') },
            { id: "li", nombre: { es: "Liechtenstein", en: "Liechtenstein", nat: "Liechtenstein" }, capital: { es: "Vaduz", en: "Vaduz", nat: "Vaduz" }, bandera: f('li') },
            { id: "lt", nombre: { es: "Lituania", en: "Lithuania", nat: "Lietuva" }, capital: { es: "Vilna", en: "Vilnius", nat: "Vilnius" }, bandera: f('lt') },
            { id: "lu", nombre: { es: "Luxemburgo", en: "Luxembourg", nat: "Lëtzebuerg" }, capital: { es: "Luxemburgo", en: "Luxembourg City", nat: "Lëtzebuerg" }, bandera: f('lu') },
            { id: "mk", nombre: { es: "Macedonia del Norte", en: "North Macedonia", nat: "Северна Македонија" }, capital: { es: "Skopie", en: "Skopje", nat: "Скопје" }, bandera: f('mk') },
            { id: "mt", nombre: { es: "Malta", en: "Malta", nat: "Malta" }, capital: { es: "La Valeta", en: "Valletta", nat: "Il-Belt Valletta" }, bandera: f('mt') },
            { id: "md", nombre: { es: "Moldavia", en: "Moldova", nat: "Moldova" }, capital: { es: "Chisináu", en: "Chișinău", nat: "Chișinău" }, bandera: f('md') },
            { id: "mc", nombre: { es: "Mónaco", en: "Monaco", nat: "Monaco" }, capital: { es: "Mónaco", en: "Monaco", nat: "Monaco" }, bandera: f('mc') },
            { id: "me", nombre: { es: "Montenegro", en: "Montenegro", nat: "Црна Гора" }, capital: { es: "Podgorica", en: "Podgorica", nat: "Подгорица" }, bandera: f('me') },
            { id: "no", nombre: { es: "Noruega", en: "Norway", nat: "Norge" }, capital: { es: "Oslo", en: "Oslo", nat: "Oslo" }, bandera: f('no') },
            { id: "eh", nombre: { es: "País Vasco", en: "Basque Country", nat: "Euskal Herria" }, capital: { es: "Vitoria Gasteiz", en: "Vitoria Gasteiz", nat: "Gasteiz" }, bandera: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_the_Basque_Country.svg" },
            { id: "nl", nombre: { es: "Países Bajos", en: "Netherlands", nat: "Nederland" }, capital: { es: "Ámsterdam", en: "Amsterdam", nat: "Amsterdam" }, bandera: f('nl') },
            { id: "pl", nombre: { es: "Polonia", en: "Poland", nat: "Polska" }, capital: { es: "Varsovia", en: "Warsaw", nat: "Warszawa" }, bandera: f('pl') },
            { id: "pt", nombre: { es: "Portugal", en: "Portugal", nat: "Portugal" }, capital: { es: "Lisboa", en: "Lisbon", nat: "Lisboa" }, bandera: f('pt') },
            { id: "gb", nombre: { es: "Reino Unido", en: "United Kingdom", nat: "United Kingdom" }, capital: { es: "Londres", en: "London", nat: "London" }, bandera: f('gb') },
            { id: "cz", nombre: { es: "República Checa", en: "Czech Republic", nat: "Česko" }, capital: { es: "Praga", en: "Prague", nat: "Praha" }, bandera: f('cz') },
            { id: "ro", nombre: { es: "Rumania", en: "Romania", nat: "România" }, capital: { es: "Bucarest", en: "Bucharest", nat: "București" }, bandera: f('ro') },
            { id: "ru", nombre: { es: "Rusia", en: "Russia", nat: "Россия" }, capital: { es: "Moscú", en: "Moscow", nat: "Москва" }, bandera: f('ru') },
            { id: "sm", nombre: { es: "San Marino", en: "San Marino", nat: "San Marino" }, capital: { es: "San Marino", en: "San Marino", nat: "San Marino" }, bandera: f('sm') },
            { id: "rs", nombre: { es: "Serbia", en: "Serbia", nat: "Србија" }, capital: { es: "Belgrado", en: "Belgrade", nat: "Београд" }, bandera: f('rs') },
            { id: "se", nombre: { es: "Suecia", en: "Sweden", nat: "Sverige" }, capital: { es: "Estocolmo", en: "Stockholm", nat: "Stockholm" }, bandera: f('se') },
            { id: "ch", nombre: { es: "Suiza", en: "Switzerland", nat: "Schweiz" }, capital: { es: "Berna", en: "Bern", nat: "Bern" }, bandera: f('ch') },
            { id: "tr", nombre: { es: "Turquía", en: "Türkiye", nat: "Türkiye" }, capital: { es: "Ankara", en: "Ankara", nat: "Ankara" }, bandera: f('tr') },
            { id: "ua", nombre: { es: "Ucrania", en: "Ukraine", nat: "Україна" }, capital: { es: "Kiev", en: "Kyiv", nat: "Київ" }, bandera: f('ua') },
            { id: "va", nombre: { es: "Vaticano", en: "Vatican City", nat: "Città del Vaticano" }, capital: { es: "Ciudad del Vaticano", en: "Vatican City", nat: "Città del Vaticano" }, bandera: f('va') }
        ]
    },
    "oceania": {
        nombre: { es: "Oceanía", en: "Oceania", nat: "Oceania" },
        paises: [
            { id: "au", nombre: { es: "Australia", en: "Australia", nat: "Australia" }, capital: { es: "Canberra", en: "Canberra", nat: "Canberra" }, bandera: f('au') },
            { id: "fj", nombre: { es: "Fiyi", en: "Fiji", nat: "Viti" }, capital: { es: "Suva", en: "Suva", nat: "Suva" }, bandera: f('fj') },
            { id: "mh", nombre: { es: "Islas Marshall", en: "Marshall Islands", nat: "Aorōkin M̧ajeļ" }, capital: { es: "Majuro", en: "Majuro", nat: "Mājro" }, bandera: f('mh') },
            { id: "sb", nombre: { es: "Islas Salomón", en: "Solomon Islands", nat: "Solomon Aelan" }, capital: { es: "Honiara", en: "Honiara", nat: "Honiara" }, bandera: f('sb') },
            { id: "ki", nombre: { es: "Kiribati", en: "Kiribati", nat: "Kiribati" }, capital: { es: "Tarawa", en: "Tarawa", nat: "Tarawa" }, bandera: f('ki') },
            { id: "fm", nombre: { es: "Micronesia", en: "Micronesia", nat: "Micronesia" }, capital: { es: "Palikir", en: "Palikir", nat: "Palikir" }, bandera: f('fm') },
            { id: "nr", nombre: { es: "Nauru", en: "Nauru", nat: "Naoero" }, capital: { es: "Yaren", en: "Yaren", nat: "Yaren" }, bandera: f('nr') },
            { id: "nz", nombre: { es: "Nueva Zelanda", en: "New Zealand", nat: "Aotearoa" }, capital: { es: "Wellington", en: "Wellington", nat: "Te Whanganui-a-Tara" }, bandera: f('nz') },
            { id: "pw", nombre: { es: "Palaos", en: "Palau", nat: "Belau" }, capital: { es: "Ngerulmud", en: "Ngerulmud", nat: "Ngerulmud" }, bandera: f('pw') },
            { id: "pg", nombre: { es: "Papúa Nueva Guinea", en: "Papua New Guinea", nat: "Papua Niugini" }, capital: { es: "Port Moresby", en: "Port Moresby", nat: "Pot Mosbi" }, bandera: f('pg') },
            { id: "ws", nombre: { es: "Samoa", en: "Samoa", nat: "Sāmoa" }, capital: { es: "Apia", en: "Apia", nat: "Apia" }, bandera: f('ws') },
            { id: "to", nombre: { es: "Tonga", en: "Tonga", nat: "Tonga" }, capital: { es: "Nukualofa", en: "Nukualofa", nat: "Nukuʻalofa" }, bandera: f('to') },
            { id: "tv", nombre: { es: "Tuvalu", en: "Tuvalu", nat: "Tuvalu" }, capital: { es: "Funafuti", en: "Funafuti", nat: "Funafuti" }, bandera: f('tv') },
            { id: "vu", nombre: { es: "Vanuatu", en: "Vanuatu", nat: "Vanuatu" }, capital: { es: "Port Vila", en: "Port Vila", nat: "Port-Vila" }, bandera: f('vu') }
        ]
    }
};

// ESTADO DE LA APLICACIÓN Y 3 IDIOMAS POSIBLES
const idiomasDisponibles = ['es', 'en', 'nat'];
let indiceIdioma = 0; // Empieza en 0 (Español)
let idiomaActual = idiomasDisponibles[indiceIdioma];

// ELEMENTOS DEL DOM ORIGINALES
const btnIdioma = document.getElementById('btn-idioma');
const contenedorAtlas = document.getElementById('atlas');
const ventanaFlotante = document.getElementById('ventana-info');
const vfNombre = document.getElementById('vf-nombre');
const vfCapital = document.getElementById('vf-capital');

// AÑADE ESTA LÍNEA QUE FALTABA:
const vfBandera = document.getElementById('vf-bandera');

// ELEMENTOS NUEVOS PARA EL MENÚ Y JUEGOS
const menuPaises = document.getElementById('menu-paises');
const vistaAtlas = document.getElementById('vista-atlas');
const vistaJuegos = document.getElementById('vista-juegos');
const tituloJuego = document.getElementById('titulo-juego');
const contenedorJuegoActivo = document.getElementById('contenedor-juego-activo');

// FUNCIÓN PRINCIPAL PARA DIBUJAR TODO SEGÚN EL IDIOMA
function renderizarAtlas() {
    // 1. Limpiamos contenedores
    menuPaises.innerHTML = ''; 
    contenedorAtlas.innerHTML = '';
    ventanaFlotante.style.display = 'none';

    // 2. Recorremos la base de datos
    for (const [keyCont, datosCont] of Object.entries(baseDatosMundo)) {
        
        const nombreContinente = datosCont.nombre[idiomaActual];

        // A) Añadir enlace al menú DESPLEGABLE de países
        const enlaceMenu = document.createElement('a');
        enlaceMenu.href = `#${keyCont}`;
        enlaceMenu.textContent = nombreContinente;
        
        // Al hacer clic en un continente, aseguramos que se vea el Atlas y se oculten los juegos
        enlaceMenu.onclick = () => {
            vistaAtlas.style.display = 'block';
            vistaJuegos.style.display = 'none';
        };
        menuPaises.appendChild(enlaceMenu);

        // B) Crear sección del continente en el Atlas
        const seccion = document.createElement('div');
        seccion.className = 'continente-section';
        seccion.id = keyCont; 
        
        const titulo = document.createElement('h2');
        titulo.className = 'continente-titulo';
        titulo.textContent = nombreContinente;
        seccion.appendChild(titulo);

        const grid = document.createElement('div');
        grid.className = 'paises-grid';

        // C) Crear cuadrícula de países
        datosCont.paises.forEach(pais => {
            const elementoPais = document.createElement('div');
            elementoPais.className = 'pais-item';
            
            // Texto visible (Nombre del país)
            elementoPais.textContent = pais.nombre[idiomaActual];
            
            // Evento al hacer click en un país
            elementoPais.addEventListener('click', function(e) {
                e.stopPropagation(); 
                
                // Llenamos la ventana flotante
                vfNombre.textContent = pais.nombre[idiomaActual];
                vfCapital.textContent = pais.capital[idiomaActual];
                vfBandera.src = pais.bandera;

                // Mostramos y posicionamos la ventana
                ventanaFlotante.style.display = 'block';
                ventanaFlotante.style.left = e.pageX + 'px';
                ventanaFlotante.style.top = (e.pageY - 15) + 'px';
            });

            grid.appendChild(elementoPais);
        });

        seccion.appendChild(grid);
        contenedorAtlas.appendChild(seccion);
    }

    // --- NUEVO: TRADUCIR LA BARRA DE NAVEGACIÓN SUPERIOR ---
    const uiNav = textosNavegacion[obtenerIdiomaUI()];
    document.getElementById('nav-btn-paises').textContent = uiNav.paises;
    document.getElementById('nav-btn-juegos').textContent = uiNav.juegos;
    document.getElementById('nav-btn-contra').textContent = uiNav.contra;
    document.getElementById('nav-btn-muerte').textContent = uiNav.muerte;
    document.getElementById('nav-btn-adivinar').textContent = uiNav.adivinar;
    document.getElementById('nav-btn-capitales').textContent = uiNav.capitales;
    document.getElementById('nav-btn-memory').textContent = uiNav.memory;
}


// =========================================
// DICCIONARIO DE TEXTOS PARA MINIJUEGOS
// =========================================
const textosJuego = {
    es: {
        tituloContrarreloj: "Modo Contrarreloj",
        tituloMuerteSubita: "Muerte Súbita",
        tituloAdivinar: "Modo Trivial",
        tituloCapitales: "De 3 en 3",
        tituloMemory: "Memoria Geográfica",
        proximamente: "<p>Próximamente...</p>",
        btnBanderas: "Banderas",
        btnPaises: "Países",
        btnCapitales: "Capitales",
        btnOpciones: "Opciones",
        btnTeclado: "Teclado",
        tiempo: "⏳ Tiempo:",
        puntos: "⭐ Puntos:",
        progreso: "Progreso:",
        aciertos: "✅ Aciertos:",
        fallos: "❌ Fallos:",
        instrucciones: "Selecciona qué quieres adivinar, cómo quieres jugar, y pulsa empezar.",
        empezar: "¡Empezar Juego!",
        pregBandera: "¿Cuál es su bandera?",
        pregPais: "¿A qué país pertenece esta bandera?",
        pregCapital: "¿Cuál es la capital de este país?",
        placeholder: "Escribe y pulsa Enter...",
        saltar: "Saltar",
        btnAcabar: "Acabar",
        tiempoAgotado: "Tiempo agotado",
        hasPerdido: "Has fallado",
        hasGanado: "¡INCREÍBLE! ¡Los has adivinado todos!",
        resultados: "Resultados Finales",
        puntosConseguidos: "Has conseguido",
        finMuerteSubita: "Has sobrevivido a",
        paisesPalabra: "países",
        puntosPalabra: "puntos",
        volverJugar: "Volver a jugar",
        instruccionesTrios: "Encuentra los tríos: Bandera + País + Capital",
        triosCompletados: "Tríos completados:",
        jugadoDeNuevo: "Jugar de nuevo",
        rapidoCualEra: "¡Rápido! ¿Cuál era?",
        partidaFinalizada: "Partida Finalizada"
    },
    en: {
        tituloContrarreloj: "Time Attack Mode",
        tituloMuerteSubita: "Sudden Death",
        tituloAdivinar: "Trivial Mode",
        tituloCapitales: "In Groups of 3",
        tituloMemory: "Geographic Memory",
        proximamente: "<p>Coming soon...</p>",
        btnBanderas: "Flags",
        btnPaises: "Countries",
        btnCapitales: "Capitals",
        btnOpciones: "Options",
        btnTeclado: "Keyboard",
        tiempo: "⏳ Time:",
        puntos: "⭐ Points:",
        progreso: "Progress:",
        aciertos: "✅ Hits:",
        fallos: "❌ Misses:",
        instrucciones: "Select what to guess, how to play, and press start.",
        empezar: "Start Game!",
        pregBandera: "What is its flag?",
        pregPais: "Which country does this flag belong to?",
        pregCapital: "What is the capital of this country?",
        placeholder: "Type and press Enter...",
        saltar: "Skip",
        btnAcabar: "Finish",
        tiempoAgotado: "Time's up",
        hasPerdido: "You failed",
        hasGanado: "AMAZING! You guessed them all!",
        resultados: "Final Results",
        puntosConseguidos: "You scored",
        finMuerteSubita: "You survived",
        paisesPalabra: "countries",
        puntosPalabra: "points",
        volverJugar: "Play again",
        instruccionesTrios: "Find the trios: Flag + Country + Capital",
        triosCompletados: "Trios completed:",
        jugadoDeNuevo: "Play again",
        rapidoCualEra: "Quick! Which one was it?",
        partidaFinalizada: "Game Finished"
    }
};

// DICCIONARIO PARA LA BARRA DE NAVEGACIÓN
const textosNavegacion = {
    es: {
        paises: "🌍 Países ▼",
        juegos: "🎮 Juegos ▼",
        contra: "⏱️ Contrarreloj",
        muerte: "💀 Muerte Súbita",
        adivinar: "❓ Trivial",
        capitales: "🏛️ De 3 en 3",
        memory: "🧠 Memoria"
    },
    en: {
        paises: "🌍 Countries ▼",
        juegos: "🎮 Games ▼",
        contra: "⏱️ Time Attack",
        muerte: "💀 Sudden Death",
        adivinar: "❓ Trivial",
        capitales: "🏛️ In Groups of 3",
        memory: "🧠 Memory"
    }
};

function obtenerIdiomaUI() {
    return idiomaActual === 'en' ? 'en' : 'es'; 
}

// FUNCIÓN PARA CAMBIAR A LA VISTA DE JUEGOS
function mostrarJuego(tipoJuego) {
    vistaAtlas.style.display = 'none';
    vistaJuegos.style.display = 'block';
    ventanaFlotante.style.display = 'none'; 

    const ui = textosJuego[obtenerIdiomaUI()];

    if (tipoJuego === 'contrarreloj' || tipoJuego === 'muertesubita' || tipoJuego === 'adivinar') {
        modoPrincipal = tipoJuego; 
        if(tipoJuego === 'contrarreloj') tituloJuego.textContent = ui.tituloContrarreloj;
        else if(tipoJuego === 'muertesubita') tituloJuego.textContent = ui.tituloMuerteSubita;
        else if(tipoJuego === 'adivinar') tituloJuego.textContent = ui.tituloAdivinar;
        
        prepararMenuJuego(); 
    } else if (tipoJuego === 'capitales') {
        tituloJuego.textContent = ui.tituloCapitales;
        modoPrincipal = 'capitales';
        prepararMenuJuego();
    } else if (tipoJuego === 'memory') {
        tituloJuego.textContent = ui.tituloMemory;
        modoPrincipal = 'memory'; 
        prepararMenuJuego();
    }
}

// =========================================
// MOTOR UNIVERSAL DE MINIJUEGOS
// =========================================

let timerJuego;
let tiempoRestante = 60;
let puntos = 0;

let modoPrincipal = 'contrarreloj'; 
let subModoActual = 'paises'; 
let modoEntrada = 'botones'; 
let paisCorrecto;
let jugando = false;

// Variables exclusivas de Muerte Súbita
let paisesRestantes = [];
let totalPaisesJuego = 0;
let aciertosMuerteSubita = 0;

// Variables exclusivas de Modo Adivinar
let paisesPoolAdivinar = [];
let aciertosAdivinar = 0;
let fallosAdivinar = 0;

// Variables exclusivas de Memoria
let timerMemory;
let timeoutFlash;
let tiempoRestanteMemory = 3;

// Variable exclusivas de Tríos
let casillasSeleccionadas = [];
let todosLosPaises = []; // Declara esto al inicio de tu código

function obtenerTodosLosPaises() {
    let lista = [];
    for (const cont in baseDatosMundo) {
        lista = lista.concat(baseDatosMundo[cont].paises);
    }
    return lista;
}

function prepararMenuJuego() {
    // 1. NUEVO: Pantalla exclusiva para el modo de Tríos (Capitales)
    if (modoPrincipal === 'capitales') {
        // CARGAMOS EL IDIOMA AQUÍ DENTRO TAMBIÉN:
        const ui = textosJuego[obtenerIdiomaUI()]; 
        
        const contenedor = document.getElementById('contenedor-juego-activo') || contenedorJuegoActivo; 
        contenedor.innerHTML = `
            <div id="pantalla-inicio-trios" style="text-align: center; margin-top: 30px;">
                <p style="font-size: 1.2rem; margin-bottom: 20px;">${ui.instruccionesTrios}</p>
                <button onclick="arrancarModoTrios()" style="background-color: #2ecc71; color: white; border: none; padding: 12px 25px; font-size: 1.1rem; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    ▶ ${ui.empezar}
                </button>
            </div>
            
            <div id="controles-juego" style="display: none;"></div>
            <div id="area-pregunta" style="text-align: center; margin-top: 15px;"></div>
            <div id="area-opciones"></div>
        `;
        return; // ¡Súper importante! Este 'return' corta la función aquí.
    }

    // ... [Aquí debajo continúa tu código original de prepararMenuJuego con let controlesHTML = ..., etc.] ...
    if(timerJuego) clearInterval(timerJuego);
    jugando = false;

    const ui = textosJuego[obtenerIdiomaUI()];

    let panelEstadoHTML = '';
    if (modoPrincipal === 'contrarreloj') {
        panelEstadoHTML = `<div>${ui.tiempo} <span id="tiempo-juego">60</span>s</div>
                           <div>${ui.puntos} <span id="puntos-juego">0</span></div>`;
    } else if (modoPrincipal === 'muertesubita') {
        panelEstadoHTML = `<div>${ui.progreso} <span id="progreso-juego" style="font-weight:bold; color:#f39c12;">0 / 0</span></div>`;
    } else if (modoPrincipal === 'adivinar') {
        panelEstadoHTML = `<div>${ui.aciertos} <span id="aciertos-juego" style="color:#2ecc71; font-weight:bold;">0</span></div>
                           <div>${ui.fallos} <span id="fallos-juego" style="color:#e74c3c; font-weight:bold;">0</span></div>`;
    } else if (modoPrincipal === 'memory') {
        panelEstadoHTML = `<div>${ui.tiempo} <span id="tiempo-juego" style="color:#e74c3c; font-weight:bold;">-</span>s</div>
                           <div>${ui.puntos} <span id="puntos-juego">0</span></div>`;
    }

    contenedorJuegoActivo.innerHTML = `
        <div class="menu-modos-juego">
            <button class="btn-modo" onclick="cambiarSubModo('banderas', this)">${ui.btnBanderas}</button>
            <button class="btn-modo activo" onclick="cambiarSubModo('paises', this)">${ui.btnPaises}</button>
            <button class="btn-modo" onclick="cambiarSubModo('capitales', this)">${ui.btnCapitales}</button>
        </div>
        <div class="menu-entrada">
            <button class="btn-entrada activo" id="btn-modo-botones" onclick="cambiarModoEntrada('botones', this)">${ui.btnOpciones}</button>
            <button class="btn-entrada" id="btn-modo-texto" onclick="cambiarModoEntrada('texto', this)">${ui.btnTeclado}</button>
        </div>
        <div class="panel-estado-juego">
            ${panelEstadoHTML}
        </div>
        <div id="area-pregunta" class="pregunta-container">
            <p>${ui.instrucciones}</p>
        </div>
        <div id="area-opciones" class="opciones-grid"></div>
        
        <div id="area-controles-juego" style="margin-top: 20px; display: none; gap: 15px; justify-content: center;">
            <button id="btn-saltar" class="btn-entrada" style="background-color: #f39c12; font-weight: bold;" onclick="saltarPregunta()">${ui.saltar}</button>
            <button id="btn-acabar" class="btn-entrada" style="background-color: #e74c3c; font-weight: bold; color: white;" onclick="finalizarJuego()">${ui.btnAcabar}</button>
        </div>

        <button id="btn-empezar-juego" class="btn-empezar" onclick="iniciarJuego()">${ui.empezar}</button>
    `;
    
    subModoActual = 'paises';
    modoEntrada = 'botones';
}

function cambiarSubModo(modo, boton) {
    if(jugando) return; 
    subModoActual = modo;
    document.querySelectorAll('.btn-modo').forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
}

function cambiarModoEntrada(modo, boton) {
    if(jugando) return; 
    modoEntrada = modo;
    document.querySelectorAll('.btn-entrada').forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
}

function iniciarJuego() {
    jugando = true;
    const todosLosPaises = obtenerTodosLosPaises();
    
    document.getElementById('btn-empezar-juego').style.display = 'none'; 
    document.querySelector('.menu-modos-juego').style.opacity = '0.5';
    document.querySelector('.menu-entrada').style.opacity = '0.5';

    const controlesJuego = document.getElementById('area-controles-juego');
    const btnSaltar = document.getElementById('btn-saltar');
    const btnAcabar = document.getElementById('btn-acabar');

    if (modoPrincipal === 'contrarreloj') {
        tiempoRestante = 60;
        puntos = 0;
        document.getElementById('puntos-juego').textContent = puntos;
        document.getElementById('tiempo-juego').textContent = tiempoRestante;
        
        controlesJuego.style.display = 'flex';
        btnSaltar.style.display = 'inline-block';
        btnAcabar.style.display = 'none';
        
        timerJuego = setInterval(() => {
            tiempoRestante--;
            document.getElementById('tiempo-juego').textContent = tiempoRestante;
            if (tiempoRestante <= 0) finalizarJuego();
        }, 1000);
        
    } else if (modoPrincipal === 'muertesubita') {
        paisesRestantes = [...todosLosPaises]; 
        totalPaisesJuego = paisesRestantes.length;
        aciertosMuerteSubita = 0;
        document.getElementById('progreso-juego').textContent = `${aciertosMuerteSubita} / ${totalPaisesJuego}`;
        controlesJuego.style.display = 'none'; 
        
    } else if (modoPrincipal === 'adivinar') {
        aciertosAdivinar = 0;
        fallosAdivinar = 0;
        paisesPoolAdivinar = [...todosLosPaises]; // Llenamos el saco por primera vez
        document.getElementById('aciertos-juego').textContent = aciertosAdivinar;
        document.getElementById('fallos-juego').textContent = fallosAdivinar;
        
        controlesJuego.style.display = 'flex';
        btnSaltar.style.display = 'none'; // En este modo no se salta, si no sabes fallas.
        btnAcabar.style.display = 'inline-block';
    } else if (modoPrincipal === 'memory') {
        puntos = 0;
        document.getElementById('puntos-juego').textContent = puntos;
        controlesJuego.style.display = 'none'; // Aquí no se salta ni se acaba, es a vida o muerte
    } 
    
    generarPregunta();
}

function generarPregunta() {
    const todosLosPaises = obtenerTodosLosPaises();
    const ui = textosJuego[obtenerIdiomaUI()];
    
    if (modoPrincipal === 'muertesubita') {
        const indiceAleatorio = Math.floor(Math.random() * paisesRestantes.length);
        paisCorrecto = paisesRestantes[indiceAleatorio];
        paisesRestantes.splice(indiceAleatorio, 1); 
        
    } else if (modoPrincipal === 'adivinar') {
        // Si nos quedamos sin países, volvemos a rellenar el saco
        if (paisesPoolAdivinar.length === 0) {
            paisesPoolAdivinar = [...todosLosPaises];
        }
        const indiceAleatorio = Math.floor(Math.random() * paisesPoolAdivinar.length);
        paisCorrecto = paisesPoolAdivinar[indiceAleatorio];
        paisesPoolAdivinar.splice(indiceAleatorio, 1); // Lo quitamos para no repetirlo
        
    } else {
        // Contrarreloj (random total)
        paisCorrecto = todosLosPaises[Math.floor(Math.random() * todosLosPaises.length)];
    }

    let totalOpciones = (modoPrincipal === 'memory') ? 8 : 4;
    let opciones = [];
    while(opciones.length < totalOpciones - 1) {
        let aleatorio = todosLosPaises[Math.floor(Math.random() * todosLosPaises.length)];
        if(!opciones.includes(aleatorio) && aleatorio !== paisCorrecto) opciones.push(aleatorio);
    }
    opciones.splice(Math.floor(Math.random() * totalOpciones), 0, paisCorrecto);
    
    const areaPregunta = document.getElementById('area-pregunta');
    if (subModoActual === 'banderas') {
        areaPregunta.innerHTML = `<h2>${paisCorrecto.nombre[idiomaActual]}</h2> <p>${ui.pregBandera}</p>`;
    } else if (subModoActual === 'paises') {
        areaPregunta.innerHTML = `<img src="${paisCorrecto.bandera}" alt="Bandera" style="max-height: 120px; border: 1px solid #ccc; border-radius: 4px;"> <p>${ui.pregPais}</p>`;
    } else if (subModoActual === 'capitales') {
        areaPregunta.innerHTML = `<img src="${paisCorrecto.bandera}" alt="Bandera" style="max-height: 120px; border: 1px solid #ccc; border-radius: 4px;"> <p>${ui.pregCapital}</p>`;
    }

    const areaOpciones = document.getElementById('area-opciones');
    areaOpciones.innerHTML = ''; 
    
    // 🌟 NUEVO MODO: TODAS LAS BANDERAS DEL MUNDO POR CONTINENTES
    if (modoEntrada === 'texto' && subModoActual === 'banderas') {
        
        // Configuramos el área para que tenga scroll (hay muchas banderas)
        areaOpciones.style.display = 'block';
        areaOpciones.style.maxHeight = '400px'; 
        areaOpciones.style.overflowY = 'auto';
        areaOpciones.style.padding = '10px';
        areaOpciones.style.border = '1px solid #ddd';
        areaOpciones.style.borderRadius = '8px';
        areaOpciones.style.backgroundColor = '#f9f9f9';

        // Recorremos cada continente de tu base de datos
        for (const continente in baseDatosMundo) {
            
            // 1. Crear el Título del Continente (ej: EUROPA)
            const titulo = document.createElement('h3');
            titulo.textContent = continente.toUpperCase(); 
            titulo.style.textAlign = 'center';
            titulo.style.margin = '15px 0 10px 0';
            titulo.style.color = '#2c3e50';
            areaOpciones.appendChild(titulo);

            // 2. Crear un contenedor flex para las banderas de ese continente
            const gridBanderas = document.createElement('div');
            gridBanderas.style.display = 'flex';
            gridBanderas.style.flexWrap = 'wrap';
            gridBanderas.style.justifyContent = 'center';
            gridBanderas.style.gap = '8px';

            // 3. Barajar los países aleatoriamente y añadirlos como botones
            const banderasMezcladas = [...baseDatosMundo[continente].paises].sort(() => Math.random() - 0.5);

            banderasMezcladas.forEach(pais => {
                const btn = document.createElement('button');
                btn.className = 'btn-opcion';
                btn.dataset.id = pais.id; 
                btn.style.padding = '4px';
                btn.style.width = 'auto'; 
                
                btn.innerHTML = `<img src="${pais.bandera}" alt="Bandera" style="width: 60px; height: 40px; object-fit: cover; border-radius: 4px; display: block;">`;
                
                btn.onclick = () => verificarRespuesta(pais, btn);
                gridBanderas.appendChild(btn);
            });

            areaOpciones.appendChild(gridBanderas);
        }

    } 
    // MODO TEXTO NORMAL (Teclado para escribir el país o capital)
    else if (modoEntrada === 'texto' && subModoActual !== 'banderas') {
        
        areaOpciones.style.display = 'flex';
        areaOpciones.style.justifyContent = 'center';
        areaOpciones.innerHTML = `<input type="text" id="input-respuesta" class="input-texto-juego" placeholder="${ui.placeholder}" autocomplete="off">`;
        
        const inputElement = document.getElementById('input-respuesta');
        inputElement.focus(); 
        inputElement.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') verificarRespuestaTexto(this.value, this);
        });
        
    } 
    // MODO CLÁSICO (4 Opciones)
    else {
        areaOpciones.style.display = 'grid'; 
        // Restauramos el estilo por defecto en caso de que vengamos del modo "Todas las banderas"
        areaOpciones.style.maxHeight = 'none';
        areaOpciones.style.overflowY = 'visible';
        areaOpciones.style.border = 'none';
        areaOpciones.style.backgroundColor = 'transparent';

        opciones.forEach(pais => {
            const btn = document.createElement('button');
            btn.className = 'btn-opcion';
            btn.dataset.id = pais.id; 
            
            if (subModoActual === 'banderas') {
                btn.innerHTML = `<img src="${pais.bandera}" alt="Bandera" style="width: 80px; border-radius: 4px; border: 1px solid #ccc;">`;
            } else if (subModoActual === 'paises') {
                btn.textContent = pais.nombre[idiomaActual];
            } else if (subModoActual === 'capitales') {
                btn.textContent = pais.capital[idiomaActual];
            }
            btn.onclick = () => verificarRespuesta(pais, btn);
            areaOpciones.appendChild(btn);
        });
    }

    // (Pégalo justo antes de cerrar la llave de la función generarPregunta)
    if (modoPrincipal === 'memory') {
        areaOpciones.style.display = 'none'; // Escondemos las opciones
        document.getElementById('tiempo-juego').textContent = "👀"; // Ponemos unos ojitos de "mira"
        
        clearTimeout(timeoutFlash);
        clearInterval(timerMemory);
        
        // 1. Esperamos 1 segundo enseñando la bandera/país
        timeoutFlash = setTimeout(() => {
            // 2. Escondemos la pregunta y enseñamos el texto de urgencia
            // 2. Escondemos la pregunta y enseñamos el texto de urgencia
        areaPregunta.innerHTML = `<h2>${ui.rapidoCualEra}</h2>`;
        
        // RESTAURAMOS EL DISEÑO CORRECTO SEGÚN EL MODO ELEGIDO
        if (modoEntrada === 'texto' && subModoActual === 'banderas') {
            // Modo Experto: Todas las banderas por continentes con scroll
            areaOpciones.style.display = 'block'; 
        } else if (modoEntrada === 'texto' && subModoActual !== 'banderas') {
            // Modo Teclado normal: Cuadro de texto centrado
            areaOpciones.style.display = 'flex'; 
            
            // Le volvemos a dar el foco al input para escribir al instante
            const inputElement = document.getElementById('input-respuesta');
            if(inputElement) inputElement.focus();
        } else {
            // Modo normal: 8 botones
            areaOpciones.style.display = 'grid';
            areaOpciones.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
        }
            
            // 3. Empezamos la cuenta atrás de 3 segundos
            tiempoRestanteMemory = 3;
            document.getElementById('tiempo-juego').textContent = tiempoRestanteMemory;
            
            timerMemory = setInterval(() => {
                tiempoRestanteMemory--;
                document.getElementById('tiempo-juego').textContent = tiempoRestanteMemory;
                
                // Si el tiempo llega a 0, pierde
                if (tiempoRestanteMemory <= 0) {
                    clearInterval(timerMemory);
                    // Marcamos la correcta y mostramos fallo
                    const todosLosBotones = document.querySelectorAll('.btn-opcion');
                    todosLosBotones.forEach(b => {
                        b.disabled = true;
                        if(b.dataset.id == paisCorrecto.id) b.classList.add('correcto');
                    });
                    setTimeout(() => finalizarJuego(), 1500);
                }
            }, 1000);
        }, 1000); // 1000 milisegundos = 1 segundo de memorización
    }
} // <-- Fin de la función generarPregunta()

function saltarPregunta() {
    if(!jugando || modoPrincipal !== 'contrarreloj') return;
    generarPregunta(); 
}

function normalizarTexto(texto) {
    if (!texto) return "";
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function manejarAcierto(elementoUI) {
    elementoUI.classList.add('correcto');
    
    if (modoPrincipal === 'contrarreloj') {
        puntos++;
        document.getElementById('puntos-juego').textContent = puntos;
        setTimeout(generarPregunta, 300); 
        
    } else if (modoPrincipal === 'muertesubita') {
        aciertosMuerteSubita++;
        document.getElementById('progreso-juego').textContent = `${aciertosMuerteSubita} / ${totalPaisesJuego}`;
        
        if (aciertosMuerteSubita >= totalPaisesJuego) {
            setTimeout(() => finalizarJuego(true), 800);
        } else {
            setTimeout(generarPregunta, 300); 
        }
        
    } else if (modoPrincipal === 'adivinar') {
        aciertosAdivinar++;
        document.getElementById('aciertos-juego').textContent = aciertosAdivinar;
        setTimeout(generarPregunta, 300);
    } else if (modoPrincipal === 'memory') {
        clearInterval(timerMemory); // Paramos el crono
        puntos++;
        document.getElementById('puntos-juego').textContent = puntos;
        setTimeout(generarPregunta, 300); // Siguiente pregunta rápido
    }
}

function manejarFallo(elementoUI, palabraCorrecta = null) {
    elementoUI.classList.add('incorrecto');
    if(palabraCorrecta) elementoUI.value = palabraCorrecta; 
    
    if (modoPrincipal === 'contrarreloj') {
        tiempoRestante -= 5; 
        if (tiempoRestante < 0) tiempoRestante = 0; 
        document.getElementById('tiempo-juego').textContent = tiempoRestante; 
        
        if (tiempoRestante === 0) {
            setTimeout(() => finalizarJuego(), 1500); 
        } else {
            setTimeout(generarPregunta, 1500); 
        }
        
    } else if (modoPrincipal === 'muertesubita') {
        setTimeout(() => finalizarJuego(false), 1500);
        
    } else if (modoPrincipal === 'adivinar') {
        fallosAdivinar++;
        document.getElementById('fallos-juego').textContent = fallosAdivinar;
        setTimeout(generarPregunta, 1500);
    } else if (modoPrincipal === 'memory') {
        clearInterval(timerMemory);
        setTimeout(() => finalizarJuego(), 1500); // Si falla, fin del juego
    }
}

function verificarRespuesta(paisSeleccionado, boton) {
    if(!jugando) return;
    const todosLosBotones = document.querySelectorAll('.btn-opcion');
    todosLosBotones.forEach(b => b.disabled = true);

    if (paisSeleccionado === paisCorrecto) {
        manejarAcierto(boton);
    } else {
        todosLosBotones.forEach(b => { if(b.dataset.id === paisCorrecto.id) b.classList.add('correcto'); });
        manejarFallo(boton);
    }
}

function verificarRespuestaTexto(textoEscrito, inputElement) {
    if(!jugando) return;
    inputElement.disabled = true;

    let palabraCorrecta = subModoActual === 'paises' ? paisCorrecto.nombre[idiomaActual] : paisCorrecto.capital[idiomaActual];

    if (normalizarTexto(textoEscrito) === normalizarTexto(palabraCorrecta)) {
        manejarAcierto(inputElement);
    } else {
        manejarFallo(inputElement, palabraCorrecta);
    }
}

function finalizarJuego(victoriaMuerteSubita = false) {
    clearInterval(timerJuego);
    jugando = false;
    
    const ui = textosJuego[obtenerIdiomaUI()];

    document.querySelector('.menu-modos-juego').style.opacity = '1';
    document.querySelector('.menu-entrada').style.opacity = '1';
    document.getElementById('area-controles-juego').style.display = 'none'; 

    let mensajeHTML = '';

    if (modoPrincipal === 'contrarreloj') {
        mensajeHTML = `<h2>${ui.tiempoAgotado}</h2><p>${ui.puntosConseguidos} <strong>${puntos}</strong> ${ui.puntosPalabra}.</p>`;
    } else if (modoPrincipal === 'muertesubita') {
        if (victoriaMuerteSubita) {
            mensajeHTML = `<h2>${ui.hasGanado}</h2><p>${ui.finMuerteSubita} <strong>${aciertosMuerteSubita}</strong> ${ui.paisesPalabra}.</p>`;
        } else {
            mensajeHTML = `<h2>${ui.hasPerdido}</h2><p>${ui.finMuerteSubita} <strong>${aciertosMuerteSubita}</strong> ${ui.paisesPalabra} antes de fallar.</p>`;
        }
    } else if (modoPrincipal === 'adivinar') {
        mensajeHTML = `<h2>${ui.resultados}</h2><p>${ui.aciertos} <strong style="color:#2ecc71;">${aciertosAdivinar}</strong> | ${ui.fallos} <strong style="color:#e74c3c;">${fallosAdivinar}</strong></p>`;
    }  else if (modoPrincipal === 'memory') {
        mensajeHTML = `<h2>${ui.hasPerdido}</h2><p>${ui.puntosConseguidos} <strong>${puntos}</strong> ${ui.puntosPalabra}.</p>`;
    } else if (modoPrincipal === 'capitales') { // Este es tu modo de Tríos
        const todas = document.querySelectorAll('.ficha-relacionar').length;
        const correctas = Array.from(document.querySelectorAll('.ficha-relacionar')).filter(f => f.style.backgroundColor === 'rgb(212, 237, 218)' || f.style.backgroundColor === 'match').length;
        
        // Calculamos cuántos tríos se completaron bien (cada trío son 3 fichas)
        const triosCompletados = Math.floor(correctas / 3);

        mensajeHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="font-size: 2rem; color: #2c3e50;">¡Partida Finalizada!</h2>
                <p style="font-size: 1.5rem;">Tríos completados: <strong>${triosCompletados} / 10</strong></p>
                <button onclick="arrancarModoTrios()" class="btn-empezar" style="background-color: #3498db; margin-top: 10px;">
                    🔄 Jugar otra vez
                </button>
            </div>
        `;
    }

    document.getElementById('area-pregunta').innerHTML = mensajeHTML;
    document.getElementById('area-opciones').innerHTML = '';
    
    const btnEmpezar = document.getElementById('btn-empezar-juego');
    btnEmpezar.textContent = ui.volverJugar;
    btnEmpezar.style.display = 'inline-block';
}

// EVENTOS GLOBALES
btnIdioma.addEventListener('click', () => {
    if (jugando) return; 
    
    indiceIdioma = (indiceIdioma + 1) % 3;
    idiomaActual = idiomasDisponibles[indiceIdioma];

    if (idiomaActual === 'es') {
        btnIdioma.textContent = "Español";
    } else if (idiomaActual === 'en') {
        btnIdioma.textContent = "English";
    } else if (idiomaActual === 'nat') {
        btnIdioma.textContent = "Idioma Local"; 
    }
    
    renderizarAtlas(); 
    
    // TRADUCIR LA BARRA DE NAVEGACIÓN SUPERIOR
    // TRADUCIR LA BARRA DE NAVEGACIÓN SUPERIOR
const uiNav = textosNavegacion[obtenerIdiomaUI()];

const btnNavPaises = document.getElementById('nav-btn-paises');
if (btnNavPaises) btnNavPaises.textContent = uiNav.paises;

const btnNavJuegos = document.getElementById('nav-btn-juegos');
if (btnNavJuegos) btnNavJuegos.textContent = uiNav.juegos;

const btnNavContra = document.getElementById('nav-btn-contra');
if (btnNavContra) btnNavContra.textContent = uiNav.contra;

const btnNavMuerte = document.getElementById('nav-btn-muerte');
if (btnNavMuerte) btnNavMuerte.textContent = uiNav.muerte;

const btnNavAdivinar = document.getElementById('nav-btn-adivinar');
if (btnNavAdivinar) btnNavAdivinar.textContent = uiNav.adivinar;

const btnNavCapitales = document.getElementById('nav-btn-capitales');
if (btnNavCapitales) btnNavCapitales.textContent = uiNav.capitales;

const btnNavMemory = document.getElementById('nav-btn-memory');
if (btnNavMemory) btnNavMemory.textContent = uiNav.memory;

    if (vistaJuegos.style.display === 'block') {
        mostrarJuego(modoPrincipal); 
    }
});

function generarTableroRelacionar() {
    // 1. Cargamos el idioma aquí también
    const ui = textosJuego[obtenerIdiomaUI()]; 
    
    const areaOpciones = document.getElementById('area-opciones');
    const areaPregunta = document.getElementById('area-pregunta');
    
    // 2. Usamos la variable del diccionario en lugar de la frase fija
    areaPregunta.innerHTML = `<h2 style="font-size: 1.2rem; margin-bottom: 20px;">${ui.instruccionesTrios}</h2>`;
    
    areaOpciones.innerHTML = '';
    casillasSeleccionadas = [];

    // 1. Obtener 10 países aleatorios del continente actual (o del mundo)
    let copiaPaises = [...todosLosPaises]; 
    copiaPaises.sort(() => Math.random() - 0.5); // Barajamos
    // Por si el continente elegido tiene menos de 10 países (ej: un continente pequeño)
    let paisesJuego = copiaPaises.slice(0, Math.min(10, copiaPaises.length)); 

    // 2. Crear las fichas
    let fichas = [];
    paisesJuego.forEach(pais => {
        // Ficha Bandera
        fichas.push({ idPais: pais.id, tipo: 'bandera', contenido: `<img src="${pais.bandera}" alt="Bandera" style="width: 70px; height: 45px; object-fit: cover; border-radius: 4px; pointer-events: none;">` });
        // Ficha País
        fichas.push({ idPais: pais.id, tipo: 'pais', contenido: `<span style="pointer-events: none; font-weight: bold;">${pais.nombre[idiomaActual]}</span>` });
        // Ficha Capital
        fichas.push({ idPais: pais.id, tipo: 'capital', contenido: `<span style="pointer-events: none;">${pais.capital[idiomaActual]}</span>` });
    });

    // 3. Mezclar todas las fichas
    fichas.sort(() => Math.random() - 0.5);

    // 4. Configurar el diseño (Cuadrícula auto-ajustable)
    areaOpciones.style.display = 'grid';
    areaOpciones.style.gridTemplateColumns = 'repeat(auto-fit, minmax(130px, 1fr))';
    areaOpciones.style.gap = '10px';
    areaOpciones.style.padding = '15px';

    // 5. Dibujar los 30 botones
    fichas.forEach((ficha) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion ficha-relacionar';
        btn.dataset.id = ficha.idPais;
        btn.innerHTML = ficha.contenido;
        btn.style.height = '80px';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.fontSize = '14px';
        btn.style.transition = 'all 0.2s ease';
        
        btn.onclick = () => manejarClickFicha(btn);
        areaOpciones.appendChild(btn);
    });
}

function manejarClickFicha(btn) {
    // Si la ficha ya está bloqueada (verde/roja) o ya la había clickeado, no hacemos nada
    if (btn.disabled || casillasSeleccionadas.includes(btn)) return;

    // Marcamos la ficha visualmente como seleccionada (borde amarillo)
    casillasSeleccionadas.push(btn);
    btn.style.border = '4px solid #f39c12'; 
    btn.style.backgroundColor = '#fdf3e2';

    // Comprobamos si hay algún fallo (si el ID de la ficha clickeada NO coincide con el de la primera que se seleccionó)
    const primerId = casillasSeleccionadas[0].dataset.id;
    const esFallo = casillasSeleccionadas.some(ficha => ficha.dataset.id !== primerId);

    if (esFallo) {
        // --- SE HA EQUIVOCADO ---
        const btnEquivocado = casillasSeleccionadas.pop(); // Sacamos la ficha incorrecta de la lista
        
        // Le quitamos el borde amarillo a la ficha incorrecta para que pueda seguir usándose
        btnEquivocado.style.border = '';
        btnEquivocado.style.backgroundColor = '';

        // Buscamos las 3 fichas correctas del PRIMER país seleccionado y las bloqueamos en ROJO
        const todasLasFichas = document.querySelectorAll('.ficha-relacionar');
        todasLasFichas.forEach(ficha => {
            if (ficha.dataset.id === primerId) {
                ficha.style.backgroundColor = '#f8d7da'; // Fondo rojo claro
                ficha.style.borderColor = '#dc3545'; // Borde rojo fuerte
                ficha.style.color = '#721c24';
                ficha.disabled = true; // Bloqueadas para siempre
                ficha.style.opacity = '0.7';
            }
        });

        // Vaciamos la lista para que el jugador empiece un nuevo trío
        casillasSeleccionadas = [];
        return; 
    }

    // --- VA POR BUEN CAMINO ---
    if (casillasSeleccionadas.length === 3) {
        // ¡Ha completado un trío correcto! Bloqueamos las 3 en VERDE
        casillasSeleccionadas.forEach(ficha => {
            ficha.style.backgroundColor = '#d4edda'; // Fondo verde claro
            ficha.style.borderColor = '#28a745'; // Borde verde
            ficha.style.color = '#155724';
            ficha.disabled = true;
        });

        casillasSeleccionadas = []; // Vaciamos para el siguiente trío
        
        // Comprobar si el juego ha terminado (ya no quedan fichas habilitadas)
        const todasLasFichas = document.querySelectorAll('.ficha-relacionar');
        const fichasTerminadas = Array.from(todasLasFichas).filter(f => f.disabled).length;
        
        if (fichasTerminadas === todasLasFichas.length) {
            setTimeout(() => mostrarResultadosTrios(), 1000);
        }
    }
}

function arrancarModoTrios() {
    // 1. Escondemos la pantalla inicial
    const pantallaInicio = document.getElementById('pantalla-inicio-trios');
    if (pantallaInicio) pantallaInicio.style.display = 'none'; 
    
    // 2. RELLENAMOS LA VARIABLE GLOBAL correctamente
    // Usamos la función que ya tienes programada arriba
    todosLosPaises = obtenerTodosLosPaises(); 

    // 3. Validamos que haya datos antes de generar el tablero
    if (todosLosPaises.length > 0) {
        generarTableroRelacionar(); 
    } else {
        console.error("No se han podido cargar los países de baseDatosMundo");
    }
}

function mostrarResultadosTrios() {
    const ui = textosJuego[obtenerIdiomaUI()];
    const areaOpciones = document.getElementById('area-opciones');
    const areaPregunta = document.getElementById('area-pregunta');

    // Contamos cuántas fichas están en verde (aciertos)
    const fichasCorrectas = Array.from(document.querySelectorAll('.ficha-relacionar'))
                                 .filter(f => f.style.backgroundColor === 'rgb(212, 237, 220)' || f.style.borderColor === 'rgb(40, 167, 69)').length;

    const aciertos = Math.floor(fichasCorrectas / 3);
    const nota = aciertos; // Como son 10 tríos, el total de aciertos es la nota sobre 10

    areaOpciones.style.display = 'block';
    areaPregunta.innerHTML = `<h2>${ui.partidaFinalizada}</h2>`;
    areaOpciones.innerHTML = `
        <div style="text-align: center; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <p style="font-size: 1.5rem;">${ui.triosCompletados} <strong>${aciertos}</strong> / 10</p>
            <button onclick="arrancarModoTrios()" class="btn-empezar" style="display: inline-block; width: auto; padding: 15px 40px;">
                ${ui.jugadoDeNuevo}
            </button>
        </div>
    `;
}

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('pais-item')) ventanaFlotante.style.display = 'none';
});

// Arrancar página
renderizarAtlas();
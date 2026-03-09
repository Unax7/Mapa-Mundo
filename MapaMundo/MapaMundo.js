const f = (codigo) => `https://flagcdn.com/w1280/${codigo.toLowerCase()}.png`;


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

// DICCIONARIO DE ÁREAS (en km²) HECHO A MEDIDA
const areasPaises = {
    // África (54)
    "Angola": 1246700, "Argelia": 2381741, "Benín": 114763, "Botsuana": 581730, "Burkina Faso": 274200,
    "Burundi": 27834, "Cabo Verde": 4033, "Camerún": 475442, "Chad": 1284000, "Comoras": 1861,
    "Costa de Marfil": 322463, "Egipto": 1002450, "Eritrea": 117600, "Esuatini": 17364, "Etiopía": 1104300,
    "Gabón": 267668, "Gambia": 11295, "Ghana": 238533, "Guinea": 245857, "Guinea Ecuatorial": 28051,
    "Guinea Bisáu": 36125, "Kenia": 580367, "Lesoto": 30355, "Liberia": 111369, "Libia": 1759540,
    "Madagascar": 587041, "Malaui": 118484, "Malí": 1240192, "Marruecos": 446550, "Mauricio": 2040,
    "Mauritania": 1030700, "Mozambique": 801590, "Namibia": 825615, "Níger": 1267000, "Nigeria": 923768,
    "República Centroafricana": 622984, "República Democrática del Congo": 2344858, "República del Congo": 342000,
    "Ruanda": 26338, "Santo Tomé y Príncipe": 964, "Senegal": 196722, "Seychelles": 452, "Sierra Leona": 71740,
    "Somalia": 637657, "Sudáfrica": 1221037, "Sudán": 1886068, "Sudán del Sur": 619745, "Tanzania": 945087,
    "Togo": 56785, "Túnez": 163610, "Uganda": 241550, "Yibuti": 23200, "Zambia": 752612, "Zimbabue": 390757,

    // América (35)
    "Antigua y Barbuda": 442, "Argentina": 2780400, "Bahamas": 13943, "Barbados": 430, "Belice": 22966,
    "Bolivia": 1098581, "Brasil": 8515767, "Canadá": 9984670, "Chile": 756102, "Colombia": 1141748,
    "Costa Rica": 51100, "Cuba": 109884, "Dominica": 751, "Ecuador": 283561, "El Salvador": 21041,
    "Estados Unidos": 9372610, "Granada": 344, "Guatemala": 108889, "Guyana": 214969, "Haití": 27750,
    "Honduras": 112492, "Jamaica": 10991, "México": 1964375, "Nicaragua": 130373, "Panamá": 75417,
    "Paraguay": 406752, "Perú": 1285216, "República Dominicana": 48670, "San Cristóbal y Nieves": 261,
    "San Vicente y las Granadinas": 389, "Santa Lucía": 616, "Surinam": 163820, "Trinidad y Tobago": 5128,
    "Uruguay": 176215, "Venezuela": 916445,

    // Asia (47)
    "Afganistán": 652864, "Arabia Saudita": 2149690, "Armenia": 29743, "Azerbaiyán": 86600, "Bangladés": 147570,
    "Baréin": 760, "Myanmar": 676578, "Brunéi": 5765, "Bután": 38394, "Camboya": 181035, "Catar": 11586,
    "China": 9596960, "Corea del Norte": 120540, "Corea del Sur": 100210, "Emiratos Árabes": 83600,
    "Filipinas": 300000, "Georgia": 69700, "India": 3287263, "Indonesia": 1904569, "Irak": 438317,
    "Irán": 1648195, "Israel": 22072, "Japón": 377975, "Jordania": 89342, "Kazajistán": 2724900,
    "Kirguistán": 199951, "Kuwait": 17818, "Laos": 236800, "Líbano": 10452, "Malasia": 330803,
    "Maldivas": 300, "Mongolia": 1564110, "Nepal": 147181, "Omán": 309500, "Pakistán": 881913,
    "Palestina": 6020, "Singapur": 719, "Siria": 185180, "Sri Lanka": 65610, "Tailandia": 513120,
    "Taiwán": 36193, "Tayikistán": 143100, "Timor Oriental": 14874, "Turkmenistán": 488100, "Uzbekistán": 447400,
    "Vietnam": 331212, "Yemen": 527968,

    // Europa (48)
    "Albania": 28748, "Alemania": 357022, "Andorra": 468, "Austria": 83871, "Bélgica": 30528,
    "Bielorrusia": 207600, "Bosnia y Herzegovina": 51197, "Bulgaria": 110879, "Chipre": 9251, "Croacia": 56594,
    "Dinamarca": 43094, "Eslovaquia": 49035, "Eslovenia": 20273, "España": 505990, "Estonia": 45228,
    "Finlandia": 338145, "Francia": 551695, "Grecia": 131957, "Hungría": 93028, "Irlanda": 70273,
    "Islandia": 103000, "Italia": 301340, "Kosovo": 10887, "Letonia": 64589, "Liechtenstein": 160,
    "Lituania": 65300, "Luxemburgo": 2586, "Macedonia del Norte": 25713, "Malta": 316, "Moldavia": 33851,
    "Mónaco": 2, "Montenegro": 13812, "Noruega": 323802, "País Vasco": 20664, "Países Bajos": 41543,
    "Polonia": 312685, "Portugal": 92090, "Reino Unido": 242900, "República Checa": 78865, "Rumania": 238391,
    "Rusia": 17098242, "San Marino": 61, "Serbia": 88361, "Suecia": 450295, "Suiza": 41284,
    "Turquía": 783562, "Ucrania": 603500, "Vaticano": 0.44,

    // Oceanía (14)
    "Australia": 7692024, "Fiyi": 18274, "Islas Marshall": 181, "Islas Salomón": 28896, "Kiribati": 811,
    "Micronesia": 702, "Nauru": 21, "Nueva Zelanda": 268838, "Palaos": 459, "Papúa Nueva Guinea": 462840,
    "Samoa": 2831, "Tonga": 747, "Tuvalu": 26, "Vanuatu": 12189
};

// ÍNDICE DE CALIDAD CLIMÁTICA (1 - 198 puntos / ranking exacto)
const climaPaises = {
    // África (54)
    "Angola": 113, "Argelia": 69, "Benín": 75, "Botsuana": 82, "Burkina Faso": 10,
    "Burundi": 118, "Cabo Verde": 187, "Camerún": 73, "Chad": 16, "Comoras": 110,
    "Costa de Marfil": 76, "Egipto": 81, "Eritrea": 70, "Esuatini": 147, "Etiopía": 111,
    "Gabón": 7, "Gambia": 79, "Ghana": 80, "Guinea": 74, "Guinea Ecuatorial": 6,
    "Guinea Bisáu": 78, "Kenia": 182, "Lesoto": 115, "Liberia": 5, "Libia": 71,
    "Madagascar": 120, "Malaui": 119, "Malí": 13, "Marruecos": 162, "Mauricio": 186,
    "Mauritania": 12, "Mozambique": 117, "Namibia": 112, "Níger": 17, "Nigeria": 72,
    "República Centroafricana": 1, "República Democrática del Congo": 9, "República del Congo": 8,
    "Ruanda": 161, "Santo Tomé y Príncipe": 116, "Senegal": 83, "Seychelles": 181, "Sierra Leona": 4,
    "Somalia": 11, "Sudáfrica": 84, "Sudán": 15, "Sudán del Sur": 14, "Tanzania": 146,
    "Togo": 77, "Túnez": 144, "Uganda": 160, "Yibuti": 18, "Zambia": 114, "Zimbabue": 145,

    // América (35)
    "Antigua y Barbuda": 180, "Argentina": 143, "Bahamas": 189, "Barbados": 185, "Belice": 121,
    "Bolivia": 64, "Brasil": 127, "Canadá": 21, "Chile": 159, "Colombia": 142,
    "Costa Rica": 190, "Cuba": 158, "Dominica": 179, "Ecuador": 178, "El Salvador": 124,
    "Estados Unidos": 125, "Granada": 177, "Guatemala": 157, "Guyana": 2, "Haití": 65,
    "Honduras": 123, "Jamaica": 176, "México": 141, "Nicaragua": 68, "Panamá": 67,
    "Paraguay": 66, "Perú": 126, "República Dominicana": 175, "San Cristóbal y Nieves": 174,
    "San Vicente y las Granadinas": 156, "Santa Lucía": 173, "Surinam": 3, "Trinidad y Tobago": 155,
    "Uruguay": 172, "Venezuela": 122,

    // Asia (47)
    "Afganistán": 43, "Arabia Saudita": 38, "Armenia": 104, "Azerbaiyán": 108, "Bangladés": 48,
    "Baréin": 36, "Myanmar": 56, "Brunéi": 53, "Bután": 51, "Camboya": 58, "Catar": 35,
    "China": 105, "Corea del Norte": 32, "Corea del Sur": 106, "Emiratos Árabes": 37,
    "Filipinas": 63, "Georgia": 109, "India": 47, "Indonesia": 62, "Irak": 41,
    "Irán": 50, "Israel": 171, "Japón": 135, "Jordania": 134, "Kazajistán": 39,
    "Kirguistán": 45, "Kuwait": 33, "Laos": 57, "Líbano": 184, "Malasia": 59,
    "Maldivas": 154, "Mongolia": 19, "Nepal": 107, "Omán": 34, "Pakistán": 49,
    "Palestina": 170, "Singapur": 54, "Siria": 133, "Sri Lanka": 52, "Tailandia": 61,
    "Taiwán": 132, "Tayikistán": 44, "Timor Oriental": 31, "Turkmenistán": 40, "Uzbekistán": 46,
    "Vietnam": 60, "Yemen": 42,

    // Europa (48)
    "Albania": 169, "Alemania": 97, "Andorra": 140, "Austria": 98, "Bélgica": 94,
    "Bielorrusia": 29, "Bosnia y Herzegovina": 139, "Bulgaria": 86, "Chipre": 193, "Croacia": 153,
    "Dinamarca": 90, "Eslovaquia": 89, "Eslovenia": 138, "España": 198, "Estonia": 26,
    "Finlandia": 23, "Francia": 168, "Grecia": 197, "Hungría": 102, "Irlanda": 91,
    "Islandia": 22, "Italia": 192, "Kosovo": 101, "Letonia": 27, "Liechtenstein": 96,
    "Lituania": 28, "Luxemburgo": 95, "Macedonia del Norte": 136, "Malta": 196, "Moldavia": 100,
    "Mónaco": 195, "Montenegro": 167, "Noruega": 24, "País Vasco": 152, "Países Bajos": 93,
    "Polonia": 87, "Portugal": 194, "Reino Unido": 92, "República Checa": 88, "Rumania": 103,
    "Rusia": 20, "San Marino": 188, "Serbia": 137, "Suecia": 25, "Suiza": 99,
    "Turquía": 85, "Ucrania": 30, "Vaticano": 191,

    // Oceanía (14)
    "Australia": 166, "Fiyi": 183, "Islas Marshall": 151, "Islas Salomón": 128, "Kiribati": 150,
    "Micronesia": 130, "Nauru": 129, "Nueva Zelanda": 131, "Palaos": 149, "Papúa Nueva Guinea": 55,
    "Samoa": 165, "Tonga": 164, "Tuvalu": 148, "Vanuatu": 163
};

// ÍNDICE DE CORRUPCIÓN (0.00 = Transparente | 100.00 = Máxima Corrupción)
const corrupcionPaises = {
    // África (54)
    "Angola": 67.15, "Argelia": 67.82, "Benín": 57.45, "Botsuana": 41.22, "Burkina Faso": 62.31,
    "Burundi": 80.12, "Cabo Verde": 40.56, "Camerún": 73.08, "Chad": 80.44, "Comoras": 80.91,
    "Costa de Marfil": 60.27, "Egipto": 65.33, "Eritrea": 78.65, "Esuatini": 70.19, "Etiopía": 63.84,
    "Gabón": 72.15, "Gambia": 65.71, "Ghana": 57.89, "Guinea": 74.32, "Guinea Ecuatorial": 83.11,
    "Guinea Bisáu": 79.47, "Kenia": 69.25, "Lesoto": 61.05, "Liberia": 75.38, "Libia": 82.76,
    "Madagascar": 75.92, "Malaui": 66.41, "Malí": 72.88, "Marruecos": 62.93, "Mauricio": 49.64,
    "Mauritania": 70.83, "Mozambique": 75.14, "Namibia": 51.29, "Níger": 68.52, "Nigeria": 75.66,
    "República Centroafricana": 76.21, "República Democrática del Congo": 80.73, "República del Congo": 78.18,
    "Ruanda": 47.36, "Santo Tomé y Príncipe": 55.48, "Senegal": 57.11, "Seychelles": 29.85, "Sierra Leona": 65.09,
    "Somalia": 89.42, "Sudáfrica": 59.77, "Sudán": 80.25, "Sudán del Sur": 87.59, "Tanzania": 60.81,
    "Togo": 69.94, "Túnez": 60.16, "Uganda": 74.87, "Yibuti": 70.45, "Zambia": 63.24, "Zimbabue": 76.95,

    // América (35)
    "Antigua y Barbuda": 52.18, "Argentina": 63.42, "Bahamas": 36.75, "Barbados": 31.29, "Belice": 57.63,
    "Bolivia": 71.34, "Brasil": 64.88, "Canadá": 24.15, "Chile": 34.67, "Colombia": 60.52,
    "Costa Rica": 45.91, "Cuba": 58.24, "Dominica": 47.88, "Ecuador": 66.19, "El Salvador": 69.45,
    "Estados Unidos": 31.84, "Granada": 48.37, "Guatemala": 77.21, "Guyana": 60.95, "Haití": 83.56,
    "Honduras": 77.89, "Jamaica": 56.41, "México": 69.76, "Nicaragua": 83.92, "Panamá": 65.14,
    "Paraguay": 72.53, "Perú": 67.39, "República Dominicana": 65.82, "San Cristóbal y Nieves": 55.12,
    "San Vicente y las Granadinas": 40.83, "Santa Lucía": 45.26, "Surinam": 62.77, "Trinidad y Tobago": 58.65,
    "Uruguay": 27.43, "Venezuela": 87.16,

    // Asia (47)
    "Afganistán": 80.68, "Arabia Saudita": 48.92, "Armenia": 53.47, "Azerbaiyán": 77.54, "Bangladés": 76.81,
    "Baréin": 58.94, "Myanmar": 80.33, "Brunéi": 40.17, "Bután": 32.58, "Camboya": 78.41, "Catar": 42.66,
    "China": 55.84, "Corea del Norte": 83.74, "Corea del Sur": 37.19, "Emiratos Árabes": 32.14,
    "Filipinas": 66.83, "Georgia": 47.12, "India": 61.56, "Indonesia": 66.52, "Irak": 77.96,
    "Irán": 76.35, "Israel": 37.81, "Japón": 27.89, "Jordania": 54.23, "Kazajistán": 61.94,
    "Kirguistán": 74.63, "Kuwait": 54.78, "Laos": 72.39, "Líbano": 76.57, "Malasia": 50.46,
    "Maldivas": 61.27, "Mongolia": 67.55, "Nepal": 65.68, "Omán": 57.82, "Pakistán": 72.91,
    "Palestina": 65.49, "Singapur": 17.34, "Siria": 87.88, "Sri Lanka": 66.29, "Tailandia": 65.95,
    "Taiwán": 33.45, "Tayikistán": 80.85, "Timor Oriental": 57.29, "Turkmenistán": 82.41, "Uzbekistán": 67.98,
    "Vietnam": 59.23, "Yemen": 84.15,

    // Europa (48)
    "Albania": 63.78, "Alemania": 22.45, "Andorra": 30.14, "Austria": 29.56, "Bélgica": 27.12,
    "Bielorrusia": 63.15, "Bosnia y Herzegovina": 65.74, "Bulgaria": 55.36, "Chipre": 47.61, "Croacia": 50.88,
    "Dinamarca": 10.23, "Eslovaquia": 46.52, "Eslovenia": 44.18, "España": 40.72, "Estonia": 24.87,
    "Finlandia": 13.45, "Francia": 29.11, "Grecia": 51.64, "Hungría": 58.17, "Irlanda": 23.95,
    "Islandia": 28.34, "Italia": 44.83, "Kosovo": 59.41, "Letonia": 40.38, "Liechtenstein": 20.67,
    "Lituania": 39.25, "Luxemburgo": 22.81, "Macedonia del Norte": 58.73, "Malta": 49.16, "Moldavia": 58.42,
    "Mónaco": 25.68, "Montenegro": 54.91, "Noruega": 16.59, "País Vasco": 24.52, "Países Bajos": 18.73,
    "Polonia": 46.89, "Portugal": 39.86, "Reino Unido": 29.82, "República Checa": 43.27, "Rumania": 54.65,
    "Rusia": 74.19, "San Marino": 30.88, "Serbia": 64.35, "Suecia": 18.24, "Suiza": 18.91,
    "Turquía": 66.71, "Ucrania": 64.62, "Vaticano": 30.55,

    // Oceanía (14)
    "Australia": 25.14, "Fiyi": 48.62, "Islas Marshall": 55.73, "Islas Salomón": 57.94, "Kiribati": 55.91,
    "Micronesia": 55.28, "Nauru": 55.45, "Nueva Zelanda": 15.67, "Palaos": 55.86, "Papúa Nueva Guinea": 71.85,
    "Samoa": 56.73, "Tonga": 57.16, "Tuvalu": 55.19, "Vanuatu": 52.64
};

// ÍNDICE DE POTENCIA DEPORTIVA (1 - 198 puntos / ranking exacto)
const deportesPaises = {
    // África (54)
    "Angola": 111, "Argelia": 144, "Benín": 50, "Botsuana": 1, "Burkina Faso": 55,
    "Burundi": 90, "Cabo Verde": 45, "Camerún": 128, "Chad": 54, "Comoras": 38,
    "Costa de Marfil": 130, "Egipto": 146, "Eritrea": 41, "Esuatini": 36, "Etiopía": 160,
    "Gabón": 85, "Gambia": 46, "Ghana": 129, "Guinea": 84, "Guinea Ecuatorial": 42,
    "Guinea Bisáu": 43, "Kenia": 181, "Lesoto": 35, "Liberia": 48, "Libia": 9,
    "Madagascar": 87, "Malaui": 34, "Malí": 56, "Marruecos": 159, "Mauricio": 86,
    "Mauritania": 49, "Mozambique": 89, "Namibia": 112, "Níger": 57, "Nigeria": 145,
    "República Centroafricana": 53, "República Democrática del Congo": 92, "República del Congo": 52,
    "Ruanda": 91, "Santo Tomé y Príncipe": 44, "Senegal": 131, "Seychelles": 37, "Sierra Leona": 47,
    "Somalia": 39, "Sudáfrica": 161, "Sudán": 110, "Sudán del Sur": 33, "Tanzania": 88,
    "Togo": 51, "Túnez": 143, "Uganda": 127, "Yibuti": 40, "Zambia": 113, "Zimbabue": 16,

    // América (35)
    "Antigua y Barbuda": 15, "Argentina": 179, "Bahamas": 69, "Barbados": 68, "Belice": 65,
    "Bolivia": 79, "Brasil": 187, "Canadá": 185, "Chile": 134, "Colombia": 162,
    "Costa Rica": 76, "Cuba": 183, "Dominica": 13, "Ecuador": 133, "El Salvador": 74,
    "Estados Unidos": 198, "Granada": 10, "Guatemala": 73, "Guyana": 67, "Haití": 71,
    "Honduras": 75, "Jamaica": 180, "México": 163, "Nicaragua": 72, "Panamá": 77,
    "Paraguay": 80, "Perú": 78, "República Dominicana": 136, "San Cristóbal y Nieves": 14,
    "San Vicente y las Granadinas": 11, "Santa Lucía": 12, "Surinam": 66, "Trinidad y Tobago": 70,
    "Uruguay": 132, "Venezuela": 135,

    // Asia (47)
    "Afganistán": 59, "Arabia Saudita": 105, "Armenia": 123, "Azerbaiyán": 124, "Bangladés": 60,
    "Baréin": 102, "Myanmar": 62, "Brunéi": 18, "Bután": 19, "Camboya": 64, "Catar": 104,
    "China": 197, "Corea del Norte": 142, "Corea del Sur": 189, "Emiratos Árabes": 103,
    "Filipinas": 107, "Georgia": 151, "India": 150, "Indonesia": 149, "Irak": 97,
    "Irán": 156, "Israel": 115, "Japón": 192, "Jordania": 99, "Kazajistán": 158,
    "Kirguistán": 83, "Kuwait": 101, "Laos": 63, "Líbano": 98, "Malasia": 108,
    "Maldivas": 20, "Mongolia": 93, "Nepal": 61, "Omán": 96, "Pakistán": 95,
    "Palestina": 17, "Singapur": 109, "Siria": 100, "Sri Lanka": 94, "Tailandia": 148,
    "Taiwán": 147, "Tayikistán": 82, "Timor Oriental": 21, "Turkmenistán": 81, "Uzbekistán": 157,
    "Vietnam": 106, "Yemen": 58,

    // Europa (48)
    "Albania": 118, "Alemania": 193, "Andorra": 6, "Austria": 169, "Bélgica": 170,
    "Bielorrusia": 155, "Bosnia y Herzegovina": 119, "Bulgaria": 154, "Chipre": 117, "Croacia": 166,
    "Dinamarca": 172, "Eslovaquia": 152, "Eslovenia": 153, "España": 186, "Estonia": 137,
    "Finlandia": 140, "Francia": 194, "Grecia": 165, "Hungría": 184, "Irlanda": 141,
    "Islandia": 116, "Italia": 190, "Kosovo": 114, "Letonia": 138, "Liechtenstein": 4,
    "Lituania": 139, "Luxemburgo": 8, "Macedonia del Norte": 120, "Malta": 7, "Moldavia": 122,
    "Mónaco": 3, "Montenegro": 121, "Noruega": 174, "País Vasco": 125, "Países Bajos": 188,
    "Polonia": 177, "Portugal": 164, "Reino Unido": 196, "República Checa": 173, "Rumania": 176,
    "Rusia": 195, "San Marino": 5, "Serbia": 167, "Suecia": 175, "Suiza": 171,
    "Turquía": 168, "Ucrania": 178, "Vaticano": 2,

    // Oceanía (14)
    "Australia": 191, "Fiyi": 126, "Islas Marshall": 25, "Islas Salomón": 28, "Kiribati": 26,
    "Micronesia": 27, "Nauru": 22, "Nueva Zelanda": 182, "Palaos": 24, "Papúa Nueva Guinea": 30,
    "Samoa": 32, "Tonga": 31, "Tuvalu": 23, "Vanuatu": 29
};

// ÍNDICE DE DESARROLLO HUMANO (0.000 - 1.000)
const desarrolloPaises = {
    // África (54)
    "Angola": 0.586, "Argelia": 0.745, "Benín": 0.525, "Botsuana": 0.693, "Burkina Faso": 0.449,
    "Burundi": 0.426, "Cabo Verde": 0.662, "Camerún": 0.576, "Chad": 0.394, "Comoras": 0.558,
    "Costa de Marfil": 0.550, "Egipto": 0.731, "Eritrea": 0.492, "Esuatini": 0.597, "Etiopía": 0.498,
    "Gabón": 0.706, "Gambia": 0.500, "Ghana": 0.632, "Guinea": 0.465, "Guinea Ecuatorial": 0.596,
    "Guinea Bisáu": 0.483, "Kenia": 0.575, "Lesoto": 0.514, "Liberia": 0.481, "Libia": 0.718,
    "Madagascar": 0.501, "Malaui": 0.512, "Malí": 0.428, "Marruecos": 0.683, "Mauricio": 0.802,
    "Mauritania": 0.556, "Mozambique": 0.446, "Namibia": 0.615, "Níger": 0.400, "Nigeria": 0.535,
    "República Centroafricana": 0.404, "República Democrática del Congo": 0.479, "República del Congo": 0.571,
    "Ruanda": 0.534, "Santo Tomé y Príncipe": 0.618, "Senegal": 0.511, "Seychelles": 0.785, "Sierra Leona": 0.477,
    "Somalia": 0.361, "Sudáfrica": 0.713, "Sudán": 0.508, "Sudán del Sur": 0.385, "Tanzania": 0.549,
    "Togo": 0.539, "Túnez": 0.731, "Uganda": 0.525, "Yibuti": 0.509, "Zambia": 0.565, "Zimbabue": 0.593,

    // América (35)
    "Antigua y Barbuda": 0.788, "Argentina": 0.842, "Bahamas": 0.812, "Barbados": 0.790, "Belice": 0.683,
    "Bolivia": 0.692, "Brasil": 0.754, "Canadá": 0.936, "Chile": 0.855, "Colombia": 0.752,
    "Costa Rica": 0.809, "Cuba": 0.764, "Dominica": 0.720, "Ecuador": 0.740, "El Salvador": 0.675,
    "Estados Unidos": 0.921, "Granada": 0.795, "Guatemala": 0.627, "Guyana": 0.714, "Haití": 0.535,
    "Honduras": 0.621, "Jamaica": 0.709, "México": 0.758, "Nicaragua": 0.667, "Panamá": 0.805,
    "Paraguay": 0.717, "Perú": 0.762, "República Dominicana": 0.767, "San Cristóbal y Nieves": 0.777,
    "San Vicente y las Granadinas": 0.751, "Santa Lucía": 0.715, "Surinam": 0.730, "Trinidad y Tobago": 0.810,
    "Uruguay": 0.809, "Venezuela": 0.691,

    // Asia (47)
    "Afganistán": 0.478, "Arabia Saudita": 0.875, "Armenia": 0.759, "Azerbaiyán": 0.745, "Bangladés": 0.661,
    "Baréin": 0.875, "Myanmar": 0.585, "Brunéi": 0.829, "Bután": 0.666, "Camboya": 0.593, "Catar": 0.855,
    "China": 0.768, "Corea del Norte": 0.732, "Corea del Sur": 0.925, "Emiratos Árabes": 0.911,
    "Filipinas": 0.699, "Georgia": 0.802, "India": 0.633, "Indonesia": 0.705, "Irak": 0.686,
    "Irán": 0.774, "Israel": 0.919, "Japón": 0.925, "Jordania": 0.720, "Kazajistán": 0.811,
    "Kirguistán": 0.692, "Kuwait": 0.831, "Laos": 0.607, "Líbano": 0.706, "Malasia": 0.803,
    "Maldivas": 0.747, "Mongolia": 0.739, "Nepal": 0.602, "Omán": 0.816, "Pakistán": 0.544,
    "Palestina": 0.715, "Singapur": 0.939, "Siria": 0.577, "Sri Lanka": 0.782, "Tailandia": 0.800,
    "Taiwán": 0.926, "Tayikistán": 0.685, "Timor Oriental": 0.607, "Turkmenistán": 0.745, "Uzbekistán": 0.727,
    "Vietnam": 0.703, "Yemen": 0.455,

    // Europa (48)
    "Albania": 0.796, "Alemania": 0.942, "Andorra": 0.858, "Austria": 0.916, "Bélgica": 0.937,
    "Bielorrusia": 0.808, "Bosnia y Herzegovina": 0.780, "Bulgaria": 0.795, "Chipre": 0.896, "Croacia": 0.858,
    "Dinamarca": 0.948, "Eslovaquia": 0.848, "Eslovenia": 0.918, "España": 0.905, "Estonia": 0.890,
    "Finlandia": 0.940, "Francia": 0.903, "Grecia": 0.887, "Hungría": 0.846, "Irlanda": 0.945,
    "Islandia": 0.959, "Italia": 0.895, "Kosovo": 0.742, "Letonia": 0.863, "Liechtenstein": 0.919,
    "Lituania": 0.875, "Luxemburgo": 0.930, "Macedonia del Norte": 0.770, "Malta": 0.895, "Moldavia": 0.767,
    "Mónaco": 0.956, "Montenegro": 0.832, "Noruega": 0.961, "País Vasco": 0.937, "Países Bajos": 0.941,
    "Polonia": 0.876, "Portugal": 0.866, "Reino Unido": 0.929, "República Checa": 0.889, "Rumania": 0.821,
    "Rusia": 0.822, "San Marino": 0.853, "Serbia": 0.802, "Suecia": 0.947, "Suiza": 0.962,
    "Turquía": 0.838, "Ucrania": 0.773, "Vaticano": 0.900,

    // Oceanía (14)
    "Australia": 0.951, "Fiyi": 0.730, "Islas Marshall": 0.639, "Islas Salomón": 0.564, "Kiribati": 0.624,
    "Micronesia": 0.628, "Nauru": 0.696, "Nueva Zelanda": 0.937, "Palaos": 0.767, "Papúa Nueva Guinea": 0.558,
    "Samoa": 0.707, "Tonga": 0.745, "Tuvalu": 0.641, "Vanuatu": 0.607
};

// PRODUCTO INTERIOR BRUTO (PIB) NOMINAL (en Millones de USD $)
const economiaPaises = {
    // África (54)
    "Angola": 114000, "Argelia": 239000, "Benín": 19000, "Botsuana": 19000, "Burkina Faso": 20000,
    "Burundi": 3000, "Cabo Verde": 2500, "Camerún": 49000, "Chad": 13000, "Comoras": 1300,
    "Costa de Marfil": 79000, "Egipto": 398000, "Eritrea": 2600, "Esuatini": 4800, "Etiopía": 156000,
    "Gabón": 20000, "Gambia": 2300, "Ghana": 76000, "Guinea": 23000, "Guinea Ecuatorial": 12000,
    "Guinea Bisáu": 1900, "Kenia": 112000, "Lesoto": 2000, "Liberia": 4300, "Libia": 40000,
    "Madagascar": 15000, "Malaui": 13000, "Malí": 21000, "Marruecos": 147000, "Mauricio": 14000,
    "Mauritania": 10000, "Mozambique": 21000, "Namibia": 13000, "Níger": 17000, "Nigeria": 362000,
    "República Centroafricana": 2700, "República Democrática del Congo": 69000, "República del Congo": 15000,
    "Ruanda": 13000, "Santo Tomé y Príncipe": 600, "Senegal": 31000, "Seychelles": 2100, "Sierra Leona": 3500,
    "Somalia": 8700, "Sudáfrica": 377000, "Sudán": 25000, "Sudán del Sur": 4600, "Tanzania": 84000,
    "Togo": 9000, "Túnez": 51000, "Uganda": 49000, "Yibuti": 3800, "Zambia": 29000, "Zimbabue": 32000,

    // América (35)
    "Antigua y Barbuda": 1900, "Argentina": 621000, "Bahamas": 13000, "Barbados": 6000, "Belice": 3200,
    "Bolivia": 45000, "Brasil": 2126000, "Canadá": 2117000, "Chile": 317000, "Colombia": 363000,
    "Costa Rica": 85000, "Cuba": 107000, "Dominica": 650, "Ecuador": 118000, "El Salvador": 35000,
    "Estados Unidos": 26950000, "Granada": 1300, "Guatemala": 102000, "Guyana": 16000, "Haití": 26000,
    "Honduras": 34000, "Jamaica": 19000, "México": 1811000, "Nicaragua": 17000, "Panamá": 83000,
    "Paraguay": 44000, "Perú": 264000, "República Dominicana": 121000, "San Cristóbal y Nieves": 1000,
    "San Vicente y las Granadinas": 1000, "Santa Lucía": 2400, "Surinam": 3800, "Trinidad y Tobago": 28000,
    "Uruguay": 77000, "Venezuela": 92000,

    // Asia (47)
    "Afganistán": 14000, "Arabia Saudita": 1069000, "Armenia": 24000, "Azerbaiyán": 72000, "Bangladés": 446000,
    "Baréin": 44000, "Myanmar": 63000, "Brunéi": 15000, "Bután": 2900, "Camboya": 30000, "Catar": 235000,
    "China": 17700000, "Corea del Norte": 18000, "Corea del Sur": 1706000, "Emiratos Árabes": 504000,
    "Filipinas": 436000, "Georgia": 30000, "India": 3732000, "Indonesia": 1417000, "Irak": 254000,
    "Irán": 366000, "Israel": 509000, "Japón": 4232000, "Jordania": 50000, "Kazajistán": 259000,
    "Kirguistán": 12000, "Kuwait": 159000, "Laos": 14000, "Líbano": 21000, "Malasia": 434000,
    "Maldivas": 6900, "Mongolia": 19000, "Nepal": 41000, "Omán": 108000, "Pakistán": 338000,
    "Palestina": 18000, "Singapur": 497000, "Siria": 12000, "Sri Lanka": 74000, "Tailandia": 512000,
    "Taiwán": 751000, "Tayikistán": 11000, "Timor Oriental": 3200, "Turkmenistán": 81000, "Uzbekistán": 90000,
    "Vietnam": 433000, "Yemen": 21000,

    // Europa (48)
    "Albania": 23000, "Alemania": 4429000, "Andorra": 3800, "Austria": 526000, "Bélgica": 624000,
    "Bielorrusia": 68000, "Bosnia y Herzegovina": 28000, "Bulgaria": 101000, "Chipre": 32000, "Croacia": 80000,
    "Dinamarca": 405000, "Eslovaquia": 132000, "Eslovenia": 68000, "España": 1580000, "Estonia": 40000,
    "Finlandia": 297000, "Francia": 3049000, "Grecia": 239000, "Hungría": 212000, "Irlanda": 545000,
    "Islandia": 30000, "Italia": 2186000, "Kosovo": 10000, "Letonia": 46000, "Liechtenstein": 7000,
    "Lituania": 77000, "Luxemburgo": 85000, "Macedonia del Norte": 14000, "Malta": 20000, "Moldavia": 16000,
    "Mónaco": 8000, "Montenegro": 7000, "Noruega": 485000, "País Vasco": 85000, "Países Bajos": 1118000,
    "Polonia": 808000, "Portugal": 287000, "Reino Unido": 3332000, "República Checa": 330000, "Rumania": 350000,
    "Rusia": 1862000, "San Marino": 1800, "Serbia": 75000, "Suecia": 593000, "Suiza": 884000,
    "Turquía": 1154000, "Ucrania": 173000, "Vaticano": 21,

    // Oceanía (14)
    "Australia": 1687000, "Fiyi": 5400, "Islas Marshall": 280, "Islas Salomón": 1600, "Kiribati": 240,
    "Micronesia": 460, "Nauru": 150, "Nueva Zelanda": 249000, "Palaos": 260, "Papúa Nueva Guinea": 31000,
    "Samoa": 930, "Tonga": 540, "Tuvalu": 60, "Vanuatu": 1100
};

// ÍNDICE DE CALIDAD EDUCATIVA (0.0 - 100.0 puntos)
const educacionPaises = {
    // África (54)
    "Angola": 61.2, "Argelia": 74.5, "Benín": 42.4, "Botsuana": 78.8, "Burkina Faso": 39.2,
    "Burundi": 51.4, "Cabo Verde": 76.8, "Camerún": 67.1, "Chad": 22.3, "Comoras": 56.8,
    "Costa de Marfil": 47.2, "Egipto": 71.9, "Eritrea": 56.6, "Esuatini": 77.5, "Etiopía": 49.8,
    "Gabón": 74.7, "Gambia": 50.8, "Ghana": 69.0, "Guinea": 32.0, "Guinea Ecuatorial": 75.3,
    "Guinea Bisáu": 45.6, "Kenia": 71.5, "Lesoto": 69.4, "Liberia": 48.3, "Libia": 81.0,
    "Madagascar": 61.6, "Malaui": 52.1, "Malí": 33.1, "Marruecos": 68.8, "Mauricio": 86.3,
    "Mauritania": 53.5, "Mozambique": 50.7, "Namibia": 76.6, "Níger": 19.1, "Nigeria": 60.0,
    "República Centroafricana": 35.4, "República Democrática del Congo": 61.0, "República del Congo": 65.3,
    "Ruanda": 63.2, "Santo Tomé y Príncipe": 72.8, "Senegal": 51.9, "Seychelles": 85.9, "Sierra Leona": 43.2,
    "Somalia": 30.8, "Sudáfrica": 75.0, "Sudán": 55.7, "Sudán del Sur": 32.5, "Tanzania": 67.9,
    "Togo": 58.7, "Túnez": 76.8, "Uganda": 66.5, "Yibuti": 57.9, "Zambia": 72.7, "Zimbabue": 78.7,

    // América (35)
    "Antigua y Barbuda": 85.0, "Argentina": 87.0, "Bahamas": 86.2, "Barbados": 88.6, "Belice": 76.7,
    "Bolivia": 80.5, "Brasil": 83.2, "Canadá": 96.5, "Chile": 86.4, "Colombia": 82.1,
    "Costa Rica": 85.9, "Cuba": 90.8, "Dominica": 82.0, "Ecuador": 81.8, "El Salvador": 77.0,
    "Estados Unidos": 93.5, "Granada": 84.6, "Guatemala": 71.5, "Guyana": 78.5, "Haití": 58.0,
    "Honduras": 73.2, "Jamaica": 79.1, "México": 82.4, "Nicaragua": 74.8, "Panamá": 81.4,
    "Paraguay": 79.0, "Perú": 81.5, "República Dominicana": 78.8, "San Cristóbal y Nieves": 83.8,
    "San Vicente y las Granadinas": 82.0, "Santa Lucía": 81.1, "Surinam": 80.6, "Trinidad y Tobago": 85.0,
    "Uruguay": 86.7, "Venezuela": 80.1,

    // Asia (47)
    "Afganistán": 35.3, "Arabia Saudita": 85.3, "Armenia": 88.8, "Azerbaiyán": 87.8, "Bangladés": 69.9,
    "Baréin": 86.5, "Myanmar": 71.1, "Brunéi": 87.2, "Bután": 66.6, "Camboya": 70.5, "Catar": 88.3,
    "China": 89.8, "Corea del Norte": 85.0, "Corea del Sur": 97.8, "Emiratos Árabes": 89.8,
    "Filipinas": 81.3, "Georgia": 87.6, "India": 72.4, "Indonesia": 80.7, "Irak": 75.6,
    "Irán": 81.5, "Israel": 92.8, "Japón": 97.5, "Jordania": 84.2, "Kazajistán": 88.8,
    "Kirguistán": 86.6, "Kuwait": 84.1, "Laos": 70.7, "Líbano": 83.9, "Malasia": 86.6,
    "Maldivas": 82.7, "Mongolia": 84.4, "Nepal": 65.9, "Omán": 83.7, "Pakistán": 55.0,
    "Palestina": 82.2, "Singapur": 98.5, "Siria": 74.4, "Sri Lanka": 85.7, "Tailandia": 82.8,
    "Taiwán": 96.5, "Tayikistán": 85.8, "Timor Oriental": 62.1, "Turkmenistán": 84.8, "Uzbekistán": 86.0,
    "Vietnam": 84.8, "Yemen": 55.1,

    // Europa (48)
    "Albania": 84.1, "Alemania": 95.2, "Andorra": 88.0, "Austria": 94.0, "Bélgica": 94.5,
    "Bielorrusia": 89.9, "Bosnia y Herzegovina": 83.0, "Bulgaria": 85.4, "Chipre": 88.1, "Croacia": 88.3,
    "Dinamarca": 96.0, "Eslovaquia": 89.6, "Eslovenia": 92.7, "España": 91.4, "Estonia": 95.8,
    "Finlandia": 98.2, "Francia": 93.8, "Grecia": 89.7, "Hungría": 88.1, "Irlanda": 96.2,
    "Islandia": 95.0, "Italia": 92.2, "Kosovo": 80.9, "Letonia": 91.9, "Liechtenstein": 93.0,
    "Lituania": 92.8, "Luxemburgo": 94.0, "Macedonia del Norte": 82.8, "Malta": 87.5, "Moldavia": 84.4,
    "Mónaco": 92.0, "Montenegro": 84.7, "Noruega": 96.5, "País Vasco": 94.2, "Países Bajos": 95.9,
    "Polonia": 93.5, "Portugal": 89.4, "Reino Unido": 95.0, "República Checa": 92.0, "Rumania": 85.8,
    "Rusia": 89.7, "San Marino": 88.9, "Serbia": 86.8, "Suecia": 96.1, "Suiza": 95.5,
    "Turquía": 84.2, "Ucrania": 86.8, "Vaticano": 90.0,

    // Oceanía (14)
    "Australia": 96.8, "Fiyi": 81.1, "Islas Marshall": 75.3, "Islas Salomón": 64.1, "Kiribati": 74.0,
    "Micronesia": 73.0, "Nauru": 72.5, "Nueva Zelanda": 96.4, "Palaos": 83.5, "Papúa Nueva Guinea": 58.2,
    "Samoa": 80.0, "Tonga": 82.4, "Tuvalu": 78.0, "Vanuatu": 68.2
};

// ÍNDICE DE FELICIDAD (Escala 0.000 - 10.000)
const felicidadPaises = {
    // África (54)
    "Angola": 4.186, "Argelia": 5.329, "Benín": 4.377, "Botsuana": 3.435, "Burkina Faso": 4.111,
    "Burundi": 3.775, "Cabo Verde": 4.927, "Camerún": 4.973, "Chad": 4.397, "Comoras": 3.545,
    "Costa de Marfil": 5.053, "Egipto": 4.170, "Eritrea": 3.590, "Esuatini": 4.396, "Etiopía": 4.241,
    "Gabón": 5.065, "Gambia": 4.279, "Ghana": 4.605, "Guinea": 4.717, "Guinea Ecuatorial": 4.300,
    "Guinea Bisáu": 4.432, "Kenia": 4.487, "Lesoto": 3.186, "Liberia": 4.042, "Libia": 5.866,
    "Madagascar": 4.019, "Malaui": 3.495, "Malí": 3.982, "Marruecos": 4.903, "Mauricio": 5.902,
    "Mauritania": 4.724, "Mozambique": 4.954, "Namibia": 4.631, "Níger": 4.501, "Nigeria": 4.981,
    "República Centroafricana": 3.221, "República Democrática del Congo": 3.207, "República del Congo": 5.267,
    "Ruanda": 3.138, "Santo Tomé y Príncipe": 4.885, "Senegal": 4.855, "Seychelles": 5.400, "Sierra Leona": 3.138,
    "Somalia": 3.930, "Sudáfrica": 5.275, "Sudán": 3.972, "Sudán del Sur": 2.650, "Tanzania": 3.694,
    "Togo": 4.137, "Túnez": 4.374, "Uganda": 4.432, "Yibuti": 4.320, "Zambia": 3.982, "Zimbabue": 3.204,

    // América (35)
    "Antigua y Barbuda": 5.860, "Argentina": 6.024, "Bahamas": 6.100, "Barbados": 5.950, "Belice": 5.956,
    "Bolivia": 5.559, "Brasil": 6.125, "Canadá": 6.961, "Chile": 6.334, "Colombia": 5.630,
    "Costa Rica": 7.023, "Cuba": 5.350, "Dominica": 5.600, "Ecuador": 5.533, "El Salvador": 6.120,
    "Estados Unidos": 6.894, "Granada": 5.500, "Guatemala": 6.150, "Guyana": 5.900, "Haití": 3.207,
    "Honduras": 6.022, "Jamaica": 5.703, "México": 6.330, "Nicaragua": 6.392, "Panamá": 6.405,
    "Paraguay": 5.738, "Perú": 5.526, "República Dominicana": 5.569, "San Cristóbal y Nieves": 5.800,
    "San Vicente y las Granadinas": 5.700, "Santa Lucía": 5.600, "Surinam": 5.500, "Trinidad y Tobago": 6.100,
    "Uruguay": 6.492, "Venezuela": 5.211,

    // Asia (47)
    "Afganistán": 1.721, "Arabia Saudita": 6.406, "Armenia": 5.342, "Azerbaiyán": 5.173, "Bangladés": 4.282,
    "Baréin": 6.173, "Myanmar": 4.394, "Brunéi": 5.800, "Bután": 5.300, "Camboya": 4.393, "Catar": 6.374,
    "China": 5.818, "Corea del Norte": 3.200, "Corea del Sur": 5.951, "Emiratos Árabes": 6.571,
    "Filipinas": 5.523, "Georgia": 5.109, "India": 4.036, "Indonesia": 5.399, "Irak": 4.941,
    "Irán": 4.876, "Israel": 7.473, "Japón": 6.129, "Jordania": 4.120, "Kazajistán": 6.144,
    "Kirguistán": 5.825, "Kuwait": 6.106, "Laos": 5.111, "Líbano": 2.392, "Malasia": 6.012,
    "Maldivas": 5.198, "Mongolia": 5.840, "Nepal": 5.360, "Omán": 5.850, "Pakistán": 4.555,
    "Palestina": 4.908, "Singapur": 6.587, "Siria": 3.462, "Sri Lanka": 4.442, "Tailandia": 5.843,
    "Taiwán": 6.535, "Tayikistán": 5.330, "Timor Oriental": 5.000, "Turkmenistán": 5.474, "Uzbekistán": 6.014,
    "Vietnam": 5.763, "Yemen": 3.150,

    // Europa (48)
    "Albania": 5.277, "Alemania": 6.892, "Andorra": 6.800, "Austria": 7.097, "Bélgica": 6.859,
    "Bielorrusia": 5.821, "Bosnia y Herzegovina": 5.633, "Bulgaria": 5.466, "Chipre": 6.130, "Croacia": 6.125,
    "Dinamarca": 7.586, "Eslovaquia": 6.258, "Eslovenia": 6.650, "España": 6.436, "Estonia": 6.455,
    "Finlandia": 7.804, "Francia": 6.661, "Grecia": 5.931, "Hungría": 6.041, "Irlanda": 6.911,
    "Islandia": 7.530, "Italia": 6.404, "Kosovo": 6.362, "Letonia": 6.213, "Liechtenstein": 7.100,
    "Lituania": 6.763, "Luxemburgo": 7.228, "Macedonia del Norte": 5.254, "Malta": 6.300, "Moldavia": 5.819,
    "Mónaco": 7.100, "Montenegro": 5.722, "Noruega": 7.315, "País Vasco": 7.050, "Países Bajos": 7.403,
    "Polonia": 6.260, "Portugal": 5.968, "Reino Unido": 6.796, "República Checa": 6.845, "Rumania": 6.589,
    "Rusia": 5.661, "San Marino": 6.600, "Serbia": 6.144, "Suecia": 7.395, "Suiza": 7.240,
    "Turquía": 4.614, "Ucrania": 5.071, "Vaticano": 6.500,

    // Oceanía (14)
    "Australia": 7.095, "Fiyi": 5.800, "Islas Marshall": 5.400, "Islas Salomón": 5.300, "Kiribati": 5.200,
    "Micronesia": 5.100, "Nauru": 5.000, "Nueva Zelanda": 7.123, "Palaos": 5.700, "Papúa Nueva Guinea": 4.900,
    "Samoa": 5.500, "Tonga": 5.400, "Tuvalu": 5.100, "Vanuatu": 5.300
};

// ÍNDICE DE PRESTIGIO GASTRONÓMICO (0.0 - 100.0 puntos)
const gastronomiaPaises = {
    // África (54)
    "Angola": 62.4, "Argelia": 78.5, "Benín": 58.2, "Botsuana": 55.4, "Burkina Faso": 54.1,
    "Burundi": 51.0, "Cabo Verde": 66.8, "Camerún": 65.3, "Chad": 50.5, "Comoras": 56.7,
    "Costa de Marfil": 68.2, "Egipto": 81.4, "Eritrea": 64.6, "Esuatini": 52.3, "Etiopía": 84.5,
    "Gabón": 59.7, "Gambia": 58.8, "Ghana": 71.0, "Guinea": 55.2, "Guinea Ecuatorial": 57.3,
    "Guinea Bisáu": 54.6, "Kenia": 69.5, "Lesoto": 51.8, "Liberia": 56.4, "Libia": 68.0,
    "Madagascar": 65.1, "Malaui": 53.2, "Malí": 59.1, "Marruecos": 88.7, "Mauricio": 75.3,
    "Mauritania": 57.5, "Mozambique": 66.4, "Namibia": 60.5, "Níger": 52.1, "Nigeria": 77.8,
    "República Centroafricana": 49.5, "República Democrática del Congo": 61.0, "República del Congo": 59.3,
    "Ruanda": 55.6, "Santo Tomé y Príncipe": 60.8, "Senegal": 76.2, "Seychelles": 72.5, "Sierra Leona": 56.0,
    "Somalia": 63.4, "Sudáfrica": 82.1, "Sudán": 61.7, "Sudán del Sur": 48.5, "Tanzania": 68.9,
    "Togo": 58.0, "Túnez": 80.2, "Uganda": 64.5, "Yibuti": 57.9, "Zambia": 58.7, "Zimbabue": 59.4,

    // América (35)
    "Antigua y Barbuda": 67.5, "Argentina": 89.2, "Bahamas": 71.2, "Barbados": 70.5, "Belice": 68.4,
    "Bolivia": 77.6, "Brasil": 88.5, "Canadá": 81.4, "Chile": 84.3, "Colombia": 85.7,
    "Costa Rica": 76.8, "Cuba": 80.5, "Dominica": 66.0, "Ecuador": 83.9, "El Salvador": 78.2,
    "Estados Unidos": 87.5, "Granada": 69.1, "Guatemala": 79.4, "Guyana": 67.8, "Haití": 71.5,
    "Honduras": 77.1, "Jamaica": 82.6, "México": 96.8, "Nicaragua": 75.5, "Panamá": 78.9,
    "Paraguay": 76.2, "Perú": 95.5, "República Dominicana": 81.0, "San Cristóbal y Nieves": 65.5,
    "San Vicente y las Granadinas": 66.2, "Santa Lucía": 68.0, "Surinam": 70.3, "Trinidad y Tobago": 75.4,
    "Uruguay": 82.0, "Venezuela": 83.5,

    // Asia (47)
    "Afganistán": 73.2, "Arabia Saudita": 76.5, "Armenia": 79.8, "Azerbaiyán": 78.4, "Bangladés": 77.1,
    "Baréin": 71.5, "Myanmar": 78.9, "Brunéi": 69.5, "Bután": 68.2, "Camboya": 79.5, "Catar": 75.0,
    "China": 95.8, "Corea del Norte": 68.0, "Corea del Sur": 92.4, "Emiratos Árabes": 80.5,
    "Filipinas": 85.2, "Georgia": 87.5, "India": 94.6, "Indonesia": 90.5, "Irak": 78.0,
    "Irán": 86.3, "Israel": 84.2, "Japón": 98.5, "Jordania": 81.5, "Kazajistán": 74.6,
    "Kirguistán": 72.1, "Kuwait": 73.8, "Laos": 77.4, "Líbano": 89.5, "Malasia": 91.2,
    "Maldivas": 70.4, "Mongolia": 66.5, "Nepal": 76.8, "Omán": 74.2, "Pakistán": 85.8,
    "Palestina": 82.1, "Singapur": 91.8, "Siria": 86.5, "Sri Lanka": 83.4, "Tailandia": 94.2,
    "Taiwán": 90.8, "Tayikistán": 73.5, "Timor Oriental": 65.2, "Turkmenistán": 70.8, "Uzbekistán": 79.2,
    "Vietnam": 93.5, "Yemen": 75.4,

    // Europa (48)
    "Albania": 81.2, "Alemania": 85.4, "Andorra": 76.5, "Austria": 86.8, "Bélgica": 88.2,
    "Bielorrusia": 74.5, "Bosnia y Herzegovina": 82.4, "Bulgaria": 83.6, "Chipre": 85.1, "Croacia": 87.9,
    "Dinamarca": 89.5, "Eslovaquia": 78.5, "Eslovenia": 81.4, "España": 97.4, "Estonia": 77.2,
    "Finlandia": 78.8, "Francia": 98.2, "Grecia": 94.8, "Hungría": 85.6, "Irlanda": 79.5,
    "Islandia": 76.4, "Italia": 99.5, "Kosovo": 79.0, "Letonia": 76.5, "Liechtenstein": 75.0,
    "Lituania": 78.1, "Luxemburgo": 81.0, "Macedonia del Norte": 83.2, "Malta": 82.5, "Moldavia": 79.4,
    "Mónaco": 86.0, "Montenegro": 80.5, "Noruega": 80.2, "País Vasco": 96.5, "Países Bajos": 82.4,
    "Polonia": 86.5, "Portugal": 92.8, "Reino Unido": 83.5, "República Checa": 84.2, "Rumania": 85.0,
    "Rusia": 82.7, "San Marino": 87.0, "Serbia": 86.4, "Suecia": 84.5, "Suiza": 88.0,
    "Turquía": 93.6, "Ucrania": 84.8, "Vaticano": 78.0,

    // Oceanía (14)
    "Australia": 86.5, "Fiyi": 71.4, "Islas Marshall": 60.5, "Islas Salomón": 59.2, "Kiribati": 57.8,
    "Micronesia": 58.4, "Nauru": 55.0, "Nueva Zelanda": 83.2, "Palaos": 62.5, "Papúa Nueva Guinea": 63.8,
    "Samoa": 68.5, "Tonga": 66.2, "Tuvalu": 56.5, "Vanuatu": 64.0
};

// ÍNDICE DE LIMPIEZA Y DESEMPEÑO AMBIENTAL (0.0 - 100.0 puntos)
const limpiezaPaises = {
    // África (54)
    "Angola": 30.5, "Argelia": 46.2, "Benín": 33.1, "Botsuana": 54.0, "Burkina Faso": 35.5,
    "Burundi": 32.8, "Cabo Verde": 52.9, "Camerún": 36.5, "Chad": 28.1, "Comoras": 42.5,
    "Costa de Marfil": 32.7, "Egipto": 43.5, "Eritrea": 31.7, "Esuatini": 44.2, "Etiopía": 34.4,
    "Gabón": 53.1, "Gambia": 36.9, "Ghana": 39.5, "Guinea": 31.6, "Guinea Ecuatorial": 41.8,
    "Guinea Bisáu": 34.0, "Kenia": 41.0, "Lesoto": 37.2, "Liberia": 32.3, "Libia": 44.7,
    "Madagascar": 33.5, "Malaui": 38.3, "Malí": 33.0, "Marruecos": 46.5, "Mauricio": 61.2,
    "Mauritania": 32.1, "Mozambique": 34.8, "Namibia": 50.1, "Níger": 32.0, "Nigeria": 33.4,
    "República Centroafricana": 32.8, "República Democrática del Congo": 33.0, "República del Congo": 40.1,
    "Ruanda": 46.8, "Santo Tomé y Príncipe": 48.5, "Senegal": 39.7, "Seychelles": 65.5, "Sierra Leona": 34.4,
    "Somalia": 25.4, "Sudáfrica": 49.9, "Sudán": 31.5, "Sudán del Sur": 28.0, "Tanzania": 38.2,
    "Togo": 34.2, "Túnez": 49.3, "Uganda": 35.8, "Yibuti": 38.1, "Zambia": 38.4, "Zimbabue": 43.5,

    // América (35)
    "Antigua y Barbuda": 60.1, "Argentina": 54.1, "Bahamas": 62.5, "Barbados": 58.6, "Belice": 55.0,
    "Bolivia": 43.4, "Brasil": 55.2, "Canadá": 71.0, "Chile": 65.4, "Colombia": 52.9,
    "Costa Rica": 63.8, "Cuba": 56.4, "Dominica": 59.2, "Ecuador": 54.5, "El Salvador": 50.3,
    "Estados Unidos": 71.1, "Granada": 57.5, "Guatemala": 42.3, "Guyana": 48.2, "Haití": 26.1,
    "Honduras": 45.6, "Jamaica": 53.4, "México": 52.3, "Nicaragua": 48.4, "Panamá": 55.9,
    "Paraguay": 50.4, "Perú": 49.6, "República Dominicana": 51.0, "San Cristóbal y Nieves": 58.8,
    "San Vicente y las Granadinas": 59.0, "Santa Lucía": 59.4, "Surinam": 52.5, "Trinidad y Tobago": 57.1,
    "Uruguay": 58.8, "Venezuela": 46.4,

    // Asia (47)
    "Afganistán": 22.6, "Arabia Saudita": 53.2, "Armenia": 56.5, "Azerbaiyán": 52.4, "Bangladés": 29.5,
    "Baréin": 51.0, "Myanmar": 26.4, "Brunéi": 62.1, "Bután": 53.6, "Camboya": 38.1, "Catar": 53.0,
    "China": 48.4, "Corea del Norte": 38.0, "Corea del Sur": 66.5, "Emiratos Árabes": 62.4,
    "Filipinas": 43.1, "Georgia": 55.6, "India": 28.9, "Indonesia": 41.5, "Irak": 37.4,
    "Irán": 44.5, "Israel": 65.8, "Japón": 75.3, "Jordania": 53.6, "Kazajistán": 52.8,
    "Kirguistán": 43.2, "Kuwait": 54.2, "Laos": 36.8, "Líbano": 43.3, "Malasia": 58.1,
    "Maldivas": 55.8, "Mongolia": 44.6, "Nepal": 36.5, "Omán": 51.5, "Pakistán": 31.5,
    "Palestina": 45.1, "Singapur": 72.8, "Siria": 35.8, "Sri Lanka": 46.7, "Tailandia": 49.7,
    "Taiwán": 68.5, "Tayikistán": 42.1, "Timor Oriental": 40.2, "Turkmenistán": 45.6, "Uzbekistán": 46.3,
    "Vietnam": 39.0, "Yemen": 33.2,

    // Europa (48)
    "Albania": 55.2, "Alemania": 77.2, "Andorra": 74.5, "Austria": 78.4, "Bélgica": 73.3,
    "Bielorrusia": 59.5, "Bosnia y Herzegovina": 48.5, "Bulgaria": 59.1, "Chipre": 69.6, "Croacia": 66.5,
    "Dinamarca": 82.5, "Eslovaquia": 68.4, "Eslovenia": 73.5, "España": 73.0, "Estonia": 71.4,
    "Finlandia": 80.2, "Francia": 76.5, "Grecia": 70.1, "Hungría": 65.0, "Irlanda": 75.8,
    "Islandia": 78.8, "Italia": 71.6, "Kosovo": 47.5, "Letonia": 68.9, "Liechtenstein": 76.0,
    "Lituania": 69.3, "Luxemburgo": 78.5, "Macedonia del Norte": 54.3, "Malta": 75.2, "Moldavia": 52.8,
    "Mónaco": 79.0, "Montenegro": 58.4, "Noruega": 77.5, "País Vasco": 79.5, "Países Bajos": 75.0,
    "Polonia": 63.8, "Portugal": 71.2, "Reino Unido": 81.3, "República Checa": 69.8, "Rumania": 60.3,
    "Rusia": 56.2, "San Marino": 72.5, "Serbia": 55.5, "Suecia": 79.8, "Suiza": 81.5,
    "Turquía": 48.8, "Ucrania": 50.8, "Vaticano": 85.0,

    // Oceanía (14)
    "Australia": 74.1, "Fiyi": 55.4, "Islas Marshall": 51.5, "Islas Salomón": 43.2, "Kiribati": 47.0,
    "Micronesia": 49.5, "Nauru": 45.2, "Nueva Zelanda": 73.8, "Palaos": 57.4, "Papúa Nueva Guinea": 38.5,
    "Samoa": 54.0, "Tonga": 56.2, "Tuvalu": 50.8, "Vanuatu": 48.0
};

// ESPERANZA DE VIDA AL NACER (en años)
const longevidadPaises = {
    // África (54)
    "Angola": 61.6, "Argelia": 76.4, "Benín": 59.8, "Botsuana": 61.1, "Burkina Faso": 59.3,
    "Burundi": 61.7, "Cabo Verde": 74.0, "Camerún": 60.3, "Chad": 52.5, "Comoras": 63.4,
    "Costa de Marfil": 58.6, "Egipto": 70.2, "Eritrea": 66.3, "Esuatini": 57.1, "Etiopía": 65.0,
    "Gabón": 65.8, "Gambia": 62.6, "Ghana": 63.8, "Guinea": 58.9, "Guinea Ecuatorial": 60.6,
    "Guinea Bisáu": 59.6, "Kenia": 61.4, "Lesoto": 53.1, "Liberia": 60.7, "Libia": 71.9,
    "Madagascar": 64.5, "Malaui": 62.9, "Malí": 58.9, "Marruecos": 74.0, "Mauricio": 73.6,
    "Mauritania": 64.4, "Mozambique": 59.3, "Namibia": 59.3, "Níger": 61.6, "Nigeria": 52.7,
    "República Centroafricana": 53.9, "República Democrática del Congo": 59.2, "República del Congo": 63.5,
    "Ruanda": 66.1, "Santo Tomé y Príncipe": 67.6, "Senegal": 67.1, "Seychelles": 73.4, "Sierra Leona": 60.1,
    "Somalia": 55.3, "Sudáfrica": 62.3, "Sudán": 65.3, "Sudán del Sur": 55.0, "Tanzania": 66.2,
    "Togo": 61.6, "Túnez": 73.8, "Uganda": 62.9, "Yibuti": 62.3, "Zambia": 61.2, "Zimbabue": 59.3,

    // América (35)
    "Antigua y Barbuda": 78.5, "Argentina": 75.4, "Bahamas": 71.6, "Barbados": 77.3, "Belice": 70.5,
    "Bolivia": 63.6, "Brasil": 72.8, "Canadá": 82.6, "Chile": 78.9, "Colombia": 72.8,
    "Costa Rica": 77.0, "Cuba": 73.7, "Dominica": 72.8, "Ecuador": 73.7, "El Salvador": 70.7,
    "Estados Unidos": 76.3, "Granada": 74.9, "Guatemala": 69.2, "Guyana": 65.7, "Haití": 63.2,
    "Honduras": 70.1, "Jamaica": 70.5, "México": 70.2, "Nicaragua": 73.8, "Panamá": 76.2,
    "Paraguay": 70.3, "Perú": 72.4, "República Dominicana": 72.6, "San Cristóbal y Nieves": 71.7,
    "San Vicente y las Granadinas": 69.6, "Santa Lucía": 71.1, "Surinam": 70.3, "Trinidad y Tobago": 73.0,
    "Uruguay": 78.0, "Venezuela": 70.6,

    // Asia (47)
    "Afganistán": 62.0, "Arabia Saudita": 76.9, "Armenia": 72.0, "Azerbaiyán": 69.4, "Bangladés": 72.4,
    "Baréin": 78.8, "Myanmar": 65.7, "Brunéi": 74.6, "Bután": 71.8, "Camboya": 69.6, "Catar": 79.3,
    "China": 78.2, "Corea del Norte": 73.3, "Corea del Sur": 83.7, "Emiratos Árabes": 79.2,
    "Filipinas": 69.3, "Georgia": 71.7, "India": 67.2, "Indonesia": 67.6, "Irak": 70.4,
    "Irán": 73.9, "Israel": 82.6, "Japón": 84.8, "Jordania": 74.3, "Kazajistán": 69.4,
    "Kirguistán": 70.0, "Kuwait": 78.7, "Laos": 68.1, "Líbano": 75.0, "Malasia": 74.9,
    "Maldivas": 79.9, "Mongolia": 71.0, "Nepal": 68.4, "Omán": 72.5, "Pakistán": 66.1,
    "Palestina": 73.5, "Singapur": 83.4, "Siria": 72.1, "Sri Lanka": 76.4, "Tailandia": 78.7,
    "Taiwán": 80.8, "Tayikistán": 71.6, "Timor Oriental": 67.7, "Turkmenistán": 69.3, "Uzbekistán": 70.9,
    "Vietnam": 73.6, "Yemen": 63.8,

    // Europa (48)
    "Albania": 76.8, "Alemania": 80.6, "Andorra": 83.0, "Austria": 81.3, "Bélgica": 81.9,
    "Bielorrusia": 72.4, "Bosnia y Herzegovina": 75.3, "Bulgaria": 71.8, "Chipre": 81.2, "Croacia": 77.6,
    "Dinamarca": 81.4, "Eslovaquia": 74.6, "Eslovenia": 80.7, "España": 83.0, "Estonia": 77.1,
    "Finlandia": 82.0, "Francia": 82.3, "Grecia": 80.1, "Hungría": 74.5, "Irlanda": 82.0,
    "Islandia": 82.7, "Italia": 82.9, "Kosovo": 76.8, "Letonia": 73.6, "Liechtenstein": 83.3,
    "Lituania": 73.7, "Luxemburgo": 82.6, "Macedonia del Norte": 73.8, "Malta": 82.5, "Moldavia": 68.8,
    "Mónaco": 85.9, "Montenegro": 73.8, "Noruega": 83.2, "País Vasco": 83.6, "Países Bajos": 81.4,
    "Polonia": 75.6, "Portugal": 81.0, "Reino Unido": 80.7, "República Checa": 77.3, "Rumania": 72.8,
    "Rusia": 69.4, "San Marino": 83.0, "Serbia": 72.8, "Suecia": 83.0, "Suiza": 84.0,
    "Turquía": 76.0, "Ucrania": 69.6, "Vaticano": 82.5,

    // Oceanía (14)
    "Australia": 83.3, "Fiyi": 67.1, "Islas Marshall": 65.3, "Islas Salomón": 70.3, "Kiribati": 59.4,
    "Micronesia": 70.7, "Nauru": 63.6, "Nueva Zelanda": 82.1, "Palaos": 66.0, "Papúa Nueva Guinea": 65.4,
    "Samoa": 72.8, "Tonga": 71.0, "Tuvalu": 64.5, "Vanuatu": 70.4
};

// ÍNDICE DE BIODIVERSIDAD Y RIQUEZA NATURAL (0.0 - 100.0 puntos)
const naturalezaPaises = {
    // África (54)
    "Angola": 78.5, "Argelia": 45.2, "Benín": 54.1, "Botsuana": 72.0, "Burkina Faso": 48.5,
    "Burundi": 51.2, "Cabo Verde": 42.8, "Camerún": 83.4, "Chad": 44.5, "Comoras": 61.0,
    "Costa de Marfil": 71.5, "Egipto": 25.4, "Eritrea": 41.2, "Esuatini": 58.6, "Etiopía": 75.2,
    "Gabón": 86.7, "Gambia": 52.4, "Ghana": 68.9, "Guinea": 64.3, "Guinea Ecuatorial": 79.1,
    "Guinea Bisáu": 62.5, "Kenia": 88.3, "Lesoto": 46.8, "Liberia": 76.4, "Libia": 18.5,
    "Madagascar": 94.2, "Malaui": 63.8, "Malí": 38.5, "Marruecos": 56.4, "Mauricio": 65.2,
    "Mauritania": 28.4, "Mozambique": 81.6, "Namibia": 69.5, "Níger": 32.1, "Nigeria": 73.8,
    "República Centroafricana": 77.2, "República Democrática del Congo": 93.5, "República del Congo": 84.6,
    "Ruanda": 67.4, "Santo Tomé y Príncipe": 72.1, "Senegal": 55.8, "Seychelles": 82.5, "Sierra Leona": 65.9,
    "Somalia": 35.6, "Sudáfrica": 91.8, "Sudán": 40.2, "Sudán del Sur": 68.5, "Tanzania": 90.4,
    "Togo": 53.2, "Túnez": 43.8, "Uganda": 82.1, "Yibuti": 31.5, "Zambia": 79.3, "Zimbabue": 74.6,

    // América (35)
    "Antigua y Barbuda": 55.4, "Argentina": 85.6, "Bahamas": 62.1, "Barbados": 48.5, "Belice": 81.2,
    "Bolivia": 89.4, "Brasil": 99.5, "Canadá": 88.2, "Chile": 82.7, "Colombia": 98.4,
    "Costa Rica": 95.8, "Cuba": 76.5, "Dominica": 83.0, "Ecuador": 96.2, "El Salvador": 64.3,
    "Estados Unidos": 92.5, "Granada": 65.8, "Guatemala": 84.1, "Guyana": 87.5, "Haití": 38.2,
    "Honduras": 79.6, "Jamaica": 71.4, "México": 97.1, "Nicaragua": 80.5, "Panamá": 88.9,
    "Paraguay": 74.2, "Perú": 97.8, "República Dominicana": 73.6, "San Cristóbal y Nieves": 52.4,
    "San Vicente y las Granadinas": 61.2, "Santa Lucía": 64.7, "Surinam": 86.3, "Trinidad y Tobago": 68.5,
    "Uruguay": 62.8, "Venezuela": 94.7,

    // Asia (47)
    "Afganistán": 42.5, "Arabia Saudita": 24.8, "Armenia": 58.4, "Azerbaiyán": 61.2, "Bangladés": 65.3,
    "Baréin": 15.2, "Myanmar": 86.5, "Brunéi": 81.4, "Bután": 85.7, "Camboya": 78.2, "Catar": 14.5,
    "China": 95.2, "Corea del Norte": 62.8, "Corea del Sur": 68.4, "Emiratos Árabes": 22.1,
    "Filipinas": 91.5, "Georgia": 72.6, "India": 93.8, "Indonesia": 98.7, "Irak": 31.4,
    "Irán": 64.5, "Israel": 51.2, "Japón": 76.8, "Jordania": 34.6, "Kazajistán": 63.2,
    "Kirguistán": 67.5, "Kuwait": 12.8, "Laos": 82.3, "Líbano": 48.5, "Malasia": 94.6,
    "Maldivas": 59.4, "Mongolia": 55.8, "Nepal": 79.4, "Omán": 28.5, "Pakistán": 56.2,
    "Palestina": 36.4, "Singapur": 45.2, "Siria": 38.7, "Sri Lanka": 84.5, "Tailandia": 87.2,
    "Taiwán": 75.4, "Tayikistán": 61.8, "Timor Oriental": 69.2, "Turkmenistán": 35.1, "Uzbekistán": 44.6,
    "Vietnam": 89.3, "Yemen": 33.2,

    // Europa (48)
    "Albania": 68.4, "Alemania": 66.5, "Andorra": 71.2, "Austria": 74.8, "Bélgica": 52.4,
    "Bielorrusia": 65.3, "Bosnia y Herzegovina": 73.1, "Bulgaria": 75.6, "Chipre": 58.2, "Croacia": 78.5,
    "Dinamarca": 55.6, "Eslovaquia": 72.4, "Eslovenia": 81.5, "España": 79.2, "Estonia": 74.1,
    "Finlandia": 83.4, "Francia": 78.6, "Grecia": 71.5, "Hungría": 61.2, "Irlanda": 58.7,
    "Islandia": 64.3, "Italia": 76.4, "Kosovo": 66.8, "Letonia": 73.5, "Liechtenstein": 68.4,
    "Lituania": 71.2, "Luxemburgo": 56.8, "Macedonia del Norte": 70.5, "Malta": 32.1, "Moldavia": 54.6,
    "Mónaco": 10.5, "Montenegro": 79.6, "Noruega": 84.2, "País Vasco": 82.5, "Países Bajos": 48.5,
    "Polonia": 68.7, "Portugal": 72.8, "Reino Unido": 59.4, "República Checa": 69.5, "Rumania": 77.8,
    "Rusia": 89.5, "San Marino": 25.4, "Serbia": 71.4, "Suecia": 82.1, "Suiza": 79.8,
    "Turquía": 75.2, "Ucrania": 63.8, "Vaticano": 5.0,

    // Oceanía (14)
    "Australia": 96.4, "Fiyi": 82.5, "Islas Marshall": 45.2, "Islas Salomón": 86.1, "Kiribati": 38.4,
    "Micronesia": 75.8, "Nauru": 18.5, "Nueva Zelanda": 88.7, "Palaos": 84.2, "Papúa Nueva Guinea": 95.1,
    "Samoa": 78.6, "Tonga": 62.4, "Tuvalu": 34.2, "Vanuatu": 81.5
};

// POBLACIÓN TOTAL (en número de habitantes)
const poblacionPaises = {
    // África (54)
    "Angola": 36680000, "Argelia": 45600000, "Benín": 13700000, "Botsuana": 2670000, "Burkina Faso": 23200000,
    "Burundi": 13200000, "Cabo Verde": 598000, "Camerún": 28600000, "Chad": 18200000, "Comoras": 850000,
    "Costa de Marfil": 28800000, "Egipto": 112700000, "Eritrea": 3740000, "Esuatini": 1210000, "Etiopía": 126500000,
    "Gabón": 2430000, "Gambia": 2770000, "Ghana": 34100000, "Guinea": 14100000, "Guinea Ecuatorial": 1710000,
    "Guinea Bisáu": 2150000, "Kenia": 55100000, "Lesoto": 2330000, "Liberia": 5410000, "Libia": 6880000,
    "Madagascar": 30300000, "Malaui": 20900000, "Malí": 23200000, "Marruecos": 37800000, "Mauricio": 1260000,
    "Mauritania": 4860000, "Mozambique": 33800000, "Namibia": 2600000, "Níger": 27200000, "Nigeria": 223800000,
    "República Centroafricana": 5740000, "República Democrática del Congo": 102200000, "República del Congo": 6100000,
    "Ruanda": 14000000, "Santo Tomé y Príncipe": 231000, "Senegal": 17700000, "Seychelles": 119000, "Sierra Leona": 8790000,
    "Somalia": 18100000, "Sudáfrica": 60400000, "Sudán": 48100000, "Sudán del Sur": 11000000, "Tanzania": 67400000,
    "Togo": 9050000, "Túnez": 12400000, "Uganda": 48500000, "Yibuti": 1130000, "Zambia": 20500000, "Zimbabue": 16600000,

    // América (35)
    "Antigua y Barbuda": 94000, "Argentina": 46600000, "Bahamas": 412000, "Barbados": 281000, "Belice": 410000,
    "Bolivia": 12300000, "Brasil": 216400000, "Canadá": 38700000, "Chile": 19600000, "Colombia": 52000000,
    "Costa Rica": 5210000, "Cuba": 11200000, "Dominica": 73000, "Ecuador": 18100000, "El Salvador": 6360000,
    "Estados Unidos": 339900000, "Granada": 126000, "Guatemala": 18000000, "Guyana": 813000, "Haití": 11700000,
    "Honduras": 10500000, "Jamaica": 2820000, "México": 128400000, "Nicaragua": 7040000, "Panamá": 4460000,
    "Paraguay": 7450000, "Perú": 34300000, "República Dominicana": 11300000, "San Cristóbal y Nieves": 47000,
    "San Vicente y las Granadinas": 103000, "Santa Lucía": 179000, "Surinam": 623000, "Trinidad y Tobago": 1530000,
    "Uruguay": 3420000, "Venezuela": 28800000,

    // Asia (47)
    "Afganistán": 42200000, "Arabia Saudita": 36900000, "Armenia": 2770000, "Azerbaiyán": 10400000, "Bangladés": 172900000,
    "Baréin": 1480000, "Myanmar": 54500000, "Brunéi": 452000, "Bután": 787000, "Camboya": 16900000, "Catar": 2710000,
    "China": 1425600000, "Corea del Norte": 26100000, "Corea del Sur": 51700000, "Emiratos Árabes": 9510000,
    "Filipinas": 117300000, "Georgia": 3720000, "India": 1428600000, "Indonesia": 277500000, "Irak": 45500000,
    "Irán": 89100000, "Israel": 9790000, "Japón": 123200000, "Jordania": 11300000, "Kazajistán": 19600000,
    "Kirguistán": 6730000, "Kuwait": 4310000, "Laos": 7630000, "Líbano": 5350000, "Malasia": 34300000,
    "Maldivas": 521000, "Mongolia": 3440000, "Nepal": 30800000, "Omán": 4640000, "Pakistán": 240400000,
    "Palestina": 5370000, "Singapur": 6010000, "Siria": 23200000, "Sri Lanka": 21800000, "Tailandia": 71800000,
    "Taiwán": 23900000, "Tayikistán": 10100000, "Timor Oriental": 1360000, "Turkmenistán": 6510000, "Uzbekistán": 35600000,
    "Vietnam": 98800000, "Yemen": 34400000,

    // Europa (48)
    "Albania": 2830000, "Alemania": 83200000, "Andorra": 79000, "Austria": 8950000, "Bélgica": 11600000,
    "Bielorrusia": 9190000, "Bosnia y Herzegovina": 3210000, "Bulgaria": 6680000, "Chipre": 1260000, "Croacia": 3850000,
    "Dinamarca": 5930000, "Eslovaquia": 5420000, "Eslovenia": 2110000, "España": 48300000, "Estonia": 1350000,
    "Finlandia": 5540000, "Francia": 68000000, "Grecia": 10300000, "Hungría": 9590000, "Irlanda": 5280000,
    "Islandia": 382000, "Italia": 58800000, "Kosovo": 1760000, "Letonia": 1870000, "Liechtenstein": 39000,
    "Lituania": 2750000, "Luxemburgo": 654000, "Macedonia del Norte": 2060000, "Malta": 535000, "Moldavia": 2530000,
    "Mónaco": 36000, "Montenegro": 617000, "Noruega": 5470000, "País Vasco": 2200000, "Países Bajos": 17800000,
    "Polonia": 36700000, "Portugal": 10400000, "Reino Unido": 67700000, "República Checa": 10800000, "Rumania": 19000000,
    "Rusia": 143800000, "San Marino": 33000, "Serbia": 7140000, "Suecia": 10500000, "Suiza": 8840000,
    "Turquía": 85800000, "Ucrania": 36700000, "Vaticano": 800,

    // Oceanía (14)
    "Australia": 26400000, "Fiyi": 936000, "Islas Marshall": 41000, "Islas Salomón": 740000, "Kiribati": 133000,
    "Micronesia": 115000, "Nauru": 12000, "Nueva Zelanda": 5220000, "Palaos": 18000, "Papúa Nueva Guinea": 10300000,
    "Samoa": 225000, "Tonga": 107000, "Tuvalu": 11000, "Vanuatu": 334000
};

// ÍNDICE DE CALIDAD DEL SISTEMA SANITARIO (0.0 - 100.0 puntos)
const sanidadPaises = {
    // África (54)
    "Angola": 35.4, "Argelia": 58.2, "Benín": 40.1, "Botsuana": 55.6, "Burkina Faso": 34.2,
    "Burundi": 32.5, "Cabo Verde": 54.8, "Camerún": 42.1, "Chad": 28.4, "Comoras": 38.7,
    "Costa de Marfil": 41.5, "Egipto": 56.3, "Eritrea": 33.1, "Esuatini": 44.2, "Etiopía": 39.8,
    "Gabón": 48.7, "Gambia": 37.6, "Ghana": 52.4, "Guinea": 34.9, "Guinea Ecuatorial": 40.2,
    "Guinea Bisáu": 31.8, "Kenia": 58.1, "Lesoto": 36.5, "Liberia": 35.2, "Libia": 45.6,
    "Madagascar": 36.2, "Malaui": 38.4, "Malí": 35.8, "Marruecos": 57.5, "Mauricio": 68.4,
    "Mauritania": 39.1, "Mozambique": 34.5, "Namibia": 53.2, "Níger": 32.7, "Nigeria": 48.5,
    "República Centroafricana": 26.8, "República Democrática del Congo": 30.5, "República del Congo": 39.4,
    "Ruanda": 56.7, "Santo Tomé y Príncipe": 44.8, "Senegal": 47.2, "Seychelles": 65.3, "Sierra Leona": 32.4,
    "Somalia": 24.5, "Sudáfrica": 66.8, "Sudán": 38.5, "Sudán del Sur": 25.1, "Tanzania": 46.3,
    "Togo": 37.8, "Túnez": 62.4, "Uganda": 45.1, "Yibuti": 38.6, "Zambia": 44.7, "Zimbabue": 41.2,

    // América (35)
    "Antigua y Barbuda": 62.5, "Argentina": 72.8, "Bahamas": 64.1, "Barbados": 68.5, "Belice": 58.4,
    "Bolivia": 55.2, "Brasil": 68.4, "Canadá": 82.5, "Chile": 75.6, "Colombia": 74.2,
    "Costa Rica": 78.5, "Cuba": 71.4, "Dominica": 59.2, "Ecuador": 68.9, "El Salvador": 61.5,
    "Estados Unidos": 76.8, "Granada": 60.4, "Guatemala": 56.8, "Guyana": 54.3, "Haití": 34.5,
    "Honduras": 57.1, "Jamaica": 62.8, "México": 70.5, "Nicaragua": 58.6, "Panamá": 69.4,
    "Paraguay": 60.2, "Perú": 65.8, "República Dominicana": 63.4, "San Cristóbal y Nieves": 61.8,
    "San Vicente y las Granadinas": 59.5, "Santa Lucía": 62.1, "Surinam": 58.7, "Trinidad y Tobago": 65.2,
    "Uruguay": 76.4, "Venezuela": 45.8,

    // Asia (47)
    "Afganistán": 29.4, "Arabia Saudita": 74.5, "Armenia": 62.8, "Azerbaiyán": 60.5, "Bangladés": 52.4,
    "Baréin": 73.6, "Myanmar": 42.1, "Brunéi": 72.5, "Bután": 58.4, "Camboya": 50.6, "Catar": 78.2,
    "China": 75.4, "Corea del Norte": 45.2, "Corea del Sur": 92.5, "Emiratos Árabes": 79.6,
    "Filipinas": 62.5, "Georgia": 64.8, "India": 60.2, "Indonesia": 64.5, "Irak": 48.6,
    "Irán": 66.8, "Israel": 84.5, "Japón": 93.8, "Jordania": 70.4, "Kazajistán": 63.2,
    "Kirguistán": 55.4, "Kuwait": 71.8, "Laos": 48.5, "Líbano": 65.2, "Malasia": 82.4,
    "Maldivas": 66.8, "Mongolia": 54.2, "Nepal": 51.5, "Omán": 72.6, "Pakistán": 53.8,
    "Palestina": 58.4, "Singapur": 91.2, "Siria": 40.5, "Sri Lanka": 68.5, "Tailandia": 85.6,
    "Taiwán": 95.4, "Tayikistán": 54.8, "Timor Oriental": 46.2, "Turkmenistán": 56.4, "Uzbekistán": 58.6,
    "Vietnam": 66.4, "Yemen": 32.5,

    // Europa (48)
    "Albania": 61.2, "Alemania": 86.4, "Andorra": 85.6, "Austria": 88.2, "Bélgica": 87.5,
    "Bielorrusia": 65.4, "Bosnia y Herzegovina": 58.6, "Bulgaria": 64.2, "Chipre": 74.8, "Croacia": 71.5,
    "Dinamarca": 89.4, "Eslovaquia": 70.2, "Eslovenia": 78.6, "España": 88.9, "Estonia": 79.5,
    "Finlandia": 88.6, "Francia": 90.2, "Grecia": 76.4, "Hungría": 68.5, "Irlanda": 81.2,
    "Islandia": 86.8, "Italia": 85.4, "Kosovo": 54.2, "Letonia": 70.8, "Liechtenstein": 84.5,
    "Lituania": 75.4, "Luxemburgo": 88.1, "Macedonia del Norte": 60.5, "Malta": 82.6, "Moldavia": 56.4,
    "Mónaco": 87.2, "Montenegro": 62.8, "Noruega": 89.5, "País Vasco": 89.5, "Países Bajos": 88.8,
    "Polonia": 72.4, "Portugal": 81.6, "Reino Unido": 84.2, "República Checa": 79.4, "Rumania": 65.8,
    "Rusia": 62.5, "San Marino": 82.4, "Serbia": 64.5, "Suecia": 87.8, "Suiza": 89.2,
    "Turquía": 75.8, "Ucrania": 58.2, "Vaticano": 80.0,

    // Oceanía (14)
    "Australia": 87.6, "Fiyi": 60.4, "Islas Marshall": 52.1, "Islas Salomón": 45.8, "Kiribati": 48.2,
    "Micronesia": 54.6, "Nauru": 50.5, "Nueva Zelanda": 86.4, "Palaos": 58.2, "Papúa Nueva Guinea": 44.5,
    "Samoa": 56.8, "Tonga": 55.4, "Tuvalu": 51.2, "Vanuatu": 53.6
};

// ÍNDICE DE SEGURIDAD Y PAZ (0.0 - 100.0 puntos)
const seguridadPaises = {
    // África (54)
    "Angola": 55.4, "Argelia": 65.2, "Benín": 62.1, "Botsuana": 75.4, "Burkina Faso": 28.5,
    "Burundi": 35.2, "Cabo Verde": 78.5, "Camerún": 42.1, "Chad": 31.4, "Comoras": 60.5,
    "Costa de Marfil": 54.2, "Egipto": 58.4, "Eritrea": 45.2, "Esuatini": 52.4, "Etiopía": 38.5,
    "Gabón": 62.1, "Gambia": 65.4, "Ghana": 72.8, "Guinea": 48.5, "Guinea Ecuatorial": 56.4,
    "Guinea Bisáu": 54.2, "Kenia": 52.1, "Lesoto": 58.4, "Liberia": 55.2, "Libia": 25.4,
    "Madagascar": 58.6, "Malaui": 64.2, "Malí": 26.8, "Marruecos": 70.5, "Mauricio": 82.4,
    "Mauritania": 55.6, "Mozambique": 45.2, "Namibia": 71.5, "Níger": 30.5, "Nigeria": 35.4,
    "República Centroafricana": 22.4, "República Democrática del Congo": 20.5, "República del Congo": 52.4,
    "Ruanda": 74.5, "Santo Tomé y Príncipe": 70.2, "Senegal": 68.4, "Seychelles": 75.6, "Sierra Leona": 65.4,
    "Somalia": 15.4, "Sudáfrica": 42.5, "Sudán": 18.5, "Sudán del Sur": 16.2, "Tanzania": 64.5,
    "Togo": 60.2, "Túnez": 62.8, "Uganda": 54.2, "Yibuti": 60.5, "Zambia": 68.4, "Zimbabue": 58.2,

    // América (35)
    "Antigua y Barbuda": 72.5, "Argentina": 64.5, "Bahamas": 65.2, "Barbados": 75.4, "Belice": 55.2,
    "Bolivia": 62.4, "Brasil": 48.5, "Canadá": 85.4, "Chile": 68.5, "Colombia": 45.2,
    "Costa Rica": 78.4, "Cuba": 65.8, "Dominica": 74.5, "Ecuador": 42.5, "El Salvador": 65.4,
    "Estados Unidos": 62.5, "Granada": 76.2, "Guatemala": 48.5, "Guyana": 55.4, "Haití": 20.5,
    "Honduras": 42.4, "Jamaica": 45.8, "México": 40.5, "Nicaragua": 52.4, "Panamá": 68.5,
    "Paraguay": 62.4, "Perú": 55.8, "República Dominicana": 58.4, "San Cristóbal y Nieves": 70.5,
    "San Vicente y las Granadinas": 72.4, "Santa Lucía": 71.5, "Surinam": 65.2, "Trinidad y Tobago": 52.4,
    "Uruguay": 78.5, "Venezuela": 35.4,

    // Asia (47)
    "Afganistán": 12.5, "Arabia Saudita": 75.4, "Armenia": 68.5, "Azerbaiyán": 62.4, "Bangladés": 58.4,
    "Baréin": 72.5, "Myanmar": 22.4, "Brunéi": 82.5, "Bután": 85.4, "Camboya": 65.4, "Catar": 86.5,
    "China": 78.4, "Corea del Norte": 45.2, "Corea del Sur": 88.5, "Emiratos Árabes": 85.4,
    "Filipinas": 55.4, "Georgia": 72.5, "India": 58.4, "Indonesia": 68.5, "Irak": 25.4,
    "Irán": 52.4, "Israel": 45.2, "Japón": 92.5, "Jordania": 70.5, "Kazajistán": 68.4,
    "Kirguistán": 62.5, "Kuwait": 80.5, "Laos": 68.4, "Líbano": 35.2, "Malasia": 82.4,
    "Maldivas": 75.2, "Mongolia": 78.5, "Nepal": 68.4, "Omán": 84.5, "Pakistán": 38.5,
    "Palestina": 28.5, "Singapur": 95.4, "Siria": 14.5, "Sri Lanka": 62.4, "Tailandia": 65.8,
    "Taiwán": 90.5, "Tayikistán": 65.4, "Timor Oriental": 68.2, "Turkmenistán": 65.4, "Uzbekistán": 70.5,
    "Vietnam": 78.4, "Yemen": 13.4,

    // Europa (48)
    "Albania": 68.5, "Alemania": 82.4, "Andorra": 92.5, "Austria": 88.5, "Bélgica": 78.4,
    "Bielorrusia": 65.4, "Bosnia y Herzegovina": 72.4, "Bulgaria": 75.4, "Chipre": 80.5, "Croacia": 85.4,
    "Dinamarca": 92.8, "Eslovaquia": 82.5, "Eslovenia": 88.4, "España": 85.6, "Estonia": 84.5,
    "Finlandia": 90.5, "Francia": 74.5, "Grecia": 78.5, "Hungría": 82.4, "Irlanda": 86.5,
    "Islandia": 96.5, "Italia": 80.4, "Kosovo": 65.4, "Letonia": 80.5, "Liechtenstein": 94.5,
    "Lituania": 82.4, "Luxemburgo": 88.5, "Macedonia del Norte": 70.5, "Malta": 84.5, "Moldavia": 68.5,
    "Mónaco": 95.4, "Montenegro": 75.4, "Noruega": 90.2, "País Vasco": 87.5, "Países Bajos": 85.4,
    "Polonia": 84.5, "Portugal": 88.4, "Reino Unido": 76.5, "República Checa": 86.4, "Rumania": 78.5,
    "Rusia": 32.5, "San Marino": 94.2, "Serbia": 72.4, "Suecia": 78.5, "Suiza": 93.5,
    "Turquía": 58.4, "Ucrania": 25.4, "Vaticano": 90.0,

    // Oceanía (14)
    "Australia": 85.4, "Fiyi": 72.4, "Islas Marshall": 75.2, "Islas Salomón": 68.4, "Kiribati": 78.5,
    "Micronesia": 76.4, "Nauru": 75.4, "Nueva Zelanda": 92.4, "Palaos": 80.5, "Papúa Nueva Guinea": 45.2,
    "Samoa": 78.4, "Tonga": 76.5, "Tuvalu": 82.4, "Vanuatu": 78.5
};

// LLEGADA DE TURISTAS ANUALES (en número de visitantes)
const turismoPaises = {
    // África (54)
    "Angola": 218000, "Argelia": 2400000, "Benín": 340000, "Botsuana": 1830000, "Burkina Faso": 140000,
    "Burundi": 300000, "Cabo Verde": 750000, "Camerún": 1100000, "Chad": 87000, "Comoras": 45000,
    "Costa de Marfil": 2000000, "Egipto": 13000000, "Eritrea": 142000, "Esuatini": 840000, "Etiopía": 810000,
    "Gabón": 550000, "Gambia": 620000, "Ghana": 1130000, "Guinea": 110000, "Guinea Ecuatorial": 150000,
    "Guinea Bisáu": 52000, "Kenia": 2050000, "Lesoto": 1190000, "Liberia": 80000, "Libia": 15000,
    "Madagascar": 486000, "Malaui": 870000, "Malí": 150000, "Marruecos": 13000000, "Mauricio": 1400000,
    "Mauritania": 150000, "Mozambique": 2750000, "Namibia": 1500000, "Níger": 170000, "Nigeria": 1900000,
    "República Centroafricana": 120000, "República Democrática del Congo": 350000, "República del Congo": 200000,
    "Ruanda": 1700000, "Santo Tomé y Príncipe": 34000, "Senegal": 1370000, "Seychelles": 384000, "Sierra Leona": 71000,
    "Somalia": 1000, "Sudáfrica": 10200000, "Sudán": 800000, "Sudán del Sur": 65000, "Tanzania": 1500000,
    "Togo": 570000, "Túnez": 9400000, "Uganda": 1500000, "Yibuti": 114000, "Zambia": 1100000, "Zimbabue": 2300000,

    // América (35)
    "Antigua y Barbuda": 270000, "Argentina": 7400000, "Bahamas": 1800000, "Barbados": 680000, "Belice": 500000,
    "Bolivia": 1200000, "Brasil": 6400000, "Canadá": 22100000, "Chile": 4500000, "Colombia": 4500000,
    "Costa Rica": 3100000, "Cuba": 4200000, "Dominica": 90000, "Ecuador": 2400000, "El Salvador": 2500000,
    "Estados Unidos": 79300000, "Granada": 160000, "Guatemala": 2500000, "Guyana": 315000, "Haití": 938000,
    "Honduras": 1200000, "Jamaica": 2700000, "México": 45000000, "Nicaragua": 1200000, "Panamá": 2500000,
    "Paraguay": 1200000, "Perú": 4400000, "República Dominicana": 7100000, "San Cristóbal y Nieves": 120000,
    "San Vicente y las Granadinas": 85000, "Santa Lucía": 420000, "Surinam": 280000, "Trinidad y Tobago": 390000,
    "Uruguay": 3200000, "Venezuela": 600000,

    // Asia (47)
    "Afganistán": 15000, "Arabia Saudita": 17500000, "Armenia": 1900000, "Azerbaiyán": 3200000, "Bangladés": 320000,
    "Baréin": 3800000, "Myanmar": 4300000, "Brunéi": 330000, "Bután": 315000, "Camboya": 6600000, "Catar": 2100000,
    "China": 65700000, "Corea del Norte": 100000, "Corea del Sur": 17500000, "Emiratos Árabes": 22700000,
    "Filipinas": 8200000, "Georgia": 9300000, "India": 17900000, "Indonesia": 16100000, "Irak": 1500000,
    "Irán": 9000000, "Israel": 4500000, "Japón": 31800000, "Jordania": 5300000, "Kazajistán": 8500000,
    "Kirguistán": 8500000, "Kuwait": 8500000, "Laos": 4700000, "Líbano": 1900000, "Malasia": 26100000,
    "Maldivas": 1700000, "Mongolia": 577000, "Nepal": 1190000, "Omán": 3200000, "Pakistán": 900000,
    "Palestina": 600000, "Singapur": 19100000, "Siria": 1500000, "Sri Lanka": 1900000, "Tailandia": 39800000,
    "Taiwán": 11800000, "Tayikistán": 1200000, "Timor Oriental": 82000, "Turkmenistán": 15000, "Uzbekistán": 6700000,
    "Vietnam": 18000000, "Yemen": 250000,

    // Europa (48)
    "Albania": 6400000, "Alemania": 39500000, "Andorra": 3100000, "Austria": 31800000, "Bélgica": 9500000,
    "Bielorrusia": 11500000, "Bosnia y Herzegovina": 1200000, "Bulgaria": 9300000, "Chipre": 3900000, "Croacia": 17300000,
    "Dinamarca": 33000000, "Eslovaquia": 2500000, "Eslovenia": 4700000, "España": 85200000, "Estonia": 3300000,
    "Finlandia": 3300000, "Francia": 90000000, "Grecia": 31300000, "Hungría": 16900000, "Irlanda": 10900000,
    "Islandia": 2000000, "Italia": 64500000, "Kosovo": 200000, "Letonia": 1900000, "Liechtenstein": 98000,
    "Lituania": 2900000, "Luxemburgo": 1000000, "Macedonia del Norte": 750000, "Malta": 2700000, "Moldavia": 170000,
    "Mónaco": 360000, "Montenegro": 2500000, "Noruega": 5900000, "País Vasco": 4200000, "Países Bajos": 20100000,
    "Polonia": 21100000, "Portugal": 24600000, "Reino Unido": 39400000, "República Checa": 10800000, "Rumania": 2600000,
    "Rusia": 24400000, "San Marino": 84000, "Serbia": 1800000, "Suecia": 7600000, "Suiza": 11800000,
    "Turquía": 51200000, "Ucrania": 14200000, "Vaticano": 6000000,

    // Oceanía (14)
    "Australia": 9400000, "Fiyi": 890000, "Islas Marshall": 6000, "Islas Salomón": 29000, "Kiribati": 7000,
    "Micronesia": 18000, "Nauru": 2500, "Nueva Zelanda": 3800000, "Palaos": 94000, "Papúa Nueva Guinea": 210000,
    "Samoa": 180000, "Tonga": 54000, "Tuvalu": 3000, "Vanuatu": 120000
};


const configEstadisticas = {
    "area": { titulo: "Área", unidad: "km²", datos: areasPaises },
    "poblacion": { titulo: "Población", unidad: "hab.", datos: poblacionPaises },
    "clima": { titulo: "Clima", unidad: "pts", datos: climaPaises},
    "corrupcion" : { titulo: "Corrupción", unidad: "pts", datos: corrupcionPaises},
    "deportes": { titulo: "Deportes", unidad: "pts", datos: deportesPaises},
    "desarrollo": { titulo: "Desarrollo", unidad: "IDH", datos: desarrolloPaises},
    "economia": { titulo: "Economía", unidad: "PIB", datos: economiaPaises},
    "educacion": { titulo: "Educación", unidad: "pts", datos: educacionPaises},
    "felicidad": { titulo: "Felicidad", unidad: "pts", datos: felicidadPaises},
    "gastronomia": { titulo: "Gastronomía", unidad: "pts", datos: gastronomiaPaises},
    "limpieza": { titulo: "Limpieza", unidad: "pts", datos: limpiezaPaises},
    "longevidad": { titulo: "Longevidad", unidad: "años", datos: longevidadPaises},
    "naturaleza": { titulo: "Naturaleza", unidad: "pts", datos: naturalezaPaises},
    "sanidad": { titulo: "Sanidad", unidad: "pts", datos: sanidadPaises},
    "seguridad": { titulo: "Seguridad", unidad: "pts", datos: seguridadPaises},
    "turismo": { titulo: "Turismo", unidad: "visitantes", datos: turismoPaises}
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

    // LIMPIEZA DE PANTALLAS: Nos aseguramos de que solo se vea el Atlas
    document.getElementById('vista-estadisticas').style.display = 'none';
    document.getElementById('vista-juegos').style.display = 'none';
    document.getElementById('vista-atlas').style.display = 'block';
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
        stats: "📊 Estadísticas",
        contra: "⏱️ Contrarreloj",
        muerte: "💀 Muerte Súbita",
        adivinar: "❓ Trivial",
        capitales: "🏛️ De 3 en 3",
        memory: "🧠 Memoria"
    },
    en: {
        paises: "🌍 Countries ▼",
        juegos: "🎮 Games ▼",
        stats: "📊 Statistics",
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
    document.getElementById("pantalla-fin-juego").style.display = "none";
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

const btnNavStats = document.getElementById('nav-btn-stats');
if (btnNavStats) btnNavStats.textContent = uiNav.stats;

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

// FUNCIÓN PARA MOSTRAR SOLO EL ATLAS (MAPA)
function mostrarAtlas() {
    // 1. Apagamos las otras pantallas
    document.getElementById('vista-juegos').style.display = 'none';
    document.getElementById('vista-estadisticas').style.display = 'none';
    
    // 2. Encendemos SOLO la de los países
    document.getElementById('vista-atlas').style.display = 'block';
    
    // 3. Ocultamos la ventanita flotante por si se quedó pillada
    const ventana = document.getElementById('ventana-info');
    if (ventana) ventana.style.display = 'none';
}

// FUNCIÓN PARA MOSTRAR SOLO LAS ESTADÍSTICAS
function mostrarEstadisticas() {
    // 1. Limpieza de pantallas
    document.getElementById("pantalla-fin-juego").style.display = "none";
    document.getElementById('vista-atlas').style.display = 'none';
    document.getElementById('vista-juegos').style.display = 'none';
    document.getElementById('juego-comparador').style.display = 'none';
    if (typeof ventanaFlotante !== 'undefined') ventanaFlotante.style.display = 'none';
    
    
    document.getElementById('vista-estadisticas').style.display = 'block';

    // 2. Dibujar la cuadrícula por primera vez (por defecto cogerá "Área")
    actualizarCuadriculaEstadisticas();
}

window.onload = () => {
    actualizarCuadriculaEstadisticas();
};

// Separamos la generación del contenido para que sea más limpio
function generarContenidoEstadisticas() {
    const contenedor = document.getElementById('contenedor-grid-estadisticas');
    contenedor.innerHTML = ''; // Limpieza total para que no se acumulen

    let listaPaises = [];
    for (const cont in baseDatosMundo) {
        listaPaises = listaPaises.concat(baseDatosMundo[cont].paises);
    }

    // Ordenar A-Z
    listaPaises.sort((a, b) => a.nombre[idiomaActual].localeCompare(b.nombre[idiomaActual]));

    listaPaises.forEach(pais => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-stats'; // Usaremos esta clase en el CSS
        tarjeta.innerHTML = `
            <img src="${pais.bandera}" alt="Bandera de ${pais.nombre[idiomaActual]}">
            <p>${pais.nombre[idiomaActual]}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function cambiarOrden() {
    const btn = document.getElementById('btn-orden');
    if (ordenActual === 'mayor') {
        ordenActual = 'menor';
        btn.innerText = '🔼';
    } else if (ordenActual === 'menor') {
        ordenActual = 'alfabetico';
        btn.innerText = '🔤';
    } else {
        ordenActual = 'mayor';
        btn.innerText = '🔽';
    }
    actualizarCuadriculaEstadisticas();
}

// Asegúrate de que esta variable esté fuera de las funciones
let ordenActual = 'alfabetico'; 

function actualizarCuadriculaEstadisticas() {
    const selector = document.getElementById("selector-estadistica");
    const contenedor = document.getElementById("contenedor-paises");
    
    if (!selector || !contenedor) return;

    const idEst = selector.value;
    const config = configEstadisticas[idEst];

    // SEGURIDAD: Si el diccionario no existe, limpiamos y salimos sin error
    if (!config || !config.datos) {
        contenedor.innerHTML = `<p style="text-align:center; padding:20px;">Datos de "${idEst}" no disponibles aún.</p>`;
        return;
    }

    // 1. Convertir a lista para poder trabajar
    let lista = Object.keys(config.datos).map(nombre => ({
        nombre: nombre,
        valor: config.datos[nombre]
    }));

    // 2. CÁLCULO DE RANKING REAL (Siempre de mayor a menor)
    // Hacemos una copia para no desordenar la original
    let rankingParaCalculo = [...lista].sort((a, b) => b.valor - a.valor);
    
    lista.forEach(pais => {
        pais.puestoMundial = rankingParaCalculo.findIndex(p => p.nombre === pais.nombre) + 1;
    });

    // 3. ORDENAR PARA MOSTRAR (Según el botón de la derecha)
    if (ordenActual === 'mayor') {
        lista.sort((a, b) => b.valor - a.valor);
    } else if (ordenActual === 'menor') {
        lista.sort((a, b) => a.valor - b.valor);
    } else {
        lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // 4. PINTAR LAS TARJETAS
    contenedor.innerHTML = "";
    lista.forEach(item => {
        let banderaPath = "";
        // Buscamos la bandera en tu base de datos original
        for (const cont in baseDatosMundo) {
            const encontrado = baseDatosMundo[cont].paises.find(p => p.nombre.es === item.nombre);
            if (encontrado) {
                banderaPath = encontrado.bandera;
                break;
            }
        }

        // Dentro del bucle en tu función actualizarCuadriculaEstadisticas:

const tarjeta = document.createElement("div");
tarjeta.className = "tarjeta-pais-est";

// Solo si el puesto mundial calculado es el 1, lleva la clase 'oro'
const claseEspecial = (item.puestoMundial === 1) ? "oro-campeon" : "";

// ESTRUCTURA HTML: Badge -> Bandera -> Nombre -> Valor
tarjeta.innerHTML = `
    <div class="ranking-badge ${claseEspecial}">#${item.puestoMundial}</div>
    
    <div class="marco-bandera-est">
        <img src="${banderaPath}" alt="${item.nombre}">
    </div>
    
    <h3>${item.nombre}</h3>
    <p><strong>${item.valor.toLocaleString()}</strong> ${config.unidad}</p>
`;
contenedor.appendChild(tarjeta);
        });
}

// --- VARIABLES GLOBALES DEL JUEGO ---
let statActualJuego = "";
let paisAntiguo = "";
let paisNuevo = "";
let puntuacionActual = 0;
let paisesDisponiblesParaJugar = [];
let esperandoRespuesta = false;

// 1. INICIALIZAR EL MENÚ (Llama a esta función cuando abras la pestaña de "Juegos")
function cargarMenuComparador() {
    const selector = document.getElementById("selector-stat-juego");
    selector.innerHTML = "";
    
    // Obtener los nombres de las estadísticas (asumiendo que tienes tu configEstadisticas)
    // Las ordenamos alfabéticamente
    const statsNombres = Object.keys(configEstadisticas).sort();
    
    statsNombres.forEach(statKey => {
        const option = document.createElement("option");
        option.value = statKey;
        option.textContent = configEstadisticas[statKey].titulo;
        selector.appendChild(option);
    });
}

// 2. BOTÓN "EMPEZAR BATALLA"
document.getElementById("btn-empezar-comparador").addEventListener("click", () => {
    statActualJuego = document.getElementById("selector-stat-juego").value;
    puntuacionActual = 0;
    document.getElementById("puntos-comparador").textContent = puntuacionActual;
    document.getElementById("titulo-stat-actual").textContent = configEstadisticas[statActualJuego].titulo;
    
    // Creamos una copia del array de todos los países para ir eliminándolos y que no se repitan
    paisesDisponiblesParaJugar = Object.keys(configEstadisticas[statActualJuego].datos);
    
    // Ocultar menú, mostrar arena
    document.getElementById("menu-comparador").style.display = "none";
    document.getElementById("arena-comparador").style.display = "block";
    
    // Sacamos dos países aleatorios para empezar
    paisAntiguo = sacarPaisAleatorio();
    paisNuevo = sacarPaisAleatorio();
    
    actualizarPantallaDuelo();
});

// Función auxiliar para coger un país y quitarlo de la lista disponible
function sacarPaisAleatorio() {
    if (paisesDisponiblesParaJugar.length === 0) return null;
    const indiceAzar = Math.floor(Math.random() * paisesDisponiblesParaJugar.length);
    const pais = paisesDisponiblesParaJugar[indiceAzar];
    paisesDisponiblesParaJugar.splice(indiceAzar, 1); // Lo borramos para que no salga repetido
    return pais;
}

function obtenerBanderaParaDuelo(nombreBuscado) {
    // Recorremos todos los continentes (africa, america, etc.)
    for (const continenteKey in baseDatosMundo) {
        const continente = baseDatosMundo[continenteKey];
        
        // Buscamos si el país está en este continente
        const paisEncontrado = continente.paises.find(p => p.nombre.es === nombreBuscado);
        
        if (paisEncontrado) {
            // Si es un país con bandera "especial" (como el País Vasco con su link de Wikipedia)
            if (paisEncontrado.bandera.includes("wikipedia") || paisEncontrado.bandera.includes("http")) {
                return paisEncontrado.bandera;
            }
            
            // Para todos los demás, generamos la bandera en ALTA DEFINICIÓN (w1280) usando su 'id'
            return `https://flagcdn.com/w1280/${paisEncontrado.id}.png`;
        }
    }
    
    // Si por algún motivo el país no está en la base de datos, no devolvemos nada para que salga el fondo oscuro
    return ""; 
}

function actualizarPantallaDuelo() {
    esperandoRespuesta = true;
    
    const datosStat = configEstadisticas[statActualJuego].datos;
    const unidad = configEstadisticas[statActualJuego].unidad;

    // 1. ACTUALIZAMOS TEXTOS
    document.getElementById("nombre-pais-a").textContent = paisAntiguo;
    document.getElementById("dato-pais-a").textContent = `${datosStat[paisAntiguo].toLocaleString()} ${unidad}`;
    document.getElementById("dato-pais-a").style.opacity = "0";

    document.getElementById("nombre-pais-b").textContent = paisNuevo;
    document.getElementById("dato-pais-b").textContent = `${datosStat[paisNuevo].toLocaleString()} ${unidad}`;
    document.getElementById("dato-pais-b").style.opacity = "0";

    // 2. PONEMOS LAS BANDERAS DE FONDO CON NUESTRA NUEVA FUNCIÓN
    const imgA = document.getElementById("img-pais-a");
    const imgB = document.getElementById("img-pais-b");

    imgA.src = obtenerBanderaParaDuelo(paisAntiguo);
    imgB.src = obtenerBanderaParaDuelo(paisNuevo);

    // Seguridad: si una bandera no carga, dejamos un fondo gris oscuro elegante
    imgA.onerror = () => { imgA.style.backgroundColor = "#2c3e50"; imgA.src = ""; };
    imgB.onerror = () => { imgB.style.backgroundColor = "#2c3e50"; imgB.src = ""; };
}

// 3. LÓGICA DEL JUEGO AL PULSAR
function verificarRespuestaBatalla(eleccion) {
    if (!esperandoRespuesta) return;
    esperandoRespuesta = false;

    const datosStat = configEstadisticas[statActualJuego].datos;
    const valorA = datosStat[paisAntiguo];
    const valorB = datosStat[paisNuevo];
    
    let esCorrecto = false;
    if (eleccion === 'A') {
        esCorrecto = valorA >= valorB;
    } else {
        esCorrecto = valorB >= valorA;
    }

    // Mostrar los datos durante 2 segundos
    document.getElementById("dato-pais-a").style.opacity = "1";
    document.getElementById("dato-pais-b").style.opacity = "1";

    setTimeout(() => {
        if (esCorrecto) {
            // Acierto!
            puntuacionActual++;
            document.getElementById("puntos-comparador").textContent = puntuacionActual;
            
            // Relevo de países
            paisAntiguo = paisNuevo; 
            paisNuevo = sacarPaisAleatorio();
            
            if (paisNuevo) {
                actualizarPantallaDuelo();
            } else {
                // Has ganado! (Te quedaste sin países)
                alert("¡¡Felicidades, has completado todos los países!!");
                mostrarFinDeJuego();
            }
        } else {
            // FALLO - Mostramos la nueva pantalla en lugar de alert()
            mostrarFinDeJuego();
        }
    }, 2000); // 2 segundos
}

// 4. NUEVAS FUNCIONES PARA CONTROLAR LA PANTALLA DE FIN
function mostrarFinDeJuego() {
    document.getElementById("arena-comparador").style.display = "none";
    document.getElementById("pantalla-fin-juego").style.display = "block";
    document.getElementById("puntos-finales-comparador").textContent = puntuacionActual;
}

// Configurar los botones de la pantalla final
document.addEventListener("DOMContentLoaded", () => {
    // Botón: Volver al menú
    document.getElementById("btn-volver-menu").addEventListener("click", () => {
        document.getElementById("pantalla-fin-juego").style.display = "none";
        document.getElementById("menu-comparador").style.display = "block";
    });

    // Botón: Reintentar
    document.getElementById("btn-reintentar").addEventListener("click", () => {
        document.getElementById("pantalla-fin-juego").style.display = "none";
        
        // Reiniciamos puntuación y lista de países
        puntuacionActual = 0;
        document.getElementById("puntos-comparador").textContent = puntuacionActual;
        paisesDisponiblesParaJugar = Object.keys(configEstadisticas[statActualJuego].datos);
        
        paisAntiguo = sacarPaisAleatorio();
        paisNuevo = sacarPaisAleatorio();
        
        document.getElementById("arena-comparador").style.display = "block";
        actualizarPantallaDuelo();
    });
});

function abrirJuegoComparador() {
    // 1. Ocultar el mapa principal
    const mapa = document.getElementById("vista-atlas");
    if(mapa) mapa.style.display = "none";

    // 2. Ocultar la sección de estadísticas generales
    const stats = document.getElementById("vista-estadisticas"); 
    if(stats) stats.style.display = "none";

    // 3. Ocultar la sección de los otros juegos
    const juegos = document.getElementById("vista-juegos");
    if(juegos) juegos.style.display = "none";

    // 4. Mostrar nuestro nuevo juego
    const juegoComparador = document.getElementById("juego-comparador");
    if(juegoComparador) {
        juegoComparador.style.display = "block";
        
        // Nos aseguramos de mostrar el menú y ocultar la arena al entrar
        document.getElementById("menu-comparador").style.display = "block";
        document.getElementById("arena-comparador").style.display = "none";
        
        // Llenar el desplegable con las categorías
        cargarMenuComparador(); 
    }
}

function volverAlMenuComparador() {
    document.getElementById("arena-comparador").style.display = "none";
    document.getElementById("menu-comparador").style.display = "block";
}

// --- VIGILANTES DE PANTALLA ---
// 1. Si hace clic en el botón principal "Países"
document.getElementById('nav-btn-paises').addEventListener('click', function() {
    document.getElementById('vista-estadisticas').style.display = 'none';
    document.getElementById('vista-juegos').style.display = 'none';
    document.getElementById('vista-atlas').style.display = 'block';
});

// 2. Si hace clic en CUALQUIER continente dentro del desplegable
document.getElementById('menu-paises').addEventListener('click', function() {
    document.getElementById('vista-estadisticas').style.display = 'none';
    document.getElementById('vista-juegos').style.display = 'none';
    document.getElementById('vista-atlas').style.display = 'block';
});

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('pais-item')) ventanaFlotante.style.display = 'none';
});

// Arrancar página
renderizarAtlas();

/*  
Área.
Clima.
Corrupción.
Deportes.
Desarrollo.
Economía.
Educación.
Felicidad.
Gastronomía.
Limpieza.
Longevidad.
Naturaleza.
Población.
Sanidad.
Seguridad.
Turismo.
*/
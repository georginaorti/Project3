(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    
    const ctx = document.getElementById('myChart')
    
    const myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Eastern and Southern Africa',
          'Western and Central Africa',
          'Arab World',
          'Australia',
          'Central Europe and the Baltics',
          'Eastern Europe and Central Asia',
          'European Union',
          'Latin America and Carribean',
          'Middle East and North Africa',
          'North America',
          'South Asia',
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'rgba(00,255,00,0.1)',
          borderColor: '#00FF00',
          borderWidth: 2,
          pointBackgroundColor: '#00FF00'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()

  feather.replace({ 'aria-hidden': 'true' })
  
    
    const ctx = document.getElementById('myChart')
    
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets:[{
      "FIELD1": 0,
      "Country Name": "Africa Eastern and Southern",
      "2000": "0.9003991497578829",
      "2001": "0.971980786600712",
      "2002": "0.9757491349559252",
      "2003": "1.00996289646531",
      "2004": "1.05718153490629",
      "2005": "1.03299842832055",
      "2006": "1.02364555057226",
      "2007": "1.04596778455517",
      "2008": "1.08644884945052",
      "2009": "1.02195356572593",
      "2010": "1.04887555573041",
      "2011": "1.0053381095460998",
      "2012": "1.02164632918829",
      "2013": "1.03183309057281",
      "2014": "1.0411447920002",
      "2015": "0.987393167382925",
      "2016": "0.971016455310255",
      "2017": "0.959978016817397",
      "2018": "0.9335412011362272"
    },
    {
      "FIELD1": 1,
      "Country Name": "Africa Western and Central",
      "2000": "0.447243620092775",
      "2001": "0.4741396848014699",
      "2002": "0.474875185600127",
      "2003": "0.4745922653759099",
      "2004": "0.474318246383295",
      "2005": "0.50945830203757",
      "2006": "0.4879525095482599",
      "2007": "0.475147837749212",
      "2008": "0.4750245446930429",
      "2009": "0.426769596319387",
      "2010": "0.472819124711189",
      "2011": "0.497022584362617",
      "2012": "0.490866786557112",
      "2013": "0.504655298587815",
      "2014": "0.5076711206706189",
      "2015": "0.480743071312896",
      "2016": "0.4729593640183879",
      "2017": "0.4764377689563769",
      "2018": "0.515544238958445"
    },
    {
      "FIELD1": 2,
      "Country Name": "Arab World",
      "2000": "3.16330493711316",
      "2001": "3.2825094803969903",
      "2002": "3.347226797743569",
      "2003": "3.3617277707251096",
      "2004": "3.47423984595025",
      "2005": "3.7042979260436497",
      "2006": "3.80164616101133",
      "2007": "3.88313987385694",
      "2008": "4.0935381954936805",
      "2009": "4.19327154821276",
      "2010": "4.32200192749412",
      "2011": "4.30874050686413",
      "2012": "4.512189409484611",
      "2013": "4.49519443939826",
      "2014": "4.600190659035519",
      "2015": "4.617963544634719",
      "2016": "4.57030837009204",
      "2017": "4.52835061157416",
      "2018": "4.438715965413571"
    },
    {
      "FIELD1": 3,
      "Country Name": "Australia",
      "2000": "17.689656972797998",
      "2001": "17.769535878019898",
      "2002": "17.9574992112521",
      "2003": "17.692029313308602",
      "2004": "18.1478978904379",
      "2005": "18.117853570518",
      "2006": "18.1206789094546",
      "2007": "18.5028519848662",
      "2008": "18.2830412439057",
      "2009": "18.2074249597772",
      "2010": "17.5814449601144",
      "2011": "17.2681103655036",
      "2012": "16.9692565563587",
      "2013": "16.3986459950997",
      "2014": "15.755876100915598",
      "2015": "15.7864494009173",
      "2016": "15.8720795379851",
      "2017": "15.7386474030825",
      "2018": "15.475516485656"
    },
    {
      "FIELD1": 4,
      "Country Name": "Central Europe and the Baltics",
      "2000": "6.53438652674119",
      "2001": "6.6865105503721605",
      "2002": "6.6003332412395",
      "2003": "6.91428613927647",
      "2004": "6.92427459743055",
      "2005": "6.927355354808719",
      "2006": "7.099956367668071",
      "2007": "7.192342046045179",
      "2008": "7.0526354274999",
      "2009": "6.521535327010679",
      "2010": "6.786153806123751",
      "2011": "6.803902523198731",
      "2012": "6.56254306163762",
      "2013": "6.326934970979639",
      "2014": "6.142062500684201",
      "2015": "6.24998268897351",
      "2016": "6.37248993580012",
      "2017": "6.6259439670661",
      "2018": "6.59723248598714"
    },
    {
      "FIELD1": 5,
      "Country Name": "Europe & Central Asia",
      "2000": "7.48216015938433",
      "2001": "7.53652044148042",
      "2002": "7.534290522144269",
      "2003": "7.73619964741557",
      "2004": "7.746554807099099",
      "2005": "7.70038825224257",
      "2006": "7.83009775141114",
      "2007": "7.791653169773901",
      "2008": "7.728668295641611",
      "2009": "7.102064943975769",
      "2010": "7.36862781933412",
      "2011": "7.36389549461738",
      "2012": "7.29048889234514",
      "2013": "7.10863643343444",
      "2014": "6.76855016183679",
      "2015": "6.694111202079589",
      "2016": "6.685154723198839",
      "2017": "6.721799839876",
      "2018": "6.69010595705676"
    },
    {
      "FIELD1": 6,
      "Country Name": "European Union",
      "2000": "7.83150674729532",
      "2001": "7.95109272430191",
      "2002": "7.916832031953289",
      "2003": "8.10273105293447",
      "2004": "8.084480756120861",
      "2005": "8.01066253551292",
      "2006": "8.00243854637839",
      "2007": "7.88380650384707",
      "2008": "7.682107735496791",
      "2009": "7.09733195825314",
      "2010": "7.281549192713291",
      "2011": "7.072379568768881",
      "2012": "6.92720467882331",
      "2013": "6.7429737169052",
      "2014": "6.40022381699849",
      "2015": "6.51638883308948",
      "2016": "6.5189225301446605",
      "2017": "6.55914292168476",
      "2018": "6.4240387413347495"
    },
    {
      "FIELD1": 7,
      "Country Name": "Latin America & Caribbean",
      "2000": "2.44607972360996",
      "2001": "2.41724015593281",
      "2002": "2.39714985612915",
      "2003": "2.3927662888458503",
      "2004": "2.46422324858905",
      "2005": "2.53241186904977",
      "2006": "2.5655891409771203",
      "2007": "2.64073583140291",
      "2008": "2.71085247762819",
      "2009": "2.62512285430721",
      "2010": "2.7350019288223",
      "2011": "2.80842473696787",
      "2012": "2.87578721485356",
      "2013": "2.9177223628791404",
      "2014": "2.9063702805669203",
      "2015": "2.86493157609527",
      "2016": "2.7809517187686",
      "2017": "2.70001842431839",
      "2018": "2.63736256899646"
    },
    {
      "FIELD1": 8,
      "Country Name": "Middle East & North Africa",
      "2000": "4.07884205379951",
      "2001": "4.20399368661261",
      "2002": "4.30518457906183",
      "2003": "4.37380375609323",
      "2004": "4.54194437704516",
      "2005": "4.811704835683741",
      "2006": "4.99444647777651",
      "2007": "5.14010686783671",
      "2008": "5.332964756280321",
      "2009": "5.44082592338133",
      "2010": "5.54407212176223",
      "2011": "5.5363989888150895",
      "2012": "5.74152870772102",
      "2013": "5.73594382705647",
      "2014": "5.847665955358111",
      "2015": "5.81840465144704",
      "2016": "5.754217998927491",
      "2017": "5.73090672707515",
      "2018": "5.638657141208559"
    },
    {
      "FIELD1": 9,
      "Country Name": "North America",
      "2000": "20.1148175290478",
      "2001": "19.8033382822866",
      "2002": "19.1891794141214",
      "2003": "19.289542723553897",
      "2004": "19.3343704425672",
      "2005": "19.2443616540064",
      "2006": "18.7312210358998",
      "2007": "18.8946346286001",
      "2008": "18.1270449936342",
      "2009": "16.6912470968449",
      "2010": "17.2699742549595",
      "2011": "16.5390145067508",
      "2012": "15.7740390145107",
      "2013": "16.0824634186624",
      "2014": "16.0130939953744",
      "2015": "15.550833640324",
      "2016": "15.1469245227553",
      "2017": "14.8682233158805",
      "2018": "15.2708756112257"
    },
    {
      "FIELD1": 10,
      "Country Name": "South Asia",
      "2000": "0.773531071458188",
      "2001": "0.7731664462433431",
      "2002": "0.785737829587573",
      "2003": "0.795362374763142",
      "2004": "0.839647472552924",
      "2005": "0.8638377892016229",
      "2006": "0.907528052704864",
      "2007": "0.982300306885539",
      "2008": "1.02328450576512",
      "2009": "1.10290837130009",
      "2010": "1.14982190181249",
      "2011": "1.19854436184798",
      "2012": "1.27424033641974",
      "2013": "1.2918276921291498",
      "2014": "1.38292180833402",
      "2015": "1.3848155741126102",
      "2016": "1.39975587202481",
      "2017": "1.46285048165024",
      "2018": "1.52665123826178"
    },
    {
      "FIELD1": 11,
      "Country Name": "World",
      "2000": "3.8126493115353",
      "2001": "3.82765888146696",
      "2002": "3.83475135105644",
      "2003": "3.95850274353281",
      "2004": "4.0922516616783495",
      "2005": "4.19630121305972",
      "2006": "4.28100643229647",
      "2007": "4.39186677996519",
      "2008": "4.37691721578986",
      "2009": "4.27713136952081",
      "2010": "4.48314795598468",
      "2011": "4.570123102894691",
      "2012": "4.57876814606997",
      "2013": "4.61022927939351",
      "2014": "4.560774243390361",
      "2015": "4.4887700911603705",
      "2016": "4.43675907864533",
      "2017": "4.44130858245966",
      "2018": "4.48352391238305"
    }
   ]
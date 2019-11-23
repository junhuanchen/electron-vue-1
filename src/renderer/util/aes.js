var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");

var txt = "511BF513BA12753C70A7F88990286F0AA4AEF7C43FBB13B7D1ED987DB7D8718FF4CC5D212839C9DBC22C3E65182FAA4DB1BEDEF98F7D537C5E47C51408D603A58C3BA79F5E58084CACD8AF82457D7E3BEA7EEBDAAF450D92C0D0127BF8689E1AE2EE46618ACA4873D32931A2B8262D2569720FB89F8EF8A3FF29090025EC3F4E3088B2D3ECA32461F2833E513115F317070631172C89B985B53C034AA613557A4017A9A59F13DDEA28467F562BFD7CD79057023A880B4CC2CC08CBDCF5C5C621FA76856EC61849DAF6747D4744C8F0C5FDA04722A563D070492733BC8505E0917EE58EA04525AF04B776CA7CE4A0F65E19BD98FC3DF6AA364FC8E78FAC709634DC65E22C408B9C0458172452B1CD5F68386CA88799126462ECC9EF8EC537ADB108366C7351A9C65FF30697E54341AA9E296FD4E928089CEABD0A05CDCDEE7A78C9566BE85580ED6078CE42832C994FC90D11823857194F339E5971AFD78F285679092A3A677337EF1373B7EBE80DED8815D132EC5B084B76F918AF86A7AC73B34E580E2C20CA2919C7DEE982F9B5E2C06CDF494C89EEEF283E82C3BB7C52A61519B260BACA418678EC2FAAB54B3838808FD245F9C9142BFFBBB216756AB3F606C9DF5CD75755F9DC354A79F8012A7DB15BAA19F16479D4DC54798ADB5A244E56D990265E451804B63402C3F7994957CCBFF4AB1EB02939F229A28D88D65BA2D88D26BAB4AA9843768E99D6E0E71D76D73F7AA99806364BDD9597C4A58A5A26621E69890E3A3103F8EAEC72572444C1B7B658E3E94B1BCC9503BF1928794978C45C9C7AB9C59F341AB9D0DDE23422871D70F7C8368E71F09B0AD171C1D5E2136D85D28DBEA09FAED6D9274C7EF97E33851313D862DE248CB80110B56DD02970C20A9BC78ED65D3C2A79F291777A9B4FFD05EFADCB563C8E77D5DDCC3E6F89FBF68769D03B97056AD91E9B7E49D1737B68603FF057A2F23875691AECCC6A05C90D20E0190D18EEC7475C36BFA78748B3A332B564615996BCBFB56497E5032F057F4275124A8A6EB84A174EDCFFCD3C42AECAEEF788A774485F9D1B4B5F8DD0D4AE92434B93E75654F3077C7C843FEDDAD0E7B7C14E50E5FAF7E7E3CE16109F69DE45A46BE39FAA6A1D236BCB33FACCFD7FAAEAEA630125CA6E3C54A990ABFE74DF80A2B8D2164BCA0AFCE2F85FF9A73A25D891B1B4D229C6A91399934DE1E00A5117620BCEF1369794B4A5C9B7ECEF3C2DF041206B28C7F7CEE42B3544F81B35CF8D2B51D856606631B1DD8F1DDF203959A1597B220C4AA364CC0FE562902F3EA4C985DB5FCCAFD3286D05A74D0B4513FE4BB15EA9D8782E0998BCE6F9094B0ABBEC45F3CA58CCFE6818FF2D26F93641AF5FD5A7F4BEDABEA55A50DEA191FE0A0E25703FE7DA69DBCB87CDA5588836E7A88E3612BC9A4414A57746CE17BC1970320839725555BEDA0FD89FB212F912326354CEAFEDFBC9DF5E02EC42743CE2DEC4C2D079F3C337FC40EF7C7E19A1002B64FF85152141A71E7B944273109BD26E3E98CBF8349EB05A7B0B58DD91CBA7F7B20B7D45AD8732634587B3FBA76E1E781DE0298D108443D9032F92A114D819A40A939AB95DD66DF2F9305CDCB2F581F2654C169DB0346528F03AA9C33433B6AF191EB2EDC1A0877DBFE085522460FA6FEC52521205E4622E5B9450C69821A63075138FDA7AFDB2C5A4D33945258E2A2CD93C84008BB63DC3C16AAB020F01DBE53EC07DF8FDD70320F82DB8CE8368F01DF11E6EB4B9A430B0D8FE5327F57ABCFF2ED1341974B9D1D3161209FE0BFAE292411D360203C9130BF331B2B16761D82D15D4B18AE374841601403023CF72B43CB9AD5F49E4C9568F9DE7BA738E2B775A020D5740D819B6265C01A0ECCE5547CA5803D310E9B76BD76D959361A59D343104C06DB69B21FC8062C57E2CFF7336CBA9B9A947F740B974A58B39AE6AD615C96DDB255A2FE5D724C38285EE3B4BB1B36C53ABCB022D90B71B78213A291BFFBFFB11B4327189EE5FFD10F63FD227C6166B916F691569998A2BE87112823AF268C98D2AD71E4976FBFD8B1F92481A701D9126F98456E075166E3152FB43E911E2BD9FD8604E6FAB582267ACFE8F73865A7AFDD0D98A284669993F36BB2B0F0E979E305775DEE915DBEEFB358BA0CAB3AEFD233CB602E2C65675C47F515EC2C5171001047E5329B65F90204C90F62D1F66CE90F8786CFD514780699DE6A891E64492FA092F3990715CFAB119ED5217741AFDE209A8EF10595A411D6469AB69E4B7FF16132ABB15E9B46DE332ED5BC85CB15EE46AE8D2971F1DE57D02EC5A1895F1E6662D3DA931B02345AF2037D1FBA85D24B5133BD71AF099B8A68693897D776AC1EEE919CA93EB436E60416EFF7E6E0DA6DA0BBA20C85444477B187395AA4B9964106CED5F6524C8209B5F1C56C8DA5BC5A695CE2189D9604CE560729973EDEABA91D07707C099D65DC1F9F3EFB42776BE85BECA908D5E66687CC51BAFF09D62D1E475E72F64EB19A3D7B44EC122F3AC0EA3BA2D25AA06737361410F8061623B4B1899275E8EF9ABD30799635BDEFDC00949F02166992B6C048C0FE505202309E513551D0BEC198537A12A5A6EBA43810BF77A0C55E232FD4B1C445C869C92AD14D16E92AB20CE2B54054C3433E99DDBCFF4BA6ED5B33CAAD19AB8E8ADD6E9180F330A9AF2FF3585A72469DC53722B63AF3D2FBD6133AE80F0C0490E09E8FB63276324E5140731ECA42513D939F3DA4F454D5F71CFF90272EDED8DD6E419D7A557CF0FD2E631C8FA7805BAA1437B0E560188037A06A33B7682566BCEB63B2668A98B838EC943224488ACFF4A8FCB3B21F355C6689A857F8CB899ABC6D24FEC4AA17B1D1AE1E56E079C38457D6D9EFD119C06ADC518B9982C36A181764609AEA507EDEF9DBEC7EA1D74C21D3D492D48975FD86578FB43A96323A38E9446072F99487B63BA8EB0D64CF6241F19D5F88AA9177474FD06AAA8E158C0374F2D5452ADB2E140B6A27116E15489BB00B239C7924639281DE17FADD7831DEB1B2B72501D692CA0228AFDAC1C02E9812214070D1BC0D193AF455996B7B0E89E0FDBD8DF3035BA4A19AE55F562A75C5ECCBDBCE3420878F7CE4755C941DF2355335AF2EFC8C63E73983C86B24E4A6AD6418E6ADAF0A359B1AF2142588602417CB4A0D4858CBE9966E68AB2D07E84A27106529FD3A1D47C3BD3BF7D175FC5BB9CB82015D69DBD81CF9F11617ED1501852B24BB573846D59DABD642BBF586E71E9E5EDD5C55ECDAD5496787C096939FDA6211DEC05D01A7B42F9DA9676862F75DEB6C47228EC22D8CDA9CCE9041267BA581A0DADFD34870003C6987FD694F823AA622163D579D902AC367F604452A1BCA5724FE52DCBF429CD2CA5359FEC4156A307B7E4A5253D";
var key = "w28Cz694s63kBYk4";
var io = "4kYBk36s496zC82w";

module.exports = function () {
    var txt2 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(txt));

    var res = AES.decrypt(txt2, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(io),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return res.toString(CryptoJS.enc.Utf8);
}



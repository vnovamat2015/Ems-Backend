const todosBairros = [{
    bairro: "CENTRO",
    coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
    bairro: "ABACAXI",
    coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
    bairro: "FATIMA",
    coordenadas: "45° 25' 04''S 54° 16' 11''W"
},
{
    bairro: "GUAJUVIRA",
    coordenadas: "48° 35' 04''S 56° 10' 21''W"
},
{    bairro: "NITEROI",
    coordenadas: "38° 15' 04''S 23° 11' ''W"
},
{    bairro: "MATHIAS VELHO",
coordenadas: "38° 15' 04''S 23° 11' 01''W"
},
{    bairro: "MATO GRANDE",
coordenadas: "51° 12' 48''S 29° 56' 24''W"
},
{    bairro: "NOSSA Sra. DAS GRAÇAS",
coordenadas: "51° 08' 42''S 29° 56' 28''W"
},
{    bairro: "IGARA",
coordenadas: "51° 09' 34''S 29° 53' 52''W"
},
{    bairro: "RIO BRANCO",
coordenadas: "51° 11' 06''S 29° 57' 54''W"
},
{    bairro: "HARMONIA",
coordenadas: "51° 12' 36''S 29° 56' 44''W"
},
{    bairro: "OLARIA",
'coordenadas': "51° 12' 36''S 29° 56' 44''W"
},
{
    default:
        coordenadas = "G M S"
}]
exports.localizaBairro = function(nomebairro){
    let bairroEncontrado = []

    for(i=0;i<todosBairros.length;i++){
        const bairro = todosBairros[i];
        if(bairro.bairro == nomebairro){
            bairroEncontrado.push(bairro);
            break;
        }
    }
}
exports.listaBairros = function(){
    return todosBairros
}

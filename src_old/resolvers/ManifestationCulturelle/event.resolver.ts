const request = require("request-promise");
const baseUrl = "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse"

module.exports = {
  Query: {

  	//Get a unique event
    event: async (_, { id }) => {
        const url = baseUrl+"&q=identifiant%3D"+id
        const results = await JSON.parse(await request(url))
        return  mapper(results.records[0])
    }
  }
};


function mapper (event){
    return {
        id: event["identifiant"],
        name: event["nom_de_la_manifestation"],
        shortDesc: event["descriptif_court"],
        longDesc: event["descriptif_long"],
        categorie: event["type_de_manifestation"].replace(/\s/g,"").split(','),
        theme: event["theme_de_la_manifestation"].replace(/\s/g,"").split(','),
        place: event["lieu_nom"],
        startDate: event["date_debut"],
        endDate: event["date_fin"],
        schedules: event["horaires"],
        isFree: event["manifestation_gratuite"] == "Oui" ? true : false,
        price: event["tarif_normal"] ? event["tarif_normal"].replace(/,00/g,"").match(/\d+/g) : undefined,
        childPrice: event["tarif_enfant"],
        childAgeGroup: event["tranche_age_enfant"] ? event["tranche_age_enfant"].split("/").map(v => v.replace(/ans/g,"").trim()) : null,
        position: {
            latitude : event["googlemap_latitude"],
            longitude: event["googlemap_longitude"]
        },
        municipality: event["commune"],
        address: event["lieu_adresse_2"],
        phone: event["reservation_telephone"],
        postalCode: event["code_postal"],
        websiteResa: event["reservation_site_internet"],
        nearestStation: event["station_metro_tram_a_proximite"]
    }
}
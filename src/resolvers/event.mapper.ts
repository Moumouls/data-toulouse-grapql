import maps from "./event.maps"
import {Event} from './types'

const mapper = {

    main: (event):Event => {
        return {
            id: event["identifiant"],
            name: event["nom_de_la_manifestation"],
            shortDescription: event["descriptif_court"],
            longDescription: event["descriptif_long"],
            category : event["categorie_de_la_manifestation"] ? mapper.mapper("category",event["categorie_de_la_manifestation"].replace(/\s/g,"").split(',')) : null,
            type: event["type_de_manifestation"] ? mapper.mapper("type",event["type_de_manifestation"].replace(/\s/g,"").split(',')) : null,
            theme: event["theme_de_la_manifestation"] ? mapper.mapper("theme",event["theme_de_la_manifestation"].replace(/\s/g,"").split(',')) : null,
            place: event["lieu_nom"],
            startDate: event["date_debut"],
            endDate: event["date_fin"],
            schedules: event["horaires"],
            isFree: event["manifestation_gratuite"] == "Oui" ? true : false,
            price: event["tarif_normal"] != undefined ? event["tarif_normal"].replace(/,00/g,"").match(/\d+/g) : null,
            childPrice: event["tarif_enfant"],
            childAgeGroup: event["tranche_age_enfant"] != undefined ? event["tranche_age_enfant"].split("/").map(v => v.replace(/ans/g,"").trim()) : null,
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
    },

    /**
     * Map API values to GraphQL values (can do the opposite with reverse true)
     *
     * @param      {string}  mapName  The map name
     * @param      {string[]}  values   The values
     * @param      {boolean}  reverse  The reverse
     * @return     {string[]}  { An array with values thats match the GraphQL spec }
     */
    mapper: (mapName,values,reverse=false):any => {
        return values.map(v => {
            let searchIndex = 0;
            let resultIndex = 1;
            if(reverse){
                searchIndex = 1;
                resultIndex = 0;
            }
            for(let m of maps[mapName]){
                if(m[searchIndex] == v){
                    return m[resultIndex]
                }
            }
            return "MISC"
        })
    }
}

export default mapper
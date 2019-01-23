import * as request from "request-promise";
import mapper from './event.mapper'
const baseUrl = "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse"
import {Event,EventsQueryArgs,EventQueryArgs} from './types'

module.exports = {
  Query: {

  	//Get a unique event
    event: async (_, { id }:EventQueryArgs):Promise<Event> => {
        const url = baseUrl+"&q=identifiant%3D"+id
        const results = await JSON.parse(await request(url));
        return mapper.main(results.records[0].fields)
    },

    events: async (_, {nearestStation, orderBy, limit, startDateRange, endDateRange, descriptionContain}:EventsQueryArgs):Promise<Event[]> => {
        let hasArg = false;
        let query = "";
        let q = ""
        if(nearestStation){
            q+="station_metro_tram_a_proximite="+nearestStation
        }
        if(descriptionContain){
            if(q != ""){
                q+=" AND "
            }
            q+="descriptif_long="+descriptionContain
        }
        if(startDateRange){
            if(q != ""){
                q+=" AND "
            }
            q+="date_debut:["+startDateRange.start+" TO "+startDateRange.end+"]"
        }
        if(startDateRange){
            if(q != ""){
                q+=" AND "
            }
            q+="date_debut:["+startDateRange.start+" TO "+startDateRange.end+"]"
        }
        if(startDateRange){
            if(q != ""){
                q+=" AND "
            }
            q+="date_debut:["+startDateRange.start+" TO "+startDateRange.end+"]"
        }
        if(endDateRange){
            if(q != ""){
                q+=" AND "
            }
            q+="date_debut:["+startDateRange.start+" TO "+startDateRange.end+"]"
        }
        if(orderBy){
            switch (orderBy) {
                case "start_date_ASC":
                    query+="&sort=-date_debut"
                break;
                case "end_date_ASC":
                    query+="&sort=-date_fin"
                break;
                case "start_date_DESC":
                    query+="&sort=date_debut"
                break;
                case "end_date_DESC":
                    query+="&sort=date_fin"
                break;
            }
        }
        if(limit){
            query+="&rows="+limit
        } else {
            query+="&rows=10"
        }
        if(q != ""){
            query+="&q="+encodeURIComponent(q);
        }
        const url = baseUrl+query
        const results = await JSON.parse(await request(url));
        return results.records.map(o => mapper.main(o.fields))
    },
  }
};
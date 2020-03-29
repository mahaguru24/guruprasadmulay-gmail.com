<template>
    <MglMap
            :accessToken="accessToken"
            :mapStyle.sync="mapStyle"
    >
        <MglMarker
                v-for="(mark, index) in  getFilteredCoordinates"
                :key="`coordinate-${index}`"
                :coordinates="mark.coordinates"
                color="blue" >
            <MglPopup
                    :coordinates="mark.coordinates"
                    anchor="top"
            >
                 <div v-html="mark.title"></div>
            </MglPopup>
        </MglMarker>
    </MglMap>

</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import {mapGetters} from 'vuex'
export default {
    name: "PropertiesMap",

    components: {
        MglMap,
        MglMarker,
        MglPopup
    },

    computed: {
        ...mapGetters([
            'getFilteredCoordinates'
        ])
    },

    data() {
        return {

            // coordinates: [151.209900, -33.865143],
            accessToken: 'pk.eyJ1IjoibWFoYWd1cnUyNCIsImEiOiJjazhjajFhbXgwazV0M2tvd3djOWJxdHM2In0.SNy36ua4A1Dbz3B-gS2VWw', // your access token. Needed if you using Mapbox maps
            mapStyle: {
                "version": 8,
                "name": "Mapbox Streets tileset v8",
                "sources": {
                    "mapbox-streets": {
                        "type": "vector",
                        "url": "mapbox://mapbox.mapbox-streets-v8"
                    }
                },
                zoom: 12,
                center: [151.209900, -33.865143],
                pitch: 20,
                bearing: 0,
                "layers": [
                    {
                        "id": "admin",
                        "source": "mapbox-streets",
                        "source-layer": "admin",
                        "type": "line",
                        "paint": {
                            "line-color": "#ffffff"
                        }
                    },
                    {
                        "id": "aeroway",
                        "source": "mapbox-streets",
                        "source-layer": "aeroway",
                        "type": "line",
                        "paint": {
                            "line-color": "#ffffff"
                        }
                    },
                    {
                        "id": "airport_label",
                        "source": "mapbox-streets",
                        "source-layer": "airport_label",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "building",
                        "source": "mapbox-streets",
                        "source-layer": "building",
                        "type": "fill",
                        "paint": {
                            "fill-color": "rgba(66,100,251, 0.3)",
                            "fill-outline-color": "rgba(66,100,251, 1)"
                        }
                    },
                    {
                        "id": "housenum_label",
                        "source": "mapbox-streets",
                        "source-layer": "housenum_label",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "landuse_overlay",
                        "source": "mapbox-streets",
                        "source-layer": "landuse_overlay",
                        "type": "fill",
                        "paint": {
                            "fill-color": "rgba(66,100,251, 0.3)",
                            "fill-outline-color": "rgba(66,100,251, 1)"
                        }
                    },
                    {
                        "id": "landuse",
                        "source": "mapbox-streets",
                        "source-layer": "landuse",
                        "type": "fill",
                        "paint": {
                            "fill-color": "rgba(66,100,251, 0.3)",
                            "fill-outline-color": "rgba(66,100,251, 1)"
                        }
                    },
                    {
                        "id": "motorway_junction",
                        "source": "mapbox-streets",
                        "source-layer": "motorway_junction",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "natural_label",
                        "source": "mapbox-streets",
                        "source-layer": "natural_label",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "place_label",
                        "source": "mapbox-streets",
                        "source-layer": "place_label",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "poi_label",
                        "source": "mapbox-streets",
                        "source-layer": "poi_label",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "road",
                        "source": "mapbox-streets",
                        "source-layer": "road",
                        "type": "line",
                        "paint": {
                            "line-color": "#ffffff"
                        }
                    },
                    {
                        "id": "structure",
                        "source": "mapbox-streets",
                        "source-layer": "structure",
                        "type": "fill",
                        "paint": {
                            "fill-color": "rgba(66,100,251, 0.3)",
                            "fill-outline-color": "rgba(66,100,251, 1)"
                        }
                    },
                    {
                        "id": "transit_stop_label",
                        "source": "mapbox-streets",
                        "source-layer": "transit_stop_label",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": "rgba(238,78,139, 0.4)",
                            "circle-stroke-color": "rgba(238,78,139, 1)",
                            "circle-stroke-width": 1
                        }
                    },
                    {
                        "id": "water",
                        "source": "mapbox-streets",
                        "source-layer": "water",
                        "type": "fill",
                        "paint": {
                            "fill-color": "rgba(66,100,251, 0.3)",
                            "fill-outline-color": "rgba(66,100,251, 1)"
                        }
                    },
                    {
                        "id": "waterway",
                        "source": "mapbox-streets",
                        "source-layer": "waterway",
                        "type": "line",
                        "paint": {
                            "line-color": "#ffffff"
                        }
                    }
                ]
            }
        };
    },

    created() {
        // We need to set mapbox-gl library here in order to use it in template
        this.mapbox = Mapbox;
    }
};
</script>
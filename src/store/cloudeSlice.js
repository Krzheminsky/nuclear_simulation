import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//console.log('GetUrl', GetUrl());


export const fetchMeteo = createAsyncThunk(
    'cloud/fetchMeteo',
    async function (url, { rejectWithValue }) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Server Error!..')
            }

            const data = await response.json();

            return data;

        } catch (error) {

            return rejectWithValue(error.message);
        }
    }
)

const cloudeSlice = createSlice({
    name: 'cloud',
    initialState: {
        cloudes: [
            {
                cloudA: 0,
                cloudB: 0,
                cloudV: 0,
                cloudG: 0,
                depthA: 0,
                widthA: 0,
                depthB: 0,
                widthB: 0,
                depthV: 0,
                widthV: 0,
                depthG: 0,
                widthG: 0,
                fireBall: 0,
                overpressure20: 0,
                overpressure10: 0,
                overpressure5: 0,
                overpressure1: 0,
                thermalRadiation1: 0,
                thermalRadiation2: 0,
                thermalRadiation3: 0,
                ionizingKadiation500: 0,
                ionizingKadiation100: 0

            }
        ],

        power: 0,

        typeExplosion: 'Наземний',

        wind: 20,

        direction: 360,

        coordinate: [
            {
                lat: 49.16,
                lng: 34.41,
                // position: null,
            }
        ],
        currentWeather:
        {
            "current_weather": {
                "time": "2022-10-26T06:00"
            },

            "hourly": {
                "time": [
                    "2022-10-26T06:00",
                ],
                "windspeed_180m": [
                    20
                ],
                "winddirection_180m": [
                    359
                ]
            }
        }
        ,
        status: null,
        error: null,
    },
    reducers: {
        addCoordinate(state, action) {
            state.coordinate.push(
                {
                    lat: action.payload.lat,
                    lng: action.payload.lng,
                    // position: actoin.payload.position
                })
        },

        addDirectionWind(state, action) {
            state.direction = action.payload;
        },
        addTypeExplosion(state, action) {
            state.typeExplosion = action.payload;
        },
        addWind(state, action) {
            state.wind = action.payload;
        },
        addPower(state, action) {
            state.power = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeteo.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchMeteo.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.currentWeather = action.payload;
            })
            .addCase(fetchMeteo.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    },
})

export const { addCoordinate, addDirectionWind, addPower, addTypeExplosion, addWind } = cloudeSlice.actions;
export default cloudeSlice.reducer;

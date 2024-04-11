const PromptToLocation = (prompt:string) =>{
 
    const url = ' https://api.openai.com/v1/chat/completions'
   
    const data={
        "model": "gpt-3.5-turbo-0613",
        "messages": [
            {
            "role": "user",
            "content": prompt
            }
        ],
        "functions":[ {
                "name":"displayData",
                "description":"Get the current weather at a given location.",
                "parameters":{
                    "type": "object",
                    "properties":{
                        "city":{
                            "type":"string",
                            "description":"City name"
                        },
                        "county":{
                            "type":"string",
                            "description":"County name"
                        },
                        "countryCode":{
                            "type":"string",
                            "description":"Country code. Use ISO-3166"
                        }
                    },
                    "required":[
                        "city",
                        "county",
                        "countryCode",
    
                    ]
                }
            }
        ],
        "function_call": "auto"
    }

    // using secret API key from https://openai.com/blog/openai-api
    const params ={
        headers:{
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
        method: "POST"

    }

    return fetch( url,params)
    .then(response => response.json())
    .then(data=> {
        const res = JSON.parse(data.choices[0].message.function_call.arguments)

        if(res.county==="" || res.county== res.city){
            const locationCityCountry = `${res.city},${res.countryCode}`
           return locationCityCountry;
        }else{
            const locationFull = `${res.city},${res.county},${res.countryCode}`
            return locationFull
        }
    }
    )
    .catch(() => {
        return Promise.reject("Could not found the location!")
    });

}

export default PromptToLocation
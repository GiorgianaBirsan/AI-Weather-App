const PromptToLocation = (prompt:string) =>{
 
    const url = ' https://api.openai.com/v1/chat/completions'
   
    const data={
        "model": "gpt-4-0613",
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
            const locationString = `${res.city},${res.county},${res.countryCode}`
            return locationString;
    }
    )
    .catch(err => {
       
        return Promise.reject("Could not found the location!")
    });

}

export default PromptToLocation
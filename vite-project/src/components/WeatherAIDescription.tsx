const WeatherAIDescription = (prompt:any, weatherData:any) =>{
 
    const url = 'https://api.openai.com/v1/chat/completions'
    
    const sysMsg= `Act like a weather app. Based on my [Question] , create a short description of the [WeatherData] and provide a short opinion of what to wear
    (e.g bring a jacket, wear a rain coat, bring sunglasses etc)/what to do(go biking, play tennis, do a snowman etc). Don't bring in the response the value of temperatures or 
    wind speed or humidity. 
    Example: 
    Me:What's the weather like in Milisauti, Romania?
    You: [description] Right now the weather is cloudy.  
    [opinion] Take a jacket if you go outside or bring a tea cup and do something fun inside`

   const newPrompt = `Question: ${prompt}. WeatherData:${JSON.stringify(weatherData)}`
    const data={
        "model": "gpt-3.5-turbo-0613",
        "messages": [
            {
                "role":"system",
                "content": sysMsg
            },
            {
            "role": "user",
            "content": newPrompt
            }
        ]
       
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
        const res= data.choices[0].message.content
        return res
      // console.log("new data:", typeof data.choices[0].message.content)
    }
    )
    .catch(err => {
      console.error(err)
    });
}

export default WeatherAIDescription;
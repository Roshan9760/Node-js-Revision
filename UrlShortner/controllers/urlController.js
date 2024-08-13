const URL = require('../models/urlModel');
const short = require("short-uuid");



async function handleGenerateNewShortUrl(req,res) {
    
     try {
        const body = req.body;
        const shortId = short.generate(); 

        if(!body.url){
            return res.status(400).json({
                message:"Url Required "
            })
        }

        const newUrl = new URL({
            shortId :shortId,
            redirectURL:body.url,
            visitHistory:[]
        })

        if(!newUrl){
            return res.status(400).json({
              message: "No Url There Please Provide a Valid Url ",
            });
        }

        await newUrl.save();

        return res.status(200).json({
          message: "Url Generated Successfully  ",
          urlId :shortId
        });
     } catch (error) {
        
        return res.status(400).json({
          message: "Error while generating new URL ",
          error:error
        });
     }
}

async function redirectToURL(req, res) {
  try {
    const shortId = req.params.shortId;
   // console.log(shortId);
    
    const orgURL = await URL.findOneAndUpdate(
      { 
         shortId

       },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );

    if (!orgURL) {
      return res.status(400).json({
        message: "No Such Id Exist  ",
      });
    }

    res.redirect(orgURL.redirectURL);

  } catch (error) {
    return res.status(400).json({
      message: "Error while Redirecting   URL ",
      error: error,
    });
  }
}


async function handleAnalytics(req, res) {
 try {
   const shortId = req.params.shortId;

   console.log(shortId);
   
  const data = await URL.findOne({ shortId });
  console.log(data);

  if(!data){
    return res.status(400).json({
      message: `No Such Data Found `,
    });
  }

  console.log(data);
  return res.json({
    message: `Your Url of ${data.redirectURL} has Following Analytics ! `,
    clickCount: data.visitHistory.length,
    Analytics: data.visitHistory
  });
 } catch (error) {
   return res.status(400).json({
     message: "Error while Analysis the   URL ",
     error: error,
   });
 }
}


module.exports = { handleGenerateNewShortUrl, redirectToURL, handleAnalytics };
// url formatter, may need work.  need more test cases
export function formatUrl(url,...params) {
  console.log("Url From Constants: ", url)
    if(params.length < 0){
      return url;
    }
    let args = params;
    console.log("args: ", args)
    if (params.length > 0) {
      for(let i = 0; i < params.length; i++){
        url = url.replace("{" + i + "}", params[i]);
      }

      return url;
    }
  }
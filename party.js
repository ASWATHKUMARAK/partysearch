const json=require('./PARTY_MASTER_ECUSTOMS (1).json') // importing json file 
//console.log(json)                                   // printing json file


  const searchstring="EAGLE BURGMANN AUSTRALASIA PTY LTD" //creating const var as searchstring ie which string we r going to search.

  const index=json.filter((data)=>data.partyName.toLowerCase().includes(searchstring.toLowerCase())) //filter  the array of obj based on the search string and changes to case sensitive.
  console.log(index)
  const party=index.sort((data)=>{  //sort the array of obj based on the occurance of string .
console.log(data)
  return data.partyName.toLowerCase().search(searchstring.toLowerCase()) //. search will fetch the data based on the index.
 })
   console.log(party) 







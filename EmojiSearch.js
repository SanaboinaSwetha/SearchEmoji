import React,{useState} from 'react'

const emojidata=[
    {
        id:1,
        symbol:"🥱",
        name:"bored"
        
    },
    {
        id:2,
        symbol:"😅",
        name:"cold"
        
    },
    {
        id:3,
        symbol:"😜",
        name:"crazy"
        
    },
    {
        id:4,
        symbol:"😊",
        name:"blush"
        
    },
    {
        id:5,
        symbol:"🫣",
        name:"peek"
        
    },
    {
        id:6,
        symbol:"🥵",
        name:"feverish"
        
    },
    {
        id:7,
        symbol:"🥹",
        name:"aw"
        
    },
    {
        id:8,
        symbol:"🥲",
        name:"smiley"
        
    },
    {
        id:9,
        symbol:"😎",
        name:"awesome"
        
    },
    {
        id:10,
        symbol:"😡",
        name:"angry"
        
    }]
function EmojiSearch() {
const [searchEmoji,setSearchEmoji]=useState("");
const handleChange=(e) =>{
    setSearchEmoji(e.target.value)
}
const showEmoji=emojidata.filter((emoji)=>{
const emojiName=emoji.name.toLowerCase();
return emojiName.includes(searchEmoji.toLowerCase())
});
  return (
    <div id="small">
    <h1>React Emoji App!!</h1>
    <input type='text' placeholder='Search for an emoji..' value={searchEmoji} onChange={handleChange}/>
    <div>
       {showEmoji.map((emoji)=>emoji.symbol)}
    </div>
    </div>
  )
}

export default EmojiSearch

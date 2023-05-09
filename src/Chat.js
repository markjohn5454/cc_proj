import React, { Component } from 'react'

class Chat extends Component {
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"27d6556a07a9ab3e5ad3ea9644e517b90":"kommunicate-support","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
  render() {
    return (
      <div></div>
    )
  }
}

export default Chat
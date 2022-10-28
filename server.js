// install한 express 첨부해주세요.
const express = require('express');
// 첨부한 라이브러리를 이용해서 새로운 객체를 만들어주세요.
const app = express();

// listen(서버를 띄울 포트번호, 띄운 후 실행할 코드)
app.listen(8080, function(){
  console.log('listening on 8080')
});

// 누군가가 /pet 으로 방문하면 
// pet 관련된 안내문을 띄워주자
app.get('/pet',function(req, reponse){
  reponse.send('펫용품 쇼핑할 수 있는 페이지입니다.')
});
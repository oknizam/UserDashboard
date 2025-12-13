
1. State full -> mainitaining session at server end , commonly used in banking application, server restarted logout, if we mainintain session at data base latency will increase because every time need to query data base to get user data
2. state less -> completley no state is maintained at server end send data to jwt itl will return data, by secre key mainting 

3. Cookies are domain specific 
   3.1 also .google.com means all sub domains have share same cookies
   3.2 Cookies are browser only not for mobile app in mobile app we use Authorization token 

4. Authorization 

  a. With basic username:password base64 encoded format

    Authorization : Basic nizam:1234 base64(nizam:1234) => BMshdkk2244== 

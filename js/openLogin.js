
        function openLogin() {
               
            var popupX = (document.body.offsetWidth / 2) - (350 / 2);
            //&nbsp;만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음

            var popupY= (window.screen.height / 2) - (350 / 2);
            //&nbsp;만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음

            window.open('login.html', '로그인', 'status=no, height=350, width=350,scrollbars=no left='+ popupX + ', top='+ popupY);

        }

        
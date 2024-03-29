# insta-unfollow-tracker 사용법

## 준비물
* VSCODE
* Instagram
* Python

## 인스타그램 API
<ol>
  <li>모바일: 내 인스타그램 페이지에서 오른쪽 위 = 모양을 클릭 해주세요.</li>
  <li>PC: 인스타그램 PC버전 로그인 후 왼쪽 아래 더보기 를 클릭 해주세요.</li>
  (Mac의 경우에는 Safari 말고 Chrome으로 접속해주세요.)
  <li>내 활동 > 내 정보 > 다운로드 > 계속 클릭</li>
  <li>다운로드 요청 > 다운로드할 계정만 선택 후 다음 클릭</li>
  <li>'전체 사본'과 '정보 유형 선택' 중 정보 유형 선택 클릭 > 팔로워 및 팔로잉만 체크 후 다음 클릭</li>
  <li> 전체 기간 + 형식 JSON 으로 변경 후 요청 제출 클릭 </li>
  <li> 이메일 수신 후 다운로드 가능 (소요시간은 팔로워, 팔로잉 수 에 따라 다름) </li>
  다운로드 버튼은 번 '다운로드 요청' 아래에 생기게 됩 니다
  <li>다운받은 압축파일(.zip)을 압축해제 후 following1.json 파일과 followers.json 파일을 저장</li>

  

## 환경설정
## 윈도우에 파이썬 설치 https://dotiromoook.tistory.com/32
(맥의 경우 terminal > brew install python3)
### vscode > extension > python 설치
<img width="1167" alt="Screenshot 2024-03-29 at 3 38 09 PM" src="https://github.com/sleepjo/tracker/assets/98254345/01cb977d-5d60-4bd9-81bd-a28c0afb8814">

<img width="831" alt="Screenshot 2024-03-29 at 4 03 31 PM" src="https://github.com/sleepjo/tracker/assets/98254345/bd527c5a-c30b-49f5-a9b3-46dd55569255">


# tracker
<ol>
  <li>vscode > new terminal > git clone "url"</li>
  <li>다운로드받은 following1.json, followers.json 파일 삽입</li>
</ol>
내가 팔로우 하지만 나를 팔로우하지 않는 계정 => unfollowedTracker.py
나를 팔로우 하지만 내가 팔로잉 하지 않는 계정 => unfollowingTracker.py

파일 실행 후 생성된 txt 파일을 통해 확인

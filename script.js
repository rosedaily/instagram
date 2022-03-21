document.addEventListener('DOMContentLoaded', function(e){
  //1. 계정명 수정
  let configID = document.querySelector('#id i');
  let idText =  document.querySelector('#id span');

  configID.addEventListener('click',function(e){
    idText.textContent = prompt('새로운 아이디를 입력하세요');
  })

  //2. 프로필 편집
  //  2-1. 프로필 편집 > 프로필 편집 완료로 버튼 변경
  //  2-2. 소개글 항목들이 모두 인풋으로 변경(내용유지)
  //  2-3. 편집완료 버튼 선택 시 다시 기존 태그로 돌아감
  let profileEditButton = document.querySelector('#profile_info button');
  let userInfo = document.querySelector('#userInfo');
  let summary = document.querySelector('#summary');
  let profileDetail = document.querySelector('#profileDetail');
  let changing = false;
  
  profileEditButton.addEventListener('click',function(e){
    if(changing){
      let _userInfo = userInfo.querySelector('input').value;
      let _summary = summary.querySelector('input').value;
      let _profileDetail = profileDetail.querySelector('input').value;

      userInfo.innerHTML = _userInfo;
      summary.innerHTML = _summary;

      if(_profileDetail.startsWith('http')){
        _profileDetail = '<a href='+_profileDetail+'</a>'
      }

      profileDetail.innerHTML = _profileDetail;

      e.target.textContent = '프로필 편집';
      changing = false;
    }else{
      let _userInfo = userInfo.textContent;
      let _summary = summary.textContent;
      let _profileDetail = profileDetail.textContent;

      userInfo.innerHTML = '<input value = '+ _userInfo + '></input>';
      summary.innerHTML = '<input value = '+ _summary + '></input>';
      profileDetail.innerHTML = '<input value = '+ _profileDetail + '></input>';

      e.target.textContent = '프로필 편집 완료';
      changing = true;
    }
  })

  //3. 프로필 사진 편집
  // 3-1. 프로필에 마우스를 올리면 이미지가 회색으로 변함
  // 3-2. 프로필 사진을 클릭하면 prompt 창이 나오고, 이미지 경로를 입력받음(로컬, 온라인)

  let profile_pic = document.querySelector('#profile_pic .circle_pic');
  profile_pic.addEventListener('mouseover', function(e){
    e.target.style.filter = 'grayscale(50%)';
  })
  profile_pic.addEventListener('mouseleave', function(e){
    e.target.style.filter = 'grayscale(0%)';
  })
  profile_pic.addEventListener('click', function(e){
    profile_pic.setAttribute('src', prompt('이미지 url을 입력해주세요.'));
  })

})
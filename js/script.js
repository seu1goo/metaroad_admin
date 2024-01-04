function callApproval() {
    if (confirm("해당 회원을 승인하시겠습니까? 이후에 거절이 불가능합니다.")) {
        alert("승인 요청이 완료되었습니다. 해당 회원의 갤러리 사진을 등록해주세요.");
    } else {
        alert("승인이 취소되었습니다.");
    }
}

function callRefusal() {
    if (confirm("해당 회원을 거절하시겠습니까? 이후에 승인이 불가능합니다.")) {
        alert("승인 요청이 거절되었습니다.");
    } else {
        alert("거절이 취소되었습니다.");
    }
}
function Student(hakbun, name, kor, eng, mat){ // 생성자
    var hakbun = hakbun; // private 개념
    var name = name; // 멤버변수 --> 속성 property
    var kor = kor;
    var eng = eng;
    var mat = mat;
    var tot = null;
    var avg = null;
    var grade = null;
    this.getTot=function(){ // public 개념(this)의 method
        return tot;
    }
    this.getKor=function(){ 
        return kor;
    }
    this.getEng=function(){ 
        return eng;
    }
    this.getMat=function(){ 
        return mat;
    }
    this.getAvg=function(){ 
        return avg;
    }
    this.setTot=function(total){ tot=total; }
    this.setAvg=function(average){ avg=average; }
    this.setGrade=function(grd){ grade=grd; }

    this.toString = function () {
        var str = '';
        str += '<tr>';
        str += '<td>' + hakbun + '</td>';
        str += '<td>' + name + '</td>';
        str += '<td>' + kor + '</td>';
        str += '<td>' + eng + '</td>';
        str += '<td>' + mat + '</td>';
        str += '<td>' + tot + '</td>';
        str += '<td>' + avg.toFixed(1) + '</td>';
        str += '<td>' + grade + '</td>';
        str += '</tr>';
        return str;
    }
}
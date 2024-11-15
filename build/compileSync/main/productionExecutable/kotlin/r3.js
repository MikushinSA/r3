(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react', '@emotion/css', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react'), require('@emotion/css'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'r3'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'r3'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'r3'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'r3'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'r3'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'r3'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r3'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'r3'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r3'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'r3'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r3'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'r3'.");
    }
    root.r3 = factory(typeof r3 === 'undefined' ? {} : r3, this['react-dom/client'], react, this['@emotion/css'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react, $module$_emotion_css_2enn37, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var useState = $module$react.useState;
  var css = $module$_emotion_css_2enn37.css;
  var useState_0 = $module$react.useState;
  var ensureNotNull = kotlin_kotlin.$_$.q;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.o;
  var toIntOrNull = kotlin_kotlin.$_$.n;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  var numberRangeToNumber = kotlin_kotlin.$_$.k;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.m;
  var THROW_ISE = kotlin_kotlin.$_$.p;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  var checkIndexOverflow = kotlin_kotlin.$_$.e;
  var average = kotlin_kotlin.$_$.d;
  var FC_0 = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var classMeta = kotlin_kotlin.$_$.h;
  var arrayListOf = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    createRoot(container).render(create(get_CStudentList()));
  }
  function get_CStudent() {
    init_properties_student_kt_hy3w93();
    return CStudent;
  }
  var CStudent;
  function CStudent$lambda$lambda$lambda$lambda($setGrade, $props) {
    return function (event) {
      var tmp = event.target;
      var newGrade = toIntOrNull((tmp instanceof HTMLInputElement ? tmp : THROW_CCE()).value);
      var tmp_0;
      if (!(newGrade == null) ? numberRangeToNumber(1, 5).j1(newGrade) : false) {
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = $setGrade;
          }
          tmp$ret$0(newGrade);
        }
        tmp_0 = $props.setGrade(newGrade);
      }
      return Unit_getInstance();
    };
  }
  function CStudent$lambda$lambda$lambda($grade, $setGrade, $props) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).number;
      $this$invoke.value = $grade.toString();
      $this$invoke.onChange = CStudent$lambda$lambda$lambda$lambda($setGrade, $props);
      return Unit_getInstance();
    };
  }
  function CStudent$lambda$lambda($props, $grade, $setGrade) {
    return function ($this$invoke) {
      $this$invoke.u5($props.student.b6_1 + ' ' + $props.student.c6_1);
      var tmp$ret$2;
      {
        var tmp0__get_input__prnny7 = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'input';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.v5(tmp, CStudent$lambda$lambda$lambda($grade, $setGrade, $props));
      return Unit_getInstance();
    };
  }
  function CStudent$lambda() {
    return function ($this$FC, props) {
      var tmp0_container = useState(props.student.d6_1);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_container;
        }
        tmp$ret$1 = tmp$ret$0[0];
      }
      var grade = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp0_container;
        }
        tmp$ret$3 = tmp$ret$2[1];
      }
      var setGrade = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = 'div';
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      var tmp = tmp$ret$6;
      $this$FC.v5(tmp, CStudent$lambda$lambda(props, grade, setGrade));
      return Unit_getInstance();
    };
  }
  var properties_initialized_student_kt_54putx;
  function init_properties_student_kt_hy3w93() {
    if (properties_initialized_student_kt_54putx) {
    } else {
      properties_initialized_student_kt_54putx = true;
      CStudent = FC(CStudent$lambda());
    }
  }
  function get_CStudentList() {
    init_properties_studentList_kt_epwn0b();
    return CStudentList;
  }
  var CStudentList;
  function invoke$lambda($highlighted$delegate) {
    init_properties_studentList_kt_epwn0b();
    var tmp$ret$1;
    {
      var tmp0_getValue = getLocalDelegateReference('highlighted', KMutableProperty0, true, function () {
        return THROW_ISE();
      });
      var tmp$ret$0;
      {
        tmp$ret$0 = $highlighted$delegate;
      }
      tmp$ret$1 = tmp$ret$0[0];
    }
    return tmp$ret$1;
  }
  function invoke$lambda_0($highlighted$delegate, value) {
    init_properties_studentList_kt_epwn0b();
    var tmp0_setValue = getLocalDelegateReference('highlighted', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    {
      tmp$ret$0 = $highlighted$delegate;
    }
    return tmp$ret$0[1](value);
  }
  function CStudentList$lambda$lambda() {
    return function ($this$invoke) {
      $this$invoke.u5('\u0416\u0443\u0440\u043D\u0430\u043B \u043E\u0446\u0435\u043D\u043E\u043A');
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda$lambda($item, $setGrades) {
    return function (newGrade) {
      $item.d6_1 = newGrade;
      var tmp$ret$2;
      {
        var tmp0_map = get_studentList();
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.b();
          while (tmp0_iterator.c()) {
            var item = tmp0_iterator.d();
            var tmp$ret$0;
            {
              tmp$ret$0 = item.d6_1;
            }
            tmp0_mapTo.e(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp1_invoke = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = $setGrades;
      }
      tmp$ret$3(tmp1_invoke);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda($item, $setGrades) {
    return function ($this$invoke) {
      $this$invoke.student = $item;
      $this$invoke.setGrade = CStudentList$lambda$lambda$lambda$lambda$lambda($item, $setGrades);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda_0($tmp1__anonymous__6ijp4k, $highlighted$delegate) {
    return function (it) {
      invoke$lambda_0($highlighted$delegate, $tmp1__anonymous__6ijp4k);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda($tmp1__anonymous__6ijp4k, $highlighted$delegate, $item, $setGrades) {
    return function ($this$invoke) {
      var tmp;
      if ($tmp1__anonymous__6ijp4k === invoke$lambda($highlighted$delegate)) {
        var tmp0_css = $this$invoke;
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = {};
              }
              var tmp0_apply = tmp$ret$0;
              {
              }
              {
                tmp0_apply.fontWeight = (/*union*/{bold: 'bold', normal: 'normal', bolder: 'bolder', lighter: 'lighter'}/*union*/).bold;
              }
              tmp$ret$1 = tmp0_apply;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = css(tmp$ret$2);
        }
        tmp = tmp0_css.className = tmp$ret$3;
      }
      var tmp_0 = get_CStudent();
      $this$invoke.v5(tmp_0, CStudentList$lambda$lambda$lambda$lambda($item, $setGrades));
      $this$invoke.onClick = CStudentList$lambda$lambda$lambda$lambda_0($tmp1__anonymous__6ijp4k, $highlighted$delegate);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda_0($highlighted$delegate, $setGrades) {
    return function ($this$invoke) {
      var tmp$ret$4;
      {
        var tmp0_mapIndexed = get_studentList();
        var tmp$ret$3;
        {
          var tmp0_mapIndexedTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_mapIndexed, 10));
          var index = 0;
          var tmp0_iterator = tmp0_mapIndexed.b();
          while (tmp0_iterator.c()) {
            var item = tmp0_iterator.d();
            {
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
              var tmp$ret$2;
              {
                var tmp0__get_li__p4dyoc = ReactHTML_getInstance();
                var tmp$ret$1;
                {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = 'li';
                  }
                  tmp$ret$1 = tmp$ret$0;
                }
                tmp$ret$2 = tmp$ret$1;
              }
              var tmp = tmp$ret$2;
              $this$invoke.v5(tmp, CStudentList$lambda$lambda$lambda(tmp1__anonymous__uwfjfc, $highlighted$delegate, item, $setGrades));
            }
            tmp0_mapIndexedTo.e(Unit_getInstance());
          }
          tmp$ret$3 = tmp0_mapIndexedTo;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda_1($averageGrade) {
    return function ($this$invoke) {
      $this$invoke.u5('\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430: ' + $averageGrade);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda() {
    return function ($this$FC, it) {
      var highlighted$delegate = useState_0();
      var tmp$ret$2;
      {
        var tmp0_map = get_studentList();
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.b();
          while (tmp0_iterator.c()) {
            var item = tmp0_iterator.d();
            var tmp$ret$0;
            {
              tmp$ret$0 = item.d6_1;
            }
            tmp0_mapTo.e(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp0_container = useState(tmp$ret$2);
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          tmp$ret$3 = tmp0_container;
        }
        tmp$ret$4 = tmp$ret$3[0];
      }
      var grades = tmp$ret$4;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          tmp$ret$5 = tmp0_container;
        }
        tmp$ret$6 = tmp$ret$5[1];
      }
      var setGrades = tmp$ret$6;
      var tmp$ret$9;
      {
        var tmp1__get_h1__sde1rt = ReactHTML_getInstance();
        var tmp$ret$8;
        {
          var tmp$ret$7;
          {
            tmp$ret$7 = 'h1';
          }
          tmp$ret$8 = tmp$ret$7;
        }
        tmp$ret$9 = tmp$ret$8;
      }
      var tmp = tmp$ret$9;
      $this$FC.v5(tmp, CStudentList$lambda$lambda());
      var tmp$ret$12;
      {
        var tmp2__get_ol__vmdtym = ReactHTML_getInstance();
        var tmp$ret$11;
        {
          var tmp$ret$10;
          {
            tmp$ret$10 = 'ol';
          }
          tmp$ret$11 = tmp$ret$10;
        }
        tmp$ret$12 = tmp$ret$11;
      }
      var tmp_0 = tmp$ret$12;
      $this$FC.v5(tmp_0, CStudentList$lambda$lambda_0(highlighted$delegate, setGrades));
      var tmp$ret$15;
      {
        var tmp3_map = get_studentList();
        var tmp$ret$14;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp3_map, 10));
          var tmp0_iterator_0 = tmp3_map.b();
          while (tmp0_iterator_0.c()) {
            var item_0 = tmp0_iterator_0.d();
            var tmp$ret$13;
            {
              tmp$ret$13 = item_0.d6_1;
            }
            tmp0_mapTo_0.e(tmp$ret$13);
          }
          tmp$ret$14 = tmp0_mapTo_0;
        }
        tmp$ret$15 = tmp$ret$14;
      }
      var averageGrade = average(tmp$ret$15);
      var tmp$ret$18;
      {
        var tmp4__get_h1__wwq3tw = ReactHTML_getInstance();
        var tmp$ret$17;
        {
          var tmp$ret$16;
          {
            tmp$ret$16 = 'h1';
          }
          tmp$ret$17 = tmp$ret$16;
        }
        tmp$ret$18 = tmp$ret$17;
      }
      var tmp_1 = tmp$ret$18;
      $this$FC.v5(tmp_1, CStudentList$lambda$lambda_1(averageGrade));
      return Unit_getInstance();
    };
  }
  var properties_initialized_studentList_kt_s2k10p;
  function init_properties_studentList_kt_epwn0b() {
    if (properties_initialized_studentList_kt_s2k10p) {
    } else {
      properties_initialized_studentList_kt_s2k10p = true;
      CStudentList = FC_0('StudentList', CStudentList$lambda());
    }
  }
  function get_studentList() {
    init_properties_student_kt_hy3w93_0();
    return studentList;
  }
  var studentList;
  function Student_init_$Init$(firstname, surname, grade, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      grade = 0;
    Student.call($this, firstname, surname, grade);
    return $this;
  }
  function Student_init_$Create$(firstname, surname, grade, $mask0, $marker) {
    return Student_init_$Init$(firstname, surname, grade, $mask0, $marker, Object.create(Student.prototype));
  }
  function Student(firstname, surname, grade) {
    this.b6_1 = firstname;
    this.c6_1 = surname;
    this.d6_1 = grade;
  }
  Student.prototype.e6 = function (_set____db54di) {
    this.d6_1 = _set____db54di;
  };
  Student.prototype.f6 = function () {
    return this.d6_1;
  };
  Student.prototype.toString = function () {
    return 'Student(firstname=' + this.b6_1 + ', surname=' + this.c6_1 + ', grade=' + this.d6_1 + ')';
  };
  Student.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Student))
      return false;
    var tmp0_other_with_cast = other instanceof Student ? other : THROW_CCE();
    if (!(this.b6_1 === tmp0_other_with_cast.b6_1))
      return false;
    if (!(this.c6_1 === tmp0_other_with_cast.c6_1))
      return false;
    if (!(this.d6_1 === tmp0_other_with_cast.d6_1))
      return false;
    return true;
  };
  Student.$metadata$ = classMeta('Student');
  var properties_initialized_student_kt_54putx_0;
  function init_properties_student_kt_hy3w93_0() {
    if (properties_initialized_student_kt_54putx_0) {
    } else {
      properties_initialized_student_kt_54putx_0 = true;
      var tmp = Student_init_$Create$('Sheldon', 'Cooper', 0, 4, null);
      var tmp_0 = Student_init_$Create$('Leonard', 'Hofstadter', 0, 4, null);
      studentList = arrayListOf([tmp, tmp_0, Student_init_$Create$('Howard', 'Wolowitz', 0, 4, null)]);
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=r3.js.map
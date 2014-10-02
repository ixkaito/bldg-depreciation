// original script file

(function($) {

var depreciationRatio = {
  1:   { straightLine: 1 },
  2:   { straightLine: 0.500 },
  3:   { straightLine: 0.334 },
  4:   { straightLine: 0.250 },
  5:   { straightLine: 0.200 },
  6:   { straightLine: 0.167 },
  7:   { straightLine: 0.143 },
  8:   { straightLine: 0.125 },
  9:   { straightLine: 0.112 },
  10:  { straightLine: 0.100 },
  11:  { straightLine: 0.091 },
  12:  { straightLine: 0.084 },
  13:  { straightLine: 0.077 },
  14:  { straightLine: 0.072 },
  15:  { straightLine: 0.067 },
  16:  { straightLine: 0.063 },
  17:  { straightLine: 0.059 },
  18:  { straightLine: 0.056 },
  19:  { straightLine: 0.053 },
  20:  { straightLine: 0.050 },
  21:  { straightLine: 0.048 },
  22:  { straightLine: 0.046 },
  23:  { straightLine: 0.044 },
  24:  { straightLine: 0.042 },
  25:  { straightLine: 0.040 },
  26:  { straightLine: 0.039 },
  27:  { straightLine: 0.038 },
  28:  { straightLine: 0.036 },
  29:  { straightLine: 0.035 },
  30:  { straightLine: 0.034 },
  31:  { straightLine: 0.033 },
  32:  { straightLine: 0.032 },
  33:  { straightLine: 0.031 },
  34:  { straightLine: 0.030 },
  35:  { straightLine: 0.029 },
  36:  { straightLine: 0.028 },
  37:  { straightLine: 0.028 },
  38:  { straightLine: 0.027 },
  39:  { straightLine: 0.026 },
  40:  { straightLine: 0.025 },
  41:  { straightLine: 0.025 },
  42:  { straightLine: 0.024 },
  43:  { straightLine: 0.024 },
  44:  { straightLine: 0.023 },
  45:  { straightLine: 0.023 },
  46:  { straightLine: 0.022 },
  47:  { straightLine: 0.022 },
  48:  { straightLine: 0.021 },
  49:  { straightLine: 0.021 },
  50:  { straightLine: 0.020 },
  51:  { straightLine: 0.020 },
  52:  { straightLine: 0.020 },
  53:  { straightLine: 0.019 },
  54:  { straightLine: 0.019 },
  55:  { straightLine: 0.019 },
  56:  { straightLine: 0.018 },
  57:  { straightLine: 0.018 },
  58:  { straightLine: 0.018 },
  59:  { straightLine: 0.017 },
  60:  { straightLine: 0.017 },
  61:  { straightLine: 0.017 },
  62:  { straightLine: 0.017 },
  63:  { straightLine: 0.016 },
  64:  { straightLine: 0.016 },
  65:  { straightLine: 0.016 },
  66:  { straightLine: 0.016 },
  67:  { straightLine: 0.015 },
  68:  { straightLine: 0.015 },
  69:  { straightLine: 0.015 },
  70:  { straightLine: 0.015 },
  71:  { straightLine: 0.015 },
  72:  { straightLine: 0.014 },
  73:  { straightLine: 0.014 },
  74:  { straightLine: 0.014 },
  75:  { straightLine: 0.014 },
  76:  { straightLine: 0.014 },
  77:  { straightLine: 0.013 },
  78:  { straightLine: 0.013 },
  79:  { straightLine: 0.013 },
  80:  { straightLine: 0.013 },
  81:  { straightLine: 0.013 },
  82:  { straightLine: 0.013 },
  83:  { straightLine: 0.013 },
  84:  { straightLine: 0.012 },
  85:  { straightLine: 0.012 },
  86:  { straightLine: 0.012 },
  87:  { straightLine: 0.012 },
  88:  { straightLine: 0.012 },
  89:  { straightLine: 0.012 },
  90:  { straightLine: 0.012 },
  91:  { straightLine: 0.011 },
  92:  { straightLine: 0.011 },
  93:  { straightLine: 0.011 },
  94:  { straightLine: 0.011 },
  95:  { straightLine: 0.011 },
  96:  { straightLine: 0.011 },
  97:  { straightLine: 0.011 },
  98:  { straightLine: 0.011 },
  99:  { straightLine: 0.011 },
  100: { straightLine: 0.010 }
};

$('#calculate').on('click', function() {

  var isBiz = $('#isBiz').is(':checked');
  var cost  = $('#cost').val() ? parseInt($('#cost').val().split(',').join('').trim(), 10) : 0;
  var life  = $('#life').val() ? parseInt($('#life').val().split(',').join('').trim(), 10) : 0;
      life  = isBiz ? life : Math.floor(life * 1.5);
  var ratio = depreciationRatio[life].straightLine;

  var result_annual      = Math.round(cost * ratio);
  var result_theLastYear = cost - Math.round(result_annual * (life - 1)) - 1;
  var result_monthly     = Math.round(result_annual / 12);

  var result = '<hr />' +
    '<table id="result" class="table table-bordered">' +
      '<tbody>' +
        '<tr>' +
          '<th>償却率</th>' +
          '<td>' + ratio + '</td>' +
        '</tr>' +
        '<tr>' +
          '<th>年間償却費</th>' +
          '<td>&yen; ' + result_annual.toLocaleString() + '</td>' +
        '</tr>' +
        '<tr>' +
          '<th>月間償却費</th>' +
          '<td>&yen; ' + result_monthly.toLocaleString() + '</td>' +
        '</tr>' +
        '<tr>' +
          '<th>' + life + '年目の償却費</th>' +
          '<td>&yen; ' + result_theLastYear.toLocaleString() + '</td>' +
        '</tr>' +
        '<tr>' +
          '<th>' + life + '年目の月間償却費</th>' +
          '<td>&yen; ' + Math.round(result_theLastYear / 12).toLocaleString() + '</td>' +
        '</tr>' +
        '<tr>' +
          '<th>残存価額（備忘価格）</th>' +
          '<td>&yen; 1</td>' +
        '</tr>' +
      '</tbody>' +
    '</table>';

    $('#cost').val(cost.toLocaleString());
    $('#result').html('').append(result);

});

})(jQuery);
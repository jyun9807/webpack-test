//구성옵션 작성
//node js 환경에서 작동
//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //결과물을 반환하는 설정(기본적으로 결과물을 dist에 만들어줌)
  output: {
    //절대 경로 명시
    //  path: path.resolve(__dirname, 'dist'),//__dirname : 현재 파일에 있는 경로 (nodejs 전역변수)
    //  filename:'main.js',
    clean: true
  },
    module: {
      rules: [{
        test: /\.s?css$/,
        use: [
          'style-loader', //css loader 먼저 해석 js에서 css 해석/ style이 html 해석된 내용 삽입
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    {
      test:/\.js$/,
      use:[
        'babel-loader'
      ]
    }]
    },



    //번들링 후 결과무르이 처리 방식 등 다양한 플러그인 설정
    plugins: [
      new HtmlPlugin({
        template: './index.html'
      }),

      new CopyPlugin({
        patterns: [{
          from: 'static'
        }]
      })
    ],
    devServer: {
      host: 'localhost'
    }
  }

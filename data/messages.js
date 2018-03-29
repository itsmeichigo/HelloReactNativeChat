module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    content: 'Hmmm',
    createdAt: new Date(),
    type: "text",
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
    },
    content: "Does this make sense?",
    type: "suggested",
    options: [
      {
          "id": 1,
          "title": "Yes",
          "action": "continue"
      },
      {
          "id": 2,
          "title": "No",
          "action": "display_declined_confirmation"
      }
    ]
  },
  {
    _id: Math.round(Math.random() * 1000000),
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
    },
    type: "mathml",
    content: '<mtable displaystyle=\"true\"><mtr xmlns=\"http://www.w3.org/1998/Math/MathML\" xmlns:mathematica=\"http://www.wolfram.com/XML/\"> <mtd>  <mtable displaystyle=\"true\" columnalign=\"left\" indentalign=\"left\"><mtr> <mtd>  <mrow><mrow> <mtext>&nbsp;Add &nbsp;</mtext> <mn>4</mn> <mtext>&nbsp; to both sides&nbsp;</mtext></mrow><mtext></mtext>  </mrow> </mtd></mtr><mtr> <mtd>  <mrow><mrow> <msup>  <mi>x</mi>  <mn>2</mn> </msup> <mo>+</mo> <mrow>  <mn>4</mn>  <mo>&#8290;</mo>  <mi>x</mi> </mrow> <mo>+</mo> <mn>4</mn></mrow><mo>=</mo><mn>7</mn>  </mrow> </mtd></mtr>  </mtable> </mtd></mtr></mtable>'
  },
  {
    _id: Math.round(Math.random() * 1000000),
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
    },
    type: "mathml",
    content: '<mtable displaystyle=\"true\"><mtr xmlns=\"http://www.w3.org/1998/Math/MathML\" xmlns:mathematica=\"http://www.wolfram.com/XML/\"> <mtd>  <mtable displaystyle=\"true\" columnalign=\"left\" indentalign=\"left\"><mtr> <mtd>  <mrow><mrow> <mrow>  <mtext>&nbsp;Solve for &nbsp;</mtext>  <mi>x</mi>  <mtext>&nbsp; over the real numbers&nbsp;</mtext> </mrow></mrow><mtext></mtext>  </mrow> </mtd></mtr><mtr> <mtd>  <mrow><mrow> <mrow>  <msup><mi>x</mi><mn>2</mn>  </msup>  <mo>+</mo>  <mrow><mn>4</mn><mo>&#8290;</mo><mi>x</mi>  </mrow>  <mo>-</mo>  <mn>3</mn> </mrow> <mo>=</mo> <mn>0</mn></mrow>  </mrow> </mtd></mtr>  </mtable> </mtd></mtr></mtable>'
  },
  {
    _id: Math.round(Math.random() * 1000000),
    content: 'Are you building a cat app?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
    },
    type: "text",
  },
  {
    _id: Math.round(Math.random() * 1000000),
    image: 'https://pbs.twimg.com/media/DZTYL7dVMAEmbF7.jpg:large',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
  },
];

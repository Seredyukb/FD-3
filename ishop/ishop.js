var ishop = React.createClass({

  displayName: 'shop',

  render: function () {

    var catalogCode = this.props.ProdName.map(v =>
      React.DOM.tbody({
          key: v.block,
          className: 'block'
        },
        React.DOM.tr({
            className: 'tr'
          },
          React.DOM.td({
            className: 'Count',
          }, v.block),
          React.DOM.td({
            className: 'Count'
          }, React.DOM.img({
            src: v.url,
            width: 100,
            height: 100,
          })),
          React.DOM.td({
            className: 'Count'
          }, 'Цена:' + v.cost),
          React.DOM.td({
            className: 'Count'
          }, 'Количество: ' + v.kolvo, ),
        ),
      )
    );
    return React.DOM.div({
        className: 'VotesBlock'
      },
      React.DOM.div({
        className: 'Question'
      }, this.props.Maintext),
      React.DOM.table({
        className: 'table'
      }, catalogCode),
    );
  },
});
const app = ()=>{
  return(
    <div>
      <h1>Hello, world!</h1>

    </div>
  )
}

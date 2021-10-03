var ishop = React.createClass({

  displayName: 'shop',

  render: function () {

    var catalogCode = this.props.shopArr.map(v =>
      React.DOM.tbody({
          key: v.code,
          className: 'block'
        },
        React.DOM.tr({
            className: 'tr'
          },
          React.DOM.td({
            className: 'Count',
          }, v.block),
          React.DOM.img({
            className: 'Count',
            src: v.url,
            width: 100,
            height: 100,
          }),
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
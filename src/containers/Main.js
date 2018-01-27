import { bindACtorCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { bindActionCreators } from 'redux';
import { setAllMade, setText } from '../ducks/game';

export default connect(
    state => ({
        text: state.game.get('text'),
        round: state.game.get('round'),
        scores: state.game.get('scores'),
    }),
    dispatch => bindActionCreators({
        setAllMade,
        setText,
    }, dispatch),
)(Main);
/**
 * Created by michael on 07/04/2018.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Game extends Component {
    state = {
        context: null,
        radius: 50
    };

    componentDidMount () {
        const { game_data, get_game_data, send_game_data } = this.props;
        // get_game_data();
        // send_game_data(game_data);

        // window.addEventListener('keyup',   () => {
        //     const new_game_data = game_data.map((player, index) => {
        //        if (index === 0) {
        //            return {
        //                ...player,
        //                y: player.y + 5
        //            }
        //        }
        //        return player
        //     });
        //     send_game_data(new_game_data)
        // });
        window.addEventListener('keydown', () => {
            const new_game_data = game_data.map((player, index) => {
               if (index === 0) {
                   return {
                       ...player,
                       y: player.y + 5
                   }
               }
               return player
            });
            send_game_data(new_game_data)
        });

        const context = this.refs.canvas.getContext('2d');
        this.setState({ context: context });
    }

    componentDidUpdate() {
        const { game_data, get_game_data } = this.props;
        const { context, radius } = this.state;

        context.clearRect(0, 0, 500, 500);
        game_data.map((player) => {
            const { x, y } = player;
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI, false);
            context.fillStyle = 'black';
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();
        });

        get_game_data();
    }

    render () {
        return (
            <div>
                <div>It works</div>
                <canvas ref="canvas"
                        width={500}
                        height={500}
                />
            </div>
        )
    }
}

Game.propTypes = {
    get_game_data: PropTypes.func.isRequired,
    send_game_data: PropTypes.func.isRequired,
    game_data: PropTypes.array.isRequired
};

export default Game
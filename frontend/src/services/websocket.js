import Ws from '@adonisjs/websocket-client'

const ws = Ws(`ws://${process.env.REACT_APP_WS_URL}`).connect()


export default ws
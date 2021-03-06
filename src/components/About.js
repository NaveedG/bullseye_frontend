import React from 'react'
import { Grid, Divider, Button, List, Image } from 'semantic-ui-react'

class About extends React.Component {

    render () {
      return(
        <div className='App-home'>
          
          <Grid container columns={2}>
            <Grid.Column>
              <h1 className='fields'>THIS PLACE IS SPECIAL!</h1>
              <p className='text-area'>
              We have put a great amount of time and energy in making sure our atmosphere and your axe throwing experience is different from other axe throwing locations. 
              We wanted our customers to come in and step into a proper axe throwing lounge. From design to seating and everything in between we are giving the residents of Chicagoland area a relaxing axe throwing lounge to come throw some axes.
              As axe throwing continues to sweep the nation, we will be here in the forefront of ambience and design to give you the best axe throwing experience possible!
              </p>
            </Grid.Column>

            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/10/ScreenShot20191017at12.27.55AM.png' alt='BullsEye Axe Lounge'/>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <Grid container columns={2}>
            <Grid.Column>
              <Image size='huge' src=' https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/71490994_2289600564686303_1830487754153132032_o-1.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <h1 className='fields'>OUR MISSION</h1>
              <p className='text-area'>
              For every five customers that walk through our doors we will have a tree planted on their behalf.  
              BullsEye Axe Lounge cares for things that are much greater than profits. 
              We see and feel that our only home, Earth, is under immense scrutiny. Mother Nature is under attack by our way of life.  
              Let’s all learn the balance of opposites and implement it into our daily lives as nourish our home back to good health.
              Check out our tree certificates below!
             </p>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <Grid container columns={3}>
            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/11/IMG_5733.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
             <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-03-at-11.10.15-AM-copy.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-03-at-11.56.33-PM-1024x793.png' alt='BullsEye Axe Lounge'/>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <h1 className='label'>WANT TO START AXE THROWING?</h1>
          <List size='massive'>
            <h2 className='label'>Every session at the lounge comes with:</h2>
            <List.Item className='label'>A Host/Instructor</List.Item>
            <List.Item className='label'>Personal Music Station</List.Item>
            <List.Item className='label'>Private, Spacious Booth</List.Item>
          </List>

          <List size='massive'>
            <h2 className='label'>Standard Pricing per Person</h2>
            <List.Item className='label'>29.95 (1 Hour)</List.Item>
            <List.Item className='label'>39.95 (90 min)</List.Item>
            <List.Item className='label'>49.95 (2 Hrs) </List.Item>
          </List>

          <List size='massive'>
            <h2 className='label'>8+ Group Discount Pricing per Person</h2>
            <List.Item className='label'>24.95 (1 Hour)</List.Item>
            <List.Item className='label'>34.95 (90 Mins)</List.Item>
            <List.Item className='label'>44.95 (2 Hours)</List.Item>
          </List>

          <List size='massive'>
            <h2 className='label'>Monday - Thursday Discount Pricing per Person</h2>
            <List.Item className='label'>24.95 (1 Hour)</List.Item>
            <List.Item className='label'>34.95 (90 Mins)</List.Item>
            <List.Item className='label'>44.95 (2 Hours)</List.Item>
          </List>

          <Divider section hidden />

          <Grid  centered columns={1}>
            <Grid.Row>
                <Button size='huge' secondary onClick={() => this.props.history.push('/book-session')}>Book Now!</Button>
            </Grid.Row>
          </Grid>

          <Divider section hidden />

          <p className='text-center'>©BullsEye Axe Lounge 2020</p>
        </div>
      )}
}

export default About
import React, { Component } from 'react';
import axios from 'axios';
import { store } from '../redux/store';
import text from '../translate';

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
  } = ShareButtons;
  
  const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
  } = ShareCounts;
  
  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');
  const GooglePlusIcon = generateShareIcon('google');
  const LinkedinIcon = generateShareIcon('linkedin');
  const PinterestIcon = generateShareIcon('pinterest');
  const VKIcon = generateShareIcon('vk');
  const OKIcon = generateShareIcon('ok');
  const TelegramIcon = generateShareIcon('telegram');
  const WhatsappIcon = generateShareIcon('whatsapp');
  const RedditIcon = generateShareIcon('reddit');
  const TumblrIcon = generateShareIcon('tumblr');
  const MailruIcon = generateShareIcon('mailru');
  const EmailIcon = generateShareIcon('email');
  const LivejournalIcon = generateShareIcon('livejournal');

export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgcontent: `Hi, I need a ride from point A to point B. Can you help? :-)`,
            url: "http://www.localhost:3000/route",
            clicked: false
        }
    }
    saveMessage = () => {
        return new Promise((resolve, reject) => {
            const { origin, destination, route } = this.props;
            var lang = String(store.getState().lang.language);
            var testuser = "5a26dbac2082bc517191a597";
            var convo = {};
            //convo.user1 = store.getState().user.id.id || testuser;
            convo.user1 = testuser;
            convo.user2 = "socialmedia";
            convo.messages = [];
            convo.messages.push({
                content: text(origin, destination)[lang].ASK_SOCIAL_MESSAGE,
                user: convo.user1,
                origin: route.origin,
                destination: route.destination,
                reqdate: route.reqdate
            });
            var requrl = window.location.hostname === "localhost" ?
                "http://localhost:3001/message/create" : `https://${window.location.hostname}/message/create`;
            axios.post(requrl, convo)
                .then(data => {
                    var msg = data.data.messages[0];
                    var url = msg.route + msg._id;
                    this.setState({ url: url, msgcontent: msg.content, clicked: true }, () => {
                        //this.twitter.click();
                        resolve();
                    })
                })
                .catch(err => { console.log(err); reject(); });
        })
    }
    render() {
        //console.log(this.props)
        const { origin, destination, route } = this.props;
        var lang = String(store.getState().lang.language);
        const title = text(origin, destination)[lang].ASK_SOCIAL_TITLE;
        const titleEmail = text(origin, destination)[lang].APPNAME;
        const isIconRound = false;

        const message = text(origin, destination)[lang].ASK_SOCIAL_MESSAGE;
        return (
            <div className='share-buttons'>
                 <div className='title'>{title}</div>
                <div className='button'>
                    <WhatsappShareButton title={this.state.msgcontent} url={route.url} >
                        <WhatsappIcon size={32} round={isIconRound} />
                    </WhatsappShareButton>
                </div>
                <div className='button'>
                    <FacebookShareButton quote={route.content} url={route.url} >
                        <FacebookIcon size={32} round={isIconRound} />
                    </FacebookShareButton>
                </div>
                <div className='button'>
                    <LinkedinShareButton title={message} url={route.url} >
                        <LinkedinIcon size={32} round={isIconRound} />
                    </LinkedinShareButton>
                </div>
                <div className='button' ref={btn => { this.twitter = btn }}>
                    <TwitterShareButton title={route.content} url={route.url} >
                        <TwitterIcon size={32} round={isIconRound} />
                    </TwitterShareButton>
                </div>
                <div className='button'>
                    <EmailShareButton title={titleEmail} body={message} url={route.url} >
                        <EmailIcon size={32} round={isIconRound} />
                    </EmailShareButton>
                </div>
            </div>
        )
    }
}
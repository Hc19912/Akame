const _0x18d78d=_0x32ec;(function(_0x3ebe1c,_0xd70554){const _0x593537=_0x32ec,_0x3f1399=_0x3ebe1c();while(!![]){try{const _0x19247c=parseInt(_0x593537(0x1cb))/0x1+parseInt(_0x593537(0x1c8))/0x2+-parseInt(_0x593537(0x18a))/0x3+-parseInt(_0x593537(0x147))/0x4*(-parseInt(_0x593537(0x143))/0x5)+-parseInt(_0x593537(0x151))/0x6*(parseInt(_0x593537(0x19c))/0x7)+parseInt(_0x593537(0x167))/0x8*(-parseInt(_0x593537(0x1a4))/0x9)+-parseInt(_0x593537(0x184))/0xa*(-parseInt(_0x593537(0x1e9))/0xb);if(_0x19247c===_0xd70554)break;else _0x3f1399['push'](_0x3f1399['shift']());}catch(_0x561be4){_0x3f1399['push'](_0x3f1399['shift']());}}}(_0x34ea,0x43411),require(_0x18d78d(0x1cc)));const {default:hisokaConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x18d78d(0x14d)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x18d78d(0x185)),pino=require('pino'),{Boom}=require('@hapi/boom'),fs=require('fs'),yargs=require('yargs/yargs'),chalk=require('chalk'),FileType=require(_0x18d78d(0x1d8)),path=require(_0x18d78d(0x1eb)),_=require('lodash'),axios=require(_0x18d78d(0x1e6)),PhoneNumber=require(_0x18d78d(0x1b5)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x18d78d(0x1df));var low;try{low=require(_0x18d78d(0x17f));}catch(_0x208ac9){low=require(_0x18d78d(0x1dc));}const {Low,JSONFile}=low,mongoDB=require('./lib/mongoDB');global[_0x18d78d(0x1ac)]=(_0x31035d,_0xe89f0d='/',_0x22ab3a={},_0x6849ed)=>(_0x31035d in global[_0x18d78d(0x181)]?global[_0x18d78d(0x181)][_0x31035d]:_0x31035d)+_0xe89f0d+(_0x22ab3a||_0x6849ed?'?'+new URLSearchParams(Object[_0x18d78d(0x173)]({..._0x22ab3a,..._0x6849ed?{[_0x6849ed]:global[_0x18d78d(0x1d2)][_0x31035d in global['APIs']?global[_0x18d78d(0x181)][_0x31035d]:_0x31035d]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x18d78d(0x156)]({'level':'silent','stream':_0x18d78d(0x163)})});global[_0x18d78d(0x1a0)]=new Object(yargs(process[_0x18d78d(0x1db)][_0x18d78d(0x1aa)](0x2))[_0x18d78d(0x1d1)](![])[_0x18d78d(0x1fc)]()),global['db']=new Low(/https?:\/\//[_0x18d78d(0x15c)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x18d78d(0x15c)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x18d78d(0x1f2))),global['DATABASE']=global['db'],global[_0x18d78d(0x1fd)]=async function loadDatabase(){const _0x37f594=_0x18d78d;if(global['db']['READ'])return new Promise(_0xcabd35=>setInterval(function(){const _0x379b2c=_0x32ec;!global['db'][_0x379b2c(0x1a7)]?(clearInterval(this),_0xcabd35(global['db']==null?global[_0x379b2c(0x1fd)]():global['db'])):null;},0x1*0x3e8));if(global['db']!==null)return;global['db'][_0x37f594(0x1a7)]=!![],await global['db'][_0x37f594(0x1f1)](),global['db'][_0x37f594(0x1a7)]=![],global['db']={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db']||{}},global['db'][_0x37f594(0x1d9)]=_['chain'](global['db']);},loadDatabase();if(global['db'])setInterval(async()=>{const _0x4f4c69=_0x18d78d;if(global['db'][_0x4f4c69(0x189)])await global['db'][_0x4f4c69(0x1d3)]();},0x1e*0x3e8);async function startHisoka(){const _0xec5271=_0x18d78d,_0x56709a=hisokaConnect({'logger':pino({'level':_0xec5271(0x1b0)}),'printQRInTerminal':!![],'browser':[_0xec5271(0x182),'Safari',_0xec5271(0x141)],'auth':state});return store[_0xec5271(0x1b4)](_0x56709a['ev']),_0x56709a['ws']['on'](_0xec5271(0x18c),async _0x275aaa=>{const _0x42d4bf=_0xec5271,_0x51bd8f=_0x275aaa[_0x42d4bf(0x19f)][0x0][_0x42d4bf(0x157)]['call-creator'];if(_0x275aaa['content'][0x0]['tag']=='offer'){let _0x3f0377=await _0x56709a['sendContact'](_0x51bd8f,global[_0x42d4bf(0x1a1)]);_0x56709a['sendMessage'](_0x51bd8f,{'text':'Sistem\x20otomatis\x20block!\x0aJangan\x20menelpon\x20bot!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka\x20!'},{'quoted':_0x3f0377}),await sleep(0x1f40),await _0x56709a['updateBlockStatus'](_0x51bd8f,'block');}}),_0x56709a['ev']['on']('messages.upsert',async _0x6ff3a3=>{const _0x1fb55d=_0xec5271;try{mek=_0x6ff3a3['messages'][0x0];if(!mek[_0x1fb55d(0x1f0)])return;mek[_0x1fb55d(0x1f0)]=Object[_0x1fb55d(0x1da)](mek[_0x1fb55d(0x1f0)])[0x0]===_0x1fb55d(0x18e)?mek[_0x1fb55d(0x1f0)]['ephemeralMessage'][_0x1fb55d(0x1f0)]:mek[_0x1fb55d(0x1f0)];if(mek[_0x1fb55d(0x158)]&&mek[_0x1fb55d(0x158)][_0x1fb55d(0x1af)]===_0x1fb55d(0x18d))return;if(!_0x56709a[_0x1fb55d(0x153)]&&!mek['key']['fromMe']&&_0x6ff3a3[_0x1fb55d(0x1c3)]===_0x1fb55d(0x1c4))return;if(mek[_0x1fb55d(0x158)]['id'][_0x1fb55d(0x19a)](_0x1fb55d(0x1f9))&&mek[_0x1fb55d(0x158)]['id'][_0x1fb55d(0x161)]===0x10)return;m=smsg(_0x56709a,mek,store),require(_0x1fb55d(0x160))(_0x56709a,m,_0x6ff3a3,store);}catch(_0xf48c84){console['log'](_0xf48c84);}}),_0x56709a['ev']['on'](_0xec5271(0x1b9),async _0x3b307c=>{const _0x207e42=_0xec5271;try{ppgc=await _0x56709a[_0x207e42(0x187)](_0x3b307c[0x0]['id'],'image');}catch{ppgc=_0x207e42(0x13e);}let _0x15fc6d={'url':ppgc};if(_0x3b307c[0x0][_0x207e42(0x1be)]==!![])_0x56709a[_0x207e42(0x16d)](_0x3b307c[0x0]['id'],'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20telah\x20ditutup\x20oleh\x20admin,\x20Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan\x20!','Group\x20Settings\x20Change\x20Message',_0x15fc6d,[]);else{if(_0x3b307c[0x0][_0x207e42(0x1be)]==![])_0x56709a[_0x207e42(0x16d)](_0x3b307c[0x0]['id'],_0x207e42(0x16e),_0x207e42(0x205),_0x15fc6d,[]);else{if(_0x3b307c[0x0][_0x207e42(0x19d)]==!![])_0x56709a[_0x207e42(0x16d)](_0x3b307c[0x0]['id'],_0x207e42(0x15b),_0x207e42(0x205),_0x15fc6d,[]);else _0x3b307c[0x0][_0x207e42(0x19d)]==![]?_0x56709a[_0x207e42(0x16d)](_0x3b307c[0x0]['id'],_0x207e42(0x186),'Group\x20Settings\x20Change\x20Message',_0x15fc6d,[]):_0x56709a[_0x207e42(0x16d)](_0x3b307c[0x0]['id'],_0x207e42(0x1c2)+_0x3b307c[0x0][_0x207e42(0x170)]+'*',_0x207e42(0x205),_0x15fc6d,[]);}}}),_0x56709a['ev']['on'](_0xec5271(0x1e2),async _0x69f78d=>{const _0x5f09e9=_0xec5271;console['log'](_0x69f78d);try{let _0x541e97=await _0x56709a['groupMetadata'](_0x69f78d['id']),_0x1d68fb=_0x69f78d['participants'];for(let _0x5377fe of _0x1d68fb){try{ppuser=await _0x56709a[_0x5f09e9(0x187)](_0x5377fe,_0x5f09e9(0x1fb));}catch{ppuser='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}try{ppgroup=await _0x56709a['profilePictureUrl'](_0x69f78d['id'],_0x5f09e9(0x1fb));}catch{ppgroup=_0x5f09e9(0x204);}if(_0x69f78d[_0x5f09e9(0x183)]==_0x5f09e9(0x155))_0x56709a[_0x5f09e9(0x15f)](_0x69f78d['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x5377fe]},'caption':_0x5f09e9(0x14a)+_0x5377fe['split']('@')[0x0]+_0x5f09e9(0x171)+_0x541e97['subject']+'\x20👋'});else _0x69f78d['action']=='remove'&&_0x56709a[_0x5f09e9(0x15f)](_0x69f78d['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x5377fe]},'caption':_0x5f09e9(0x14f)+_0x5377fe[_0x5f09e9(0x1c7)]('@')[0x0]+_0x5f09e9(0x1bf)});}}catch(_0x67051b){console[_0x5f09e9(0x201)](_0x67051b);}}),_0x56709a['decodeJid']=_0xebd988=>{const _0x567cfa=_0xec5271;if(!_0xebd988)return _0xebd988;if(/:\d+@/gi[_0x567cfa(0x15c)](_0xebd988)){let _0x113b58=jidDecode(_0xebd988)||{};return _0x113b58['user']&&_0x113b58[_0x567cfa(0x1ff)]&&_0x113b58['user']+'@'+_0x113b58[_0x567cfa(0x1ff)]||_0xebd988;}else return _0xebd988;},_0x56709a['ev']['on']('contacts.update',_0x1c6905=>{const _0x5e4d24=_0xec5271;for(let _0x3694db of _0x1c6905){let _0x7958a3=_0x56709a[_0x5e4d24(0x1bc)](_0x3694db['id']);if(store&&store[_0x5e4d24(0x1c5)])store[_0x5e4d24(0x1c5)][_0x7958a3]={'id':_0x7958a3,'name':_0x3694db[_0x5e4d24(0x1c4)]};}}),_0x56709a['getName']=(_0x2c6f51,_0x33836b=![])=>{const _0x44e230=_0xec5271;id=_0x56709a['decodeJid'](_0x2c6f51),_0x33836b=_0x56709a[_0x44e230(0x14c)]||_0x33836b;let _0x5412f6;if(id[_0x44e230(0x150)]('@g.us'))return new Promise(async _0x5c6b1c=>{const _0x54ec5e=_0x44e230;_0x5412f6=store[_0x54ec5e(0x1c5)][id]||{};if(!(_0x5412f6[_0x54ec5e(0x1a3)]||_0x5412f6['subject']))_0x5412f6=_0x56709a[_0x54ec5e(0x1dd)](id)||{};_0x5c6b1c(_0x5412f6[_0x54ec5e(0x1a3)]||_0x5412f6['subject']||PhoneNumber('+'+id['replace'](_0x54ec5e(0x191),''))[_0x54ec5e(0x1f7)](_0x54ec5e(0x1f6)));});else _0x5412f6=id===_0x44e230(0x193)?{'id':id,'name':'WhatsApp'}:id===_0x56709a['decodeJid'](_0x56709a['user']['id'])?_0x56709a[_0x44e230(0x13d)]:store[_0x44e230(0x1c5)][id]||{};return(_0x33836b?'':_0x5412f6[_0x44e230(0x1a3)])||_0x5412f6[_0x44e230(0x170)]||_0x5412f6[_0x44e230(0x15a)]||PhoneNumber('+'+_0x2c6f51[_0x44e230(0x1ed)](_0x44e230(0x191),''))[_0x44e230(0x1f7)](_0x44e230(0x1f6));},_0x56709a[_0xec5271(0x1ce)]=async(_0x1643aa,_0x3ac1da,_0x8fd6f2='',_0x438623={})=>{const _0x4933b0=_0xec5271;let _0x1cf203=[];for(let _0x2b06b2 of _0x3ac1da){_0x1cf203[_0x4933b0(0x1e5)]({'displayName':await _0x56709a[_0x4933b0(0x1a2)](_0x2b06b2+_0x4933b0(0x191)),'vcard':_0x4933b0(0x1b1)+await _0x56709a[_0x4933b0(0x1a2)](_0x2b06b2+_0x4933b0(0x191))+_0x4933b0(0x154)+await _0x56709a[_0x4933b0(0x1a2)](_0x2b06b2+_0x4933b0(0x191))+_0x4933b0(0x188)+_0x2b06b2+':'+_0x2b06b2+_0x4933b0(0x17e)});}_0x56709a[_0x4933b0(0x15f)](_0x1643aa,{'contacts':{'displayName':_0x1cf203[_0x4933b0(0x161)]+_0x4933b0(0x1b7),'contacts':_0x1cf203},..._0x438623},{'quoted':_0x8fd6f2});},_0x56709a['setStatus']=_0x2c0d93=>{const _0x2d7fa6=_0xec5271;return _0x56709a[_0x2d7fa6(0x1e1)]({'tag':'iq','attrs':{'to':_0x2d7fa6(0x191),'type':_0x2d7fa6(0x1e3),'xmlns':_0x2d7fa6(0x17c)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x2d7fa6(0x142)](_0x2c0d93,_0x2d7fa6(0x144))}]}),_0x2c0d93;},_0x56709a[_0xec5271(0x153)]=!![],_0x56709a[_0xec5271(0x194)]=_0xf8d380=>smsg(_0x56709a,_0xf8d380,store),_0x56709a['ev']['on']('connection.update',async _0x1e24d9=>{const _0x175df7=_0xec5271,{connection:_0x3a251a,lastDisconnect:_0x229c65}=_0x1e24d9;if(_0x3a251a==='close'){let _0x237a26=new Boom(_0x229c65?.[_0x175df7(0x146)])?.[_0x175df7(0x17d)][_0x175df7(0x1bb)];if(_0x237a26===DisconnectReason[_0x175df7(0x1cd)])console[_0x175df7(0x201)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),_0x56709a['logout']();else{if(_0x237a26===DisconnectReason[_0x175df7(0x192)])console['log'](_0x175df7(0x16f)),startHisoka();else{if(_0x237a26===DisconnectReason[_0x175df7(0x168)])console[_0x175df7(0x201)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startHisoka();else{if(_0x237a26===DisconnectReason[_0x175df7(0x1b3)])console[_0x175df7(0x201)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),_0x56709a['logout']();else{if(_0x237a26===DisconnectReason[_0x175df7(0x162)])console[_0x175df7(0x201)](_0x175df7(0x1e7)),_0x56709a[_0x175df7(0x164)]();else{if(_0x237a26===DisconnectReason[_0x175df7(0x176)])console['log'](_0x175df7(0x15e)),startHisoka();else{if(_0x237a26===DisconnectReason[_0x175df7(0x16b)])console[_0x175df7(0x201)]('Connection\x20TimedOut,\x20Reconnecting...'),startHisoka();else _0x56709a[_0x175df7(0x196)](_0x175df7(0x14e)+_0x237a26+'|'+_0x3a251a);}}}}}}}console['log'](_0x175df7(0x1c6),_0x1e24d9);}),_0x56709a['ev']['on'](_0xec5271(0x203),saveState),_0x56709a[_0xec5271(0x1de)]=async(_0x3574c8,_0x52fcc5,_0x295b36,_0x374f89,_0x3cd215={})=>{const _0x1015b5=_0xec5271;let _0x14ebc5='',_0xc3b5d=await axios['head'](_0x52fcc5);_0x14ebc5=_0xc3b5d[_0x1015b5(0x1c1)][_0x1015b5(0x1d6)];if(_0x14ebc5['split']('/')[0x1]===_0x1015b5(0x169))return _0x56709a[_0x1015b5(0x15f)](_0x3574c8,{'video':await getBuffer(_0x52fcc5),'caption':_0x295b36,'gifPlayback':!![],..._0x3cd215},{'quoted':_0x374f89,..._0x3cd215});let _0x515fc8=_0x14ebc5['split']('/')[0x0]+'Message';if(_0x14ebc5===_0x1015b5(0x1d4))return _0x56709a[_0x1015b5(0x15f)](_0x3574c8,{'document':await getBuffer(_0x52fcc5),'mimetype':'application/pdf','caption':_0x295b36,..._0x3cd215},{'quoted':_0x374f89,..._0x3cd215});if(_0x14ebc5['split']('/')[0x0]===_0x1015b5(0x1fb))return _0x56709a[_0x1015b5(0x15f)](_0x3574c8,{'image':await getBuffer(_0x52fcc5),'caption':_0x295b36,..._0x3cd215},{'quoted':_0x374f89,..._0x3cd215});if(_0x14ebc5[_0x1015b5(0x1c7)]('/')[0x0]===_0x1015b5(0x1ea))return _0x56709a['sendMessage'](_0x3574c8,{'video':await getBuffer(_0x52fcc5),'caption':_0x295b36,'mimetype':'video/mp4',..._0x3cd215},{'quoted':_0x374f89,..._0x3cd215});if(_0x14ebc5[_0x1015b5(0x1c7)]('/')[0x0]===_0x1015b5(0x159))return _0x56709a[_0x1015b5(0x15f)](_0x3574c8,{'audio':await getBuffer(_0x52fcc5),'caption':_0x295b36,'mimetype':_0x1015b5(0x1b6),..._0x3cd215},{'quoted':_0x374f89,..._0x3cd215});},_0x56709a['sendListMsg']=(_0x571ebf,_0x35933d='',_0x4ae7de='',_0x124c0f='',_0x3e7196='',_0x1a223c=[],_0x53a040)=>{const _0x3a56f9=_0xec5271;let _0x1e8ce4=_0x1a223c;var _0x380d55={'text':_0x35933d,'footer':_0x4ae7de,'title':_0x124c0f,'buttonText':_0x3e7196,'sections':_0x1e8ce4};_0x56709a[_0x3a56f9(0x15f)](_0x571ebf,_0x380d55,{'quoted':_0x53a040});},_0x56709a[_0xec5271(0x1e8)]=(_0x80ffb6,_0x2cf08e='',_0x235566='',_0x1939c3=[])=>{const _0x196749=_0xec5271;let _0x11d69d=_0x1939c3;var _0x27ee84={'text':_0x2cf08e,'footer':_0x235566,'templateButtons':_0x11d69d};_0x56709a[_0x196749(0x15f)](_0x80ffb6,_0x27ee84);},_0x56709a[_0xec5271(0x16d)]=async(_0x4d2925,_0x13a762='',_0x5f21ac='',_0x39e1a8,_0x575b6d=[],_0x33f569={})=>{const _0x59e6a0=_0xec5271;let _0xe5c287=await prepareWAMessageMedia({'image':_0x39e1a8},{'upload':_0x56709a[_0x59e6a0(0x1fa)]});var _0x2ef534=generateWAMessageFromContent(_0x4d2925,proto[_0x59e6a0(0x14b)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':_0xe5c287[_0x59e6a0(0x174)],'hydratedContentText':_0x13a762,'hydratedFooterText':_0x5f21ac,'hydratedButtons':_0x575b6d}}}),_0x33f569);_0x56709a['relayMessage'](_0x4d2925,_0x2ef534[_0x59e6a0(0x1f0)],{'messageId':_0x2ef534[_0x59e6a0(0x158)]['id']});},_0x56709a['send5ButVid']=async(_0x53babf,_0x45bed2='',_0x4d0b1c='',_0x224749,_0xbeab6e=[],_0x3dda94={})=>{const _0x37673a=_0xec5271;let _0x330406=await prepareWAMessageMedia({'video':_0x224749},{'upload':_0x56709a[_0x37673a(0x1fa)]});var _0x235a79=generateWAMessageFromContent(_0x53babf,proto[_0x37673a(0x14b)][_0x37673a(0x148)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x330406[_0x37673a(0x1ae)],'hydratedContentText':_0x45bed2,'hydratedFooterText':_0x4d0b1c,'hydratedButtons':_0xbeab6e}}}),_0x3dda94);_0x56709a[_0x37673a(0x16a)](_0x53babf,_0x235a79[_0x37673a(0x1f0)],{'messageId':_0x235a79[_0x37673a(0x158)]['id']});},_0x56709a[_0xec5271(0x180)]=async(_0x449e81,_0x22d281='',_0x4b9a35='',_0x3fc006,_0x5620d9=[],_0x21d390={})=>{const _0x481cd6=_0xec5271;let _0x1c2be5=await prepareWAMessageMedia({'video':_0x3fc006,'gifPlayback':!![]},{'upload':_0x56709a[_0x481cd6(0x1fa)]});var _0x5ddd0f=generateWAMessageFromContent(_0x449e81,proto[_0x481cd6(0x14b)][_0x481cd6(0x148)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x1c2be5['videoMessage'],'hydratedContentText':_0x22d281,'hydratedFooterText':_0x4b9a35,'hydratedButtons':_0x5620d9}}}),_0x21d390);_0x56709a[_0x481cd6(0x16a)](_0x449e81,_0x5ddd0f[_0x481cd6(0x1f0)],{'messageId':_0x5ddd0f[_0x481cd6(0x158)]['id']});},_0x56709a[_0xec5271(0x175)]=(_0x5b936e,_0x5881d8=[],_0x5548f6,_0x32a9e7,_0x4e6dc5='',_0x31fc50={})=>{let _0x3ed419={'text':_0x5548f6,'footer':_0x32a9e7,'buttons':_0x5881d8,'headerType':0x2,..._0x31fc50};_0x56709a['sendMessage'](_0x5b936e,_0x3ed419,{'quoted':_0x4e6dc5,..._0x31fc50});},_0x56709a[_0xec5271(0x1ef)]=(_0x109f0c,_0x34fc93,_0x18467f='',_0x114e65)=>_0x56709a[_0xec5271(0x15f)](_0x109f0c,{'text':_0x34fc93,..._0x114e65},{'quoted':_0x18467f}),_0x56709a['sendImage']=async(_0x2659cd,_0x493fc6,_0x1cb8ad='',_0x4c1307='',_0x39fe75)=>{const _0x5f3ca4=_0xec5271;let _0x5ebe97=Buffer[_0x5f3ca4(0x179)](_0x493fc6)?_0x493fc6:/^data:.*?\/.*?;base64,/i[_0x5f3ca4(0x15c)](_0x493fc6)?Buffer[_0x5f3ca4(0x142)](_0x493fc6[_0x5f3ca4(0x1c7)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x493fc6)?await await getBuffer(_0x493fc6):fs[_0x5f3ca4(0x177)](_0x493fc6)?fs[_0x5f3ca4(0x1c0)](_0x493fc6):Buffer['alloc'](0x0);return await _0x56709a[_0x5f3ca4(0x15f)](_0x2659cd,{'image':_0x5ebe97,'caption':_0x1cb8ad,..._0x39fe75},{'quoted':_0x4c1307});},_0x56709a[_0xec5271(0x1ad)]=async(_0x1e72d2,_0x580e29,_0x217131='',_0x577ace='',_0x577f0d=![],_0x52e652)=>{const _0x3ff44b=_0xec5271;let _0xa218da=Buffer['isBuffer'](_0x580e29)?_0x580e29:/^data:.*?\/.*?;base64,/i[_0x3ff44b(0x15c)](_0x580e29)?Buffer[_0x3ff44b(0x142)](_0x580e29[_0x3ff44b(0x1c7)]`,`[0x1],_0x3ff44b(0x17a)):/^https?:\/\//[_0x3ff44b(0x15c)](_0x580e29)?await await getBuffer(_0x580e29):fs[_0x3ff44b(0x177)](_0x580e29)?fs[_0x3ff44b(0x1c0)](_0x580e29):Buffer[_0x3ff44b(0x1f5)](0x0);return await _0x56709a[_0x3ff44b(0x15f)](_0x1e72d2,{'video':_0xa218da,'caption':_0x217131,'gifPlayback':_0x577f0d,..._0x52e652},{'quoted':_0x577ace});},_0x56709a['sendAudio']=async(_0x420862,_0xcc7564,_0x5589c0='',_0x3dc228=![],_0x3ef01a)=>{const _0x3ceab9=_0xec5271;let _0x4a42f4=Buffer[_0x3ceab9(0x179)](_0xcc7564)?_0xcc7564:/^data:.*?\/.*?;base64,/i[_0x3ceab9(0x15c)](_0xcc7564)?Buffer['from'](_0xcc7564['split']`,`[0x1],_0x3ceab9(0x17a)):/^https?:\/\//[_0x3ceab9(0x15c)](_0xcc7564)?await await getBuffer(_0xcc7564):fs[_0x3ceab9(0x177)](_0xcc7564)?fs[_0x3ceab9(0x1c0)](_0xcc7564):Buffer[_0x3ceab9(0x1f5)](0x0);return await _0x56709a[_0x3ceab9(0x15f)](_0x420862,{'audio':_0x4a42f4,'ptt':_0x3dc228,..._0x3ef01a},{'quoted':_0x5589c0});},_0x56709a[_0xec5271(0x1e4)]=async(_0x462bb7,_0x1e3f1c,_0xfe8cb2,_0x15df8a={})=>_0x56709a[_0xec5271(0x15f)](_0x462bb7,{'text':_0x1e3f1c,'contextInfo':{'mentionedJid':[..._0x1e3f1c['matchAll'](/@(\d{0,16})/g)]['map'](_0x55d027=>_0x55d027[0x1]+_0xec5271(0x191))},..._0x15df8a},{'quoted':_0xfe8cb2}),_0x56709a[_0xec5271(0x152)]=async(_0x95de70,_0x5a63aa,_0x311c98,_0x4bc770={})=>{const _0x126c0d=_0xec5271;let _0x3b52d4=Buffer[_0x126c0d(0x179)](_0x5a63aa)?_0x5a63aa:/^data:.*?\/.*?;base64,/i[_0x126c0d(0x15c)](_0x5a63aa)?Buffer[_0x126c0d(0x142)](_0x5a63aa[_0x126c0d(0x1c7)]`,`[0x1],_0x126c0d(0x17a)):/^https?:\/\//[_0x126c0d(0x15c)](_0x5a63aa)?await await getBuffer(_0x5a63aa):fs[_0x126c0d(0x177)](_0x5a63aa)?fs['readFileSync'](_0x5a63aa):Buffer['alloc'](0x0),_0x575b1b;return _0x4bc770&&(_0x4bc770[_0x126c0d(0x200)]||_0x4bc770[_0x126c0d(0x165)])?_0x575b1b=await writeExifImg(_0x3b52d4,_0x4bc770):_0x575b1b=await imageToWebp(_0x3b52d4),await _0x56709a[_0x126c0d(0x15f)](_0x95de70,{'sticker':{'url':_0x575b1b},..._0x4bc770},{'quoted':_0x311c98}),_0x575b1b;},_0x56709a[_0xec5271(0x1f8)]=async(_0xa00b08,_0x3eab5d,_0x2760b4,_0x4be2d6={})=>{const _0x4d252a=_0xec5271;let _0x2cbb98=Buffer['isBuffer'](_0x3eab5d)?_0x3eab5d:/^data:.*?\/.*?;base64,/i[_0x4d252a(0x15c)](_0x3eab5d)?Buffer[_0x4d252a(0x142)](_0x3eab5d[_0x4d252a(0x1c7)]`,`[0x1],'base64'):/^https?:\/\//[_0x4d252a(0x15c)](_0x3eab5d)?await await getBuffer(_0x3eab5d):fs['existsSync'](_0x3eab5d)?fs[_0x4d252a(0x1c0)](_0x3eab5d):Buffer[_0x4d252a(0x1f5)](0x0),_0x57c965;return _0x4be2d6&&(_0x4be2d6[_0x4d252a(0x200)]||_0x4be2d6[_0x4d252a(0x165)])?_0x57c965=await writeExifVid(_0x2cbb98,_0x4be2d6):_0x57c965=await videoToWebp(_0x2cbb98),await _0x56709a[_0x4d252a(0x15f)](_0xa00b08,{'sticker':{'url':_0x57c965},..._0x4be2d6},{'quoted':_0x2760b4}),_0x57c965;},_0x56709a[_0xec5271(0x19e)]=async(_0x127209,_0x3f289d,_0x48fd0f=!![])=>{const _0x3615fe=_0xec5271;let _0x4566e0=_0x127209[_0x3615fe(0x1ab)]?_0x127209[_0x3615fe(0x1ab)]:_0x127209,_0x4f85d5=(_0x127209[_0x3615fe(0x1ab)]||_0x127209)[_0x3615fe(0x1d5)]||'',_0x3eb59e=_0x127209[_0x3615fe(0x166)]?_0x127209[_0x3615fe(0x166)]['replace'](/Message/gi,''):_0x4f85d5[_0x3615fe(0x1c7)]('/')[0x0];const _0x54c5f7=await downloadContentFromMessage(_0x4566e0,_0x3eb59e);let _0x136df1=Buffer[_0x3615fe(0x142)]([]);for await(const _0x48e87a of _0x54c5f7){_0x136df1=Buffer[_0x3615fe(0x19b)]([_0x136df1,_0x48e87a]);}let _0x3e09da=await FileType[_0x3615fe(0x1f3)](_0x136df1);return trueFileName=_0x48fd0f?_0x3f289d+'.'+_0x3e09da[_0x3615fe(0x197)]:_0x3f289d,await fs[_0x3615fe(0x1a9)](trueFileName,_0x136df1),trueFileName;},_0x56709a[_0xec5271(0x1b2)]=async _0x8e59e6=>{const _0x37504b=_0xec5271;let _0x418b91=(_0x8e59e6['msg']||_0x8e59e6)[_0x37504b(0x1d5)]||'',_0x5191fb=_0x8e59e6[_0x37504b(0x166)]?_0x8e59e6[_0x37504b(0x166)][_0x37504b(0x1ed)](/Message/gi,''):_0x418b91[_0x37504b(0x1c7)]('/')[0x0];const _0x22b9b0=await downloadContentFromMessage(_0x8e59e6,_0x5191fb);let _0x1f4c57=Buffer[_0x37504b(0x142)]([]);for await(const _0x426baf of _0x22b9b0){_0x1f4c57=Buffer[_0x37504b(0x19b)]([_0x1f4c57,_0x426baf]);}return _0x1f4c57;},_0x56709a[_0xec5271(0x1f4)]=async(_0x15f694,_0x175c7b,_0x32d964='',_0xba159b='',_0x3ea73a='',_0x14ad82={})=>{const _0x35c92c=_0xec5271;let _0x1f51d2=await _0x56709a[_0x35c92c(0x1fe)](_0x175c7b,!![]),{mime:_0x5ae899,ext:_0xa46dcc,res:_0xfc22d4,data:_0x5c5339,filename:_0x5b8996}=_0x1f51d2;if(_0xfc22d4&&_0xfc22d4['status']!==0xc8||file['length']<=0x10000)try{throw{'json':JSON['parse'](file[_0x35c92c(0x190)]())};}catch(_0x52dd57){if(_0x52dd57[_0x35c92c(0x1ee)])throw _0x52dd57[_0x35c92c(0x1ee)];}let _0x3acfa9='',_0x1c7bc5=_0x5ae899,_0x1baa68=_0x5b8996;if(_0x14ad82[_0x35c92c(0x140)])_0x3acfa9=_0x35c92c(0x199);if(_0x14ad82[_0x35c92c(0x145)]||/webp/[_0x35c92c(0x15c)](_0x5ae899)){let {writeExif:_0x26d34d}=require(_0x35c92c(0x18f)),_0x1d7942={'mimetype':_0x5ae899,'data':_0x5c5339};_0x1baa68=await _0x26d34d(_0x1d7942,{'packname':_0x14ad82[_0x35c92c(0x200)]?_0x14ad82[_0x35c92c(0x200)]:global['packname'],'author':_0x14ad82[_0x35c92c(0x165)]?_0x14ad82['author']:global[_0x35c92c(0x165)],'categories':_0x14ad82[_0x35c92c(0x1bd)]?_0x14ad82[_0x35c92c(0x1bd)]:[]}),await fs[_0x35c92c(0x16c)][_0x35c92c(0x1a6)](_0x5b8996),_0x3acfa9=_0x35c92c(0x17b),_0x1c7bc5=_0x35c92c(0x198);}else{if(/image/[_0x35c92c(0x15c)](_0x5ae899))_0x3acfa9=_0x35c92c(0x1fb);else{if(/video/['test'](_0x5ae899))_0x3acfa9=_0x35c92c(0x1ea);else{if(/audio/[_0x35c92c(0x15c)](_0x5ae899))_0x3acfa9=_0x35c92c(0x159);else _0x3acfa9=_0x35c92c(0x199);}}}return await _0x56709a[_0x35c92c(0x15f)](_0x15f694,{[_0x3acfa9]:{'url':_0x1baa68},'caption':_0xba159b,'mimetype':_0x1c7bc5,'fileName':_0x32d964,..._0x14ad82},{'quoted':_0x3ea73a,..._0x14ad82}),fs[_0x35c92c(0x16c)][_0x35c92c(0x1a6)](_0x1baa68);},_0x56709a[_0xec5271(0x149)]=async(_0x5b225c,_0xadd891,_0xfb545c=![],_0x4f2a2f={})=>{const _0x3ce2e5=_0xec5271;let _0x242730;_0x4f2a2f[_0x3ce2e5(0x1ca)]&&(_0xadd891[_0x3ce2e5(0x1f0)]=_0xadd891['message']&&_0xadd891['message'][_0x3ce2e5(0x18e)]&&_0xadd891[_0x3ce2e5(0x1f0)][_0x3ce2e5(0x18e)][_0x3ce2e5(0x1f0)]?_0xadd891[_0x3ce2e5(0x1f0)][_0x3ce2e5(0x18e)][_0x3ce2e5(0x1f0)]:_0xadd891[_0x3ce2e5(0x1f0)]||undefined,_0x242730=Object[_0x3ce2e5(0x1da)](_0xadd891[_0x3ce2e5(0x1f0)][_0x3ce2e5(0x1b8)][_0x3ce2e5(0x1f0)])[0x0],delete(_0xadd891[_0x3ce2e5(0x1f0)]&&_0xadd891['message'][_0x3ce2e5(0x1ec)]?_0xadd891[_0x3ce2e5(0x1f0)][_0x3ce2e5(0x1ec)]:_0xadd891[_0x3ce2e5(0x1f0)]||undefined),delete _0xadd891[_0x3ce2e5(0x1f0)]['viewOnceMessage'][_0x3ce2e5(0x1f0)][_0x242730][_0x3ce2e5(0x1cf)],_0xadd891[_0x3ce2e5(0x1f0)]={..._0xadd891['message']['viewOnceMessage'][_0x3ce2e5(0x1f0)]});let _0x39c5f9=Object[_0x3ce2e5(0x1da)](_0xadd891[_0x3ce2e5(0x1f0)])[0x0],_0x3d54d6=await generateForwardMessageContent(_0xadd891,_0xfb545c),_0x34d42b=Object['keys'](_0x3d54d6)[0x0],_0x466687={};if(_0x39c5f9!=_0x3ce2e5(0x1e0))_0x466687=_0xadd891[_0x3ce2e5(0x1f0)][_0x39c5f9][_0x3ce2e5(0x202)];_0x3d54d6[_0x34d42b][_0x3ce2e5(0x202)]={..._0x466687,..._0x3d54d6[_0x34d42b][_0x3ce2e5(0x202)]};const _0x546ab7=await generateWAMessageFromContent(_0x5b225c,_0x3d54d6,_0x4f2a2f?{..._0x3d54d6[_0x34d42b],..._0x4f2a2f,..._0x4f2a2f['contextInfo']?{'contextInfo':{..._0x3d54d6[_0x34d42b][_0x3ce2e5(0x202)],..._0x4f2a2f['contextInfo']}}:{}}:{});return await _0x56709a['relayMessage'](_0x5b225c,_0x546ab7[_0x3ce2e5(0x1f0)],{'messageId':_0x546ab7[_0x3ce2e5(0x158)]['id']}),_0x546ab7;},_0x56709a['cMod']=(_0x111637,_0x5c258e,_0x41bf2c='',_0x5dc5c4=_0x56709a[_0xec5271(0x13d)]['id'],_0x6c8c97={})=>{const _0x13f96d=_0xec5271;let _0x5e529e=Object[_0x13f96d(0x1da)](_0x5c258e[_0x13f96d(0x1f0)])[0x0],_0xd1575=_0x5e529e===_0x13f96d(0x18e);_0xd1575&&(_0x5e529e=Object[_0x13f96d(0x1da)](_0x5c258e[_0x13f96d(0x1f0)][_0x13f96d(0x18e)]['message'])[0x0]);let _0x4adf5c=_0xd1575?_0x5c258e[_0x13f96d(0x1f0)][_0x13f96d(0x18e)][_0x13f96d(0x1f0)]:_0x5c258e['message'],_0x2a7b56=_0x4adf5c[_0x5e529e];if(typeof _0x2a7b56==='string')_0x4adf5c[_0x5e529e]=_0x41bf2c||_0x2a7b56;else{if(_0x2a7b56[_0x13f96d(0x172)])_0x2a7b56[_0x13f96d(0x172)]=_0x41bf2c||_0x2a7b56[_0x13f96d(0x172)];else{if(_0x2a7b56[_0x13f96d(0x1a8)])_0x2a7b56[_0x13f96d(0x1a8)]=_0x41bf2c||_0x2a7b56[_0x13f96d(0x1a8)];}}if(typeof _0x2a7b56!==_0x13f96d(0x178))_0x4adf5c[_0x5e529e]={..._0x2a7b56,..._0x6c8c97};if(_0x5c258e['key']['participant'])_0x5dc5c4=_0x5c258e['key']['participant']=_0x5dc5c4||_0x5c258e[_0x13f96d(0x158)]['participant'];else{if(_0x5c258e['key'][_0x13f96d(0x1d7)])_0x5dc5c4=_0x5c258e[_0x13f96d(0x158)]['participant']=_0x5dc5c4||_0x5c258e[_0x13f96d(0x158)][_0x13f96d(0x1d7)];}if(_0x5c258e[_0x13f96d(0x158)][_0x13f96d(0x1af)][_0x13f96d(0x1a5)]('@s.whatsapp.net'))_0x5dc5c4=_0x5dc5c4||_0x5c258e['key'][_0x13f96d(0x1af)];else{if(_0x5c258e['key'][_0x13f96d(0x1af)][_0x13f96d(0x1a5)](_0x13f96d(0x1c9)))_0x5dc5c4=_0x5dc5c4||_0x5c258e[_0x13f96d(0x158)]['remoteJid'];}return _0x5c258e[_0x13f96d(0x158)][_0x13f96d(0x1af)]=_0x111637,_0x5c258e[_0x13f96d(0x158)]['fromMe']=_0x5dc5c4===_0x56709a[_0x13f96d(0x13d)]['id'],proto[_0x13f96d(0x13f)]['fromObject'](_0x5c258e);},_0x56709a['getFile']=async(_0x3e80b4,_0x50a407)=>{const _0x28dea2=_0xec5271;let _0x5f48fe,_0x17f258=Buffer['isBuffer'](_0x3e80b4)?_0x3e80b4:/^data:.*?\/.*?;base64,/i['test'](_0x3e80b4)?Buffer[_0x28dea2(0x142)](_0x3e80b4[_0x28dea2(0x1c7)]`,`[0x1],_0x28dea2(0x17a)):/^https?:\/\//[_0x28dea2(0x15c)](_0x3e80b4)?await(_0x5f48fe=await getBuffer(_0x3e80b4)):fs[_0x28dea2(0x177)](_0x3e80b4)?(filename=_0x3e80b4,fs[_0x28dea2(0x1c0)](_0x3e80b4)):typeof _0x3e80b4===_0x28dea2(0x178)?_0x3e80b4:Buffer[_0x28dea2(0x1f5)](0x0),_0x27b9e9=await FileType[_0x28dea2(0x1f3)](_0x17f258)||{'mime':_0x28dea2(0x1d0),'ext':_0x28dea2(0x206)};filename=path[_0x28dea2(0x195)](__filename,'../src/'+new Date()*0x1+'.'+_0x27b9e9['ext']);if(_0x17f258&&_0x50a407)fs[_0x28dea2(0x16c)]['writeFile'](filename,_0x17f258);return{'res':_0x5f48fe,'filename':filename,'size':await getSizeMedia(_0x17f258),..._0x27b9e9,'data':_0x17f258};},_0x56709a;}function _0x32ec(_0x438868,_0x4b1625){const _0x34ea21=_0x34ea();return _0x32ec=function(_0x32ec45,_0x4bba30){_0x32ec45=_0x32ec45-0x13d;let _0x452ecb=_0x34ea21[_0x32ec45];return _0x452ecb;},_0x32ec(_0x438868,_0x4b1625);}startHisoka();let file=require['resolve'](__filename);function _0x34ea(){const _0x4f5c26=['status@broadcast','ephemeralMessage','./lib/exif','toString','@s.whatsapp.net','connectionClosed','0@s.whatsapp.net','serializeM','join','end','ext','image/webp','document','startsWith','concat','63MnLSGA','restrict','downloadAndSaveMediaMessage','content','opts','owner','getName','name','88893qrGsaP','includes','unlink','READ','text','writeFileSync','slice','msg','api','sendVideo','videoMessage','remoteJid','silent','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','downloadMediaMessage','connectionReplaced','bind','awesome-phonenumber','audio/mpeg','\x20Kontak','viewOnceMessage','groups.update','Update\x20','statusCode','decodeJid','categories','announce','\x20👋','readFileSync','headers','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20Subject\x20telah\x20diganti\x20menjadi\x20*','type','notify','contacts','Connected...','split','527948kcPmcj','@broadcast','readViewOnce','171296WdFqbk','./config','badSession','sendContact','viewOnce','application/octet-stream','exitProcess','APIKeys','write','application/pdf','mimetype','content-type','participant','file-type','chain','keys','argv','./lib/lowdb','groupMetadata','sendFileUrl','./lib/myfunc','conversation','query','group-participants.update','set','sendTextWithMentions','push','axios','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','send5ButMsg','22qsmgWS','video','path','ignore','replace','json','sendText','message','read','src/database.json','fromBuffer','sendMedia','alloc','international','getNumber','sendVideoAsSticker','BAE5','waUploadToServer','image','parse','loadDatabase','getFile','server','packname','log','contextInfo','creds.update','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','Group\x20Settings\x20Change\x20Message','.bin','user','https://shortlink.hisokaarridho.my.id/rg1oT','WebMessageInfo','asDocument','1.0.0','from','3265BnQYOT','utf-8','asSticker','error','572xNnCHr','fromObject','copyNForward','Welcome\x20@','Message','withoutContact','@adiwajshing/baileys','Unknown\x20DisconnectReason:\x20','Sayonaraa\x20@','endsWith','344346MylBvH','sendImageAsSticker','public','\x0aFN:','add','child','attrs','key','audio','verifiedName','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aInfo\x20group\x20telah\x20dibatasi,\x20Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengedit\x20info\x20group\x20!','test','unwatchFile','Restart\x20Required,\x20Restarting...','sendMessage','./hisoka','length','loggedOut','store','logout','author','mtype','296WMnuGD','connectionLost','gif','relayMessage','timedOut','promises','send5ButImg','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20telah\x20dibuka\x20oleh\x20admin,\x20Sekarang\x20peserta\x20dapat\x20mengirim\x20pesan\x20!','Connection\x20closed,\x20reconnecting....','subject','\x20To\x20Group\x20','caption','entries','imageMessage','sendButtonText','restartRequired','existsSync','string','isBuffer','base64','sticker','status','output','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.ADR:;;Jepang;;;;\x0aitem2.X-ABLabel:Region\x0aEND:VCARD','lowdb','send5ButGif','APIs','GuaAbuzz\x20Multi\x20Device','action','4498190jEwNOo','.json','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aInfo\x20group\x20telah\x20dibuka,\x20Sekarang\x20peserta\x20dapat\x20mengedit\x20info\x20group\x20!','profilePictureUrl','\x0aitem1.TEL;waid=','data','812538fLpNXv','cache','CB:call'];_0x34ea=function(){return _0x4f5c26;};return _0x34ea();}fs['watchFile'](file,()=>{const _0x22def8=_0x18d78d;fs[_0x22def8(0x15d)](file),console[_0x22def8(0x201)](chalk['redBright'](_0x22def8(0x1ba)+__filename)),delete require[_0x22def8(0x18b)][file],require(file);});
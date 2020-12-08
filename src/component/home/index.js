import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ind.css'
import Contacts from '../contacts'
import { fetchContacts } from '../../actions/contacts';

/**
 * 
 * @param {Array} props - filtered data from the API is rendered here
 */
const Tabs = (props) => {

  const dispatch = useDispatch();
  const [active, setActive] = React.useState(0)

  const select = (i) => {

    return function () {
      setActive(i)
    }
  }

  React.useEffect(() => {
    const getContacts = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (error) {
      }
    };
    getContacts();
  }, []);

  const renderTabs = () => {
    return React.Children.map(props.children, (item, i) => {
      if (i % 2 === 0) {
        let activeD = active === i ? 'active' : '';
        return <a onClick={select(i)} className={`${activeD} tab`}>{item}</a>;
      }
    });
  }


  const renderContent = () => {
    return React.Children.map(props.children, (item, i) => {
      if (i - 1 === active) {
        return <div className='content'>{item}</div>;
      } else {
        return;
      }
    });
  }

  return (
    <div className="tabs">
      {renderTabs()}
      {renderContent()}
    </div>
  )
}




const Data = () => {
  const storeData = useSelector(item => item)

  return (
    <main>
      <Tabs>
        {/** Todo! Refactor this bit of code */}
        <div>
          <div>a</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.a?.length || 0}</div>
        </div>
        {/**div for tab contents
            <span>one thing</span>
          */}
        <Contacts contacts={storeData?.contacts?.contacts?.a} />
        <div>
          <div>b</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.b?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.b || []} />
        <div>
          <div>c</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.c?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.c || []} />
        <div>
          <div>d</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.d?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.d || []} />
        <div>
          <div>e</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.e?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.e || []} />
        <div>
          <div>f</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.f?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.f || []} />
        <div>
          <div>g</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.g?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.g || []} />
        <div>
          <div>h</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.h?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.h || []} />
        <div>
          <div>i</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.i?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.i || []} />
        <div>
          <div>j</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.j?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.j || []} />
        <div>
          <div>k</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.k?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.k || []} />
        <div>
          <div>l</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.l?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.l || []} />
        <div>
          <div>m</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.m?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.m || []} />
        <div>
          <div>n</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.n?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.n || []} />
        <div>
          <div>o</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.o?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.o || []} />
        <div>
          <div>p</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.p?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.p || []} />
        <div>
          <div>q</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.q?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.q || []} />
        <div>
          <div>r</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.r?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.r || []} />
        <div>
          <div>s</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.s?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.s || []} />
        <div>
          <div>t</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.t?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.t || []} />
        <div>
          <div>u</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.u?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.u || []} />
        <div>
          <div>v</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.v?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.v || []} />
        <div>
          <div>w</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.w?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.w || []} />
        <div>
          <div>x</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.x?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.x || []} />
        <div>
          <div>y</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.y?.length || 0}</div>
        </div>
        <Contacts contacts={storeData?.contacts?.contacts?.y || []} />
        <div>
          <div>z</div>
          <div className='tabs-num'>{storeData?.contacts?.contacts?.z?.length || 0}</div>
        </div>

        <Contacts contacts={storeData?.contacts?.contacts?.z || []} />
      </Tabs>
    </main>
  );
}

export default Data;
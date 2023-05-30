import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminTableText = ({order, handleDownload}) => {
    const { t } = useTranslation();
    return (
        <>
                      <div>
            <p>{order.id}</p>
          </div>
          <div>
            <p>{order.date}</p>
          </div>
          <div>
            {order?.user?.name 
            ?
            <p>{order.user.name}</p>
            :
            <p>Користувача не знайдено</p>
            }
          </div>
          <div>
            <p>{order.fileName}</p>
            <div style={{ padding: "10px 0px" }}>
              <button onClick={handleDownload}>Скачати</button>
            </div>
          </div>
          <div>
          <p>{t(`${order.material}`)}</p>
          </div>
          <div>
            <p>{order.quality}</p>
          </div>
          <div>
            <p>{order.width}</p>
          </div>
          <div>
            <p>{order.height}</p>
          </div>
          <div>
            <p>{order.sum.toFixed(0)}</p>
          </div>
          <div>
          <p>--Опис--</p>
              <div>
              <p>{t(`${order.conditions.cutting?.option}`)}</p>
              <p>{t(`${order.conditions.cutting?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.eyelets?.option}`)}</p>
              <p>{t(`${order.conditions.eyelets?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.poster?.option}`)}</p>
              <p>{t(`${order.conditions.poster?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.solderGates?.option}`)}</p>
              <p>{t(`${order.conditions.solderGates?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.solderPockets?.option}`)}</p>
              <p>{t(`${order.conditions.solderPockets?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.mounting?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.stamp?.name}`)}</p>
              </div>
              <div>
              <p>{t(`${order.conditions.stretch?.name}`)}</p>
              </div>
              {order?.notes != '' &&
              <div>
              <p>--Замітки--</p>
              <div>
              <p>{order.notes}</p>
            </div>
              </div>}
              {order?.notes != '' &&
              <div>
              <p>--Доставка--</p>
              <div>
              <p>{order.address}</p>
            </div>
              </div>}
            </div>
        </>
    );
};

export default AdminTableText;
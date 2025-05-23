import { Box, Button, styled, TextField, Typography } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ru } from 'date-fns/locale'
import { ruRU } from '@mui/x-date-pickers/locales'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'
import { format } from 'date-fns'

const validationSchema = Yup.object().shape({ //валидация вводимых данных пользователем
  name: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  lasnName: Yup.string(),
  login: Yup.string().required('Обязательное поле'),
  birtDay: Yup.string().required('Обязательное поле')
})

function App() {
  const formik = useFormik({ //используем хук формика
    initialValues: { //создаем объект значений
      name: '',
      email: '',
      lastName: '',
      login: '',
      birtDay: ''
    },
    validationSchema, //добавляем объект валидации
    onSubmit: (values) => { //действие при отправке формы
      console.log(values);
    }
  })

  const { values, errors, handleChange, setFieldValue, handleSubmit, handleReset, touched, dirty } = formik //вытягиваем свойства из формик

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box
        component={'form'} //ВАЖНО!!!!!!!!!!!
        onSubmit={handleSubmit} //отправка формы
        sx={{
          display: 'flex',
          gap: '5px',
          flexDirection: 'column'
        }}
      >
        <TextField
          name='name'
          onChange={handleChange} //автоматом понимает и меняет значение свойства. надо чтобы совпадало name с ключом в values
          error={touched.name && errors.name}
          value={values.name} 
          placeholder='Имя'
          helperText={errors.name} //выведет "Обязательное поле"
        />
        <TextField
          label='email'
          name='email'
          onChange={handleChange}
          error={touched.email && errors.email}
          value={values.email}
          placeholder='Email'
          helperText={errors.email}
        />
        <TextField
          name='lastName'
          onChange={handleChange}
          error={touched.lastName && errors.lastName}
          value={values.lastName}
          placeholder='Отчество'
        />
        <TextField
          name='login'
          onChange={handleChange}
          error={touched.login && errors.login}
          value={values.login}
          placeholder='login'
        />
        <LocalizationProvider // обертка для смены формата даты и времени
          dateAdapter={AdapterDateFns}
          adapterLocale={ru}
          localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
          <DateTimePicker
            name='birtDay'
            value={values.birtDay ? new Date(values.birtDay) : null}
            viewRenderers={{ //смена отображения выборв времени
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock
            }}
            onChange={(value) => setFieldValue('birtDay', format(value, "yyyy-MM-dd'T'HH:mm:ss"))} //берем функцию для ручной записи значения инпута в объект. Значение сохранится в формате строки благодаря format(). Если отправлять тупо value он сохранится как объект, это плохо для бэка
            maxDateTime={new Date()} //ограничили выбор даты, не позднее текущей
            slotProps={{ //вытягиваем свойства других компонентов MUI. т.к. у date time picker нету вывода ошибок, подтягиваем их от text field
              textField: {
                error: touched.birtDay && errors.birtDay,
                helperText: errors.birtDay
              }
            }}
          />
        </LocalizationProvider>
        <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
          <Button
            disabled={!dirty} //выключаем кнопку когда форма пустая
            type='submit' //делаем кнопку отправки
            variant='outlined' 
            color='success'
          >Отправить</Button>
          <Button onClick={handleReset} variant='outlined' color='secondary'>Сбросить</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App

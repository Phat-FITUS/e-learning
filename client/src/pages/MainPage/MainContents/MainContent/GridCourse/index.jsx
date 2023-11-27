import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
function GridCourse() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', paddingRight: 2, paddingTop: 5, paddingLeft: 4 }}>
      <Typography variant="body3" color="#666666">
      320.945+ người khác đã học
      </Typography>
      <Typography gutterBottom variant="h6" component="div" sx = {{ textTransform: 'none', color: 'black', fontWeight: 'bold' }}>
              HTML, CSS, JS co ban
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={6} sm={4} md={3} lg = {3} key={index}>
            <Card sx={{ maxWidth: 400, backgroundColor: '#427D9D', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
              <CardActionArea>
                <Box sx = {{ paddingX: 4, paddingTop: 2 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABU1BMVEX////auSzlTSYLdLgAAADr6+vxZSj/2Touqt4AarT07tH22NDO4O7YthLlPQLWtgf9+/fV1dW4uLjivi//2CX9+eToUycWgsL19fUgks3wWgr739P/2zkXpd3H5PL95uDi4uLpzMWzyNzvXhT899f3uKOCx+kwhL6GhobLy8uqqqr28e3r1NAAarX87Kjl5eXjRRTqo5VNtubkblSXl5cnJydFRUV4eHgAZLQAdbfhxV1lZWXAwMBPT0/Nzc3c6fN2p86avtlLkMZhncvrhXDlznbr253yw7keHh4RERE6OjpHR0ePj49+fn74+ezkKADoaEntj3znz4Hu36jhyWXw5bvauzm9yd395YblSCH+4nDwnozkVzPbuzj93lf5zr72vqjnr6hls9iTxN6nu8n1j23zgVWt2fBwptHwczvvzTjmYj70rpT4n3v84GagwN3ujHdYwiMaAAANsElEQVR4nO2c6VfbuBqHxZJCKAkJA8XQBMJSKElpAl3TUnbKtHOHS1k6pNB9usx0uvz/n64kS7JsLbZl5tx+eJ9zWjzEfUkeJPknWR6EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfh6u9/b+ipDX29u7Wuvl5IbxX7fxq0/xV28R/1VLXzk3zMh5/Gh4DdXEcS7bGydFa0hUW81WLQR2ckfvpDeH6r0ZnCzyamueKPwQ3RbHi9neeBmXqCNR7W62aiEkJ+WIk4f+T7xYJ/WLclKjTp7war9lqxYCO3ly795D4gS3RvJbvD1c96iT3qeZndx5+vTpnbLv9vd6vb6KVukxPqw3s71x3wl9iw+H6/XhbNVCXBe/N9Ijy+zjD/cGZHFS9g+bfuujx3W/vWTGd+Ld6Q1+zEVhdPKE/AoecScOv1Tyz9bYMR2qnvhS6IhyL/Mb950g79eLl0Kc/Hb3rqad4B96d5E7WS1j0lVelMcMOlbd8ejxf8jx9axvnDlBHh1SMnbEMNIYi8JO8HuvrXInlHSVQ078lvLUP6Yt5bb7e/YePXo0zJ2w7pPxyh7C4gTV6YjorTElT9JVlq479+7du37X7zKr5PhJtvae45XrCFf7nXTw3kfO1VR+p5816qTOWsVwxnbCnIgx62KuxZITUe0ineRqNdIXa7Ua6eye9BXRr80a+Y8mxv9Ocv69zKZzcpGZ7d/DKzM8xI/KNZQrB9/OXDknVwYAAPh5uJyBhqHm+qA764aa+wMZSOmkVXTmv5cNNTfu5125v2GoOVDIQEonB51uV4pThpqbSz2uLG0aau4PdTnzIKWTnQxOTH1nJu/sJD9jclJwd7KLSqmcPGs5O2mZag5maCeDhpqlDE4OUxlB6Mzq5IoJ+qqp5rrVSXvMAHViGmOR/WP/YoC8Vnic0sk1q5NLJvBrnQOjE2vfGe830CZ9x+jkgVVJpU9L5W/i5Cilkz13JzvGohmcGGseW53olfT1kYZSOEnp5HLRxQnpO60zY1HrkGF0Ql811jy0DSjGdkKdpM0nU+5Olo1FF1ycVMmLC8aaj12c+O1kNKWThruTa8aiW05OSI/bMtY8cmon5MVCuisxvsY5jSfUyZ6x6LaLk3HiZNtY88SpnZAXh9I6QecitKkxvzWhIpwUTdEeh3sxyGri+3h/VYE6IedvGGsO6Jyw7I7H2JEoFeHkeVolQbhvvZ1WuKowFTgxRXuEvgsn23/MRJlUmedO8t+NNUc1Tp6zOR5uJydzEU4r3EnaaI/QLeFkL6egOX+WXYq7W6ZoH3LSUGqqa40l6mQB/6MlU7TXh3vWAkpDv4wo4yh1QuJJ13G8hAg7QTtJ4qQxwZ10m7tpEO63kjhB74gTkmON0R5/cE3XsTl50ced7MZLiCDCfWs5iZMp7qRzbq4ZhPt2IicrwokxxiL0UnXy0n9F6+SVcJI22iO0LJw88xI4uSqcfDHXlJyonjVORIy1OXmuaSj+K1onfdxJ6miPwz0PKJ2dJO3ktXByy1zTE07yKZ0Yb2yUdOGeLRbpnJSCGJs22kvhvnMrSTt5M8vjyTNzzZIII/laAidelcfYHkuU0IR7lsZ0TvZHnKO9FO475+xN124IphS+CifmaI9QWzgZjCppKt2jtC6ctC01NeFedVIaZZyMOEf7ULhn7/ptENoska311lJUmvBE1lvvbw0iz8MtslmrlcvltcXF1XdJpjvacF/YjzqZE5lNTHeG9lM7KQknrabvZDqw5BbtpXAfXjXItzdrDU92Up5511/tFzHWHO214V51MjpS8QmiferpDkZk++IN38mNRE4s0R6He91EJ7/1Z65BxhPupFZ+vxJMd+zRXhvuWbcIOVGmO13plQQTnuJ0KifmaI/QprKqlO/ZXiO7EgInzdp71kSEk7xp1Z5+XEcn6ac7mnDfiHVCDZqjvRzufZYWNss1AnfSaAzOS0JYZLNMd7Sr1ImcpJ/uIPRDCfedJE5atm4auZux9SfdBkGcNImTkje50h9W4jsxR3u9kwGbk4prtNeF+ystzqyCcGJctSdIdzPyPRura2trgRRs5BMWElESN91BupV71clc6LJDY2zaOxmEINyf8YvxMudalH/4tNi8ak+Qwv0m3yzjG8HtZHI+goix5lV7ghruWUSV28lNBm4lfjtJfSeDIFbuOzs8yIpAq5ycKNrjZBosKiXIsbTJ0JOte5bUcK86EVREZEs/3cEf0xLulZPfiHbyw1o0GF2VcK98binaW2vupnBSCmJs+mgvT3jO451cE9HefCeD0OYNRQ33ihMR7fO2aK8L92Yno9mcqOHe4iSY7phX7Qli5T4/E+tkUjgxr9oT1HBvdjJH12Opk/TRXl655+He4uSDcGKL9nK4T+gkNtrrwj0bKzRO/CkgPcch2mvCvcXJRxFjX1trfhZONmOdfBJOPltrapz41xSNkyPhxCXay+H+hhdBOfevRNFeDvebjQjK7004sUZ7Xbg3O7kpVu1fxn18LSLcd867I/DgOstaRSlZtJedtBciVFcY8+zcee5kyRbtdSv3LI9hJ2weXHnBzj3tY5sKnKK9dasSdzLBnDTEnYyivZvOBKEtOhvk9wGr3AldP1nosWxSQuyjm53wOH/Kzn0hnLhE+9BWpY6P6oT1FOlOhr2mZauScPKJnbuSLNrrwv0ud8LayQh38k04cYn2UrjvPr/lc644YT0l0ao9Qdqq1KbEOYlbtScE4f4BRePkJjv1FXfiFO0ReiuFe5raPNGbhBPWUxJG+9BWJXqxaXhiqhw4YUX7ebQ3r9r7iK1K7Pp6XDiOOuFBPoj26Vft6QdVwr2YKovVAXbqHh9PWuZNShRPKMmv+zX/UJxMslPFdMce7aVwz3LYbuFB1AkzUApW7d2cBOH+gCWI5aiTv9ipSaM9Ko1xJ0vMiRhhhBPWU4JV+7GYNyrCPVtLOlSdsEtycCdjyCXah7YqsVj1NurkIzs12Z0Mgli550G2prQTL+rEtmofduJ/0CPVCQvyc9SJ1KTS0gjCPXMi7g3yePKVnZo02usmPMoYy84Mor19uiMFWdYhTgp+IFOdSNHezUkpCPdsYj9dbLU6wsnsxMQ/7NQg2ttW7QlSuGe30dtLISfVfnZm0mgvrdyzec4AuznKnFT6Rl6xYftmEO2dpjuhcM8nJdNnX7CX7kuzsxOXvr4WmTVptJeCbH6Dby2Y2VhYyueJk2p1ZX6Sn/k+YbSXwr1YTxRr1GSf0rebIuAHTlxW7QkHum05XnPv2fnshzehDx/E2Dgnwcr9Z7HdouHVZj63x7EPT9oBL6K9ddWeIMJ9IRxOSTs5nZO/czrCN1q4RXt5W050q1Kk4ZVEjLWu2hNmDFuVGspke16s2tujvbxyH956pM4Bs2xS8nlm3JYTOTFxtMfhXjhZiGzLiQazlWrCaC+F+3CPUJ18406cVu0J0sq9Z3VyNckmJR9p5d6zO0m4ak8ItiqFvq06eVXJFu1D4b6Z88xOSm+S3ckgBNty2jWv0TA78RJHeznch5JYyAnp1KOVDJuUfEQc6e60DpanJS3SSVNvPlwSd7wszx9wpDuBCxuDuYbWyfqnd1XhJC7ayyv3heeHJ2JICznZPzntG+mrZJvuhJ9D6LSK3TtvbzAv/Ie+/vrXBLsHmCjaI2lbDukVS+3tzcGG31x8JyXsY17cDIzdkONzKC0TFAqFB48HaKXAydzNbyPi7qjzqj0h+hxCq1g8P5tuer6Tq9c+TkzMBjeLE0V7hMZ6wuTzYxszzQZzMjm/UpXujyaa7qh3MwqFruMTHFSpk9Gj0wrfPi1uoDtsUvLRPIeAm0vr1vKNxuuvl2QfwklctNc/h5DPb20OeuufVth2ckGiaK/fc1/A3agL55NXIR8Zoz1G/xxCp9WaiArhMTbeybbGCdUyrtw+Txjtjc8hkP32mocQ1AtUGpS1aY4iJOl0x7BViaB7LoPG2I3YmtrnEAhkvhOxUsmwak8wPmRsUBIf7XVblYxOquM0nsRNd/TPIQgnEf6mz0e6RnvLyn3UxxU+CtvvZBCMDxlHnIyPsStUbLS3PGQcclLp+9sX0uUe7XG4T+LkivxC/Ax8MIETv4HwkSY22mufQ1CcCB9dGaI9QmdFgxSlgVA6rSvxNQfvG6Tw9RPRQJiS+/FOUJehofjrJ6SBhL8/5O6k8WanU2xpvKg+cHjBWTd+iEXo08bYkk4LcTK+0A5tnaXhJUHNgccPyGNdGieVcAPpouFl98j5UkwoXV4+KBajF+WID5xazp/txY8lnPXv2/jjRpyMjdM41+Z/5Zd6tr/HTv8E+yeHLxUtvyg+SMh1XGIL0dj70a1tLryB7FyLv95E8AY3xhQtUvvIL+AUl7bo6NGxtrmIBnJ4kqmBRJhavlVUvXSKxS9nl129r89s92i6EZ4FfZ5ZRyn/pxOM0sDh8yHVC1Z1fMRWJB3frf7HkcXYorhrTGeFKTqMnvXNLdkL7jBbKTqMnv2T3S5ZC4n5F9JhVEjVqb0d2o3otOfqxdT1Jlk3IiNq+g6jpcRHXTKiXmiH0f+4q8sHqUbUJJBRN82ImgQ86nZd0Ij6/6Ak/bnQogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/GT8D4OWQT5GBwbEAAAAAElFTkSuQmCC"
                    alt="green iguana"
                    sx = {{ borderRadius: '24px' }}
                  />
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx = {{ textTransform: 'none' }}>
                    HTML, CSS, JS co ban
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                 Khóa học này có HTML CSS JS
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default GridCourse
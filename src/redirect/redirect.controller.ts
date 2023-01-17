import { Controller, Get, Query, Res, Post, Body } from '@nestjs/common';

@Controller('redirect')
export class RedirectController {
    /** Дефолтный редиректор */
    @Get('/main')
    redirectToLocalhost(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        console.log('Redirect (State):', state)
        res.redirect(`http://localhost:3000/api/auth?code=${authCode}&referer=${referer}&state=${state}`)
    }


    /**
     * Под кастом AmoCRM - HubSpot
     */
    @Get('/main/hubspot')
    redirectToLocalhostForHubspot(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://localhost:3000/api/amo/auth?code=${authCode}&referer=${referer}&state=${state}`)
    }

    /**
     * Под кастом AmoCRM - HubSpot (DEV)
     */
    @Get('/main/hubspot/dev')
    redirectToLocalhostForHubspotDev(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://178.154.209.156:3100/api/amo/auth?code=${authCode}&referer=${referer}&state=${state}`)
    }



    /**
     * Под кастом AmoCRM - HeadHunter. Для авторизации Amo-части интеграции
     */
    @Get('/auth/amo')
    redirectToAmoAuthPathForCustom(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://localhost:3000/api/auth/amo?code=${authCode}&referer=${referer}&state=${state}`)
    }
    /**
     * Под кастом AmoCRM - HeadHunter. Для авторизации HH-части интеграции
     */
    @Get('/auth/hh')
    redirectToHHAuthPathForCustom(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://localhost:3000/api/auth/hh?code=${authCode}&referer=${referer}&state=${state}`)
    }
    /**
     * Под кастом AmoCRM - HeadHunter. Для авторизации HH-части интеграции
     */
    @Get('/auth/sj')
    redirectToSJAuthPathForCustom(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://localhost:3000/api/auth/sj?code=${authCode}&referer=${referer}&state=${state}`)
    }


    /**
     * Для B2B
     */
    @Get('/amo-connector')
    redirectToAmoConnector(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://localhost:3000/api/amocrm/auth/callback?code=${authCode}&referer=${referer}&state=${state}`)
    }

    @Get('/b2b-nest-connector')
    redirectTob2bNestConnector(@Res() res, @Query() query) {
        const authCode: string = query.code
        const referer: string = query.referer
        const state: string | undefined = query.state
        res.redirect(`http://localhost:3000/connect/oauth-callback?code=${authCode}&referer=${referer}&state=${state}`)
    }
}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgetpwd',
    loadChildren: () => import('./forgetpwd/forgetpwd.module').then( m => m.ForgetpwdPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'outlet',
    loadChildren: () => import('./outlet/outlet.module').then( m => m.OutletPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'listitem',
    loadChildren: () => import('./listitem/listitem.module').then( m => m.ListitemPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'changepwd',
    loadChildren: () => import('./changepwd/changepwd.module').then( m => m.ChangepwdPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'editcompany',
    loadChildren: () => import('./editcompany/editcompany.module').then( m => m.EditcompanyPageModule)
  },
  {
    path: 'manageoutlet',
    loadChildren: () => import('./manageoutlet/manageoutlet.module').then( m => m.ManageoutletPageModule)
  },
  {
    path: 'editexisting',
    loadChildren: () => import('./editexisting/editexisting.module').then( m => m.EditexistingPageModule)
  },
  {
    path: 'editoutlet',
    loadChildren: () => import('./editoutlet/editoutlet.module').then( m => m.EditoutletPageModule)
  },
  {
    path: 'editpost',
    loadChildren: () => import('./editpost/editpost.module').then( m => m.EditpostPageModule)
  },
  {
    path: 'alertpopup',
    loadChildren: () => import('./alertpopup/alertpopup.module').then( m => m.AlertpopupPageModule)
  },
  {
    path: 'outletdetail',
    loadChildren: () => import('./outletdetail/outletdetail.module').then( m => m.OutletdetailPageModule)
  },
  {
    path: 'socialregister',
    loadChildren: () => import('./socialregister/socialregister.module').then( m => m.SocialregisterPageModule)
  },
  {
    path: 'makeoffer',
    loadChildren: () => import('./makeoffer/makeoffer.module').then( m => m.MakeofferPageModule)
  },
  {
    path: 'catpost',
    loadChildren: () => import('./catpost/catpost.module').then( m => m.CatpostPageModule)
  },
  {
    path: 'takephoto',
    loadChildren: () => import('./takephoto/takephoto.module').then( m => m.TakephotoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
